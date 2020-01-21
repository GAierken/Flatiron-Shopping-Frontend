import React from 'react';


export default class CartItem extends React.Component{


showCartItem= () => {

    const {item, buttonToRemoveFromCart, itemClickedOn} = this.props

    return <div className= "cart-item-div" >
        <br></br>
    <img className= "item-list-image" src={item.image} alt={item.name} onClick={()=> itemClickedOn(item)}/>
    <p className="item-list-name">{item.name}</p>
    <p className="item-list-price"> Price: ${item.price}</p>
    <br></br>
    <br></br>
    <button className="item-list-button" onClick={()=> buttonToRemoveFromCart(item)}>Remove from Cart</button>
    </div>
}






    render() {
        return(
                this.showCartItem()
        )
    }
}