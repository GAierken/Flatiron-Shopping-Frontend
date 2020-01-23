import React from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import Profile from './Profile';


class App extends React.Component {

state={
  items: [],
  selectedItems: [],
  loggedInUserId: null,
  token: null,
  username: "",
  usersOrders: [],
  usersEmail: "",
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
}

setToken = (token, id) => {
  localStorage.token = token;

  localStorage.loggedInUserId = id;
  fetch(`http://localhost:3000/users/${id}`, {

headers: {
  "Authorization": token
}
    })
  .then(r => r.json())
  .then(user => {
    console.log('fetch', user)
    this.setState({
      usersOrders: user.orders,
      username: user.username,
      usersEmail: user.email
      })
    })
  this.setState({
    token: token,
    loggedInUserId: id
    })
  }


logOutClick = () => {
  localStorage.removeItem("loggedInUserId")
  localStorage.removeItem("token")
  this.setState({
    loggedInUserId: null,
    token: null,
    username: "",
    usersEmail: "",
    selectedItems: [],
    usersOrders: []
  })
}

loggedIn=()=>{
  return !!this.state.token
}

buttonToAddToCartClicked= (item) => {
  
  this.setState({
    selectedItems: [...this.state.selectedItems, item]
  })
}

buttonToRemoveFromCart= (item) => {

  const arrayOfItems= this.state.selectedItems.filter(data => {
    return data === item
  })

  arrayOfItems.shift()

  let itemsWithoutArrayOfItems= this.state.selectedItems.filter(data=>{
    return data !==item
  })

  const mergedArray= [...itemsWithoutArrayOfItems, ...arrayOfItems]

  this.setState({
    selectedItems: mergedArray
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

submitOrder=()=> {

  const orderItemsIds= this.state.selectedItems.map(selectedItem=>{
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
    })
  })
  .then(r=> r.json())
  .then(response => {
    return orderItemsIds.map(id=> {
      return fetch("http://localhost:3000/jointables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          item_id: id,
          order_id: response.id
        })
      })
      .then(r=> r.json())
      .then(join => {
        if(join.order.items.length === orderItemsIds.length) {
              this.setState({
                  selectedItems: []
                  })
        }
       
      })
    })

    })
  
    
    
    alert('Purchased!')
  }

  


settingBooleanForSorting= (event) => {

  if (event.target.value === "feeding") {
    this.setState({
      feeding: !this.state.feeding,
      clothing: false,
      travel: false,
      diaper: false,
      toys: false
    })
  }

  if (event.target.value === "clothing") {
    this.setState({
      feeding: false,
      clothing: !this.state.clothing,
      travel: false,
      diaper: false,
      toys: false
    })
  }

  if (event.target.value === "travel") {
    this.setState({
      feeding: false,
      clothing: false,
      travel: !this.state.travel,
      diaper: false,
      toys: false
    })
  }

  if (event.target.value === "diaper") {
    this.setState({
      feeding: false,
      clothing: false,
      travel: false,
      diaper: !this.state.diaper,
      toys: false
    })
  }

  if (event.target.value === "toys") {
    this.setState({
      feeding: false,
      clothing: false,
      travel: false,
      diaper: false,
      toys: !this.state.toys
    })
  }

  if (event.target.value === "all") {
    this.setState({
      items: this.state.items,
      feeding: false,
      clothing: false,
      travel: false,
      diaper: false,
      toys: false
    })
  }
}

renderItems= () => {

  let items= [...this.state.items]
  
    if (this.state.feeding) {
      items=this.state.items.filter(item => {
        return item.category==="feeding"})
    }
  
    if (this.state.clothing) {
      items=this.state.items.filter(item=> {
        return item.category==="clothing"})
    }
  
    if (this.state.travel) {
      items= this.state.items.filter(item => {
        return item.category==="travel"})
    }
  
    if (this.state.diaper) {
      items= this.state.items.filter(item => {
        return item.category==="diaper"})
  }
  
  if (this.state.toys) {
    items= this.state.items.filter(item => {
      return item.category==="toys"})
  }

  return items
}

deleteAccount=()=> {
  fetch(`http://localhost:3000/users/${this.state.loggedInUserId}`, {
    method: "DELETE"})
    .then(r=>r.json())
    .then(data => {
      return this.logOutClick()
    })
    alert('Deleted!')
  }

  updateEmail=(email)=>{
    fetch(`http://localhost:3000/users/${this.state.loggedInUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({

        email: email.usersEmail

      })
    })
    .then(r=>r.json())
    .then(data=>{
      
      this.setState({
        usersEmail: data.email
      })
    })
    alert('Your Email is updated!')
  }


render() {
  console.log('app states', this.state.usersEmail)
  return (
    <div >
      <Router>
          <Nav loggedIn={this.loggedIn} logOutClick={this.logOutClick} /> 
          <Switch>
          <Route exact path="/cart" render={(renderProps) => <div className= "main-item-container"> <Cart {...renderProps} selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart} usersOrders={this.state.usersOrders} expandItem={this.state.expandItem} selectedToExpand={this.state.selectedToExpand} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList} submitOrder={this.submitOrder} loggedIn={this.loggedIn}/> </div> } />
          <Route exact path="/login" render={(renderProps) => <Login {...renderProps} fetchOrderInfo={this.fetchOrderInfo} username={this.state.username} usersEmail={this.state.usersEmail} usersOrders={this.state.usersOrders} setToken={this.setToken} loggedIn={this.loggedIn}/>} />
          <Route exact path="/signup" render={(renderProps) => <Signup {...renderProps} loggedIn={this.loggedIn} setToken={this.setToken}/> } /> 

          <Route exact path="/" render={(renderProps) => <Homepage {...renderProps} loggedIn={this.loggedIn} username={this.state.username} settingBooleanForSorting={this.settingBooleanForSorting} items={this.renderItems()} buttonToAddToCartClicked={this.buttonToAddToCartClicked} itemClickedOn={this.itemClickedOn} returnToItemList={this.returnToItemList} selectedToExpand={this.state.selectedToExpand} expandItem={this.state.expandItem}/> }   />

          <Route exact path="/profile" render={(renderProps) => <Profile {...renderProps} username={this.state.username} usersOrders={this.state.usersOrders} usersEmail={this.state.usersEmail} deleteAccount={this.deleteAccount} loggedIn={this.loggedIn} loggedInUserId={this.state.loggedInUserId} updateEmail={this.updateEmail}/> } />
          </Switch>
        </Router>
        </div>
  );
}
}


export default App;
