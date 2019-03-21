import React, { Component } from 'react';
/*
import { Link } from 'react-router-dom';
import Table from "./table";
*/
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from 'axios';
import "./add.css";
import Form from "./form"

class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            movies: "",
            header: "Add Page",
            number:"",
            title: "",
            description:"",
            director: "",
            rating: "",
            finished: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    onChange(e){
        console.log(e.target.value);
        console.log(e.target.id);
        let id = e.target.id; 
        if(id === "title"){
            this.setState({title: e.target.value})
            console.log(this.state)
        }else if(id === "description"){
            this.setState({description: e.target.value})
            console.log(this.state)
        }else if(id === "director"){
            this.setState({director: e.target.value})
            console.log(this.state)
        }else if(id === "rating"){
            this.setState({rating: e.target.value})
            console.log(this.state)
        }
    }
    onSubmit(e){
        e.preventDefault();
        let obj = {};

        obj.title = this.state.title 
        obj.description = this.state.description
        obj.director = this.state.director
        obj.rating = this.state.rating
        console.log(obj)
        let stringified = JSON.stringify(obj);
        console.log(stringified);
        axios.post("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/", obj)
        .then((respons)=>{
            console.log(respons);
            this.setState({
                finished: true,
            })
        })
    }



    render(){
        if(this.state.finished){
            return <Redirect to="/"></Redirect>
        }
        return(
            <div className="add">
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <main className="add__main">
                    <Form onChange={this.onChange} state={this.state} onSubmit={this.onSubmit} ></Form>
                </main>
            </div> 
        );
    }
}

export default Add;