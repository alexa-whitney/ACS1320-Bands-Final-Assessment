import React from 'react';
import './Band.css';

function Band(props) {
    const { band_name, formed, origin, fans} = props.band;
    return (
        <div className="band">
            <h2>{band_name}</h2>
            <p>Formed: {formed}</p>
            <p>{origin}</p>
            <p>Fans: {fans}</p>
      </div>
    )
}

export default Band;