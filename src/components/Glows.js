import React from 'react';
import '../css/Glows.css';

function Glows() {
    const glow = (i) => <div className="glowyboys" key={i}></div>;
    const allGlows = [];
    for (let i = 0; i < 12; i++) allGlows.push(glow(i));
    return <div className="glows" aria-hidden="true">{allGlows}</div>
}

export default Glows