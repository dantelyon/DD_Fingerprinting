import React from 'react';
import Techniques from './Techniques'

export default function Table() {
    return <table className="table">
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