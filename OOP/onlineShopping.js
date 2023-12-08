/* Task: Online Shopping System
Create an Online Shopping System that consists of different classes to represent various entities in the system. 
Implement features such as products, shopping carts, users, and orders.

Product Class:
    Private properties:
        - productId (string): A unique identifier for each product.
        - productName (string): The name of the product.
        - price (number): The price of the product.
    Public methods:
        - getProductId(): Returns the product ID.
        - getProductName(): Returns the product name.
        - getPrice(): Returns the price.


ShoppingCart Class: 
    Private properties:
        - cartId (string): A unique identifier for each shopping cart.
        - items (array): An array to store the products added to the cart.
    Public methods:
        - getCartId(): Returns the cart ID.
        - addItem(product): Adds a product to the cart.
        - removeItem(product): Removes a product from the cart.
        - calculateTotal(): Calculates and returns the total price of items in the cart.  
        
User Class:
    Private properties:
        - userId (string): A unique identifier for each user.
        - username (string): The username of the user.
        - email (string): The email address of the user.
        - products(array): bought products
    Public methods:
        - getUserId(): Returns the user ID.
        - getUsername(): Returns the username.
        - getEmail(): Returns the email address.
        - getProducts(): Returs the products

Create function called order, that will be used to empty shopping cart and give the products to user

*/

class product {
  #productId;
  #productName;
  #price;
  constructor(productId, productName, price) {
    //რომ მივმართოდ ახალ ობიექტს რისთვისაც კონსტრუქტორი შევქმენით --> this.
    this.#productId = productId;
    this.#productName = productName;
    this.#price = price;
  }
  // nee methods to ritch private class
  get getProductId() {
    return this.#productId;
  }
  getUserId() {
    return this.#price;
  }
}

const product1 = new product("1", "pillow", 40);
console.log(product1.getProductId);
console.log(product1.getUserId());
