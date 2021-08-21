import React, { Component } from 'react';
import './header.css';


/* Class that present class components of Header*/
export class Header extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <header>
                <p>My React Blog</p>
            </header>
        )
    }
}