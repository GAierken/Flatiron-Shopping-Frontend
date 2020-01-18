import React from 'react';
import ItemContainer from './ItemContainer';


export default class Homepage extends React.Component{











    render() {
        return (

<div>
<br></br>
        <h1 className="shopping-app-h1">Flatiron Shopping App</h1>
        <br></br>
        <div className= "main-item-container">
      <ItemContainer items={this.props.items} buttonToAddToCartClicked={this.props.buttonToAddToCartClicked}/>
      </div>
    </div>
        )
    }
}