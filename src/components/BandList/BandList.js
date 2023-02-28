import React from 'react';
import data from '../../metal.json';
import Band from '../Band/Band';
import './BandList.css';

function Bands() {
    return (
        <div className='bands'>
            {data.map((band) => (
                <Band key={band.name} band={band} />
            ))}
        </div>
    );
}

export default Bands;