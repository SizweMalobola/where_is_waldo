import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Puzzle from "./components/Puzzle";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Container>
              <Route exact path="/where_is_waldo" component={Home}></Route>
              <Route path="/puzzle/:id" component={Puzzle}></Route>
              <Route path="/leaderboard/:id" component={Leaderboard}></Route>
            </Container>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
