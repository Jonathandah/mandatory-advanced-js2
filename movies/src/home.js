import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Table from "./table";
import "./home.css";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          response: "",  
          movies: "",
          title: "Home"
        }
    }

    componentDidMount(){
        axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies")
        .then((respons)=>{
          console.log(respons);
          this.setState({
            respons: respons,  
            movies: respons.data,})
        })
    }

    render(){
        if (this.state.movies.length === 0) {
            return <p>Fetching movies...</p>;
        }

        return(
            <div className="home">
                <header className="home__header">
                    <Helmet>
                        <title>Home</title>
                    </Helmet>
                    <h2 className="home__header__title">Idonmakeit</h2>
                    <Link className="home__header__link" to="/">Home</Link>
                </header>
                <main className="home__main">
                    <div className="home__main__container">
                        <h2 className="home__main__container__title">{this.state.title}</h2>
                    </div>
                    <div className="home__main__container">
                        <Table movies={this.state.movies}></Table>
                    </div>
                </main>
            </div> 
        );
    }
}

export default Home;