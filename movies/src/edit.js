import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './edit.css';
import Form from "./form"

class Edit extends Component {
  constructor(props){
    super(props);
    this.state={
      movie: {},
      editPage: false,
      title: "",
      description: "",
      director: "",
      rating: 0,
      finished: false,
      error: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.source = axios.CancelToken.source();
    let id = this.props.match.params.id;
    console.log(id);
    axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id, {cancelToken: this.source.token})
    .then((response) => {
      console.log(response);
      this.setState({
        movie: response,
        editPage: true,
        title: response.data.title,
        description: response.data.description,
        director: response.data.director,
        rating: response.data.rating,
      })
    })
    .catch((error) => {
      if(axios.isCancel(error)){
        console.log("request canceled", error.message);
      }
      /*
      this.setState({
        error: true,
      })
      */
    })
  }
  componentWillUnmount(){
    this.source.cancel("Operation canceled");
  }
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
  let id = this.props.match.params.id;
  console.log(id);
  let obj = {};

  obj.title = this.state.title 
  obj.description = this.state.description
  obj.director = this.state.director
  obj.rating = this.state.rating
  console.log(obj)
  let stringified = JSON.stringify(obj);
  console.log(stringified);
  axios.put("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id, obj, {headers: {"Content-Type": "application/json"}})
  .then((respons)=>{
      console.log(respons);
      this.setState({
        finished: true,
      })
  })
  .catch((error)=>{
    console.log(error);
  })
}

  render() {
    if(this.state.finished){
      return <Redirect to="/"></Redirect>
    }
    else if(this.state.error){
      return <p>Something went wrong....</p>
    }
    
    return (
        <div className="edit">
            <Helmet>
                <title>Edit</title>
            </Helmet>
            <main>
              <Form movie={this.state.movie} editPage={this.state.editPage} onChange={this.onChange} state={this.state} onSubmit={this.onSubmit}></Form>
            </main>
        </div>
    );
  }
}

export default Edit;
