// alchemy-nft-api/alchemy-web3-script.js
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import "dotenv/config";

// Replace with your Alchemy api key:


// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
    process.env.HTTPS,
  
);

// The wallet address we want to query for NFTs:
const ownerAddr = "0x39E44D2087337994FD841418E70A4CAdB9b00640";
// s

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a crypto coven NFT...");
const response = await web3.alchemy.getNftMetadata({
  contractAddress: "0x40ae60905e77B29f1B76dE9f38965A537457AbD6",
  tokenId: "5"
})

// // Uncomment this line to see the full api response:
// console.log(metadata);

// // Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.id.tokenMetadata.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.metadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");