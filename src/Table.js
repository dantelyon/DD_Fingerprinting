import React from 'react';
import TechniquesSTATIC from './Techniques_STATIC'
import TechniquesDYNAMIC from './Techniques_DYNAMIC'
import TechniquesASYNC from './Techniques_ASYNC'
import './Table.css';


function Table(props) {
  return <table className={props.isTable ? "table" : "table hiddenTable"}>
    <colgroup>
      <col id="col1"></col>
      <col id="col2"></col>
    </colgroup>
    <tbody>
      {TechniquesSTATIC.map(technique => <tr key={technique.name}><td>{technique.name}</td><td>{technique.value()}</td></tr>)}
    </tbody>
    <TechniquesDYNAMIC />
    <TechniquesASYNC />
  </table>
}

export default Table

	