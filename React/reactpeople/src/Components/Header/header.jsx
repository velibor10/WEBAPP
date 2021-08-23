import React, { useState } from "react";
import { refreshIcon, userListIcon } from "../../Data/data";
import { changeIcon, sendUserCardState, sendUserListState } from "../../Services/headerComponentFunctions";
import "./header.css";

// Function for creating HTML elements for rendering

export const Header = ({userListVisibility, stateOfUserList, userCardVisibility, stateOfUserCards}) => {
    
    const [viewIcon, setViewIcon] = useState(userListIcon);
    

    // Function for change state of viewIcon and visibility of userList and userCard

    const clickOnViewIcon = () => {

        changeIcon(viewIcon, setViewIcon);

        sendUserListState(stateOfUserList, userListVisibility);
        sendUserCardState(stateOfUserCards, userCardVisibility);
    }

    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                    <div className="icon">{refreshIcon}</div>
                    <div className="icon" onClick={clickOnViewIcon}>{viewIcon}</div>
                </div>
            </div>
        </header>
    )
}