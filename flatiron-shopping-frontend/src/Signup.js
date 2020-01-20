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
        return console.log("clicked")
        // I am not sure what is supposed to happen when the signup is submitted.
        // It seems like the form information should be posted to the back-end.
    }


    render() {
        return (
            <div>
            <h1 className="shopping-app-h1">Signup</h1>
            <form className="form" onSubmit={this.signupSubmitted}>
                <input type="text" name= "username" value={this.state.username} placeholder="username" onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="text" name= "password" value={this.state.password} placeholder="password" onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="text" name= "email" value={this.state.email} placeholder="e-mail address"onChange={this.enteredLoginCredentials}/>
                <br></br>
                <input type="submit" value="submit" />
        </form>
        </div>

        )
    }
}