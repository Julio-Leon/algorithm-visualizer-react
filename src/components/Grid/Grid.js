import React, { useContext } from 'react';
import './Grid.css';

import Row from '../Row/Row';
import { AppContext } from '../../App'

function Grid() {

    const appContext = useContext(AppContext)

    return (
        <div className='grid flex-container'>
            {
                appContext.grid.map((row, i) => <Row key={i} row={row} rowIdx={i} />)
            }
        </div>
    );
}

export default Grid;