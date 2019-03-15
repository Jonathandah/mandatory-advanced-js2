import React, { Component } from 'react';
import axios from 'axios';
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

    onDelete(e){
        console.log(("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + e.target.value));
       axios.delete("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + e.target.value)
       .then((respons)=>{
            console.log(respons);
            for(let movie of this.state.movies){
                if(movie.id === e.target.value){
                    this.setState({
                        movies: this.state.movies.splice(movie),
                    })
                }
            }
       })
    }

    render(){
        if (this.state.movies.length === 0) {
            return <p>Fetching movies...</p>;
        }

        return(
            <div className="home">
                <main className="home__main">
                    <div className="home__main__container">
                        <h2 className="home__main__container__title">{this.state.title}</h2>
                    </div>
                    <div className="home__main__container">
                        <Table movies={this.state.movies} onDelete={this.onDelete}></Table>
                    </div>
                </main>
            </div> 
        );
    }
}

export default Home;