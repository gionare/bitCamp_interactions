// *************** QUERY string or QUERY parameters ****************
// after fetch endpoint we can write ?completed=false&task="prepare for the exams"

// 1. Delete all the todos from todo API that are already complated
// 1. using query param delete todo which has complated true.
// - method: "DELETE" / fetch() / await / async funct / try catch / throw error
// - write functional, to get object from data.json which todos.complated = true

async function getCompletedTodos() {
  // ფუნქცია იქმნება რადგან შემდგომში გამოვიყენო
  try {
    const response = await fetch("http://localhost:3000/todos/?completed=true"); // შეეცადე რომ დაფეთჩო დასრულებული ობჯექტი
    if (!response.ok) throw new Error("Faied to Fetch/get data "); //გაისროლე ერრორი თუ დატა თუ სტატუს კოდი 200 არ არის
    const data = await response.json(); // რესპონსი ჩაწერე დატაში, მაგრამ ჯერ დაელოდე დატას მიღებას
    return data; //ფუნქციამ დამიბრუნოს გადაცემუი პირობისთვის წარმატებული დატა
  } catch (error) {
    // დავიჭიროთ გასროლილი ერრორი
    console.error(error.message); // დაჭერილ ერროს დააერრორებინეე ერრორ მესიჯი რაც ზემოთ გვიწერია
  }
}

async function deleteTodo() {
  // ამ ფუნქციაში მჭირდება რომ მივიღო ის ობჯექტი რომელსაც წავშლი
  try {
    const completedTodos = await getCompletedTodos(); // ჩავნერგორ და მივანიჭოთ წინა ფუნქციის რეთურნი(json()) .this ფუნქციაში

    //.map მა გადაუაროს თითეოეულ გადმოცემულ json()ობჯექტს და წაშალოს
//     Differences between forEach() and map() methods:
// The forEach() method returns “undefined“. 
// The map() method returns the newly created array according to the provided callback function
    completedTodos.map(async (todo) => { 
      const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "DELETE",
      });
      console.log(response.ok); // დამილოგე თუ სწორედ შესრულდა სტატუს კოდი, ყოველ დამაპულზე
    });
  } catch (error) {
    // დაიჭირე და დამილოგე ერრორი თავისი შიგთავსით, არსებობის შემთვევაში
    console.error(error.message);
  }
}
deleteTodo()