import React from "react";
import { hideEmail } from "../../Controlers/hideEmail";
import "./userCards.css";



export const UserCard = ({ user }) => {

    let date = new Date(user.dob.date);

    let email = hideEmail(user.email);

    return (

        <div className="cardBorder col-3">

            <div className="cards">

                <div className="photo" style={{backgroundImage:`url(${user.picture.large})`}}>

                    <p className="nick">{user.name.first}</p>

                </div>

                <div className="data2">

                    <p className="userData">Email: {email} </p>

                    <p className="userData">Date of birth: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}.</p>

                </div>

            </div>

        </div>

    )
}