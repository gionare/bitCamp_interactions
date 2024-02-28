# Create a simple Character Counter component that allows users to type in text and displays the number of characters in real-time.

- Create a textarea element for users to type in text
- Display the character count below the textarea in real-time
- Use the useState hook to manage the text state

# Solution

- Create a textarea element for users to type in text
  `<textarea value={text} onChange={handle...} defaultValue="Count Characters!"/>`

- Display the character count below the textarea in real-time
  `<p>Charaqter Count is: {text?.length} </p>`

- Use the useState hook to manage the text state
  `const [text, setText] = useState();`

- create a function called handleTextareaChange that accepts an event object as its parameter.

` function handleTextareaChange(event) {
    setText(event.target.value);
}`
