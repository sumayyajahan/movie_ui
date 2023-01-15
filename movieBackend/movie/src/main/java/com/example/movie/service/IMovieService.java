package com.example.movie.service;

import com.example.movie.models.Movie;

import java.util.List;


public interface IMovieService {
    Movie addMovie(Movie movie);

    List<Movie> getAllMovies();

    Movie getMovieById(int id);

    Movie updateMovieById(int id, Movie movie);

    void deleteMovieById(int id);
}
