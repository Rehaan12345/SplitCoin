const { neon } = require("@neondatabase/serverless");
const { makeSTXTokenTransfer, broadcastTransaction } = require("@stacks/transactions");
const sql = neon(process.env.DATABASE_URL);

const WALLET = process.env.SPLITCOIN_WALLET;
const TRANSACTION_FEE = 0.05;

async function transferTokens(user_address, amount) {
    try {
        const txOptions = {
            recipient: WALLET,
            amount: amount,
            senderKey: user_address,
            network: 'testnet', // for mainnet, use 'mainnet'
            memo: 'test memo',
            nonce: 0n, // set a nonce manually if you don't want builder to fetch from a Stacks node
            fee: 200n, // set a tx fee if you don't want the builder to estimate
        };

        const transaction = await makeSTXTokenTransfer(txOptions);

        // to see the raw serialized tx
        const serializedTx = transaction.serialize(); // Uint8Array
        const serializedTxHex = bytesToHex(serializedTx); // hex string

        // broadcasting transaction to the specified network
        const broadcastResponse = await broadcastTransaction(transaction);
        const txId = broadcastResponse.txid;
        console.log(`Transaction broadcasted successfully: ${txId}`);
    } catch (error) {
        console.error('Error executing contract call:', error.message);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log(WALLET)
    while (true) {
        const transactions = await sql`
            SELECT transaction_id, user_id, total_installments, paid_installments, amount
            FROM transactions
        `;
        transactions.forEach(async transaction => {
            const { transaction_id, user_id, total_installments, paid_installments, amount: lifetime_amount } = transaction;
            const address = await sql`
                SELECT address FROM users WHERE user_id = ${user_id}
            `;
            try {
                const billing_amount = (lifetime_amount / total_installments) * (TRANSACTION_FEE + 1);
                // transferTokens(address, billing_amount);
                console.log(`billed address: ${address} ${billing_amount}`);
            }
            catch (err) {
                console.log(`Error transferring token: ${err}`);
            }
        });

        await sleep(1000);
    }
}

main().then();
