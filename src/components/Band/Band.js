import React from 'react';
import './Band.css';
import Like from '../Like/Like';

function Band(props) {
    const { band_name, formed, origin, fans, split} = props.band;
    return (
        <div className="band">
            <h2>{band_name}</h2>
            <p>Formed: {formed}</p>
            <p>{origin}</p>
            <p>Fans: {fans}</p>
            {split === '-' ? <Like /> : <p>Split: {split}</p>}
        </div>
    )
}

export default Band;