import React from 'react';
import './index.css';

const Screen = (props) => (

    <input 
    className='screen'
    disabled
    value={props.value}
    placeholder='0'
    />
);

export default Screen;