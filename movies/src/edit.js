import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    console.log(id);
    axios.get("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/" + id)
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
  }
  onChange(e){
    //this.setState()
  }

  onSubmit(){

  }

  render() {
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
