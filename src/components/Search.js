import React from "react";

function Search({helpFilter}) {
  const handleChange = (filter) => {
    helpFilter(filter)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
