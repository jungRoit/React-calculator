import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/container';

class Calculator extends Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));