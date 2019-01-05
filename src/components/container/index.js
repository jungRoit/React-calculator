import React, { Component } from 'react';
import Button from '../button';
import './index.css';

class Container extends Component {

    renderButton(i) {
      return  <Button 
            value= {i}
         />
    }

    render() {
        return (
            <div className='container'>
                {this.renderButton('1')}
                {this.renderButton('2')}
                {this.renderButton('3')}
            </div>
        )
    }

}

export default Container;