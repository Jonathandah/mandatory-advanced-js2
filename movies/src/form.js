import React from 'react';

let Form = (props)=>{
    console.log(props)
    return(
        <form onSubmit={props.onSubmit}>
            <p>Title:</p>
            <input type="text" minLength="1" maxLength="40" placeholder="Title" id="title" onChange={props.onChange} value={props.state.title} required></input>
            <br></br>
            <p>Description:</p>
            <br></br>
            <textarea minLength="1" maxLength="300" id="description" onChange={props.onChange} value={props.state.description} style={ {width: "50%" }} rows="10" required></textarea>
            <br></br>
            <p>Director:</p>
            <input type="text" minLength="1" maxLength="40" placeholder="director" id="director" onChange={props.onChange} value={props.state.director} required></input>
            <br></br>
            <p>Rating:</p>
            <p>{props.state.rating}</p>
            <input type="range" min="0" max="5"  id="rating" onChange={props.onChange} value={props.state.rating}></input>
            <br></br>
            <button type="submit" value="submit">Submit</button>
        </form>
    );
}

export default Form;