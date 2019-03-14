import React, { Component } from 'react';
/*
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Table from "./table";
*/
import "./add.css";
import Form from "./form"

class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            movies: "",
            title: "Add Page"
        }
    }
/*
    onSubmit(){
        axios.post("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies")
        .then((respons)=>{
          console.log(respons);
          this.setState({
            respons: respons,  
            movies: respons.data,})
        })
    }
*/
    render(){
        return(
            <div className="add">
                <main className="add__main">
                    <Form></Form>
                </main>
            </div> 
        );
    }
}

export default Add;