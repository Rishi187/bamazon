CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT ,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics" , 300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BackPack", "School" , 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics" , 500, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics" , 100, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Banana", "Food" , 1, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Food" , 2, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics" , 35, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper", "School" , 5, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Book", "School" , 17, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pencils", "School" , 3, 11);

SELECT * FROM Products;