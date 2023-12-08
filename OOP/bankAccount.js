// 3. Create a JavaScript class: representing a bank account with private properties for the account holder's name and balance.
// Implement methods to deposit and withdraw funds, ensuring that the balance is updated securely.
// Use encapsulation to hide the internal details of the bank account and provide controlled access to its properties.

// # account holder name
// #ballance
// method to deposit
// method to withdraw

class BankAccount {
  #accountHolder;
  #balance;
  constructor(accountHolder, initialBalance) {
    this.#accountHolder = accountHolder;
    this.#balance = initialBalance || 0; // Default to 0 if initialBalance is not provided
  }
  // __implement methods to get accountHolder name and balance__
  get accountHolder() {
    return this.#accountHolder;
  }
  get initialBalance() {
    return this.#balance;
  }
  // ______Implement methods to deposit and withdraw funds_______
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
  }
  withdraw(amount) {
    this.#balance -= amount;
    console.log(`Withdrawn $${amount}. New Balance: $${this.#balance}`);
  }
}

const myAccount = new BankAccount("gio", 10000);

console.log(`Available ballance:$${myAccount.initialBalance}`);
try {
  myAccount.deposit(500);
  myAccount.withdraw(100);
} catch (error) {
  console.log(error.message);
}
