import React from 'react';
import static_techniques from '../fp-techniques/STATIC'

function staticData() {
    return static_techniques.map(technique => {
        const result = technique.value();
        const unavailableFeature = result === "Unavailable" || result === null || result === "undefined" || result === false;
        const tableRow = <tr key={technique.name}>
            <td>{technique.name}</td>
            {unavailableFeature ? <td className="unavailableFeature">This feature is unavailable for your browser or device.</td> : <td>{result}</td>}
            </tr>
        return tableRow
    })
  }

  export default staticData