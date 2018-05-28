var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 80 || 3307 || 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
    connection.query("SELECT product_id,product_name,price FROM bamazon.products", function(err,res){
        console.log(res);
    start();
});
});

function start() {

    inquirer.prompt({
        message: "Hi! Would you like to order anything?",
        name: "PlaceAnOrder",
        type: "list",
        choices: ["YES", "NO"]
    }).then(function (answer) {
        if (answer.PlaceAnOrder.toUpperCase() == "Yes") {
            placeOrder();
        } else {
            //console.log ("Goodbye!")
        }
    });

    var numberId = "";
    var howMany;

    function placeOrder() {

        function validate$(howMany) {
            var reg = /^\d+$/;
   return reg.test(howMany) || "How many units are you purchasing?whats the product id number?";
            // var isValid = !_.isNaN(parseFloat(howMany));
            // return isValid || "How many units are you purchasing?whats the product id number?";
        }

        var questions = [{
                message: "What's the id number of the product you would like to purchase? example: #1 , #13, or #345",
                type: "input",
                name: "howMany",
                validate: validate$
            },
            {
                message: "What's your age?",
                type: "input",
                name: "age",
                validate: validate$
            },
        ];
        
    };inquirer.prompt(questions);
}