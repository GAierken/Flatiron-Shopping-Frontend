import React from 'react';


class ItemList extends React.Component {


   

itemListing= () => {

    const {item, itemClickedOn, buttonToAddToCartClicked} = this.props

    return <div>
        <img onClick={()=> itemClickedOn(item)} src={item.url} alt={item.name}/>
        <button onClick={()=> {buttonToAddToCartClicked(item)}}>Add to Cart</button>

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
