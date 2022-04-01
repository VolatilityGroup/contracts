/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardToken, RewardTokenInterface } from "../RewardToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
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
    name: "INITIAL_SUPPLY",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162000d0a38038062000d0a83398101604081905262000034916200025a565b604080518082018252600d81526c2932bbb0b93239902a37b5b2b760991b602080830191825283518085019094526006845265149155d0549160d21b9084015281519192916200008791600391620001b4565b5080516200009d906004906020840190620001b4565b505050620000c581633b9aca00670de0b6b3a7640000620000bf9190620002a2565b620000cc565b506200031c565b6001600160a01b038216620001275760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013b9190620002c4565b90915550506001600160a01b038216600090815260208190526040812080548392906200016a908490620002c4565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001c290620002df565b90600052602060002090601f016020900481019282620001e6576000855562000231565b82601f106200020157805160ff191683800117855562000231565b8280016001018555821562000231579182015b828111156200023157825182559160200191906001019062000214565b506200023f92915062000243565b5090565b5b808211156200023f576000815560010162000244565b6000602082840312156200026d57600080fd5b81516001600160a01b03811681146200028557600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620002bf57620002bf6200028c565b500290565b60008219821115620002da57620002da6200028c565b500190565b600181811c90821680620002f457607f821691505b602082108114156200031657634e487b7160e01b600052602260045260246000fd5b50919050565b6109de806200032c6000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c8063395093511161007c578063395093511461014457806340c10f191461015757806370a082311461016c57806395d89b4114610195578063a457c2d71461019d578063a9059cbb146101b0578063dd62ed3e146101c357600080fd5b806306fdde03146100c4578063095ea7b3146100e257806318160ddd1461010557806323b872dd146101175780632ff2e9dc1461012a578063313ce56714610135575b600080fd5b6100cc6101d6565b6040516100d9919061081b565b60405180910390f35b6100f56100f036600461088c565b610268565b60405190151581526020016100d9565b6002545b6040519081526020016100d9565b6100f56101253660046108b6565b610280565b610109633b9aca0081565b604051601281526020016100d9565b6100f561015236600461088c565b6102a4565b61016a61016536600461088c565b6102e3565b005b61010961017a3660046108f2565b6001600160a01b031660009081526020819052604090205490565b6100cc6102f1565b6100f56101ab36600461088c565b610300565b6100f56101be36600461088c565b610397565b6101096101d1366004610914565b6103a5565b6060600380546101e590610947565b80601f016020809104026020016040519081016040528092919081815260200182805461021190610947565b801561025e5780601f106102335761010080835404028352916020019161025e565b820191906000526020600020905b81548152906001019060200180831161024157829003601f168201915b5050505050905090565b6000336102768185856103d0565b5060019392505050565b60003361028e8582856104f4565b61029985858561056e565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061027690829086906102de908790610982565b6103d0565b6102ed828261073c565b5050565b6060600480546101e590610947565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561038a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61029982868684036103d0565b60003361027681858561056e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104325760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610381565b6001600160a01b0382166104935760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610381565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061050084846103a5565b90506000198114610568578181101561055b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610381565b61056884848484036103d0565b50505050565b6001600160a01b0383166105d25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610381565b6001600160a01b0382166106345760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610381565b6001600160a01b038316600090815260208190526040902054818110156106ac5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610381565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106e3908490610982565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072f91815260200190565b60405180910390a3610568565b6001600160a01b0382166107925760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610381565b80600260008282546107a49190610982565b90915550506001600160a01b038216600090815260208190526040812080548392906107d1908490610982565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b818110156108485785810183015185820160400152820161082c565b8181111561085a576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461088757600080fd5b919050565b6000806040838503121561089f57600080fd5b6108a883610870565b946020939093013593505050565b6000806000606084860312156108cb57600080fd5b6108d484610870565b92506108e260208501610870565b9150604084013590509250925092565b60006020828403121561090457600080fd5b61090d82610870565b9392505050565b6000806040838503121561092757600080fd5b61093083610870565b915061093e60208401610870565b90509250929050565b600181811c9082168061095b57607f821691505b6020821081141561097c57634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156109a357634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220d3ea533be236af0e590f8cebb6c2d464cfde71e603e0f479acc9a2fc8545975f64736f6c63430008090033";

export class RewardToken__factory extends ContractFactory {
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
    tokenHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardToken> {
    return super.deploy(tokenHolder, overrides || {}) as Promise<RewardToken>;
  }
  getDeployTransaction(
    tokenHolder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenHolder, overrides || {});
  }
  attach(address: string): RewardToken {
    return super.attach(address) as RewardToken;
  }
  connect(signer: Signer): RewardToken__factory {
    return super.connect(signer) as RewardToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardTokenInterface {
    return new utils.Interface(_abi) as RewardTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardToken {
    return new Contract(address, _abi, signerOrProvider) as RewardToken;
  }
}
