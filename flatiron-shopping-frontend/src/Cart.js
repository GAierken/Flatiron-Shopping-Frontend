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
        <button onClick={this.props.returnToItemList}>Return to Cart</button>
        </div>
    }

    chooseAFunction= () => {
        return this.props.expandItem ? this.ExpandedView() : this.displayCart()
    
    }

    displayOrderHistory=()=> {
        
        const orderItems= this.props.usersOrders.map(order=> {
            return order.items
        })

        return orderItems.map(item=>{
            return <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        })
    }

    render() {
        return (
            <div className="cart-item-container">
                <br></br>
                <h1 className="shopping-app-h1">Shopping Cart</h1>
                <br></br>
            {this.chooseAFunction()}
            <br></br>
            <div className="order-submit-button-div"><button className="order-submit-button" onClick={this.props.submitOrder}>Submit Order</button></div>
            <div>
                <h1 className="shopping-app-h1">Order History</h1>
                <br></br>
                {this.displayOrderHistory()}
            </div>
            </div>
        )
    }
}