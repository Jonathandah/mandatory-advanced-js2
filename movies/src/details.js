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
        this.source = axios.CancelToken.source();
        let id = this.props.match.params.id;

        console.log(id);
        axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id, {cancelToken: this.source.token})
        .then((response) => {
          console.log(response);
          this.setState({
            movie: response.data,
          })
        })
        .catch((error) =>{
            if(axios.isCancel(error)){
                return console.log("request canceled", error.message);
            }
            console.log(error);
            this.setState({
              error: true,
            })
        })
    }

    componentWillUnmount(){
        this.source.cancel("Operation canceled");
      }

    render(){
        if(this.state.error){
           return <p>Something went wrong...</p>
        }
        return(
            <div className="details">
                <Helmet>
                    <title>Details</title>
                </Helmet>
                <main className="details__main">
                        <h1>Details</h1>
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