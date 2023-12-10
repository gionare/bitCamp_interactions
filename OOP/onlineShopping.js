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
        - getProducts(): Returs the products, which custome bought

Create function called order, that will be used to empty shopping cart and give the products to user

*/
// _____________________ P R O D U C T  C L A S S ________________________
class Product {
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

const product1 = new Product("1", "pillow", 40);
const product2 = new Product("2", "LEGO car", 100);
const product3 = new Product("3", "MI TV LUX", 4000);
// console.log(product1.productId);
// console.log(product1.productName);
// console.log(product1.getUserId());
console.log(product1.getProductInfo());
console.log(product2.getProductInfo());

// ________________ S H O P P I N G C A R T  C L A S S  ____________________
class ShoppingCart {
  #cartId;
  #items;
  constructor(cartId, item) {
    this.#cartId = cartId;
    this.#items = [];
  }
  get cartId() {
    return this.#cartId;
  }
  getItems() {
    return this.#items;
  }
  // adding new method
  getShopingCartInfo(){
    return this.#items.map((product) => product.getProductInfo())
  }
  // push items in addItem[]
  addItem(product) {
    this.#items.push(product);
  }
  // need logic to take out certuin element from []
  // 1. using splice(startIndex, howMany), so we need to know start index
  // 2.
  removeItem(product) {
    const index = this.#items.indexOf(product);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
  // __ - calculateTotal(): Calculates and returns the total price of items in the cart. __
  calculateTotal() {
    return this.#items.reduce(
      (accumulator, product) => accumulator + product.getprice(),
      0
    );
  }
}
const shoppingCart1 = new ShoppingCart("1");
// console.log(shoppingCart1.getItems());
shoppingCart1.addItem(product1);
shoppingCart1.addItem(product2);
shoppingCart1.addItem(product3);

// console.log(shoppingCart1.getItems());
// if we want to see whats inside each object in array
// we will need to loop it and use getProductInfo method
// use .map() for looping and also map will return each pproduct modified
let mappedArr = shoppingCart1
  .getItems()
  .map((product) => product.getProductInfo());
console.log(mappedArr);

// ____________________ U S E R  C L A S S ___________________

class User {
  #userId;
  #userName;
  #email;
  #products;
  constructor(userId, userName, email) {
    this.#userId = userId;
    this.#userName = userName;
    this.#email = email;
    this.#products = [];
  }

  getUserId() {
    return this.#userId;
  }
  getUserName() {
    return this.#userName;
  }
  getEmail() {
    return this.#email;
  }
  getProducts() {
    return this.#products;
  }
  // adding new method to give item to user 
  orderProduct(product){
    this.#products.push(product)
  }
  // adding new method to იუზერის პროდუქტებში ჩასული პროდუცტები
  getUserProductsInfo(){
    return this.#products.map((product) => product.getProductInfo());
  }
}

const user1 = new User("1", "Gio", "gionare93@gmail.com");
console.log(user1.getUserName());

// _______________ order ფუნქცია, that will be used to empty shopping cart and give the products to user ___________________
// cart ში რასაც დავამატებთ, შემდეგ ის order() და ჩავამატოთ იუზერის products მასივში

class Order {
  static order(user, ShoppingCart) {
    // create looping highOrder method for this ShoppingCart.getItems().
    ShoppingCart.getItems().forEach((product) => {
      ShoppingCart.removeItem(product);
      user.orderProduct(product);
    });
  }
}

console.log("shopping cart before:  ", shoppingCart1.getShopingCartInfo());
console.log("user products before: ", user1.getUserProductsInfo());

Order.order(user1, shoppingCart1)

console.log("user products after: ", user1.getUserProductsInfo());
console.log("shopping cart after:  ", shoppingCart1.getShopingCartInfo());