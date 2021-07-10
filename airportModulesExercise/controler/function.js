// Import module

const Person = require("../entities/person");
const Seat = require("../entities/seat");
const Passenger = require("../entities/passenger");
const Flight = require("../entities/flight");
const Airport = require("../entities/airport");


function createFlight(relation, date) {
    return new Flight(relation, date);
}
function createPassenger(name, surname, seatNumber, seatCategory) {
    let person = new Person(name, surname);
    let seat = new Seat(seatNumber, seatCategory);
    return new Passenger(person, seat);
}
/*Testing*/
let nikolaTesla = new Airport();
let passenger1 = createPassenger("John", "Snow", 1, "b");
let passenger2 = createPassenger("Cersei", "Lannister", 2, "e");
let passenger3 = createPassenger("Daenerys", "Targaryen", 14);
let passenger4 = createPassenger("Tyrion", "Lannister");
let barcelonaNewYork = createFlight("Barcelona - New York", "03/20/2021");
let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "06/15/2021");
barcelonaNewYork.addPessanger(passenger1);
barcelonaNewYork.addPessanger(passenger2);
barcelonaBelgrade.addPessanger(passenger3);
barcelonaBelgrade.addPessanger(passenger4);
nikolaTesla.addFlight(barcelonaNewYork);
nikolaTesla.addFlight(barcelonaBelgrade);
console.log(nikolaTesla.getData());