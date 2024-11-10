const { neon } = require("@neondatabase/serverless");
import { makeContractCall, broadcastTransaction, Address, StacksTestnet } from '@stacks/stacking.js';
const sql = neon(process.env.DATABASE_URL);

const WALLET = process.env.SPLITCOIN_WALLET;
const contractAddress = 'contract-address';
const contractName = 'contract-name';

async function transferTokens(user_address, amount) {
    try {
        const contractCall = makeContractCall({
            contractAddress,
            contractName,
            functionName: 'transfer',
            functionArgs: [
                Address(WALLET),
                amount
            ],
            user_address,
            network: StacksTestnet,
        });

        const tx = await broadcastTransaction(contractCall);
        console.log(`Transaction broadcasted successfully: ${tx.txid}`);
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
            const { transaction_id, user_id, total_installments, paid_installments, amount } = transaction;
            const address = await sql`
                SELECT address FROM users WHERE user_id = ${user_id}
            `;
        });

        await sleep(1000);
    }
}

main().then();
