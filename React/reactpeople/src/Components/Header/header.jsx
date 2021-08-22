import React from "react";
import "./header.css";

// Function for creating HTML elements for rendering

export const Header = () => {
    
    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                </div>
            </div>
        </header>
    )
}