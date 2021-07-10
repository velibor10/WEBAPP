// Import module

const Person = require("./person");
const Seat = require("./seat");

// PASSENGER
class Passenger {
    constructor(person, seat) {
        if (!person) {
            throw new Error("Person must be defined.");
        }
        if (!seat) {
            throw new Error("Seat must be defined.");
        }
        if (!(person instanceof Person)) {
            throw new Error("Person must be instance of Person constructor");
        }
        if (!(seat instanceof Seat)) {
            throw new Error("Seat must be instance of Seat constructor");
        }
        this.person = person;
        this.seat = seat;
    }
    getData() {
        let result = `${this.seat.getData()}, ${this.person.getData()}`;
        return result;
    }
}

// Export module

module.exports = Passenger;