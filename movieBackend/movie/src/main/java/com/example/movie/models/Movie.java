package com.example.movie.models;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    private enum Genre{
        ACTION,
        ROMANCE,
        HORROR

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String language;
    private String director;
    @Enumerated(EnumType.STRING)
    private Genre genre;

    public Movie() {
    }
    public Movie(int id, String name, String language, String director, Genre genre) {
        this.id = id;
        this.name = name;
        this.language = language;
        this.director = director;
        this.genre = genre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", language='" + language + '\'' +
                ", director='" + director + '\'' +
                ", genre=" + genre +
                '}';
    }
}
