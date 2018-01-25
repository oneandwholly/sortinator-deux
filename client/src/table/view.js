import React from 'react';
import styled from 'styled-components';

const Table = (props) => {
    if (props.rows.length === 0) {
        return <div></div>;
    }

    return (
        <table className={props.className}>
            <thead>
                <Th>Unsorted</Th>
                <Th>Sorted</Th>                
            </thead>
            <tbody>
                {props.rows.map((row, i) => {
                    return ( 
                        <Tr key={i}>
                            <Td>{row[0]}</Td>
                            <Td>{row[1]}</Td>
                        </Tr>
                    );
                })}
            </tbody>
        </table>
    );
}

const Th = styled.th`
    background-color: rgba(0,0,0,0.5);
    border-radius: 3px;
`;
const Tr = styled.tr`
    background-color: rgba(0,0,0,0.1);
    border-radius: 3px;
`;
const Td = styled.td`
    width: 150px;
`;


const StyledTable = styled(Table)`
    margin-top: 50px;
    min-width: 300px;
`;

export default StyledTable;