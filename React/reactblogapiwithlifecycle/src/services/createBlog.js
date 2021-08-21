import { Blog } from "../entities/blog";



/* Variables */
const blogUrl = "https://jsonplaceholder.typicode.com/posts";


/* Function for creating blogs array */
export const createBlogs = () => {
    return fetch(blogUrl)
    .then(request => {
        return request.json();
    })
    .then(blogs => {
        return blogs.map(item => {
            return new Blog(item.id, item.title, item.body);
        })
    })
}