import React, { useState } from "react";

const initialItems = ["first", "Second", "Third", "Item 4", "Item 5"];
console.log(initialItems);

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [draggingItem, setDraggingItem] = useState(null);

  function handleDragOver() {
    if (draggingItem === null) return;
    if (draggingItem === index) return;

    const newItems = [...items];
    const draggingItemValue = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggingItemValue);

    setDraggingItem(index);
    setItems(newItems);
  }

  function handleDragEnd() {
    setDraggingItem(null);
  }

  return (
    <div>
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
    </div>
  );
}
