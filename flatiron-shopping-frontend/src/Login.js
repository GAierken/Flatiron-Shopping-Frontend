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

    console.log("clicked");

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password_digets: this.state.password
      })
    }).then(res => res.json())
      .then(data => {
        if (data.errors)
          this.setState({
            errors: data.errors
          })
        else
          this.props.setToken(data.token, data.user_id)
      })
      this.setState({
        username: "",
        password: ""

      })
}


    render() {
        return(
          <div>
            <br></br>
            {this.state.errors.map(error => <p> {error} </p>)} 
            <br></br>
          {this.props.loggedIn() ? <h3 className="shopping-app-h3"> "You are logged in! Go to the Home Page to go shopping." </h3> : 
            <div>
                <h1 className="shopping-app-h1">Login</h1>
                <form className="form" onSubmit={this.loginSubmitted}>
                    <input type="text" name= "username" value={this.state.username} placeholder="username" onChange={this.enteredLoginCredentials}/>
                    <br></br>
                    <input type="text" name= "password" value={this.state.password} placeholder="password" onChange={this.enteredLoginCredentials}/>
                    <br></br>
                    <input type="submit" value="submit" />
            </form>
            </div>
          }
            </div>
        )
    }
}