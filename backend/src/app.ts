// const http = require("http");
// const express = require("express");
// 
// const app = express()
// const hostname = "127.0.0.1";
// const port = 3000;
// 
// const INTEREST = 0.05;
// 
// app.use(express.json())
// 
// 
// app.post("/add-transaction", function(req, res) {
//     const amount = req.body.amount;
//     const installments = req.body.installments;
//     res.send("received");
// });
// 
// app.listen(port, function() {
//     console.log(`Example app listening on port ${port}!`);
// });
// 
// require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "POST" && url.pathname === "/add-user") {
        let body = '';
        await req.on("data", chunk => {
            body += chunk;
        });

        try {
            const { address } = JSON.parse(body);
            const result = await sql`
                    INSERT INTO users(address)
                    VALUES(${address})
                    RETURNING user_id
                `;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Transaction added successfully", user_id: `${result[0].user_id}` }));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error: " + error.message);
        }

    } else if (req.method === "POST" && url.pathname === "/add-transaction") {
        let body = '';
        await req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {
            try {
                const { amount, installments, user_id } = JSON.parse(body);
                await sql`
                    INSERT INTO transactions (user_id, total_installments, paid_installments, amount)
                    VALUES (${user_id}, ${installments}, 0, ${amount})
                `;

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Transaction added successfully" }));
            } catch (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server error: " + error.message);
            }
        });

    } else if (req.method === "GET" && url.pathname === "/get-user-transactions") {
        const user_id = url.searchParams.get("user_id");

        if (!user_id) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Bad Request: User ID is required");
            return;
        }

        try {
            const transactions = await sql`
                SELECT * FROM transactions WHERE user_id = ${user_id}
            `;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(transactions));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error: " + error.message);
        }

    } else if (req.method === "GET" && url.pathname == "/get-user-id") {
        let body = '';
        await req.on("data", chunk => {
            body += chunk;
        });

        try {
            const { address } = JSON.parse(body);
            const result = await sql`
                    SELECT user_id FROM users WHERE address = ${address}
                `;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Transaction added successfully", user_id: `${result[0].user_id}` }));
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error: " + error.message);
        }

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
};

http.createServer(requestHandler).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
