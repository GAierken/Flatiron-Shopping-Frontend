import React from 'react';
import ItemList from './ItemList';
import Item from './Item';


class ItemContainer extends React.Component {

state={
    expandItem: false,
    selectedToExpand: []
  
}

listTheItems= () => {
    return this.props.items.map(item => {
        return <ItemList item={item} itemClickedOn={this.ItemClickedOn} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
    })
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


render() {
  return (
    <div >
    
    { this.state.expandItem ? <Item selectedToExpand={this.state.selectedToExpand} returnToItemList={this.returnToItemList} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/> : this.listTheItems()}
    </div>
  );
}
}


export default ItemContainer;
