import React, { useState, useEffect } from "react";
import { createRandomUsers } from "../../Services/createUserList";
import { UserCard } from "../User card/userCard";
import { UserList } from "../User list/userList";
import "./mainSection.css";


// Function for creating HTML elements for rendering

export const MainSection = ({ visibilityOfUserList, visibilityOfUserCard, refreshStatus }) => {

    // STATE

    let [userData, setUserData] = useState([]);

    // LIFECYCLE

    useEffect(() => {

        createRandomUsers().then(users => {
            setUserData(users);
        })  

    }, [refreshStatus])

    // RENDER

    return (

        <section className="container-flow mainSection">
            <div className="container mainSectionContainer">
                <div className="row mainSectionRow">
                    {
                        <div className={`userList ${visibilityOfUserList}`}>
                            {
                                userData.map((user, index) => {
                                    return (
                                        <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} key={index} />
                                    )
                                })
                            }
                        </div>}

                    <div className={`userCards ${visibilityOfUserCard}`}>
                        {
                            userData.map((user, index) => {
                                return (
                                    <UserCard name={user.name} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} key={index} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}