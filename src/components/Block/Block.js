import React, { useState, useContext } from 'react';
import './Block.css'

import { AppContext } from '../../App'

function Block(props) {

    const appContext = useContext(AppContext)

    const [state, setState] = useState(appContext.blockStates.blank)

    const colorScheme = {
        1: 'green',
        2: 'red',
        3: 'black'
    }

    const onClick = () => {
        console.log('POSITION:', props.rowIdx, props.blockIdx)

        appContext.setGrid(
            appContext.grid.map((row, i) => {
                return row.map((block, j) => {
                    if (i === props.rowIdx && j === props.blockIdx) {
                        if (block !== 0) {
                            if (block === 1) {
                                appContext.setGridState({
                                    start: false,
                                    end: appContext.gridState.end
                                })
                            }
                            else if (block === 2) {
                                appContext.setGridState({
                                    start: appContext.gridState.start,
                                    end: false
                                })
                            }
                            return 0
                        }
                        if (!appContext.gridState.start) {
                            appContext.setGridState({
                                start: true,
                                end: appContext.gridState.end
                            })
                            return 1
                        }
                        else if (!appContext.gridState.end) {
                            appContext.setGridState({
                                start: appContext.gridState.start,
                                end: true
                            })
                            return 2
                        }
                        else {
                            return 3
                        }
                    }
                    return block
                })
            })
        )

        // appContext.setGrid(
        //     appContext.grid.map((row, i) => {
        //         return row.map((block, j) => {
        //             if (i === props.rowIdx && j === props.blockIdx) {
        //                 if (block === 1) {
        //                     return 0
        //                 } else {
        //                     return 1
        //                 }
        //             }
        //             return block
        //         })
        //     })
        // )
        console.log(appContext.grid)
    }

    return (
        <div style={{
            backgroundColor: colorScheme[props.block]
        }} onClick={onClick} className='block flex-container'>
        </div>
    );
}

export default Block;