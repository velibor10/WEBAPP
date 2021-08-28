import React from 'react';
import './blogBox.css';
import { Blog } from '../blog/blog';
import { blogs } from '../blog/blogData';


export const Blogbox = () => {
    return (
        <section className="blogBox">
            {
                blogs.map((blog, index) => {

                    return (
                    <Blog title={blog.title} text={blog.text} key={index}/>
                    )
                })
            }           
        </section>
    );
};