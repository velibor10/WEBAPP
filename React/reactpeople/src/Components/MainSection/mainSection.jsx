import React, {useState, useEffect} from "react";
import { createRandomUsers } from "../../Services/createUserList";
import { UserList } from "../User list/userList";
import "./mainSection.css";

// Function for creating HTML elements for rendering

export const MainSection = () => {

    // State

    let [userData, setUserData] = useState([]);

    // Lifecycle

    useEffect(() => {
        createRandomUsers().then(users => {
            setUserData(users);
        })
    },[])

    // Render

        return (

        <section className="container-flow mainSection">
            <div className="container mainSectionContainer">
                <div className="row mainSectionRow">
                    {
                        userData.map((user, index) => {
                            return (
                                <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}