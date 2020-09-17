import React from 'react';
import Techniques from './Techniques'
import './Table.css';

function TableRow(props) {
	return <tr>
		<td>{props.technique.name}</td>
		<td>{props.technique.value}</td>
	</tr>
}

class Table extends React.Component {
    render() {
        return (
            <table className={this.props.showTable ? "table" : "table hiddenTable"}>
                  <colgroup><col id="col1"></col><col id="col2"></col></colgroup>
                  <tbody>{Techniques.map(t => <TableRow technique={t} key={t.name}/>)}</tbody>
            </table>
        )
    }
}

export default Table