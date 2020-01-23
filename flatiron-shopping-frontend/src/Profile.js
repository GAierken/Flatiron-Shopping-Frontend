import React from 'react';



export default class Profile extends React.Component{

    displayTheOrders=()=> {
        return this.props.usersOrders.map(order=> {
         return order.items.map(item=> {
            return <div className="order-history">
                <ul>
                <li>Purchased: {item.name}</li>
                <li>Price: ${item.price}</li>
                </ul>
                </div>
            })  
        }) 
    }

    render(){
        return( 
        <div>
            {this.props.loggedIn() ? 
            <div>
                <div className="welcome-message">
                <p> Hello, {this.props.username}!</p>
                </div>
                <div>
                <br></br>
                <h4>User Information</h4>
                <p className="profile-username">Username: {this.props.username}</p>
                <p className="email-address">E-mail address: {this.props.usersEmail}</p>
                <p className="delete-account">Delete Account</p>
                <h4>Order History</h4>
                {this.displayTheOrders()}
                </div> 
            </div>
            :
            <div>
            <br></br>
            <p className="welcome-message">Sign up or log in to see your profile</p>
            </div>}
        </div>
        )
    }
}