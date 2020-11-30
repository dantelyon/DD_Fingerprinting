import React from 'react';
import './Glows.css';

function Glows() {
    const glow = <div className="glowyboys"></div>;
    const allGlows = [];
    for (let i = 0; i < 12; i++) allGlows.push(glow);
    return <div className="glows" aria-hidden="true">{allGlows}</div>
}

export default Glows