import React from 'react';

export default (props) => {
    if (props.rows.length === 0) {
        return <div></div>;
    }

    return (
        <table>
            <tbody>
                {props.rows.map((row, i) => {
                    return ( 
                        <tr key={i}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}