import React, { Component } from 'react';
import './blog.css';

/* Class that present class components of Blog*/
export class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
           <div className="blog">
               <h1>{this.props.title}</h1>
               <p>{this.props.text}</p>
           </div>
        )
    }
}