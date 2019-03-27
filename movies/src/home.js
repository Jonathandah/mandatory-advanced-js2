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
            this.setState({
                error: true
            })
        })
    }

    onChange(e){
        this.setState({
           findMovie: e.target.value, 
        })
        /*
        console.log(e.target.value);
        //kör någon sorts filter och en include på varje film för att se om e.target stämmer överens med filmens värden
        //this.state.movies.filter(movie => (movie))
        console.log(this.state.movies);
        let array = [...this.state.movies];
        console.log(array);
        this.setState({
            movies:  array.filter(movie => e.target.value === movie.title),
        })
        console.log(this.state.movies);
*/
let array = [...this.state.movies];
const filteredMovies = array.filter(movie => movie.title.includes(this.state.findMovie));
 this.setState({
     movies: filteredMovies,
 })
 console.log(this.state.movies);
    }

    render(){
        if (this.state.movies.length === 0) {
            return <p>Fetching movies...</p>;
        } else if(this.state.error === true){
            return <p>Something went wrong....</p>
        }

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
                        <Table movies={this.state.movies} onDelete={this.onDelete}></Table>
                    </div>
                </main>
            </div> 
        );
    }
}
export default Home;