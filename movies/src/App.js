import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './App.css';
import Home from "./home";
import Add from "./add"

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
          <header className="App__header">
            <Helmet>
              <title>Home</title>
            </Helmet>
            <h2 className="App__header__title">Idonmakeit</h2>
            <div>
              <Link className="App__header__link" to="/add">Add Movie</Link>
              <Link className="App__header__link" to="/">Home</Link>
            </div>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/add/" component={Add} />
          {/* 
          <Route path="/edit/" component={Edit} />
          <Route path="/details/" component={Details} />
          */}
        </div>
      </Router>
    );
  }
}

export default App;
