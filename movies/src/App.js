import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';
import Home from "./home";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      content: "",
      title: ""
    }
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          {/* 
          <Route path="/add/" component={Add} />
          <Route path="/edit/" component={Edit} />
          <Route path="/details/" component={Details} />
          */}
        </div>
      </Router>
    );
  }
}

export default App;
