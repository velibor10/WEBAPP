import React from 'react';
import './blog.css';
import PropTypes from 'prop-types';

export const Blog = ({title, text}) => {

    return (
        <div className="blog">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );

}

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}