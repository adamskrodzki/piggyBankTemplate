const contractData =  { BankABI:
 [
	{
		"constant": false,
		"inputs": [
			{
				"name": "numberOfFinneysWeekly",
				"type": "uint256"
			},
			{
				"name": "numbersOfWeeks",
				"type": "uint256"
			}
		],
		"name": "createPig",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPig",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],
BankAddress:"0xfc19deaa1b934aa52ec991053b8cb23ec7710544",
MoneyPigABI:[
	{
		"constant": false,
		"inputs": [],
		"name": "feedThePig",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numberOfWeeksSinceLast",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNow",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numberOfWeeksToTheEnd",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "NUMBER_OF_SECONDS_IN_WEEK",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "numberOfFinneysWeekly",
				"type": "uint256"
			},
			{
				"name": "numbersOfWeeks",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]

}
export default contractData;