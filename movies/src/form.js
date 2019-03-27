import React from 'react';

let Form = (props)=>{
    console.log(props)
    return(
        <form onSubmit={props.onSubmit}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <input type="text" minLength="1" maxLength="40" placeholder="Title" id="title" onChange={props.onChange} value={props.state.title} required></input>
            <br></br>
            <p>Description:</p>
            <br></br>
            <textarea minLength="1" maxLength="300" id="description" onChange={props.onChange} value={props.state.description} required></textarea>
            <br></br>
            <input type="text" minLength="1" maxLength="40" placeholder="director" id="director" onChange={props.onChange} value={props.state.director} required></input>
            <br></br>
            <input type="range" min="0" max="5"  id="rating" onChange={props.onChange} value={props.state.rating}></input>
            <br></br>
            <button type="submit" value="submit">Submit</button>
        </form>
    );
}

export default Form;