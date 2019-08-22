var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: 'Emory123456789987654321',
	database: 'bamazon_db'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole number that is not zero.';
	}
}

function promptUserPurchase() {

	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Items ID number that you want to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do ya need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;


			if (data.length === 0) {
				console.log('ERROR: YO!!! ENTER A VALID ITEM ID!!!!!.');
				displayInventory();

			} else {
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log('SWWWWEEETTTTTT, we got the stuff! Let me put that order in for ya!');

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('We put that order for you! Your total is $' + productData.price * quantity);
						console.log('Thanks for buying our stuff!!!');
						console.log("\n---------------------------------------------------------------------\n");

						connection.end();
					})
				} else {
					console.log('Whoa, sorry dude or dudette, looks like we cant make that happen.');
					console.log('Please fix your order.');
					console.log("\n----------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

function displayInventory() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('What we got: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	promptUserPurchase();
	})
}

function runBamazon() {

	displayInventory();
}

runBamazon();