import React, { useState } from "react";
import { refreshIcon, userCardIcon, userListIcon } from "../../Data/data";
import { changeIcon, refreshUsers, sendUserCardState, sendUserListState } from "../../Services/headerComponentFunctions";
import "./header.css";

// Function for creating HTML elements for rendering

export const Header = ({userListVisibility, stateOfUserList, userCardVisibility, stateOfUserCards, refreshState, setRefreshState}) => {
    
    let userList = sessionStorage.getItem("userListVisibility");
    let icon = null;
    if ( !userList || userList === "block") {
        icon = userListIcon;
    } else {
        icon = userCardIcon;
    }

    const [viewIcon, setViewIcon] = useState(icon);
    

    // Function for change state of viewIcon and visibility of userList and userCard
    const clickOnViewIcon = () => {
       
        changeIcon(viewIcon, setViewIcon);
        sendUserListState(stateOfUserList, userListVisibility);
        sendUserCardState(stateOfUserCards, userCardVisibility);
        let userList = stateOfUserList;
        if(userList === "hide") {
            userList = "block";
        } else {
            userList = "hide";
        }

        sessionStorage.setItem("userListVisibility", userList);
        sessionStorage.setItem("userCardVisibility", stateOfUserCards);
       
    }

    // Function for refresh data after click

    const clickOnRefreshIcon = () => {
        refreshUsers(refreshState, setRefreshState);
    }



    //Render

    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                    <div className="icon" onClick={clickOnRefreshIcon}>{refreshIcon}</div>
                    <div className="icon" onClick={clickOnViewIcon}>{viewIcon}</div>
                </div>
            </div>
        </header>
    )
}