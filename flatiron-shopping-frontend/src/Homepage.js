import React from 'react';
import ItemContainer from './ItemContainer';
import SearchBar from './SearchBar';


export default class Homepage extends React.Component{








    render() {
        console.log(this.props.items)
        return (
<div>
<br></br>
        <h1 className="shopping-app-h1">Flatiron Shopping App</h1>
        <br></br>
        {this.props.expandItem ?
        <div></div> :
    <SearchBar settingBooleanForSorting={this.props.settingBooleanForSorting}/> }
        
        <br></br>
        <div className= "main-item-container">
      <ItemContainer items={this.props.items} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked} itemClickedOn={this.props.itemClickedOn} returnToItemList={this.props.returnToItemList} expandItem={this.props.expandItem} selectedToExpand={this.props.selectedToExpand}/>
      </div>
    </div>
        )
    }
}