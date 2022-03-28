import React, { useState} from 'react';
import './SearchBar.css';

function SearchBar({setLocationHandler}) {
    const [searchQuery, setSearchQuery] = useState('');

    function onFormSubmit(e) {e.preventDefault();
        console.log('submitted');

        setLocationHandler(searchQuery);
    }

  return (
    <form className="searchbar" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        name="search"
        placeholder="Zoek een stad in Nederland"
      />

      <button type="submit">
        Zoek
      </button>
    </form>
  );
}

export default SearchBar;
