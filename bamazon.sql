-- this is the mysql database starting info--


-- Drops the auctions if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "Auctions" database --
CREATE DATABASE bamazon;

USE bamazon;

create table if not exists products(
	product_id int(10) not null auto_increment,
	product_name varchar(50) not null,
	department_name varchar(50) not null,
	price int(10) not null,
	stock_quantity int(10),
    --primary key is very important because their can only be one auto inclement column and has to be defined as key --
    primary key (product_id)
 );

Insert Into products (
    product_id,
    product_name,
    department_name,
    price,
    stock_quantity
    )
values (1,"boots","wearables", 10,2),
(2,"frenchfries",1.50,150),
(3,"GS5", "electronics", 200, 1),
(4, "GS9", "electronics", 900, 12),
(5, "DJI Spark", "electronics", 299, 1),
(6,"Firecracker Icepops", "food", 1,300)
(7,"Apple head phones","electronics", 20, 150),
(8, "Eragon by Christopher Paolini", "books", 9, 2000),
(9, "The great Gatsby", "books", 5, 237),
(10, "Silence", "Priceless",1000000, 1)