import React from 'react';



export default class Profile extends React.Component{

    state={
        username: "",
        usersOrders: [],
        usersEmail: "",
    }

    componentDidMount=()=>{

         if (this.props.loggedIn()){
    fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`, {
      headers: {
        "Authorization": this.props.token}
      })
  .then(r => r.json())
  .then(user => {
      console.log(user)
    this.setState({
      usersOrders: user.orders,
      username: user.username,
      usersEmail: user.email
      })
    })
  }
    }

    changeEmail=(event)=>{
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNewEmail=(event)=>{
        event.preventDefault();
        this.setState({
            usersEmail: this.state.email
        })
        }
    

    displayTheOrders=()=> {
       return this.props.loggedIn() ? 
         this.state.usersOrders.map(order=> {
         return order.items.map(item=> {
            return <div className="order-history">
                <ul>
                <li>Purchased: {item.name}</li>
                <li>Price: ${item.price}</li>
                </ul>
                </div>
            }) 
            }) : <div></div>
    }

    render(){
        console.log('profile props', this.props)
        return( 
        <div>
            {this.props.loggedIn() ? 
            <div>
                <div className="welcome-message">
                <p> Hello, {this.state.username}!</p>
                </div>
                <div>
                <br></br>
                <h4>User Information</h4>
                <p className="profile-username">Username: {this.state.username}</p>
                <p className="email-address">E-mail address: {this.state.usersEmail}</p>
                <form onSubmit={this.submitNewEmail}>
                    <label className="email-address" htmlFor="email">Change e-mail address: </label>
                    <input type="text" name="usersEmail" value={this.state.email} placeholder="enter e-mail address" onChange={this.changeEmail}/>
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