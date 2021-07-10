//SEAT
class Seat {
    constructor(seatNumber = Math.floor(Math.random() * 101), seatCategory = "e") {
        if (seatCategory !== "b" && seatCategory !== "e") {
            throw new Error("Invalid category input.")
        }
        this.number = seatNumber;
        this.category = seatCategory;
    }
    getData() {
        let result = `${this.number} ${this.category}`;
        return result;
    }
}

// Export module

module.exports = Seat;