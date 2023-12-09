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
// _____________________ P R O D U C T  C L A S S ________________________
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
  // need methods to ritch private class
  get productId() {
    return this.#productId;
  }
  get productName() {
    return this.#productName;
  }
  getprice() {
    return this.#price;
  }
  // __ Return all properties, by creating new object in method__
  getProductInfo() {
    return {
      productId: this.#productId,
      productName: this.#productName,
      price: this.#price,
    };
  }
}

const product1 = new product("1", "pillow", 40);
const product2 = new product("2", "LEGO car", 100);
const product3 = new product("3", "MI TV LUX", 4000);
// console.log(product1.productId);
// console.log(product1.productName);
// console.log(product1.getUserId());
console.log(product1.getProductInfo());
console.log(product2.getProductInfo());

// ________________ S H O P P I N G C A R T  C L A S S  ____________________
class shoppingCart {
  #cartId
  #items
  constructor (cartId, item) {
    this.#cartId = cartId;
    this.#items = [];
  }
  get cartId () {
    return this.#cartId;
  }
  get items () {
    return this.#items;
  }
  // push items in addItem[]
  addItem (product) {
    this.items.push(product);
  }
  // need logic to take out certuin element from []
  // 1. using splice(startIndex, howMany), so we need to know start index
  // 2. 
  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index !== -1){
    this.items.splice(index, 1)
    }
  }
// __ - calculateTotal(): Calculates and returns the total price of items in the cart. __
  calculateTotal () {
    return this.#items.reduce((accumulator, product) => accumulator + product.getprice() ,0);
  }


}
const shoppingCart1 = new shoppingCart("1");
console.log(shoppingCart1.items());
