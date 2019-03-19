import React from 'react';
import { Link } from 'react-router-dom';
import "./table.css";


let Table = (props) =>{
    console.log(props.movies);

    function renderTableRows(movie){
        console.log(movie);
        return(
            <tr key={movie.id}>
                <td >{movie.title}</td>
                <td >{movie.director}</td>
                <td >{movie.rating}</td>
                <td > 
                <Link to="/details/" className="table__links">Details</Link>
                <Link to={`/edit/${movie.id}`} className="table__links">Edit</Link>
                <button className="table__deleteButton" onClick={props.onDelete} value={movie.id}>Delete</button>
                </td>
            </tr>
        );
    }


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
