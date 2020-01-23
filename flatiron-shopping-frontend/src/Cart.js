import React from 'react';
import CartItem from './CartItem';
import Item from './Item';

export default class Cart extends React.Component{


    displayCart= ()=> {

        const {selectedItems, buttonToRemoveFromCart, selectedToExpand, itemClickedOn} = this.props

        return selectedItems.map(item =>{
            return <CartItem item={item} buttonToRemoveFromCart={buttonToRemoveFromCart} selectedToExpand={selectedToExpand} itemClickedOn={itemClickedOn}/>
            })
    }


    ExpandedView= () => {
    return <div>
        <Item selectedToExpand={this.props.selectedToExpand} />
        <button className="return-to-cart-button" onClick={this.props.returnToItemList}>Return to Cart</button>
        </div>
    }

    chooseAFunction= () => {
        return this.props.expandItem ? this.ExpandedView() : this.displayCart()
    
    }

    render() {
        return (
            <div className="cart-item-container">
                <br></br>
                {!this.props.loggedIn() ? <p className="welcome-message">Log in to make a purchase</p> : 
                <div>
                    {!this.props.expandItem ?
                        <div>
                        <h1 className="shopping-app-h1">Shopping Cart</h1> 
                        <br></br>
                        </div> :
                        <div></div>}
                {this.chooseAFunction()}
                <br></br>
                {this.props.selectedItems.length > 0 && !this.props.expandItem ?
                <div className="order-submit-button-div"><button className="order-submit-button" onClick={this.props.submitOrder}>Submit Order</button></div> :
                <div></div>}
                </div>
                }
            
            </div>
        )
    }
}