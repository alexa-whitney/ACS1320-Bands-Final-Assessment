import React from 'react';
import './Band.css';
import Like from '../Like/Like';

function Band(props) {
    const { band_name, formed, origin, fans, split, style} = props.band;
    const styleList = style.split(',').map((styleItem) => (
        <li key={styleItem}>{styleItem.trim()}</li>
      ));
    return (
        <div className="band">
            <h2>{band_name}</h2>
            <p>Formed: {formed}</p>
            <p>{origin}</p>
            <p>Fans: {fans}</p>
            <ul>{styleList}</ul>
            {split === '-' ? <Like /> : <p>Split: {split}</p>}
        </div>
    )
}

export default Band;