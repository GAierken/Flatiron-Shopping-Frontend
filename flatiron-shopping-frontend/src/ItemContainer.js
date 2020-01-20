import React from 'react';
import ItemList from './ItemList';
import Item from './Item';


class ItemContainer extends React.Component {


listTheItems= () => {
    return this.props.items.map(item => {
        return <ItemList key={item.id} item={item} itemClickedOn={this.props.itemClickedOn} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
    })
}

giveExpandedViewofItem= () => {
    return <div>
        <Item selectedToExpand={this.props.selectedToExpand} 
        returnToItemList={this.props.returnToItemList} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
        <button className="item-display-button" onClick={()=> {this.props.buttonToAddToCartClicked(this.props.selectedToExpand)}}>
        Add to Cart</button>
        <button className="item-display-button" onClick={this.props.returnToItemList}>Return to Inventory</button>
        </div>
}

chooseWhichToRender= () => {
    return this.props.expandItem ? this.giveExpandedViewofItem() : this.listTheItems()

}

render() {
  return ( 
      this.chooseWhichToRender()
  );
}
}


export default ItemContainer;
