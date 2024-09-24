import React, { useState } from "react";

const SearchableList = ({ items, children }) => {
  const [searchItem, setSearchItem] = useState("");
  function handleChange(e) {
    setSearchItem(e.target.value);
  }
  const searchresults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div className="searchableList">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchresults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
