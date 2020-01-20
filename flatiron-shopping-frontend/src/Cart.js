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
        
        return this.props.usersOrders.map(order=> {
            return <div>
                <p>{order.item}</p>
                <p>{order.price}</p>
            </div>
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h1 className="shopping-app-h1">Shopping Cart</h1>
                <br></br>
            {this.chooseAFunction()}
            <br></br>
            <div>
                <h1 className="shopping-app-h1">Order History</h1>
                <br></br>
                {this.displayOrderHistory}
            </div>
            </div>
        )
    }
}