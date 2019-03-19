import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Home from "./home";
import Add from "./add";
import Edit from "./edit";
//fixa state som kollar id för länken du klickar på för att komma till edit med rätt film ELLER kör parameter i raouting för att kolla id
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      id: "",
    }
  }

  render() {

    return ( 
      <Router>
        <div className="App">
          <header className="App__header">
            <h2 className="App__header__title">Idonmakeit</h2>
            <div>
              <Link className="App__header__link" to="/add">Add Movie</Link>
              <Link className="App__header__link" to="/">Home</Link>
            </div>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/add/" component={Add} />
          <Route path="/edit/:id" component={Edit} />
          {/* 
          <Route path="/details/" component={Details} />
          */}
        </div>
      </Router>
    );
  }
}

export default App;
