import React from "react";
import "./searchBar.css";

import { searchIcon } from "../../Data/data"

export const SearchBar = () => {

    return (
        <div className="searchBox">

            <div className="searchIcon">{searchIcon} </div>

            <div className="searchElement">

                <input className="searchInput" autoComplete="off" type="text" placeholder="Search users" />

            </div>

        </div>
    )
}