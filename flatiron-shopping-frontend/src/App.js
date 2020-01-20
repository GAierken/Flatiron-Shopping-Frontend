import React from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';


class App extends React.Component {

state={
  items: [],
  selectedItems: [],
  loggedInUserId: null,
  token: null,
  usersOrders: [],
  expandItem: false,
  selectedToExpand: [],
}

componentDidMount= () => {
  fetch("http://localhost:3000/items")
  .then(r => r.json())
  .then(itemsArray => {
    this.setState({
      items: itemsArray,
      token: localStorage.token,
      loggedInUserId: localStorage.loggedInUserId
    })
  })

  if (this.state.loggedInUserId) {
    fetch(`http://localhost:3000/users/${ this.state.loggedInUserId }`, {
      headers: {
        "Authorization": this.state.token
      }
    })
    .then(res => res.json())
    .then(user => console.log(user) || this.setState({
      usersOrders: user.orders
    }))
  }

  // I don't know whether this second fetch will be able to happen here.

}

setToken = (token, loggedInUserId) => {
  localStorage.token = token;
  localStorage.loggedInUserId = loggedInUserId;

  this.setState({
    token: token,
    loggedInUserId: loggedInUserId
  })
}

logOutClick = () => {
  localStorage.removeItem("loggedInUserId")
  localStorage.removeItem("token")
  this.setState({
    loggedInUserId: null,
    token: null
  })

  // I have to figure out how to toggle the "login" in the navigation bar to "logout".
  // I am not sure where to send this function right now.
}

loggedIn(){
  return !!this.state.token

  // I am not using this function yet.
}

buttonToAddToCartClicked= (item) => {

  // item.quantity +=1;
  
  this.setState({
    selectedItems: [...this.state.selectedItems, item]
  })
}

buttonToRemoveFromCart= (item) => {

  // item.quantity-=1;

  // if (item.quantity=== 0)

  // this won't work, because we don't want to have quantity as an attribute of an item

  let arrayWithItemRemoved= this.state.selectedItems.filter(data => {
    return data !== item
  })

  this.setState({
    selectedItems: arrayWithItemRemoved
  })

  // This has some strange behavior when there are multiples of the same item in a cart.
  // There should be an input field for quantity and functions to handle having more than one
  // of a particular item in a cart.
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
      <Router>
          <Nav /> 
          <Switch>
          <Route exact path="/cart" render={(renderProps) => <div className= "main-item-container"> <Cart {...renderProps} selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart} usersOrders={this.state.usersOrders} expandItem={this.state.expandItem} selectedToExpand={this.state.selectedToExpand} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList}/> </div> } />
          <Route exact path="/login" render={(renderProps) => <Login {...renderProps} setToken={this.setToken}/>} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/" render={(renderProps) => <Homepage {...renderProps} buttonToAddToCartClicked={this.buttonToAddToCartClicked} items={this.state.items} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList} selectedToExpand={this.state.selectedToExpand} expandItem={this.state.expandItem}/> }   />
          </Switch>
        </Router>
        </div>
  );
}
}


export default App;
