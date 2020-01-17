import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart'


export default class Nav extends React.Component{











    render() {
        return (
<div>
    <Login />
    <Signup />
    <Cart selectedItems={this.props.selectedItems} buttonToRemoveFromCart={this.props.ButtonToRemoveFromCart}/>

</div>

        )
    }
}