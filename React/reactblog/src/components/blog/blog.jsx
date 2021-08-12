import React from 'react';
import './blog.css';
import { blogs } from './blogData';

export const Blog = () => {
       
    let blog = blogs.map(item => {
        return (
            <div className="blog">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        );
    });

    return blog;
}