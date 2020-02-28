import React from 'react';

export default class Login extends React.Component{

state= {
    username: "",
    password: "",
    errors: []
}

enteredLoginCredentials = (event) => {
 
    this.setState({
        [event.target.name]: event.target.value
    })
}

loginSubmitted=(event)=>{

    event.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(data => {
        
        if (data.errors){
          
          this.setState({
            errors: data.errors
          })
        }
        else{
          this.props.setToken(data.token, data.id)
        }
          
      })
      this.setState({
        username: "",
        pasword: ""
      })
}

    render() {
      
      
        return(
          <div>
            <br></br>
            {this.state.errors.map(error => <p> {error} </p>)} 
            <br></br>
            {this.props.loggedIn() ? 
            <div className="welcome-message">Welcome back!</div> :
            <div>
                <h1 className="shopping-app-h1">Login</h1>
                <form className="form" onSubmit={this.loginSubmitted}>
                    <input type="text" name= "username" value={this.state.username} placeholder="username" onChange={this.enteredLoginCredentials}/>
                    <br></br>
                    <input type="password" name= "password" value={this.state.password} placeholder="password" onChange={this.enteredLoginCredentials}/>
                    <br></br>
                    <input type="submit" value="submit" />
            </form>
            </div>
              }
            </div>
        )
    }
}