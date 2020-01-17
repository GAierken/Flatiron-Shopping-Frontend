import React from 'react';


class Item extends React.Component {

expandThisItem= () => {

const {selectedToExpand, returnToItemList, buttonToAddToCartClicked} = this.props

    return <div>
        <h3>{selectedToExpand.name} </h3>
        <img src={selectedToExpand.url} alt={selectedToExpand.name}/>
        <p>{selectedToExpand.price} </p>
        <button onClick={()=> {buttonToAddToCartClicked(selectedToExpand)}}>Add to Cart</button>
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
