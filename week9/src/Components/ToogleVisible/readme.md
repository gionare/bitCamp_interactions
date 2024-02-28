# Create component that toggles the visibility of a piece of text when a button is clicked.

- Initially, the text should be hidden
- When the button is clicked, the text should become visible if it was hidden, and hidden if it was visible
- Use the `useState` hook to manage the visibility state

## Solution Walkthrough:

- Initialize state variable isVisible with false
  `const [isVisible, setIsVisible] = useState(false);`

- Create the handleToggleVisibility function:
  `function handleToggleVisibility(){ setIsVisible(!isVisible) }`

- Attach the handleToggleVisibility function to the button's onClick event handler:
  `<button onClick={handleToggleVisibility}> Hide/Show Text </button>`

- Conditionally render the text element based on the isVisible state:
  `{isVisible && <p> Toogle me! </p>}`
