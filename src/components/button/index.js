import React from 'react';
import './index.css';

const Button = (props) => {

   let clickHandler = () => {
        {props.clicked(props.value)};
        
    }

    return (
        <div className='button' onClick={()=>clickHandler()}>
        {props.value}
    </div>
    )
}
    
    


export default Button;