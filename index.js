import { Client } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
import 'dotenv/config'
 
// You'll want to replace this with a wallet from your application
const private_key = process.env.DEV_WALLET_PRIVATE_KEY;
const signer = new Wallet(private_key);
console.log("Wallet address:", signer.address);

// Create the client with your wallet. This will connect to the XMTP development network by default
const xmtp = await Client.create(signer, { env: "dev" });

// Start a conversation with XMTP
const conversation = await xmtp.conversations.newConversation(
  "0x937C0d4a6294cdfa575de17382c7076b579DC176",
);

// Load all messages in the conversation
const messages = await conversation.messages();
console.log("Messages in the conversation:", messages);

// Send a message
const message = await conversation.send("gm");
console.log("Message sent!");

// This method streams all new messages from any sender across all conversations the user is involved in.
for await (const message of await xmtp.conversations.streamAllMessages()) {
  console.log(`[${message.senderAddress}]: ${message.content}`);
}