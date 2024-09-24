import React, { useState } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const [searchItem, setSearchItem] = useState("");
  function handleChange(e) {
    setSearchItem(e.target.value);
  }
  const searchresults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search item" onChange={handleChange} />
      <ul>
        {searchresults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
