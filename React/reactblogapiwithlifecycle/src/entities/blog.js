/* Class that present blog entity */
export class Blog {
    constructor(id, title, text) {
        try {
            if(!id) {
                throw new Error("Blog must be defined!");
            }
            if(!title) {
                throw new Error("Title must be defined!");
            }
            if(!text) {
                throw new Error("Text must be defined!");
            }
            if(typeof id !== "number") {
                throw new Error("Blog id must be a number!");
            }
            if(typeof title !== "string") {
                throw new Error("Blog title must be a string!");
            }
            if(typeof text !== "string") {
                throw new Error("Blog text must be a string!");
            }
            this.id = id;
            this.title = title;
            this.text = text;
        } catch (error) {
            console.log(error.message);
        }
    }
}