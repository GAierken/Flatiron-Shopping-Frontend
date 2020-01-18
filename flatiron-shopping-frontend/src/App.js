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
  selectedItems: []
}

componentDidMount= () => {
  fetch("http://localhost:3000/items")
  .then(r => r.json())
  .then(itemsArray => {
    this.setState({
      items: itemsArray
    })
  })
}

buttonToAddToCartClicked= (item) => {
  this.setState({
    selectedItems: [...this.state.selectedItems, item]
  })
}

buttonToRemoveFromCart= (item) => {

  let arrayWithItemRemoved= this.state.selectedItems.filter(data => {
    return data !== item
  })


  this.setState({
    selectedItems: arrayWithItemRemoved
  })
}



render() {
  return (
    <div >
      <Router>
          <Nav /> 
          <Switch>
          <Route exact path="/cart" render={(renderProps) => <div className= "main-item-container"> <Cart {...renderProps} selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart}/> </div> } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/" render={(renderProps) => <Homepage {...renderProps} buttonToAddToCartClicked={this.buttonToAddToCartClicked} items={this.state.items}/> }   />
          </Switch>
        </Router>
        </div>
  );
}
}


export default App;
