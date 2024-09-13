
import React, { useState } from 'react';
const SearchBar = ({ setQuery }) => {
    const [input, setInput] = useState('');
  
    const handleSearch = () => {
      setQuery(input);
    };
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for news..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
export default SearchBar;  