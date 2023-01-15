import React from "react";
import { useState } from "react";

import styled from "./MovieForm.module.css";

import { addMovie, updateMovie } from "../../service/MovieService";
import { useNavigate , useLocation  } from 'react-router-dom';
import { useEffect } from "react";

const MovieForm = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const{state} = location;
    console.log(location);

    console.log(state)

    const[movie, setMovie] = useState({name:"", director:"", language:"", genre:""})

    useEffect(()=>{
      
      if(state.action==="edit"){
         setMovie(state.movie)
      }

    },[])
    
    const onChangeHandler = (e) => {
        console.log(e);
        setMovie({...movie, [e.target.name]: e.target.value});
       
    }
    const submitHandler = (e) => {

        e.preventDefault();

       if(state.action === "add"){

        addMovie(movie)
        .then(response=>{
            console.log(response);
            navigate("/library");
        })
        .catch(err=>{
            console.log(err);
        })
      }

      if(state.action === "edit"){

        updateMovie(movie, state.movie.id)
        .then(response=>{
            console.log(response);
            navigate("/library");
        })
        .catch(err=>{
            console.log(err);
        })
      }
    }

  return (
    <React.Fragment>
    <div className={styled.movieForm}>
        <div className="btn btn-dark mt-2 pt-2 pb-2">{state.action==="edit"?"Edit Movie":"Add Movie"}</div>
      <form className="mb-2">
        <div class="form-group">
          <label for="name">Enter Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            name="name" onChange={onChangeHandler} value={movie.name}/>
        </div>
        <div class="form-group">
          <label for="director">Enter Director</label>
          <input
            type="text"
            class="form-control"
            id="director"
            placeholder="Enter Director" onChange={onChangeHandler}
            name="director" value={movie.director}
          />
        </div>
        <div class="form-group">
          <label for="language">Enter genreuage</label>
          <input
            type="text"
            class="form-control"
            id="language"
            placeholder="Enter Language" onChange={onChangeHandler}
            name="language" value={movie.language}
          />
        </div>
        <div class="form-group">
          <label for="genre">Genre</label>
          <input
            type="text"
            class="form-control"
            id="genre"
            placeholder="Enter Genre" onChange={onChangeHandler}
            name="genre" value={movie.genre}
          />
        </div>
        
        
        <button type="submit" class="btn btn-primary" onClick={submitHandler}>
          {state.action==="edit"?"Update Movie":"Add Movie"}
        </button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default MovieForm;
