var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    displayProducts();    
});

var displayProducts = function(){
    var query = "SELECT * FROM Products"
    connection.query(query, function (err, res){
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].id + " || Product: " + res[i].product_name + " || Department " + res[i].department_name + " || Price: " + res[i].price + " || Stock:  " + res[i].stock_quantity);
        }
        bamazonCart();
    })
};
var bamazonCart = function() {
    inquirer.prompt3([{
        name: "ProductID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        //checks if or not the user typed a response
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: "Quantity",
        type: "input",
        message: "How many would you like to buy?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {

      
        var query = 'SELECT * FROM Products WHERE id =' + answer.Quantity;
        connection.query(query, function(err, res) {
          if (answer.Quantity <= res) {
            for (var i = 0; i < res.length; i++) {
                console.log("We currently have " + res[i].stock_quantity + " " + res[i].product_name + ".");
                console.log("Thank you for your order! Your order of "+ res[i].stock_quantity + " " + res[i].product_name + " is now being processed.");
              }
            } else {
              console.log("Not enough of this product in stock.");
            }
            displayProducts();
        })
    })
};



























