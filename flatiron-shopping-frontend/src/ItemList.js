import React from 'react';



class ItemList extends React.Component {

itemListing= () => {

    const {item} = this.props

    return <div className="item-div">
  
        <img className= "item-list-image" onClick={()=> this.props.itemClickedOn(item)} src={item.image} alt={item.name}/>
          <br></br>
        <button className= "item-list-button" onClick={()=> this.props.buttonToAddToCartClicked(item)}>Add to Cart</button>
          <br></br>
    </div>
}



render() {
  return (
    this.itemListing()
  );
}
}


export default ItemList;
