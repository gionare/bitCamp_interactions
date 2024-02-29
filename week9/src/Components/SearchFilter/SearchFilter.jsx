import React, { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const items = ["Apple", "Bananna", "Carrot", "Grape", "Garlic", "Date"];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search-input"> Choose from list: </label>
      <input
        type="text"
        id="search-input"
        value={search}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
