var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 80 || 3307 || 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

var err;

connection.connect(function (err) {
    if (err){ throw err};
    console.log("connected as id: " + connection.threadId);
    // connection.query("SELECT product_id,product_name,price FROM bamazon.products", function (err, res) {
    //     console.log(res);

    // });
    start();
})

function start() {

    // var numId;
    // var howMany;

    connection.query("SELECT product_id,product_name,price FROM bamazon.products", function (err, res) {
            console.log(res);
    
            inquirer.prompt([{
                name: "numId",
                type: "input",

                choices: function (value) {
                    var idnum = [];
                    for (var i = 0; i < res.length; i++) {
                        idnum.push(res[i].product_id);
                        // & res[i].product_name & res[i].price);
                    }
                    return idnum;
                },
                message: "What's the id number of the product you would like to purchase? example: #1 , #13, or #345",
                // validate: validate$
            }]).then(function (answer) {
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].product_id == answer.choice) {
                            var idnumb = res[i];
                            inquirer.prompt([{
                                name: "howMany",
                                message: "How many units would you like to purchase?",
                                type: "input",
                                validate: function (value) {
                                    if (isNaN(value) == false) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            }]).then(function (answer) {
                                if (idnumb.stock_quantity <= parseInt(answer.howMany)) {
                                    connection.query("UPDATE bamazon.products SET ? WHERE ?", [{
                                        stock_quantity: answer.howMany
                                    }, {
                                        product_id: idnumb.product_id
                                    }], function (err, res) {
                                        console.log("Your order has been placed!");
                                    })
                                }
                            })
                        };
                        // & res[i].product_name
                        // inquirer.prompt({
                        //     message: "How many units would you like to purchase?",
                        //     type: "input",
                        //     name: "howMany",
                        //     validate: function (value) {
                        //         if (isNaN(value) == false) {
                        //             return true;
                        //         } else {
                        //             return false;
                        //         }
                        //     }
                        // });
                        // .then(function (answer) {
                        //     connection.query("Select 
                        // })
                    } }
                ) }
            ) }
            
   // })
// end();
//}
// inquirer.prompt({
//     message: "Hi! Would you like to order anything?",
//     name: "PlaceAnOrder",
//     type: "rawlist",
//     choices: ["YES", "NO"]
// }).then(function(answer) {
//     if (answer.PlaceAnOrder.toUppercase() == "YES") {
//         placeOrder();
//     } else if (answer.PlaceAnOrder.toUppercase() == "NO"){ 
//         end();
//         //console.log ("Goodbye!")
//     }
//     else { console.log("try again!");
//     start();
//     }

// });

function end() {
    // this logs a goodbye and exits node safely
    console.log("Goodbye!");
    process.exit(0);
}