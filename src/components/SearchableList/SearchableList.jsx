import React, { useRef, useState } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange = useRef();
  const [searchItem, setSearchItem] = useState("");
  function handleChange(e) {
    if (lastChange.current) {
      clearTimeout(lastChange);
    }
    lastChange.setTimeout(() => {
      lastChange.current = null;
      setSearchItem(e.target.value);
    }, 500);
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
