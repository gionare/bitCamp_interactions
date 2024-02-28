# creating a simple Todo List component that allows users to add new items to the list and delete items once they are completed. The Todo List should have the following features:

1. An input field for adding new todo items
   <input type="text" value={inputValue} onChange={handleInputChange}/>
2. A button to submit the new todo item
   <button  onClick={handleSubmit}> Add Todo </button>
3. Display the list of todo items

```jsx
<ul>
  {todos.map((todo, index) => (
    <li key={index}>
      {todo}
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  ))}
</ul>
```

4. A delete button next to each todo item to remove it from the list
   <button onClick={() => handleDelete(index)}> Delete</button>
5. Use the **useState hook** to manage the todo list state
   `const [todos, setTodos] = useSate([])`
   `cosnst [inputValue, setInputValue] = useSatete('');`

## Solution

# List Rendering

- Using `map` function to iterate over the `todos` array and render a list item for each todo.

# Event Handling:

React supports various event handlers, such as `onClick` and `onChange` which allow you to execute functions when specific events occur.

- `onClick` event handler to handle the submission and deletion of todo items
- `onChange` event handler to update the input field value.

# Create the `handleInputChange`, `handleSubmit`, and `handleDelete` functions:

    - `handleInputChange` updates the `inputValue` state variable whenever the input field value changes.

    ```jsx
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    ```
    - Attach the `handleSubmit` function to the "Add Todo" button's onClick event handler.

    ```jsx
    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }
    ```

    - `handleDelete` removes a todo item from the `todos` array based on its index.

    ```jsx
    function handleDelete(index){
        setTodos(todos.fileter((_, todo) => todo !== index))
    }
    ```
