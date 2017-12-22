import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Saved from "./components/Saved";
import GoogleLogin from "react-google-login";

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      text: "Sign In",
      userId: "",
      isLoggedIn: false,
      userInfo: []
    }
  }

  responseGoogle = response => {
    const profile = response.profileObj;
    const id = response.googleId;

    if (profile && id) {    
      this.setState({
        text: "Switch User",
        userId: id,
        isLoggedIn: true,
        userInfo: profile
      });
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let clientId = process.env.clientId;
    let create = null;
    let saved = null;

    if (isLoggedIn) {
      create = <Create
        userId={this.state.userId}
      />;
      saved = <Saved 
        userId={this.state.userId}
        userInfo={this.state.userInfo}
      />;
    } else {
      create = null;
      saved = null;
    }

    return (
      <div className="container-fluid">
        <div className="jumbotron text-center">
          <h1 className="display-3">
            Task Manager
          </h1>
          <GoogleLogin
            clientId={clientId}
            buttonText={this.state.text}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
        {create}
        {saved}
      </div>
    )
  }
}

export default App;
