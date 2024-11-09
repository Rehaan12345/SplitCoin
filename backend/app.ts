const http = require("http");
const express = require("express");

const app = express()
const hostname = "127.0.0.1";
const port = 3000;

app.use(express.json())

app.post("/add-transaction", function(req, res) {
    const amount = req.body.amount;
    const installments = req.body.installments;
    console.log(amount);
    console.log(installments);
    res.send("received");
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
