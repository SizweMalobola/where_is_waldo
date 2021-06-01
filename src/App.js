import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Puzzle from "./components/Puzzle";
import { database } from "./firebase";

console.log(database);
// const dbRefObject = database.ref().child("object");

// // Sync object changes
// dbRefObject.on("value", (snap) => console.log(snap.val()));
// // export default app;
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/puzzle/:id" component={Puzzle}></Route>
            <Route path="/leaderboard/:id" component={Leaderboard}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
