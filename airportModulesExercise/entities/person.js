

//PERSON
class Person {
    constructor(name, surname) {
        if (!name) {
            throw new Error("Name of person must be defined")
        }
        if (!surname) {
            throw new Error("Surname of person must be defined")
        }
        this.name = name;
        this.surname = surname;
    }
    getData() {
        let result = `${this.name} ${this.surname}`;
        return result;
    }
}

// Export module

module.exports = Person;