# bamazon
Description
The bamazon app uses a simple terminal based storefront using the npm inquirer package and the MySQL database backend in conjunction with the npm mysql package. The app allows you as a customer to "shop" for the various items stored in the database.

Database:
 Set up the MYSQL database on your machine.  Once you have isntalled MYSQL, you'll be able to create the Bamazon database as well as the products table with the SQL code which you can find in "Bamazon.sql". Run the code inside your MySQL  workbench, then you'll be able to continue with the Bamazon customer view.

Customer view:
The customer view allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

Follow the steps below in your terminal or bash to run your Customer view:

git clone github.com/Eschwall3333/bamazon.git
cd bamazon
npm install
node bamazon.js


Now you'll be prompted with questions asking you what item you would like to ppurchse, how much of a particular item you would like to purchase.  You'll recieve statements letting you know that the item is in stock or out of stock as well as error messages letting you know you typed something in wrong.

Pictures can also be found in the images file of the system in action.

enojy!


