## Change the background color of a div by selecting a color from a dropdown list.

1. Create a dropdown list with a few color options (e.g., red, blue, green, yellow)
   <select name="" id="">
   <option value="">Select a color</option>
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="yellow">Yellow</option>
   <option value="blue">Blue</option>
   </select>

   - attach the handleColorChange function to the dropdown's onChange event handler.

2. When a color is selected from the dropdown, the background color of the div should change to the selected color
3. Use the **useState** hook to manage the background color state

## Solution

- Initialize the state variable `bgColor`

  - declare variable using the useState hook. This variable will store the current background color of the div.

  ```jsx
  const [bgColor, setBgColor] = useState("");
  ```

- Create the handleColorChange function:

  ```jsx
  function handleColorChange() {
    setBgColor(event.target.value);
  }
  ```

- Create a div and set it's background color based on the bgColor state: **inline styling**

  ```jsx
  <div style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}>
    {" "}
  </div>
  ```
