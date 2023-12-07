/* 2.  დაწერეთ პროგრამა, რომელიც მიმსგავსებული იქნება ბიბლიოთეკის ფუნქციონირებასთან. 
გვექნება წიგნები, მომხმარებლები. იუზერებს შეეძლებათ წიგნების სესხება და ჩაბარება.
  
  - api-ში გვექნება ორი ენდფოინთი - users და books: 
      - user-ს ექნება ფროფერთები: id, name, borrowedBooks
      - book-ს ექნება ფროფერთები: id, name, author
  
  - დაწერეთ ფუნქცია, რომელიც დაამატებს ახალ იუზერებს -- ""POST"
  - დაწერეთ ფუნქცია, რომელიც ამოშლის არსებულ იუზერს -- "DELETE"
  
  - დაწერეთ ფუქნცია, რომელიც დაამატებს ახალ წიგნებს -- POST
  - დაწერეთ ფუქნცია, რომელიც ამოშლის არსებულ წიგნს -- DELETE
  
  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი ისესხებს წიგნს   -- "PATCH"
  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი დააბრუნებს წიგნს
   */
// ______ add new users ______
  async function addUser(name) {
    try{
        const addUserResponse = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                name, // object property shorthand, this type of syntax, same as name: "name"
                borrowedBooks: [],
            } )
        });
        if (!addUserResponse.ok) {
            throw new Error ("Failed to post/add new user data")
        }
    } catch (error){
        console.error(error.message)
    }
  }
//   addUser("Sara")

  // __________ DELETE/Remove user ___________

  async function removeUser(userId) {
    try {
        const removeUserResponse = await fetch (`http://localhost:3000/users/${userId}`, {
            method: "DELETE"
        });

        if(!removeUserResponse.ok) throw new Error ("Failed to delete user") 
    } catch (error) {
        console.error(error.message)
    }
  }
//   removeUser(8)

// __________ add new book, "POST" _____________

async function addBook(name, author) {
    try {
        const addBookResponse = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ( {
                name,
                author,
            } ),
        });

        if (!addBookResponse.ok) throw new Error("Failed to post Book")
    } catch (error) {
        console.error(error.message)
    }
}
// addBook("The Grat Gatsby", "F. Scott Fitzgerald");
// addBook("To Kill a Mockingbird","Harper Lee");

// __________ remove DELETE book ____________
async function removeBook(bookId) {
    try {
        const removeBookResponse = await fetch (`http://localhost:3000/books/${bookId}`, {
            method: "DELETE"
        });

        if(!removeBookResponse.ok) throw new Error ("Failed to delete user") 
    } catch (error) {
        console.error(error.message)
    }
  }
//  removeBook(3)


// _________________  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი ისესხებს წიგნს   __________________

async function borrowBook(userId, bookName) {
    try {
        // ვნახოთ უზერი არსებობს თუ არა, if not throw error 
        const userResponse = await fetch(`http://localhost:3000/users/${userId}`) ;
        if(!userResponse.ok) throw new Error("User doesn't exist");
        // see if book is in library && if books array length is null throw error 
        const bookResponse = await fetch(`http://localhost:3000/books/?name=${bookName}`);
        const booksArr = await bookResponse.json();
        // console.log(booksArr);
        if(booksArr.length === 0) throw new Error("Book doesn't exist in our Library");

        const book = booksArr[0];
        // console.log(book);

        const user = await userResponse.json();
        // console.log(user);

        // give book to user - using PATCH method
        const borrowedBookResponse = await fetch(`http://localhost:3000/users/${userId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // using PATCH method, i will add borrowBooks key in books endpoint.
                // and will giove new value, which is booksArr 0 element
                // spread operator to include all books which userId had borrowed already, if there is one, and dont loose them
                borrowBooks:[...user.borrowedBooks, book], 
            }),
        });
        if(!borrowedBookResponse.ok) throw new Error ("Failed to Borrow the Book ");
    } catch (error) {
        console.error(error.message);
    }
}
// borrowBook(2, "1984")

// ________ იუზერი დააბრუნებს წიგნს PATCH _________
async function returnBook(userId, bookId) {
    try {
        const user = await fetch(`http://localhost:3000/users/${userId}`);

        if(!user.ok) throw new Error("this user doesnt exist");

        const userInfo = await user.json();

        const requestToReturn = await fetch(`http://localhost:3000/users/${userId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                borrowedBooks:[ userInfo.borrowedBooks.filter( (item) => item.id !== bookId )]
            })
        })
        if (!requestToReturn.ok) throw new Error("Failed to return book");

        let book = userInfo.borrowedBooks;
        let result = book.filter((item) => item.id == bookId);
        console.log(userInfo);
        addBook(result[0].name, result[0].author)
    } catch (error) {
        console.error(error.message);
    }
}
// returnBook(6,2);
// addBook("To kill The Mokingbird", "Harper Lee");
