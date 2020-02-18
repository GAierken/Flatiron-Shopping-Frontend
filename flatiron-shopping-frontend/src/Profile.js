import React from 'react';



export default class Profile extends React.Component{

    state={
        email: ""
    }

    changeEmail=(event)=>{
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNewEmail=(event)=>{
        event.preventDefault();
       this.props.updateEmail(this.state.email)
          this.setState({
              email: ""
          })
    }

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
                <form onSubmit={this.submitNewEmail}>
                    <label className="email-address" htmlFor="email">Change e-mail address: </label>
                    <input type="text" name="email" value={this.state.email} placeholder="enter e-mail address" onChange={this.changeEmail}/>
                    <input type="submit" value="submit" />
                </form >
                <br></br>
                <label className="delete-account"> Delete Account</label> <button onClick={this.props.deleteAccount}>Delete</button>
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