import {movies, genres} from "../entities/movie.js";
import {programs} from "../entities/program.js";
import Movie from "../entities/movie.js";
import Program from "../entities/program.js";

/* Variables */

let genreList = document.querySelector("#genre");
let movieList = document.querySelector("#filmsList")
let createMovieButton = document.querySelector("#createMovieButton");
let movieTitle = document.querySelector("#title");
let movieGenre = document.querySelector("#genre");
let movieLength = document.querySelector("#length");
let createMovieForm = document.querySelector("#createMovieForm");
let programDate = document.querySelector("#date")
let createProgramButton = document.querySelector("#createProgramButton");
let programDropDownList = document.querySelector("#program")
let addMovieButton = document.querySelector("#addMovieButton");
let programDropDownItems = document.getElementsByClassName("programItem");
let movieDropDownList = document.querySelector("#movie");



//FUNCTIONS


(function (genres) {

    for (let i = 0; i < genres.length; i++) {
        let genre = document.createElement("option");
        genre.textContent = genres[i];
        genreList.appendChild(genre);
    }


})(genres);


/* Function for creating movie */


function createMovie() {

    try {

        let movie = new Movie(movieTitle.value, movieGenre.value, parseInt(movieLength.value));

        if (!movieTitle.value) {
            throw new Error("Title of movie must be defined");
        }
        if (movieGenre.value === "-" || "") {
            throw new Error("Genre of movie must be defined");
        }
        if (!parseInt(movieLength.value)) {
            throw new Error("Length of movie must be defined");
        }

        movies.push(movie);
        let movieListElement = document.createElement("li");
        let movieDropDownElement = document.createElement("option");
        movieDropDownElement.setAttribute("class", "movieItem")
        movieDropDownElement.textContent = movieTitle.value;
        movieListElement.textContent = movie.getData();
        movieList.appendChild(movieListElement);
        movieDropDownList.appendChild(movieDropDownElement);

        // Clear text box after creating movie
        movieTitle.value = "";
        movieGenre.value = "";
        movieLength.value = "";

    } catch (error) {
        alert(error.message);
    }

}


/* Function for creating date string */

function createDateString() {

    try {

        let result = "";
        let date = programDate.value.split("-")
        let month = date[1];
        let day = date[2];
        let year = date[0];
        result += month + "/" + day + "/" + year;
        if (month === undefined || day === undefined || year === undefined) {
            throw new Error("Date of program must be selcted!");
        }

        return result;

    } catch (error) {
        alert(error.message);
    }
}


/* Function for creating program */

function createProgram() {

    try {

        let program = new Program(createDateString());
        programs.push(program);

        // Clear Dropdown list
        clearProgramList();
        clearProgramListUl();

        // Insert programs to drowdown list
        for (let i = 0; i < programs.length; i++) {
            let programItem = document.createElement("option");
            let programListItem = document.createElement("li");
            let programsUl = document.querySelector("#programsUl");
            programItem.setAttribute("class", "programItem");
            programItem.textContent = programs[i].getDate();
            programDropDownList.appendChild(programItem);
            programListItem.setAttribute("class", "programList");
            programListItem.textContent = programs[i].getReport();
            programsUl.appendChild(programListItem);
        }
    } catch (error) {
        console.log(error.message);
    }
}

/* Function for clear program list */


function clearProgramList() {
    let programDropDownItems = document.querySelectorAll("#program .programItem")
    for (let i = 0; i < programDropDownItems.length; i++) {
        let programItem = document.querySelector(".programItem");
        let programDropDownList = programItem.parentElement;
        programDropDownList.removeChild(programItem);
    }
}

// Function to clear program list Ul

function clearProgramListUl() {
    let programLiItems = document.querySelectorAll("#programsUl .programList")
    for (let i = 0; i < programLiItems.length; i++) {
        let programItem = document.querySelector(".programList");
        let programListItems = programItem.parentElement;
        programListItems.removeChild(programItem);
    }
}



function addFilmToProgram() {
    try {
        // Select film object
        let movieListTitle = movieDropDownList.value;
        let film = movies.filter(function (item) {
            return item.title === movieListTitle;
        });

        if (film.length < 1) {
            throw new Error("Movie for programe must be selected!");
        }

        let movieObject = film[0];

        //Select program object

        let programListItem = programDropDownList.value;
        let program = programs.filter(function (item) {
            return item.getDate() === programListItem;
        });

        if (program.length < 1) {
            throw new Error("Program must be selected!");
        }

        let programObject = program[0];

        programObject.addMovie(movieObject);

        // Unset value of dropDown Lists

        programDropDownList.value = "-";
        movieDropDownList.value = "-";

        // Unset program list

        clearProgramListUl();
        for (let i = 0; i < programs.length; i++) {
            let programListItem = document.createElement("li");
            programListItem.setAttribute("class", "programList");
            programListItem.textContent = programs[i].getReport();
            programsUl.appendChild(programListItem);
        }
    } catch (error) {
        alert(error.message);
    }
}


// Functions to prevent submit for forms


let form1 = document.getElementById("createMovieForm");
let form2 = document.getElementById("createProgramForm");

function preventSubmit(e) {
    e.preventDefault();
}



//EVENTS

createMovieButton.addEventListener("click", createMovie);
createProgramButton.addEventListener("click", createProgram);
addMovieButton.addEventListener("click", addFilmToProgram);
form1.addEventListener('submit', preventSubmit);
form2.addEventListener('submit', preventSubmit);
