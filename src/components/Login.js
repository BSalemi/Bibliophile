import React from 'react';

export default class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    render(){
        return(
            <div id="login-form">
                <form>
                    <input type="text" name="username" placeholder="Enter your Username" value={this.state.username}/>
                    <input type="text" name="password" placeholder="Enter your Password" value={this.state.password}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        ) 
    }
}