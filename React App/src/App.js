import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchMovie from "./components/search-movie.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Movie Library
          </a>
          <div className="navbar-nav mr-auto"></div>
        </nav>

        <div className="container mt-3">
          <SearchMovie />
        </div>
      </div>
    );
  }
}

export default App;
