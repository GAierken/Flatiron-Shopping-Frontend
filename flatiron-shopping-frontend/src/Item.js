import React from 'react';


class Item extends React.Component {

expandThisItem= () => {

const {selectedToExpand} = this.props

    return <div className= "item-display">
        <h3>{selectedToExpand.name} </h3>
      
        <img className="item-display-image" src={selectedToExpand.image} alt={selectedToExpand.name}/>
        
        <p>Price: ${selectedToExpand.price} </p>
        
        <p>{selectedToExpand.description}</p>

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
