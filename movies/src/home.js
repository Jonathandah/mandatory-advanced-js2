import React, { Component } from 'react';
import axios from 'axios';
import Table from "./table";
import { Helmet } from "react-helmet";
import "./home.css";


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          response: "",  
          movies: "",
          title: "Home",
          error: false,
          findMovie: "",
        }
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies")
        .then((respons)=>{
          console.log(respons);
          this.setState({
            respons: respons,  
            movies: respons.data,})
        })
        .catch((error)=>{
            console.log(error);
            this.setState({
                error: true
            })
        })
    }

    onDelete(e){
        let id = e.target.value
        axios.delete("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id)
        .then((respons)=>{
            console.log(respons);
            let newArray = [...this.state.movies]
            this.setState({
                movies: newArray.filter(movie => id !== movie.id),
            })
            console.log(this.state.movies)
        })   
        .catch((error)=>{
            console.log(error);

            if (error.response && error.response.status === 404) {
                let newArray = [...this.state.movies]
                return this.setState({
                    movies: newArray.filter(movie => id !== movie.id),
                });
            }

            this.setState({
                error: true
            })
        })
    }

    onChange(e){
        this.setState({
           findMovie: e.target.value, 
        })
    }

    render(){
        if (this.state.movies.length === 0) {
            return <p>Fetching movies...</p>;
        } else if(this.state.error === true){
            return <p>Something went wrong....</p>
        }

        console.log(this.state.movies);

        const filteredMovies = this.state.movies.filter(movie =>
                movie.title.toLowerCase().includes(this.state.findMovie.toLowerCase()) ||  
                movie.rating.toString().toLowerCase().includes(this.state.findMovie.toLowerCase()) ||
                movie.director.toLowerCase().includes(this.state.findMovie.toLowerCase())
                );

        return(
            <div className="home">
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main className="home__main">
                    <div className="home__main__container">
                        <h2 className="home__main__container__title">{this.state.title}</h2>
                    </div>
                    <div className="home__main__container">
                        <input type="text" onChange={this.onChange}></input>
                        <Table movies={filteredMovies} onDelete={this.onDelete}></Table>
                    </div>
                </main>
            </div> 
        );
    }
}
export default Home;