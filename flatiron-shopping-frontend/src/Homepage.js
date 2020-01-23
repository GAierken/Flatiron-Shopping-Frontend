import React from 'react';
import ItemContainer from './ItemContainer';
import SearchBar from './SearchBar';


export default class Homepage extends React.Component{


    componentDidMount=()=>{

        if (this.props.loggedIn()){
   fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`, {
     headers: {
       "Authorization": this.props.token}
     })
 .then(r => r.json())
 .then(user => {
   this.setState({
     usersOrders: user.orders,
     username: user.username,
     usersEmail: user.email
     })
   })

 }
   
   }



    render() {
        return (
<div>
<br></br>
{this.props.loggedIn() ?
          <div className="welcome-message">
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