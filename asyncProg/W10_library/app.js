/* 2.  დაწერეთ პროგრამა, რომელიც მიმსგავსებული იქნება ბიბლიოთეკის ფუნქციონირებასთან. 
გვექნება წიგნები, მომხმარებლები. იუზერებს შეეძლებათ წიგნების სესხება და ჩაბარება.
  
  - api-ში გვექნება ორი ენდფოინთი - users და books:
      - user-ს ექნება ფროფერთები: id, name, borrowedBooks
      - book-ს ექნება ფროფერთები: id, name, author
  
  - დაწერეთ ფუნქცია, რომელიც დაამატებს ახალ იუზერებს -- ""POST"
  - დაწერეთ ფუნქცია, რომელიც ამოშლის არსებულ იუზერს -- "DELETE"
  
  - დაწერეთ ფუქნცია, რომელიც დაამატებს ახალ წიგნებს 
  - დაწერეთ ფუქნცია, რომელიც ამოშლის არსებულ წიგნს
  
  - დაწერეთ ფუნქცია, რომლის მეშვეობითაც იუზერი ისესხებს წიგნს
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
  addUser("Sara")

  // __________ DELETE user ___________

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
//   removeUser(3)

// ______ add new book, POST _________
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
addBook("To kill The Mokingbird", "Harper Lee")