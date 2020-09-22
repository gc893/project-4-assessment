import React from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => {
    return ( 
    <div className='CircleSelector'>
        {props.circleNo.map((circle, idx) => (
            <button 
            key={idx}
            className={props.circleIdx === idx ? 'selected' : ''}
            onClick = {() => props.handleClick(idx)}
            >
            {props.circleIdx === idx ? ` Circle ${idx + 1} selected` : `Select Circle ${idx +1}`}
            </button>
        ))}
    </div> 
    );
}
 
export default CircleSelector;