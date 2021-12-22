import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Your Cart</h1>
            </div>
            <div className='Buy'>
                <Button>Proceed to Buy</Button>
            </div>
            </div>
        )
    }
}
