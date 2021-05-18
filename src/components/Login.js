import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          <h1>login with your google account to proceed</h1>
          <button
            onClick={() => {
              this.clickHandler();
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
