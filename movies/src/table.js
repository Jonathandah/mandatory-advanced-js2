import React from 'react';
import { Link } from 'react-router-dom';
import "./table.css";

let number=0;

function renderTableTD(movie,key){
    console.log(key);
    console.log(movie[key]);
    if(key !== "id" && key !== "description"){
        number++;
        return(
            <td key={number + movie.id}>{movie[key]}</td>
        );
    }
}


function renderTableRows(movie){
    console.log(movie);
    return(
        <tr key={movie.id}>
           {Object.keys(movie).map(content => renderTableTD(movie,content))}
            <td> 
            <Link to="/details/" className="table__links">Details</Link>
            <Link to="/edit/" className="table__links">Edit</Link>
            <Link to="/delete/" className="table__links">Delete</Link>
            </td>
        </tr>
    );
}

let Table = (props) =>{
    console.log(props.movies);
    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map(movie => renderTableRows(movie))}
            </tbody>
        </table>
    );
}


export default Table;
