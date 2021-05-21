import React, { Component } from "react";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwyBWf6v40JEJiW82pgR97Xwjcc1VTbds",
  authDomain: "tagging-app-3fcd3.firebaseapp.com",
  databaseURL: "https://tagging-app-3fcd3-default-rtdb.firebaseio.com",
  projectId: "tagging-app-3fcd3",
  storageBucket: "tagging-app-3fcd3.appspot.com",
  messagingSenderId: "415473464590",
  appId: "1:415473464590:web:74699915b2e1a7a188535f",
  measurementId: "G-Q8PJEFKZ97",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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
