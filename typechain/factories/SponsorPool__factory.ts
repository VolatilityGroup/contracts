/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SponsorPool, SponsorPoolInterface } from "../SponsorPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "underlying",
        type: "address",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "underlyingAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensMinted",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    name: "Fee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "mintFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "FeesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "underlyingAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensBurned",
        type: "uint256",
      },
    ],
    name: "Payout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareAmount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feePayee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakeAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feePayee",
        type: "address",
      },
    ],
    name: "setFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101806040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140527faf290d8680820aad922855f39b306097b20e28774d6c1ad35a20325630c3a02c610160523480156200005c57600080fd5b5060405162002eb638038062002eb68339810160408190526200007f91620008df565b620001286040518060400160405280600d81526020016c029b837b739b7b92837b7b61d1609d1b815250826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000e357600080fd5b505afa158015620000f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000122919081019062000953565b6200033d565b80604051806040016040528060018152602001603160f81b815250620001a76040518060400160405280600d81526020016c029b837b739b7b92837b7b61d1609d1b815250856001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000e357600080fd5b620001ff604051806040016040528060018152602001603360f91b815250866001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015620000e357600080fd5b81516200021490600490602085019062000839565b5080516200022a90600590602084019062000839565b5050825160208085019190912083519184019190912060e08290526101008190524660a0529091507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f620002808184846200036b565b6080523060c052610120525050600780546001600160a01b0319166001600160a01b03861617905550620002ba91506000905033620003b5565b61016051620002ca9033620003b5565b600754620002f1906001600160a01b031633600019620003c5602090811b62000e0817901c565b600754604080513081526001600160a01b0390921660208301527f587ece4cd19692c5be1a4184503d607d45542d2aca0698c0068f52e09ccb541c910160405180910390a15062000b01565b606082826040516020016200035492919062000a00565b604051602081830303815290604052905092915050565b6040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090505b9392505050565b620003c1828262000528565b5050565b801580620004535750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200041657600080fd5b505afa1580156200042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000451919062000a33565b155b620004cb5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000523918591620005c816565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620003c1576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620005843390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000624826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620006a660201b62000f5f179092919060201c565b80519091501562000523578080602001905181019062000645919062000a4d565b620005235760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620004c2565b6060620006b78484600085620006bf565b949350505050565b606082471015620007225760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620004c2565b6001600160a01b0385163b6200077b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620004c2565b600080866001600160a01b0316858760405162000799919062000a71565b60006040518083038185875af1925050503d8060008114620007d8576040519150601f19603f3d011682016040523d82523d6000602084013e620007dd565b606091505b509092509050620007f0828286620007fb565b979650505050505050565b606083156200080c575081620003ae565b8251156200081d5782518084602001fd5b8160405162461bcd60e51b8152600401620004c2919062000a8f565b828054620008479062000ac4565b90600052602060002090601f0160209004810192826200086b5760008555620008b6565b82601f106200088657805160ff1916838001178555620008b6565b82800160010185558215620008b6579182015b82811115620008b657825182559160200191906001019062000899565b50620008c4929150620008c8565b5090565b5b80821115620008c45760008155600101620008c9565b600060208284031215620008f257600080fd5b81516001600160a01b0381168114620003ae57600080fd5b634e487b7160e01b600052604160045260246000fd5b60005b838110156200093d57818101518382015260200162000923565b838111156200094d576000848401525b50505050565b6000602082840312156200096657600080fd5b81516001600160401b03808211156200097e57600080fd5b818401915084601f8301126200099357600080fd5b815181811115620009a857620009a86200090a565b604051601f8201601f19908116603f01168101908382118183101715620009d357620009d36200090a565b81604052828152876020848701011115620009ed57600080fd5b620007f083602083016020880162000920565b6000835162000a1481846020880162000920565b83519083019062000a2a81836020880162000920565b01949350505050565b60006020828403121562000a4657600080fd5b5051919050565b60006020828403121562000a6057600080fd5b81518015158114620003ae57600080fd5b6000825162000a8581846020870162000920565b9190910192915050565b602081526000825180602084015262000ab081604085016020870162000920565b601f01601f19169190910160400192915050565b600181811c9082168062000ad957607f821691505b6020821081141562000afb57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051610140516101605161234862000b6e600039600081816102280152610d6f01526000610c0c01526000611442015260006114910152600061146c015260006113c5015260006113ef0152600061141901526123486000f3fe608060405234801561001057600080fd5b506004361061018f5760003560e01c806342966c68116100e4578063a457c2d711610092578063a457c2d714610357578063a9059cbb1461036a578063cc7a262e1461037d578063d505accf14610390578063d547741f146103a3578063dd62ed3e146103b6578063e4d73e59146103c9578063fce589d8146103dc57600080fd5b806342966c68146102d257806370a08231146102e55780637ecebe001461030e57806391d148541461032157806395d89b4114610334578063a0712d681461033c578063a217fddf1461034f57600080fd5b806323b872dd1161014157806323b872dd1461024a578063248a9ca31461025d5780632f2ff15d14610280578063313ce567146102955780633644e515146102a457806336568abe146102ac57806339509351146102bf57600080fd5b806301ffc9a71461019457806306fdde03146101bc578063082442f5146101d1578063095ea7b3146101f157806313966db51461020457806318160ddd1461021b5780631b2df85014610223575b600080fd5b6101a76101a2366004611ec7565b6103e5565b60405190151581526020015b60405180910390f35b6101c461041c565b6040516101b39190611f1d565b6008546101e4906001600160a01b031681565b6040516101b39190611f50565b6101a76101ff366004611f80565b6104ae565b61020d60095481565b6040519081526020016101b3565b60035461020d565b61020d7f000000000000000000000000000000000000000000000000000000000000000081565b6101a7610258366004611faa565b6104c6565b61020d61026b366004611fe6565b60009081526020819052604090206001015490565b61029361028e366004611fff565b6104ec565b005b604051601281526020016101b3565b61020d610517565b6102936102ba366004611fff565b610526565b6101a76102cd366004611f80565b6105a9565b61020d6102e0366004611fe6565b6105e8565b61020d6102f336600461202b565b6001600160a01b031660009081526001602052604090205490565b61020d61031c36600461202b565b6107d1565b6101a761032f366004611fff565b6107ef565b6101c4610818565b61020d61034a366004611fe6565b610827565b61020d600081565b6101a7610365366004611f80565b610b0d565b6101a7610378366004611f80565b610baa565b6007546101e4906001600160a01b031681565b61029361039e366004612046565b610bb8565b6102936103b1366004611fff565b610d1c565b61020d6103c43660046120b9565b610d42565b6102936103d73660046120e3565b610d6d565b61020d600a5481565b60006001600160e01b03198216637965db0b60e01b148061041657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606004805461042b90612118565b80601f016020809104026020016040519081016040528092919081815260200182805461045790612118565b80156104a45780601f10610479576101008083540402835291602001916104a4565b820191906000526020600020905b81548152906001019060200180831161048757829003601f168201915b5050505050905090565b6000336104bc818585610f76565b5060019392505050565b6000336104d485828561109a565b6104df858585611114565b60019150505b9392505050565b60008281526020819052604090206001015461050881336112d0565b6105128383611334565b505050565b60006105216113b8565b905090565b6001600160a01b038116331461059b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6105a582826114df565b5050565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091906104bc90829086906105e3908790612163565b610f76565b336000908152600160205260408120548211156106435760405162461bcd60e51b81526020600482015260196024820152786275726e3a20696e73756666696369656e742073686172657360381b6044820152606401610592565b6007546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610674903090600401611f50565b60206040518083038186803b15801561068c57600080fd5b505afa1580156106a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c4919061217b565b90506106cf60035490565b6106d98285612194565b6106e391906121b3565b91506106ef3384611544565b6000670de0b6b3a7640000600a54846107089190612194565b61071291906121b3565b905080156107785761072481846121d5565b600854600754919450610744916001600160a01b03908116911683611680565b6040518181527f557809284da7314475b1582804ae28e5f1349efc1fe970ea25d50fce75eb4f439060200160405180910390a15b60075461078f906001600160a01b03163385611680565b604080518481526020810186905233917f634235fcf5af0adbca1a405ec65f6f6c08f55e1f379c2c45cd10f23cb29e0e31910160405180910390a25050919050565b6001600160a01b038116600090815260066020526040812054610416565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606005805461042b90612118565b600754604051636eb1769f60e11b815233600482015230602482015260009183916001600160a01b039091169063dd62ed3e9060440160206040518083038186803b15801561087557600080fd5b505afa158015610889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad919061217b565b10156108fb5760405162461bcd60e51b815260206004820152601c60248201527f6d696e743a20696e73756666696369656e7420616c6c6f77616e6365000000006044820152606401610592565b6007546040516370a0823160e01b81526000916001600160a01b0316906370a082319061092c903090600401611f50565b60206040518083038186803b15801561094457600080fd5b505afa158015610958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097c919061217b565b9050600061098960035490565b6007549091506109a4906001600160a01b03163330876116b0565b6000670de0b6b3a7640000600954866109bd9190612194565b6109c791906121b3565b90508015610a32576008546007546109ec916001600160a01b03918216911683611680565b6109f681866121d5565b94507f557809284da7314475b1582804ae28e5f1349efc1fe970ea25d50fce75eb4f4381604051610a2991815260200190565b60405180910390a15b8115801590610a4057508215155b15610a615782610a508387612194565b610a5a91906121b3565b9350610a83565b8115801590610a6e575082155b15610a7f57610a5a826103e8612194565b8493505b60008411610ac05760405162461bcd60e51b815260206004820152600a6024820152690736861726573203d20360b41b6044820152606401610592565b610aca33856116e8565b604080518681526020810186905233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15910160405180910390a2505050919050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490919083811015610b925760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610592565b610b9f8286868403610f76565b506001949350505050565b6000336104bc818585611114565b83421115610c085760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610592565b60007f0000000000000000000000000000000000000000000000000000000000000000888888610c378c6117b5565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c92826117dd565b90506000610ca28287878761182b565b9050896001600160a01b0316816001600160a01b031614610d055760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610592565b610d108a8a8a610f76565b50505050505050505050565b600082815260208190526040902060010154610d3881336112d0565b61051283836114df565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7f0000000000000000000000000000000000000000000000000000000000000000610d9881336112d0565b6009849055600a839055600880546001600160a01b0319166001600160a01b0384169081179091556040805186815260208101869052908101919091527fc1263e7bde89435ac339a838da5632510d3a3f741a7b0fc4629e01936688bf859060600160405180910390a150505050565b801580610e915750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610e5757600080fd5b505afa158015610e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8f919061217b565b155b610efc5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610592565b6040516001600160a01b03831660248201526044810182905261051290849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611853565b6060610f6e8484600085611925565b949350505050565b6001600160a01b038316610fd85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610592565b6001600160a01b0382166110395760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610592565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006110a68484610d42565b9050600019811461110e57818110156111015760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610592565b61110e8484848403610f76565b50505050565b6001600160a01b0383166111785760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610592565b6001600160a01b0382166111da5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610592565b6001600160a01b038316600090815260016020526040902054818110156112525760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610592565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290611289908490612163565b92505081905550826001600160a01b0316846001600160a01b03166000805160206122f3833981519152846040516112c391815260200190565b60405180910390a361110e565b6112da82826107ef565b6105a5576112f2816001600160a01b03166014611a56565b6112fd836020611a56565b60405160200161130e9291906121ec565b60408051601f198184030181529082905262461bcd60e51b825261059291600401611f1d565b61133e82826107ef565b6105a5576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556113743390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561141157507f000000000000000000000000000000000000000000000000000000000000000046145b1561143b57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6114e982826107ef565b156105a5576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b0382166115a45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610592565b6001600160a01b038216600090815260016020526040902054818110156116185760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610592565b6001600160a01b03831660009081526001602052604081208383039055600380548492906116479084906121d5565b90915550506040518281526000906001600160a01b038516906000805160206122f38339815191529060200160405180910390a3505050565b6040516001600160a01b03831660248201526044810182905261051290849063a9059cbb60e01b90606401610f28565b6040516001600160a01b038085166024830152831660448201526064810182905261110e9085906323b872dd60e01b90608401610f28565b6001600160a01b03821661173e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610592565b80600360008282546117509190612163565b90915550506001600160a01b0382166000908152600160205260408120805483929061177d908490612163565b90915550506040518181526001600160a01b038316906000906000805160206122f38339815191529060200160405180910390a35050565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b60006104166117ea6113b8565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061183c87878787611bf2565b9150915061184981611cd5565b5095945050505050565b60006118a8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f5f9092919063ffffffff16565b80519091501561051257808060200190518101906118c6919061225b565b6105125760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610592565b6060824710156119865760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610592565b6001600160a01b0385163b6119dd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610592565b600080866001600160a01b031685876040516119f9919061227d565b60006040518083038185875af1925050503d8060008114611a36576040519150601f19603f3d011682016040523d82523d6000602084013e611a3b565b606091505b5091509150611a4b828286611e8e565b979650505050505050565b60606000611a65836002612194565b611a70906002612163565b67ffffffffffffffff811115611a8857611a88612299565b6040519080825280601f01601f191660200182016040528015611ab2576020820181803683370190505b509050600360fc1b81600081518110611acd57611acd6122af565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611afc57611afc6122af565b60200101906001600160f81b031916908160001a9053506000611b20846002612194565b611b2b906001612163565b90505b6001811115611ba3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611b5f57611b5f6122af565b1a60f81b828281518110611b7557611b756122af565b60200101906001600160f81b031916908160001a90535060049490941c93611b9c816122c5565b9050611b2e565b5083156104e55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610592565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115611c1f5750600090506003611ccc565b8460ff16601b14158015611c3757508460ff16601c14155b15611c485750600090506004611ccc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611c9c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611cc557600060019250925050611ccc565b9150600090505b94509492505050565b6000816004811115611ce957611ce96122dc565b1415611cf25750565b6001816004811115611d0657611d066122dc565b1415611d4f5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610592565b6002816004811115611d6357611d636122dc565b1415611db15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610592565b6003816004811115611dc557611dc56122dc565b1415611e1e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610592565b6004816004811115611e3257611e326122dc565b1415611e8b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610592565b50565b60608315611e9d5750816104e5565b825115611ead5782518084602001fd5b8160405162461bcd60e51b81526004016105929190611f1d565b600060208284031215611ed957600080fd5b81356001600160e01b0319811681146104e557600080fd5b60005b83811015611f0c578181015183820152602001611ef4565b8381111561110e5750506000910152565b6020815260008251806020840152611f3c816040850160208701611ef1565b601f01601f19169190910160400192915050565b6001600160a01b0391909116815260200190565b80356001600160a01b0381168114611f7b57600080fd5b919050565b60008060408385031215611f9357600080fd5b611f9c83611f64565b946020939093013593505050565b600080600060608486031215611fbf57600080fd5b611fc884611f64565b9250611fd660208501611f64565b9150604084013590509250925092565b600060208284031215611ff857600080fd5b5035919050565b6000806040838503121561201257600080fd5b8235915061202260208401611f64565b90509250929050565b60006020828403121561203d57600080fd5b6104e582611f64565b600080600080600080600060e0888a03121561206157600080fd5b61206a88611f64565b965061207860208901611f64565b95506040880135945060608801359350608088013560ff8116811461209c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156120cc57600080fd5b6120d583611f64565b915061202260208401611f64565b6000806000606084860312156120f857600080fd5b833592506020840135915061210f60408501611f64565b90509250925092565b600181811c9082168061212c57607f821691505b602082108114156117d757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156121765761217661214d565b500190565b60006020828403121561218d57600080fd5b5051919050565b60008160001904831182151516156121ae576121ae61214d565b500290565b6000826121d057634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156121e7576121e761214d565b500390565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b81526000835161221e816017850160208801611ef1565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161224f816028840160208801611ef1565b01602801949350505050565b60006020828403121561226d57600080fd5b815180151581146104e557600080fd5b6000825161228f818460208701611ef1565b9190910192915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816122d4576122d461214d565b506000190190565b634e487b7160e01b600052602160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212204937011c553142f696a310f0892b8ad01ab5d2e82307dc76c2cae8a0198ade1164736f6c63430008090033";

export class SponsorPool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SponsorPool> {
    return super.deploy(_token, overrides || {}) as Promise<SponsorPool>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): SponsorPool {
    return super.attach(address) as SponsorPool;
  }
  connect(signer: Signer): SponsorPool__factory {
    return super.connect(signer) as SponsorPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SponsorPoolInterface {
    return new utils.Interface(_abi) as SponsorPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SponsorPool {
    return new Contract(address, _abi, signerOrProvider) as SponsorPool;
  }
}
