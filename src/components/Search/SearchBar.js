import React from 'react';
import { useState } from 'react';
import Band from '../Band/Band';
import './SearchBar.css';
import data from '../../metal.js';

function SearchBar() {
    const [query, setQuery] = useState('')
    const spaces = data.filter((obj) => {
        const inName = obj.band_name.toLowerCase().includes(query.toLowerCase())
        return inName
    }).map((obj) => {
        const { band_name } = obj
        return (
            <div className="band">
                <Band
                    band={obj}
                />
            </div>
        )
    })

    return (
        <div className="search-bar">
            <form>
                <input
                    value={query}
                    placeholder="    Search Band Name"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            {spaces.length > 0 ? spaces : "No results match your search"}
        </div>
    )
}

export default SearchBar;
