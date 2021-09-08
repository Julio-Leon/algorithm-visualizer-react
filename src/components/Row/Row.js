import React from 'react';
import './Row.css'

import Block from '../Block/Block';

function Row(props) {
    return (
        <div className='row flex-container'>
            {
                props.row.map((block, i) => <Block key={i} block={block} />)
            }
        </div>
    );
}

export default Row;