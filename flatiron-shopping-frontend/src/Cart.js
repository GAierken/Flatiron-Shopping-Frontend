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
                {this.displayCart}

            </div>

        )
    }
}