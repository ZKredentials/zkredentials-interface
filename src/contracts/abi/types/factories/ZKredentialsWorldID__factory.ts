/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZKredentialsWorldID,
  ZKredentialsWorldIDInterface,
} from "../ZKredentialsWorldID";

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "TokenURIUpdated",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "string",
        name: "cid",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "tokenId",
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
    name: "tokenURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260016008553480156200001657600080fd5b506040518060400160405280601681526020017f5a4b726564656e7469616c7320576f726c64436f696e00000000000000000000815250604051806040016040528060038152602001625a4b5760e81b81525081600090816200007a919062000137565b50600162000089828262000137565b50505062000203565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000bd57607f821691505b602082108103620000de57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200013257600081815260208120601f850160051c810160208610156200010d5750805b601f850160051c820191505b818110156200012e5782815560010162000119565b5050505b505050565b81516001600160401b0381111562000153576200015362000092565b6200016b81620001648454620000a8565b84620000e4565b602080601f831160018114620001a357600084156200018a5750858301515b600019600386901b1c1916600185901b1785556200012e565b600085815260208120601f198616915b82811015620001d457888601518255948401946001909101908401620001b3565b5085821015620001f35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61183780620002136000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80636352211e116100a2578063b88d4fde11610071578063b88d4fde14610213578063c87b56dd14610226578063d85d3d2714610239578063e0df5b6f1461024c578063e985e9c51461025f57600080fd5b80636352211e146101d257806370a08231146101e557806395d89b41146101f8578063a22cb4651461020057600080fd5b806317d70f7c116100de57806317d70f7c1461018d57806323b872dd146101a45780633c130d90146101b757806342842e0e146101bf57600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004611162565b61029b565b60405190151581526020015b60405180910390f35b6101406102ed565b60405161012f91906111d7565b61016061015b3660046111ea565b61037f565b6040516001600160a01b03909116815260200161012f565b61018b61018636600461121f565b6103a6565b005b61019660085481565b60405190815260200161012f565b61018b6101b2366004611249565b6104c0565b6101406104f1565b61018b6101cd366004611249565b610595565b6101606101e03660046111ea565b6105b0565b6101966101f3366004611285565b610610565b610140610696565b61018b61020e3660046112a0565b6106a5565b61018b610221366004611368565b6106b4565b6101406102343660046111ea565b6106ec565b61018b6102473660046113e4565b610760565b61018b61025a3660046113e4565b6107b4565b61012361026d36600461142d565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806102cc57506001600160e01b03198216635b5e139f60e01b145b806102e757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102fc90611460565b80601f016020809104026020016040519081016040528092919081815260200182805461032890611460565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b5050505050905090565b600061038a826108b2565b506000908152600460205260409020546001600160a01b031690565b60006103b1826105b0565b9050806001600160a01b0316836001600160a01b0316036104235760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061043f575061043f813361026d565b6104b15760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161041a565b6104bb8383610914565b505050565b6104ca3382610982565b6104e65760405162461bcd60e51b815260040161041a9061149a565b6104bb838383610a01565b3360009081526006602052604081208054606092919061051090611460565b80601f016020809104026020016040519081016040528092919081815260200182805461053c90611460565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b50939695505050505050565b6104bb838383604051806020016040528060008152506106b4565b6000818152600260205260408120546001600160a01b0316806102e75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161041a565b60006001600160a01b03821661067a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161041a565b506001600160a01b031660009081526003602052604090205490565b6060600180546102fc90611460565b6106b0338383610b65565b5050565b6106be3383610982565b6106da5760405162461bcd60e51b815260040161041a9061149a565b6106e684848484610c33565b50505050565b60606106f7826108b2565b600061070e60408051602081019091526000815290565b9050600081511161072e5760405180602001604052806000815250610759565b8061073884610c66565b6040516020016107499291906114e7565b6040516020818303038152906040525b9392505050565b610768610cf9565b6107908160405160200161077c9190611516565b6040516020818303038152906040526107b4565b61079c33600854610d9b565b600880549060006107ac83611550565b919050555050565b6008546000908152600260205260409020546001600160a01b03166108305760405162461bcd60e51b815260206004820152602c60248201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161041a565b806040516020016108419190611516565b60408051601f198184030181529181523360009081526006602052209061086890826115c5565b50336000818152600660205260409081902090517f0d61faa98106efeae60c0e7296c7c29b6f4827bec34c55b4b2d7e01918e66161916108a791611685565b60405180910390a250565b6000818152600260205260409020546001600160a01b03166109115760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161041a565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610949826105b0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061098e836105b0565b9050806001600160a01b0316846001600160a01b031614806109d557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806109f95750836001600160a01b03166109ee8461037f565b6001600160a01b0316145b949350505050565b826001600160a01b0316610a14826105b0565b6001600160a01b031614610a3a5760405162461bcd60e51b815260040161041a90611710565b6001600160a01b038216610a9c5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161041a565b826001600160a01b0316610aaf826105b0565b6001600160a01b031614610ad55760405162461bcd60e51b815260040161041a90611710565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610bc65760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161041a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c3e848484610a01565b610c4a84848484610db5565b6106e65760405162461bcd60e51b815260040161041a90611755565b60606000610c7383610eb6565b600101905060008167ffffffffffffffff811115610c9357610c936112dc565b6040519080825280601f01601f191660200182016040528015610cbd576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610cc757509392505050565b3360009081526007602052604090205460ff1615610d595760405162461bcd60e51b815260206004820152601760248201527f5573657220616c72656164792072656769737465726564000000000000000000604482015260640161041a565b33600081815260076020526040808220805460ff19166001179055517f2d3734a8e47ac8316e500ac231c90a6e1848ca2285f40d07eaa52005e4b3a0e99190a2565b6106b0828260405180602001604052806000815250610f8e565b60006001600160a01b0384163b15610eab57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610df99033908990889088906004016117a7565b6020604051808303816000875af1925050508015610e34575060408051601f3d908101601f19168201909252610e31918101906117e4565b60015b610e91573d808015610e62576040519150601f19603f3d011682016040523d82523d6000602084013e610e67565b606091505b508051600003610e895760405162461bcd60e51b815260040161041a90611755565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109f9565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610ef55772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610f21576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f3f57662386f26fc10000830492506010015b6305f5e1008310610f57576305f5e100830492506008015b6127108310610f6b57612710830492506004015b60648310610f7d576064830492506002015b600a83106102e75760010192915050565b610f988383610fc1565b610fa56000848484610db5565b6104bb5760405162461bcd60e51b815260040161041a90611755565b6001600160a01b0382166110175760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161041a565b6000818152600260205260409020546001600160a01b03161561107c5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161041a565b6000818152600260205260409020546001600160a01b0316156110e15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161041a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461091157600080fd5b60006020828403121561117457600080fd5b81356107598161114c565b60005b8381101561119a578181015183820152602001611182565b838111156106e65750506000910152565b600081518084526111c381602086016020860161117f565b601f01601f19169290920160200192915050565b60208152600061075960208301846111ab565b6000602082840312156111fc57600080fd5b5035919050565b80356001600160a01b038116811461121a57600080fd5b919050565b6000806040838503121561123257600080fd5b61123b83611203565b946020939093013593505050565b60008060006060848603121561125e57600080fd5b61126784611203565b925061127560208501611203565b9150604084013590509250925092565b60006020828403121561129757600080fd5b61075982611203565b600080604083850312156112b357600080fd5b6112bc83611203565b9150602083013580151581146112d157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561130d5761130d6112dc565b604051601f8501601f19908116603f01168101908282118183101715611335576113356112dc565b8160405280935085815286868601111561134e57600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561137e57600080fd5b61138785611203565b935061139560208601611203565b925060408501359150606085013567ffffffffffffffff8111156113b857600080fd5b8501601f810187136113c957600080fd5b6113d8878235602084016112f2565b91505092959194509250565b6000602082840312156113f657600080fd5b813567ffffffffffffffff81111561140d57600080fd5b8201601f8101841361141e57600080fd5b6109f9848235602084016112f2565b6000806040838503121561144057600080fd5b61144983611203565b915061145760208401611203565b90509250929050565b600181811c9082168061147457607f821691505b60208210810361149457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b600083516114f981846020880161117f565b83519083019061150d81836020880161117f565b01949350505050565b66697066733a2f2f60c81b81526000825161153881600785016020870161117f565b602f60f81b6007939091019283015250600801919050565b60006001820161157057634e487b7160e01b600052601160045260246000fd5b5060010190565b601f8211156104bb57600081815260208120601f850160051c8101602086101561159e5750805b601f850160051c820191505b818110156115bd578281556001016115aa565b505050505050565b815167ffffffffffffffff8111156115df576115df6112dc565b6115f3816115ed8454611460565b84611577565b602080601f83116001811461162857600084156116105750858301515b600019600386901b1c1916600185901b1785556115bd565b600085815260208120601f198616915b8281101561165757888601518255948401946001909101908401611638565b50858210156116755787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083526000845461169981611460565b808487015260406001808416600081146116ba57600181146116d457611702565b60ff1985168984015283151560051b890183019550611702565b896000528660002060005b858110156116fa5781548b82018601529083019088016116df565b8a0184019650505b509398975050505050505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906117da908301846111ab565b9695505050505050565b6000602082840312156117f657600080fd5b81516107598161114c56fea2646970667358221220e5cc0c64fe535e78de1f187ab30bfb09e5e0ecfde71d081065bf3f8f5240ba4d64736f6c634300080f0033";

type ZKredentialsWorldIDConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKredentialsWorldIDConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZKredentialsWorldID__factory extends ContractFactory {
  constructor(...args: ZKredentialsWorldIDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKredentialsWorldID> {
    return super.deploy(overrides || {}) as Promise<ZKredentialsWorldID>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZKredentialsWorldID {
    return super.attach(address) as ZKredentialsWorldID;
  }
  override connect(signer: Signer): ZKredentialsWorldID__factory {
    return super.connect(signer) as ZKredentialsWorldID__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKredentialsWorldIDInterface {
    return new utils.Interface(_abi) as ZKredentialsWorldIDInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZKredentialsWorldID {
    return new Contract(address, _abi, signerOrProvider) as ZKredentialsWorldID;
  }
}