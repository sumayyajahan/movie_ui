import React from "react";
import styled from "./Library.module.css";

import { getAll, deleteMovie } from "../../service/MovieService";
import { useEffect } from "react";
import { useState } from "react";

import {Link} from 'react-router-dom';

const Library = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    deleteMovie(id)
    .then(response => {
      setMovies(movies.filter(movie=>movie.id!==id))
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <React.Fragment>
     
     <Link to="/form" state={{action:"add"}}><button className="btn btn-light mt-5 btn-sm">Add Movie</button></Link>

      <div className={styled.library}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Movie Director</th>
              <th>Movie Language</th>
              <th>Movie Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={1}>
                  <td>{movie.name}</td>
                  <td>{movie.director}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <button className="btn btn-success m-1 btn-sm">View</button>
                    <Link to="/form" state={{action:"edit", movie:movie}}><button className="btn btn-warning m-1 btn-sm">Edit</button></Link>
                    <button className="btn btn-danger m-1 btn-sm" onClick={()=>deleteHandler(movie.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Library;
