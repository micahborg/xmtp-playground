# XMTP Playground Notes

Sources: 

1. [XMTP Documentation: Getting Started](https://docs.xmtp.org/get-started/intro)
2. [Medium Article: Building Native Web3 Messaging and Notification Apps with XMTP](https://www.blog.encode.club/next-video-build-building-native-web3-messaging-and-notification-apps-with-xmtp-video-slides-bb72592b4000)
3. [Youtube @ETHGlobal Paris: How to build web3 native messaging apps with XMTP](https://www.youtube.com/watch?v=OLQcniVSyA4)

**Big picture**: XMTP (Extensible Message Transport Protocol) is a general purpose messaging protocol that web3 developers could use to support native messaging

- user to user
- 1 to many notifications and messages
- machine to machine (PKP)
- many to many (group chat)

“end-to-end encrypted” with the hope that messages are relayed instantaneously 

we own our assets, and we own our communications

**What XMTP is**: open. composable, and decentralized communication network for blockchain wallets

- solving the interoperability problem. messages sent by user and can receive a reply across platforms
- XMTP is *not* on-chain. this is a parallel network and can host your own node
- it’s *not* just messages: you can send smart objects, machine notifications, etc.

## Protocol

- send and receive encrypted messages through clients. Messages relayed in nodes of the XMTP  network

## Nodes

- relying and retrieving encrypted messages into and from storage (and delivering to clients)

## Clients

- “encoding and decoding” messages
- the client understands the identity and the encryption schema and then decodes the message
- generate the secure wallet-based identities (capable of encrypting and decrypting messages)

What’s handled in the SDK (not comprehensive):

- message composing and sending (user can access entire history)
- content filtering (everybody within my app, everybody with web3) application control
- content validation (with content/attachment types — extensible payloads)
- the SDK enables *clients* to establish secure, unfalsifiable relationships between identities in which only the parties can decrypt messages sent between them