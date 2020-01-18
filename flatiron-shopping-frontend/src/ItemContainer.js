import React from 'react';
import ItemList from './ItemList';
import Item from './Item';


class ItemContainer extends React.Component {

state={
    expandItem: false,
    selectedToExpand: []
}

itemClickedOn= (item) => {
    this.setState({
        expandItem: !this.state.expandItem,
        selectedToExpand: item
    })
}

returnToItemList= () => {
    this.setState({
        expandItem: !this.state.expandItem,
        selectedToExpand: []
    })
}

listTheItems= () => {
    return this.props.items.map(item => {
        return <ItemList item={item} itemClickedOn={this.itemClickedOn} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
   
    })
}

giveExpandedViewofItem= () => {
    return <div>
        <Item selectedToExpand={this.state.selectedToExpand} 
        returnToItemList={this.returnToItemList} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
        <button className="item-display-button" onClick={()=> {this.props.buttonToAddToCartClicked(this.state.selectedToExpand)}}>
        Add to Cart</button>
        <button className="item-display-button" onClick={this.returnToItemList}>Return to Inventory</button>
        </div>
}

chooseWhichToRender= () => {
    return this.state.expandItem ? this.giveExpandedViewofItem() : this.listTheItems()

}

render() {
  return ( 
      this.chooseWhichToRender()
  );
}
}


export default ItemContainer;
