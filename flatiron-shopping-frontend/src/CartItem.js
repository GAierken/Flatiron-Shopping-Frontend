import React from 'react';


export default class CartItem extends React.Component{


showCartItem= () => {

    const {item, buttonToRemoveFromCart} = this.props

    return <div className= "item-div">
        <br></br>
    <img className= "item-list-image" src={item.image} alt={item.name} />
    <p className="item-list-name">{item.name}</p>
    <p className="item-list-price"> {item.price}</p>
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