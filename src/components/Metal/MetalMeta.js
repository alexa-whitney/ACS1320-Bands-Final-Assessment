import data from '../../metal.js'
import React from 'react';
import './MetalMeta.css';
import SearchBar from '../Search/SearchBar.js';

function MetalMeta() {
    const numBands = data.length;
    return (
        <div className='band-header'>
            <h1>Metal ⚡️ Bands</h1>
            <img src="https://media3.giphy.com/media/gui67fZ3xIneM/200w.webp?cid=ecf05e47js8i37st2miy151vlwzx4h44zxsrj8lvscfu685a&rid=200w.webp&ct=g" alt="hard rock gif" />
            <h2>Bands: {numBands} </h2>
            <h2>🤘🤘🏻🤘🏼🤘🏽🤘🏾🤘🏿</h2>
        </div>
    )
}

export default MetalMeta;