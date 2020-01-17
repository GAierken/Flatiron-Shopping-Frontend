import React from 'react';


class Item extends React.Component {

expandThisItem= () => {

const {selectedToExpand, returnToItemList, buttonToAddToCartClicked} = this.props

    return <div className= "item-display">
        <h3>{selectedToExpand.name} </h3>
        <img className="item-display-image" src={selectedToExpand.image} alt={selectedToExpand.name}/>
        <p>{selectedToExpand.price} </p>
        <p>{selectedToExpand.description}</p>
        <button className="item-display-button" onClick={()=> {buttonToAddToCartClicked(selectedToExpand)}}>Add to Cart</button>
        <button onClick={returnToItemList}>Return to Inventory</button>
    </div>
}



render() {
  return (
    <div >
   {this.expandThisItem()}
     
    </div>
  );
}
}


export default Item;
