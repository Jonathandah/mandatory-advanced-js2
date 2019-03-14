import React from 'react';
import { Link } from 'react-router-dom';
import "./table.css";



let Table = (props) =>{
    console.log(props.movies);

    function renderTableRows(movie){
        console.log(movie);
        return(
            <tr key={movie.id}>
                <td key={"1" + movie.id}>{movie.title}</td>
                <td key={"2" + movie.id}>{movie.director}</td>
                <td key={"3" + movie.id}>{movie.rating}</td>
                <td key={"4" + movie.id}> 
                <Link to="/details/" className="table__links">Details</Link>
                <Link to="/edit/" className="table__links">Edit</Link>
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
