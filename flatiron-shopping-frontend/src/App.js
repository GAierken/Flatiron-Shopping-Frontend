import React from 'react';
import './App.css';
import Nav from './Nav';
import ItemContainer from './ItemContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';


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
  console.log(this.state.selectedItems)
  return (
    <div >
      <Router>
          <Nav /> 
          <Switch>
          <Route exact path="/cart" render={(renderProps) => <Cart {...renderProps} selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart}/>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />    
          </Switch>
        </Router>
        <h1>Flatiron Shopping App</h1>
        <br></br>
        <div className= "item-container">
      <ItemContainer items={this.state.items} buttonToAddToCartClicked={this.buttonToAddToCartClicked}/>
     </div>
    </div>
  );
}
}


export default App;
