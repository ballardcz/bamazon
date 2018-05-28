var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 3307 || 80,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    console.log("connected as id: " + connection.threadId);
    //start();
});

function start() {
    console.log("bamazon");
        inquirer.prompt({
            name:"PlaceAnOrder",
            type:"rawlist",
            message: "Hi! Would you like to order anything?",
            choices:["YES","NO"]
        }).then(function(answer){
            if(answer.PlaceAnOrder.toUpperCase()=="Yes"){
                //placeOrder();
            }
            else {
                //console.log ("Goodbye!")
            }
        });

var numberId = "";
var howMany = "";

    function placeOrder() {
inquirer.prompt({
    name:"product_id",
    type: "input",
    message:"What's the id number of the product you would like to purchase? example: #1 , #13, or #345",
    choices:[numberId,howMany]
 })
 //.then(function(answer){
//     if(answer.product_id==! )
// })
    }; 
    

};