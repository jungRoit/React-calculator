import React, { Component } from 'react';
import Button from '../button';
import Screen from '../screen';
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
                <div className='row'>
                {this.renderButton('C')}
                <Screen value='0'/>
                </div>
                <div className='row'>
                {this.renderButton('1')}
                {this.renderButton('2')}
                {this.renderButton('3')}
                {this.renderButton('/')}
                </div>
                <div className='row'>
                {this.renderButton('4')}
                {this.renderButton('5')}
                {this.renderButton('6')}
                {this.renderButton('x')}
                </div>
                <div className='row'>
                {this.renderButton('7')}
                {this.renderButton('8')}
                {this.renderButton('9')}
                {this.renderButton('-')}
                </div>
                <div className='row'>
                {this.renderButton('.')}
                {this.renderButton('0')}
                {this.renderButton('=')}
                {this.renderButton('+')}
                </div>
                
            </div>
        )
    }

}

export default Container;