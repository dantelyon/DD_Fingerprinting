import React from 'react';
import Techniques from './Techniques'
import './Table.css';

export default function Table() {
    return <table className="table">
                  <colgroup>
                  <col id="col1"></col>
                  <col id="col2"></col>
                  </colgroup>
        <tbody>
            {Techniques.map(t => <TableRow props={t}/>)}
        </tbody>
    </table>
}

function TableRow(props) {
	return <tr>
		<td>{props.props.name}</td>
		<td>{props.props.value}</td>
	</tr>
}
