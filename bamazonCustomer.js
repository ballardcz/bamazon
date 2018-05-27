var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createconnection({
    host: "localhost",
    PORT: 3307,
    user:"root",
    password:"root",
    database:"bamazon"
})

connection.connect(function(err){
    console.log("connected as id: " + connection.threadId)
})