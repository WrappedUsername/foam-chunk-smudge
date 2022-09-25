// TODO: add smart contract address here
// deployed to polygon main contract
export const address = "0xcB135bd9cb2761efddC46F29750c296695ADE9A1";
// deployed test contract 
//export const address = "0xA0B5b5Bb0BCE7Fea33Bd299c57780aAFd95C6016"
// TODO: add etherscan link here
export const scanLink = "https://polygonscan.com/address/0xcb135bd9cb2761efddc46f29750c296695ade9a1#code"; 
// TODO: add discord link here
export const discordLink = ""; 
// TODO: add github link here
export const githubLink = "https://github.com/WrappedUsername/foam-chunk-smudge"; 
// TODO: add openSea link here
export const openSeaLink = "https://opensea.io/collection/foam-chunk-smudge";

// your smart contract abi goes here, replace examples with your own below
// use what is needed for your project and remove the rest if you like
export const abi = [
  // solidity json abi i.e. output of `solc --combined-json abi,bin,interface`
  {
    inputs: [],
    name: "_tokenIdCounter",
    outputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  // human-readable abi, add everything up to curly braces, 
  // i.e. function name, inputs, outputs
  "function safeMint(address to) public payable",
];