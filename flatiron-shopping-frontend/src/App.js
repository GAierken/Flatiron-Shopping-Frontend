import React from 'react';
import './App.css';
import Nav from './Nav';
import ItemContainer from './ItemContainer';


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
      <Nav selectedItems={this.state.selectedItems} buttonToRemoveFromCart={this.buttonToRemoveFromCart}/>
      <ItemContainer items={this.state.items} buttonToAddToCartClicked={this.state.buttonToAddToCartClicked}/>
     
    </div>
  );
}
}


export default App;
