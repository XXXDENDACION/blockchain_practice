export const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "author",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "typeBookId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "backBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAbonements",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "abonentCardId",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "bookId",
						"type": "uint256[]"
					}
				],
				"internalType": "struct Library.AbonentCard[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBooks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "bookId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "cardId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "formularId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "typeBookId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "author",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "free",
						"type": "bool"
					}
				],
				"internalType": "struct Library.Book[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCatalogsCard",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "cardId",
						"type": "uint256"
					},
					{
						"internalType": "int256",
						"name": "count",
						"type": "int256"
					}
				],
				"internalType": "struct Library.CatalogCard[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFormulars",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "formularId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "userId",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "startDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endDate",
						"type": "uint256"
					}
				],
				"internalType": "struct Library.Formular[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "typeBookId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			}
		],
		"name": "takeBook",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "pwhash",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "abonentCardId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const ADDRESS = "0xca40F9d211442da7f4C9bFF38C51b238C7c1299c";