import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import './edit.css';
import Form from "./form"

class Edit extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){

  }

  render() {
    return (
        <div className="edit">
            <Helmet>
                <title>Edit</title>
            </Helmet>
            <main>
       
            </main>
        </div>
    );
  }
}

export default Edit;
