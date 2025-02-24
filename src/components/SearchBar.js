// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchId, setSearchId] = useState('');

    const handleSearch = () => {
        onSearch(searchId);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by Employee ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
