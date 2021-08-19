import React from "react";
import { UserList } from "../UserList/userList";
import './cardBox.css';
import { userData } from "../UserList/users";
import { useState } from "react";
import { UserCard } from "../UserCards/userCards";






export const CardBox = () => {
    userData.length = 20;
    const users = userData;

    const [visibility, setVisibility] = useState(true);

    const onSwitch = () => {
        setVisibility(!visibility);
    }

    const visibilityUserList = (visibility) ? 'show' : 'hide';

    const visibilityUserCards = (visibility) ? 'hide' : 'show;';

    return (
        <section className='container cardBox'>
            <div className="form-check form-switch container butt switcher">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={onSwitch}></input>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Change style for displaying list of users(list/cards)</label>
            </div>

            <div className={`userList ${visibilityUserList}`}>

                {users.map((item, index) => {

                    return (
                        <UserList user={item} key={index} />
                    );

                })}

            </div>

            <div className={`userCards container ${visibilityUserCards}`}>

                <div className="row">

                    {users.map((item, index) => {

                        return (

                            <UserCard user={item} key={index} email={item.email} />

                        );

                    })}

                </div>

            </div>

        </section>

    )
}