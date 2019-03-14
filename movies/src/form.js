import React from 'react';
let Form = (props)=>{
    return(
        <form>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <input type="text" minLength="1" maxLength="40" placeholder="Title" required></input>
            <br></br>
            <p>Description:</p>
            <br></br>
            <textarea minLength="1" maxLength="300" required></textarea>
            <br></br>
            <input type="text" minLength="1" maxLength="40" placeholder="Director" required></input>
            <br></br>
            <input type="range" min="0" max="5"></input>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;