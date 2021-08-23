import { createFormattedDate, createShorterEmail } from "../Services/publicFunctions";

export class User {

    constructor(gender, name, surname, email, dateOfBirth, image){
        try {
            
            if(!gender){
                throw new Error("User id must be defined!");
            }
            if(!name){
                throw new Error("User name must be defined!");
            }
            if(!surname){
                throw new Error("User name must be defined!");
            }
            if(!email){
                throw new Error("User email must be defined!");
            }
            if(!dateOfBirth){
                throw new Error("User dateOfBirth must be defined!");
            }
            if(!image){
                throw new Error("User image must be defined!");
            }
            if(typeof gender !== "string"){
                throw new Error("Input for user id must be string!");
            }
            if(typeof name !== "string"){
                throw new Error("Input for user name must be string!");
            }
            if(typeof surname !== "string"){
                throw new Error("Input for user name must be string!");
            }
            if(typeof email !== "string"){
                throw new Error("Input for user email must be string!");
            }
            if(typeof dateOfBirth !== "string"){
                throw new Error("Input for user dateOfBirth must be string!");
            }
            if(typeof image !== "string"){
                throw new Error("Input for user image must be string!");
            }

            this.gender = gender;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.dateOfBirth = new Date(dateOfBirth);
            this.image = image;

        } catch (error) {
            console.log(error.message)
        }
    }

    hideEmail() {
        let emailArray = this.email.split("@");
        return createShorterEmail(emailArray);
    }

    showFormatedDate() {
        return createFormattedDate(this.dateOfBirth);
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}