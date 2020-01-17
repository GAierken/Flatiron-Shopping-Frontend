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
    console.log("clicked")
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




render() {
  return (
    <div>
    {this.state.expandItem ? <Item selectedToExpand={this.state.selectedToExpand} returnToItemList={this.returnToItemList} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/> : this.listTheItems()}
    </div>
  );
}
}


export default ItemContainer;
