import React, { useState, useEffect } from 'react';

const PageLoadTime = () => {
    const [loadtime, setLoadtime] = useState(0);
  
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoadtime(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart + "ms");
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
        <tr>
            <td>Page load time</td>
            {loadtime ?  <td>{loadtime}</td> : <td className="unavailableFeature">This feature is unavailable for your browser or device.</td>}
        </tr>
    );
};

export default PageLoadTime;