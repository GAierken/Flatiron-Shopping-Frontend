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
  feeding: false,
  clothing: false,
  travel: false,
  diaper: false,
  toys: false
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

  // if (this.state.loggedInUserId) {
  //   fetch(`http://localhost:3000/users/${ this.state.loggedInUserId }`, {
  //     headers: {
  //       "Authorization": this.state.token
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(user => this.setState({
  //     usersOrders: user.orders
  //   }))
  // }
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
}

loggedIn=()=>{
  return !!this.state.token
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

submitOrder=()=>{

  const orderItemsIds= this.state.selectedItems.filter(selectedItem=>{
    return selectedItem.id
  })

  fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      user_id: this.state.loggedInUserId,
      item_id: [...orderItemsIds]
    })
  })
  .then(r=> r.json())
  .then(response => {
    this.setState({
      selectedItems: []
    })
  })
}


render() {
  console.log(this.state.token)
  return (
    <div >
      <Router>
          <Nav loggedIn={this.loggedIn} logOutClick={this.logOutClick}/> 
          <Switch>
          <Route exact path="/cart" render={(renderProps) => <div className= "main-item-container"> <Cart {...renderProps} selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart} usersOrders={this.state.usersOrders} expandItem={this.state.expandItem} selectedToExpand={this.state.selectedToExpand} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList} submitOrder={this.submitOrder}/> </div> } />
          <Route exact path="/login" render={(renderProps) => <Login {...renderProps} setToken={this.setToken} loggedIn={this.loggedIn}/>} />
          <Route exact path="/signup" render={(renderProps) => <Signup {...renderProps} setToken={this.setToken}/> } /> 
          <Route exact path="/" render={(renderProps) => <Homepage {...renderProps} buttonToAddToCartClicked={this.buttonToAddToCartClicked} items={this.state.items} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList} selectedToExpand={this.state.selectedToExpand} expandItem={this.state.expandItem}/> }   />
          </Switch>
        </Router>
        </div>
  );
}
}


export default App;
