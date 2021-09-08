// import React, { useContext } from 'react';
import './Block.css'

// import AppContext from '../../App'

function Block(props) {

    // const appContext = useContext(AppContext)

    // const onClick = () => {
        
    // }
    
    return (
        <div className='block flex-container'>
            {props.block}
        </div>
    );
}

export default Block;