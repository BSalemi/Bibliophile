import React from 'react';

export default class SignUp extends React.Component {
    
    state = {
        username: "",
        email: "",
        password: ""
    }

    render(){
        return(
            <div id="signup-form">
                <form>
                    <input type="text" name="email" placeholder="Enter your Email Address" value={this.state.email}/>
                    <br/>
                    <input type="text" name="username" placeholder="Create a Username" value={this.state.username}/>
                    <br/>
                    <input type="text" name="password" placeholder="Create a Password" value={this.state.password}/>
                    <br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }

}