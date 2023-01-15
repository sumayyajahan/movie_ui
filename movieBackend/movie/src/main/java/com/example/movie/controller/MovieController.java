package com.example.movie.controller;

import com.example.movie.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.movie.service.IMovieService;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private IMovieService movieService;

    @PostMapping("/add")
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie){

        return new ResponseEntity<Movie>(movieService.addMovie(movie), HttpStatus.CREATED);
    }
    @GetMapping("/getAll")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }
    @GetMapping("/get")
    public Movie getMovieById(@RequestParam int id){
        return movieService.getMovieById(id);
    }
    @PutMapping("/update")
    public  Movie updateMovieById(@RequestParam int id, @RequestBody Movie movie){
        return movieService.updateMovieById(id, movie);
    }
    @DeleteMapping("/delete")
    public void deleteMovieById(@RequestParam int id){

        movieService.deleteMovieById(id);
    }

}
