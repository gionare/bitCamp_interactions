# Drag and Drop List

Create a simple Drag and Drop List component that allows users to reorder a list of items by dragging and dropping them. The Drag and Drop List should have the following features:

1. Display the list of items

2. Allow users to drag and drop items to reorder the list

3. Use the `useState` hook to manage the list state

# Solution Walkthrough for Drag and Drop List

## Managing Drag-and-Drop State:

- To implement drag-and-drop functionality, we'll need to manage two pieces of state: `items` and `draggingItem`

  1. `items` represents the current order of the list items,
  2. `draggingItem` tracks the index of the item being dragged.
     We use the `useState` hook to manage both of these state variables:

     ```jsx
     const [items, setItems] = useState(initialItems);
     const [draggingItem, setDraggingItem] = useState(null);
     ```

## Handling Drag-and-Drop Events:

- We'll need to handle three drag-and-drop events to enable list reordering:

`onDragStart`: Triggered when the user starts dragging an item. We define the `handleDragStart` function that takes the index of the dragged item and updates the `draggingItem` state:

    ```jsx
    function handleDragOver(index) {
    if (draggingItem === null) return;
    if (draggingItem === index) return;

    const newItems = [...items];
    const draggingItemValue = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggingItemValue);

    setDraggingItem(index);
    setItems(newItems);
    }
    ```

`onDragEnd`: Triggered when the user drops the dragged item. We define the handleDragEnd function that resets the
`draggingItem` state to null:

    ```jsx
    function handleDragEnd() {
    setDraggingItem(null);
    }
    ```

## Rendering Draggable List Items:

We render the list items with the
draggable attribute and attach the appropriate event handlers for the drag events:

    ```jsx
    <ul>
    {items.map((item, index) => (
        <li
        key={index}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={() => handleDragOver(index)}
        onDragEnd={handleDragEnd}
        >
        {item}
        </li>
    ))}
    </ul>
    ```

## DragDropList Component:

The final `DragDropList` component combines state management, event handling, and rendering to create a user-friendly drag-and-drop experience for reordering list items.
