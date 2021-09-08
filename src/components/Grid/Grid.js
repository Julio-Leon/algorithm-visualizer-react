import React from 'react';
import './Grid.css';

import Row from '../Row/Row';

function Grid(props) {

    return (
        <div className='grid flex-container'>
            {
                props.grid.map((row, i) => <Row key={i} row={row} />)
            }
        </div>
    );
}

export default Grid;