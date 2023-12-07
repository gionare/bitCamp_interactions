// delete user from users
let deleteButton = document.getElementById("deleteUserById");

deleteButton.addEventListener("click", () => {
    let userId = Number(prompt("enter user id to delete"));
    removeUser(userId);
})
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
