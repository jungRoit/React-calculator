import React, { Component } from 'react';
import Button from '../button';
import Screen from '../screen';
import './index.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'',
            firstValue: null,
            operation: null,
            secondValue: null
        }
    }

    renderButton(i) {
      return  <Button 
            value= {i}
            clicked = {this.buttonClicked}
         />
    }

    buttonClicked = (val) => {
        let display = this.state.display;
           

        if(!isNaN(val) && this.state.operation == null) {
            display+= val;
            this.setState({display,firstValue:parseInt(display)});
        }else if(isNaN(val)) {
            if(val ==='C') {
                display='';
                this.setState({display});
            }else if(val ==='.'){
                display+= val;
                this.setState({display,firstValue:parseInt(display)});
            }else if(val ==='='){
                display = this.calculate();
                this.setState({display,firstValue:parseInt(display),operation:null,secondValue:null});
            }
            else {
                display= '';
                this.setState({display,operation:val});
            }
        }else {
            display+= val;
            this.setState({display,secondValue:parseInt(display)});
        }
    }

    calculate() {
        let result = 0;

       switch(this.state.operation) {
           case '+': result = this.state.firstValue + this.state.secondValue;
           break;
           case '-': result = this.state.firstValue - this.state.secondValue;
           break;
           case 'x': result = this.state.firstValue * this.state.secondValue;
           break;
           case '/': result = this.state.firstValue / this.state.secondValue;
           break;
           default: result = 0;
       }

       return result;
       
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                {this.renderButton('C')}
                <Screen value={this.state.display}/>
                </div>
                <div className='row'>
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
                {this.renderButton('/')}
                </div>
                <div className='row'>
                {this.renderButton(4)}
                {this.renderButton(5)}
                {this.renderButton(6)}
                {this.renderButton('x')}
                </div>
                <div className='row'>
                {this.renderButton(7)}
                {this.renderButton(8)}
                {this.renderButton(9)}
                {this.renderButton('-')}
                </div>
                <div className='row'>
                {this.renderButton('.')}
                {this.renderButton(0)}
                {this.renderButton('=')}
                {this.renderButton('+')}
                </div>
                
            </div>
        )
    }

}

export default Container;