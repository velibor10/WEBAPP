import Movie from "../entities/movie.js";

export let programs = [];

/* Class Program */

class Program {
    constructor(date) {

        if (!date) {
            throw new Error("Date of program must be defined");
        }

        this.date = new Date(date);
        this.listOfMovies = [];
    }

    addMovie(movie) {

        if (!(movie instanceof Movie)) {
            throw new Error("Movie must be from class Movie.");
        }

        this.listOfMovies.push(movie);
    }

    getDate() {
        let result = "";
        result += this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ".";
        return result;
    }

    filmsLength() {
        let length = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
            length += this.listOfMovies[i].length;
        }
        return length;
    }

    getReport() {
        let result = "";
        result += this.getDate() + " " + this.listOfMovies.length + " movies, duration: " + this.filmsLength() + " min.";
        return result;
    }

};

export default Program;

