import React from 'react';


export default class Signup extends React.Component{

    state= {
        username: "",
        password: "",
        email: "",
        errors: []
    }
    
    enteredLoginCredentials = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signupSubmitted=(event)=> {
        event.preventDefault();
        console.log("submitted")
     fetch('http://localhost:3000/users', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
         }, 
     body: JSON.stringify({
         username: this.state.username,
         password: this.state.password,
         email: this.state.email,

         })
     })
     .then(r => r.json())
     .then(data => {
         console.log(data)
         if (data.errors)
           this.setState({
             errors: data.errors
           })
         else
           this.props.setToken(data.token, data.user_id)
       })
       
       this.setState({
           username: "",
           password: "",
           email: ""
       })
    }

    render() {
        return (
            <div>
                <br></br>
                {this.state.errors.map(error => <p> {error} </p>)} 
                <br></br>
            <h1 className="shopping-app-h1">Signup</h1>
            <form className="form" onSubmit={this.signupSubmitted}>
                <input type="text" name= "username" value={this.state.username} placeholder="username" onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="password" name= "password" value={this.state.password} placeholder="password" onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="text" name= "email" value={this.state.email} placeholder="e-mail address"onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="submit" value="submit" />
        </form>
        </div>
        )
    }
}