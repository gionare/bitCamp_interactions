## Search Filter component that allows users to filter a list of items based on their search input.

1. Create an input field for users to type in their search query
   <input type="text" onChange={handleSearchFilter}/>
2. Display the list of items and filter them based on the user's search input
<ul>
    <li />
    <li />
</ul>
3. Use the `useState` hook to manage the search input state
   const [,set] = useState()

## Solution

1. Filtering Items Based on Search Input:

   - `filteredItems` that filters the original `items` array using the `Array.prototype.filter()` method
     const filteredItems = items.filter(item => ite..toLowerCase().includes(search.toLowerCase()));
     filters the list of items based on the user's search input. allowing us to display only the items that match the search criteria.

2. Rendering Filtered Items:
   - render the filtered items within the component.
   <ul>
       {filteredItems.map(
           (item, index) => (
               <li key={index}>{item}</li>
           )
       )}
   </ul>
