CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Crock pot', 'Home goods', 40.75, 150),
		('Evil Spatula', 'Home goods', 2.95, 666),
		('Fart-va Beans', 'Grocery', 5.99, 250),
		('Towels made from paper', 'Grocery', 3.75, 600),
		('ava-car-doh', 'Produce', 0.99, 1000),
		('2% Moo Moo milk', 'Dairy', 2.50, 300),
		('Burrito Wrappers', 'Grocery', 3.00, 478),
		('It aint easy being cheesy', 'Dairy', 3.50, 400),
		('One pound Reeces', 'Candy', 6.50, 467),
		('Giant Bean Stalk', 'Produce', 12.99, 2),
		('Poision apple', 'Produce', 1.50, 423),
		('Sick Kicks', 'Sports', 120.92, 7),
		('Brain Bucket', 'Sports', 72.84, 62),
		('Um...Khakis', 'Clothing', 20.55, 180),
		('Short Shorts', 'Clothing', 7.88, 342),
		('Kitty Munchies', 'Pets', 2.25, 237),
		('Feel Better Pills', 'Pharmacy', 12.50, 367),
		('Doggy Chow', 'Pets', 6.95, 42),
		('Astro Glide', 'Pharmacy', 3.25, 550),
		('Frozen Zaa', 'Frozen food', 8.25, 82);