// Import module

const Flight = require("./flight")

// Airport
class Airport {
    constructor() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
    addFlight(flight){
        if (!(flight instanceof Flight)) {
            throw new Error("Flight must be instance of Flight constructor");
        }
        this.listOfFlights.push(flight);
    }
    getData(){
        let result = "";
        result += `Airport: ${this.name}, total passengers: ${this.numberOfPassenger()}\n\n\t${this.flightReport()}`;
        return result;
    }
    flightReport(){
        let result = "";
        for (let i = 0; i < this.listOfFlights.length; i++) {
            result += `${this.listOfFlights[i].getData()}\n\t`;
        }
        return result;
    }
    numberOfPassenger(){
        let result = 0;
        for (let i = 0; i < this.listOfFlights.length; i++) {
            result += this.listOfFlights[i].listOfPasengers.length;
        }
        return result; 
    }
}

// Export module

module.exports = Airport;

