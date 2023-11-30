// 1. Run json server for todos. Endpoint should be "todos" which will be array of objects 
// and object itself should have task and completed properties
// complated

// 2. add 5 todo objects to "todos" endpoint
// async function addTodo (newTodo){
//     try {
//         const response = await fetch("http://localhost:3000/todos", {
//             method: "POST",
//             // headers is additional information about request
//             headers: {
//                 // telling that i will give you object in json format
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTodo),
//         });
//       //before catching error we need to shoot it  
//       if (!response.ok){
//         //in this case shoot ...
//         throw new Error("Failed to add todo");
//       }
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// addTodo({ task: "prepare for exams", completed: false });
// addTodo({ task: "prepare for quiz", completed: true });
// addTodo({ task: "added 3rd key", completed: true });
// addTodo({ task: "random", complated: false });
// addTodo({ task: "last one", completed:  true});

// ******************  DELETE empty obj  ****************

// async function deleteTodo(idNUmb) {
// try {
//     const response = await fetch(`http://localhost:3000/todos/${idNUmb}` ,{
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     if (!response.ok){
//         throw new Error("Failed to Delete id");
//     }
// } catch (error) {
//     console.log(error.message);
// }
// }
// deleteTodo(4);     

// 3. Change one todo and make it complated
// ******** PATCH method updates only selected ********

// async function completeTodo(id) {
//     try {
//         const response = await fetch(`http://localhost:3000/todos/${id}`,{
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 complited: true,
//             }),
//         });
//         if(!response.ok){
//             throw new Error("Failed to update todo")
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// completeTodo(28)

// 4. delete all the todos that are already completed and has nothing in it 

async function getCompletedTodos() {
    try {
        const response = await fetch("http://localhost:3000/todos");
        
        if (!response.ok) throw new Error("Failed to fetch data ");

        const todos = await response.json(); // get objects array from out fetching root
        // console.log(todos);

        //filter todos, filter is hight order method
        const completedTodos = todos.filter( (todo) => todo.completed == undefined);  //and delete also objects which todo.complated == undefined
        //console.log(completedTodos); // show filtered array
        return completedTodos;
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteTodo() {
    try {
        const completedTodos = await getCompletedTodos();
        if (completedTodos.length === 0) throw new Error ("complatedTodos array is empty ");

        //loop with .map() to delete complated todos, using getComplatedTodos() 
        completedTodos.map( async (todo) => {
            const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
                method: "DELETE",
            });
        if (!response.ok) throw new Error ("Failed to Delete todo")
        });
    } catch (error) {
        console.error(error.message);
    }
}
deleteTodo();

//questions, 
// 1. what exactly is doing response.ok --> it is connected with error status, if its 200 then response.ok will be true



