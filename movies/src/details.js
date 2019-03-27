import React, { Component } from 'react';
/*

import Table from "./table";
*/
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from 'axios';
import "./details.css";
import Form from "./form"

class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            movie: {},
            error: false,
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id)
        .then((response) => {
          console.log(response);
          this.setState({
            movie: response.data,
          })
        })
        .catch((error) =>{
            console.log(error);
            this.setState({
                error: true,
            })
        })
    }

    render(){
        if(this.state.error){
            <p>Something went wrong...</p>
        }
        return(
            <div className="details">
                <Helmet>
                    <title>Details</title>
                </Helmet>
                <main className="details__main">
                        <Link to={`/edit/${this.state.movie.id}`}>Edit</Link>
                        <h1 className="details__main__title">{this.state.movie.title}</h1>
                        <p className="details__main__director">{this.state.movie.director}</p>
                        <p className="details__main__description">{this.state.movie.description}</p>
                        <p className="details__main__rating">{this.state.movie.rating}</p>
                </main>
            </div> 
        );
    }
}

export default Details;