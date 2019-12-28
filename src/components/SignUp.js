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
                    <input type="text" name="email" value={this.state.email}/>
                    <input type="text" name="username" value={this.state.username}/>
                    <input type="text" name="password" value={this.state.password}/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }

}