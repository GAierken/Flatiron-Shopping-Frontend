import React from 'react';
import CartItem from './CartItem';

export default class Cart extends React.Component{


    displayCart= ()=> {

        const {selectedItems, buttonToRemoveFromCart} = this.props

        return selectedItems.map(item =>{
            return <CartItem item={item} buttonToRemoveFromCart={buttonToRemoveFromCart}/>
            })
    }




    render() {
        return (
            <div>
                <br></br>
                <h1 className="shopping-app-h1">Shopping Cart</h1>
                <br></br>
            {this.displayCart()}
            </div>
        )
    }
}