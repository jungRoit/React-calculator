import React from 'react';
import './index.css';

const Button = (props) => (

    <div className='button'>
        {props.value}
    </div>
);

export default Button;