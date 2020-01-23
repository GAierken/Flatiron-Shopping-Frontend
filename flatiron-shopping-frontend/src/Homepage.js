import React from 'react';
import ItemContainer from './ItemContainer';
import SearchBar from './SearchBar';


export default class Homepage extends React.Component{






    render() {
        return (
<div>
<br></br>
{this.props.loggedIn() ?
          <div className="welcome-message">
          <p> Hello, {this.props.username}!</p>
          </div> :
          <br></br>}
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