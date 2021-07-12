export let movies = [];
export let genres = ["Action", "Drama", "Comedy", "Fantasy", "History", "Documentary", "Horror", "Science Fiction"];

class Movie {

    constructor(title, genre, length) {

        if (!title) {
            throw new Error("Title of movie must be defined.");
        }

        if (!genre) {
            throw new Error("Genre of movie must be defined.");
        }

        if (!length) {
            throw new Error("Length of movie must be defined.");
        }

        if (typeof title !== "string") {
            throw new Error("Input for movie title must be a string.");
        }

        if (typeof genre !== "string") {
            throw new Error("Input for movie genre must be a string.");
        }

        if (typeof length !== "number") {
            throw new Error("Input for movie title must be a number.");
        }

        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    getData() {
        let result = "";
        result += this.title + ", " + this.length + ", " + this.genre.slice(0, 1).toUpperCase() + this.genre.slice(this.genre.length - 1).toUpperCase();
        return result;
    }
};

export default Movie;



