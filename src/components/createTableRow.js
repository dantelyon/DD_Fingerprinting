import React from 'react';

function createTableRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.result}</td>
        </tr>
    )
}

export default createTableRow