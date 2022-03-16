
import {ethers } from 'ethers';
let globalABI =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "traderAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ErrorInSquareOff",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tradeId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "traderAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "enum Position",
          "name": "position",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "fromToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "toToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fromTokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "toTokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "equity",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "debt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum Leverage",
          "name": "leverage",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "enum Status",
          "name": "tradeStatus",
          "type": "uint8"
        }
      ],
      "name": "TradeEventParams",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "WhitelistedAddressAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "WhitelistedAddressRemoved",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "addAddressToWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_addrs",
          "type": "address[]"
        }
      ],
      "name": "addAddressesToWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approveForAdmin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "c__0x156bec4d",
          "type": "bytes32"
        }
      ],
      "name": "c_0x156bec4d",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "c__0x7ce431cc",
          "type": "bytes32"
        }
      ],
      "name": "c_0x7ce431cc",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tradeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "traderAddress",
              "type": "address"
            },
            {
              "internalType": "enum Position",
              "name": "position",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "fromToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "toToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "fromTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "toTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "equity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "debt",
              "type": "uint256"
            },
            {
              "internalType": "enum Leverage",
              "name": "leverage",
              "type": "uint8"
            },
            {
              "internalType": "enum Status",
              "name": "tradeStatus",
              "type": "uint8"
            }
          ],
          "internalType": "struct Trade",
          "name": "_trade",
          "type": "tuple"
        }
      ],
      "name": "emitTrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_holdingAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_debt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        }
      ],
      "name": "exactFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_debt",
          "type": "uint256"
        }
      ],
      "name": "getLeverageFromPool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_traderAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tradeId",
          "type": "uint256"
        }
      ],
      "name": "getTrade",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tradeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "traderAddress",
              "type": "address"
            },
            {
              "internalType": "enum Position",
              "name": "position",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "fromToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "toToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "fromTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "toTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "equity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "debt",
              "type": "uint256"
            },
            {
              "internalType": "enum Leverage",
              "name": "leverage",
              "type": "uint8"
            },
            {
              "internalType": "enum Status",
              "name": "tradeStatus",
              "type": "uint8"
            }
          ],
          "internalType": "struct Trade",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_leveragePoolAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_router",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tradeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "traderAddress",
              "type": "address"
            },
            {
              "internalType": "enum Status",
              "name": "tradeStatus",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "encodedCallData",
              "type": "bytes"
            }
          ],
          "internalType": "struct LiquidateTrade[]",
          "name": "_liquidateTrades",
          "type": "tuple[]"
        }
      ],
      "name": "liquidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "removeAddressFromWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_addrs",
          "type": "address[]"
        }
      ],
      "name": "removeAddressesFromWhitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_debt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        }
      ],
      "name": "repayToLeveragePool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tradeId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        },
        {
          "internalType": "enum Status",
          "name": "_status",
          "type": "uint8"
        },
        {
          "internalType": "bytes",
          "name": "_callData",
          "type": "bytes"
        }
      ],
      "name": "squareOffTrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_callData",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tradeId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "traderAddress",
              "type": "address"
            },
            {
              "internalType": "enum Position",
              "name": "position",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "fromToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "toToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "fromTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "toTokenAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "equity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "debt",
              "type": "uint256"
            },
            {
              "internalType": "enum Leverage",
              "name": "leverage",
              "type": "uint8"
            },
            {
              "internalType": "enum Status",
              "name": "tradeStatus",
              "type": "uint8"
            }
          ],
          "internalType": "struct Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "_callData",
          "type": "bytes"
        }
      ],
      "name": "trade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "_encodedData",
          "type": "bytes"
        }
      ],
      "name": "validContractAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const data = '0x000000000000000000000000000000000000000000000000000000000000000200000000000000000000000039e44d2087337994fd841418e70a4cadb9b00640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043670ad6ca03bee64cb21a371edc062214825daa00000000000000000000000002f5e1b8f15981698146af5c93979c24845994ea00000000000000000000000000000000000000000000000044f9343c141160b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000003782dace9d90000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002'

const topics= [
    '0x55e9510998974b047d2f4bad55d0d838f4aee27276f494fe26963437d19648f5'
  ]

let abi = [
    'event TradeEventParams(uint256 tradeId,address traderAddress,Position position,address fromToken,address toToken,uint256 fromTokenAmount,uint256 toTokenAmount,uint256 equity,uint256 debt,Leverage leverage,Status tradeStatus)',
    
];
let abi2 = [
    'event ErrorInSquareOff(uint256 tradeId,address traderAddress,address token,uint256 amount)'
]



let iface = new ethers.utils.Interface(globalABI);


console.log(`iface.fragments`, iface.getEventTopic('TradeEventParams'))
let eventData = iface.decodeEventLog("TradeEventParams", data, topics);
let { tradeId, traderAddress, position, fromToken, toToken, fromTokenAmount, toTokenAmount, equity, debt, leverage, tradeStatus } = eventData;
console.log('trade details');

console.log(tradeId.toString(), traderAddress.toString(), position,fromToken,toToken,fromTokenAmount.toString(),toTokenAmount.toString(),equity.toString(),debt.toString(),leverage,tradeStatus )


// const x = ethers.utils.defaultAbiCoder.decode(
//     ['uint256', 'address', 'uint8', 'address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'uint8', 'uint8'],
//     data
// );
// console.log('x', x);