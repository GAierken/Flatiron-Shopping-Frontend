import React from 'react';


export default class CartItem extends React.Component{


showCartItem= () => {

    const {item, buttonToRemoveFromCart} = this.props

    return <div>
    <h3>{item.name}</h3>
    <img src={item.url} alt={item.name} />
    <p>{item.price}</p>
    <button onClick={()=> buttonToRemoveFromCart(item)}>Remove from Cart</button>
    </div>
}






    render() {
        return(
            <div>
                {this.showCartItem}

            </div>
        )
    }
}