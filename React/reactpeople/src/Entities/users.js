import { createFormattedDate, createShorterEmail } from "../Services/publicFunctions";

export class User {

    constructor(id, name, email, dateOfBirth, image){
        try {
            
            if(!id){
                throw new Error("User id must be defined!");
            }
            if(!name){
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
            if(typeof id !== "string"){
                throw new Error("Input for user id must be string!");
            }
            if(typeof name !== "string"){
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

            this.id = id;
            this.name = name;
            this.email = email;
            this.dateOfBirth = new Date(dateOfBirth);
            this.image = image;

        } catch (error) {
            console.log(error.message)
        }
    }

    hideEmail() {
        let emailArray = this.email.split("@");
        createShorterEmail(emailArray);
    }

    showFormatedDate() {
        createFormattedDate(this.dateOfBirth);
    }
}