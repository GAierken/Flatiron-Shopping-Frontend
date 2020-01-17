import React from 'react';


class ItemList extends React.Component {


   

itemListing= () => {

    const {item, buttonToAddToCartClicked} = this.props

    return <div className= "item-div">
        <img className= "item-list-image" onClick={()=> this.props.itemClickedOn(item)} src={item.image} alt={item.name}/>
        <button className= "item-list-button" onClick={()=> buttonToAddToCartClicked(item)}>Add to Cart</button>

    </div>
}



render() {
  return (
    <div >
        {this.itemListing()}
     
    </div>
  );
}
}


export default ItemList;
