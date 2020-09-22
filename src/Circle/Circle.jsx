import React from 'react';
import './Circle.css'

const Circle = (props) => {
    return ( 
        <div className='Circles'>
        {props.circleNo.map((circle, idx) => (
            <div
            key={idx}
            height='100'
            className={props.circleIdx === idx ? 'selected' : ''}
            onClick={() => props.handleClick(idx)}>
                {idx}
            </div>
        ))}
    </div> 
        );
}
 
export default Circle;