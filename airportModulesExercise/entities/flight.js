// Inport module

const Passenger = require("./passenger");


//FLIGHT
class Flight {
    constructor(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPasengers = [];
    }
    addPessanger(passenger) {
        if (!(passenger instanceof Passenger)) {
            throw new Error("Pessanger must be instance of Pessanger constructor");
        }
        this.listOfPasengers.push(passenger);
    }
    getData() {
        let result = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}, ${this.relation}\n\t`;
        result += this.passengers();
        return result;
    }
    passengers() {
        let result = "";
        for (let i = 0; i < this.listOfPasengers.length; i++) {
            result += `${this.listOfPasengers[i].getData()}\n\t`;
        }
        return result;
    }
}

// Export module

module.exports = Flight;