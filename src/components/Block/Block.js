import React, { useContext } from 'react';
import './Block.css'

import { AppContext } from '../../App'

function Block(props) {

    const appContext = useContext(AppContext)

    const onClick = () => {
        console.log('POSITION:', props.rowIdx, props.blockIdx)
        appContext.setGrid(
            appContext.grid.map((row, i) => {
                return row.map((block, j) => {
                    if (i === props.rowIdx && j === props.blockIdx) {
                        if (block === 1) {
                            return 0
                        } else {
                            return 1
                        }
                    }
                    return block
                })
            })
        )
        console.log(appContext.grid)
    }
    
    return (
        <div onClick={onClick} className='block flex-container'>
            {props.block}
        </div>
    );
}

export default Block;