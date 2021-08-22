import React from 'react';
import { birthdayCakeIcon, emailIcon } from '../../Data/data';
import './userCard.css';

export const UserCard = ({ name, email, birthdate, image }) => {

    return (
        <div className="cardBorder">
            <div className="card">
                <div className="userCardImage" style={{backgroundImage: `url(${image})`}}>
                    <p>{name}</p>
                </div>

                <div className="userData">
                <p className="userEmail">{emailIcon}{email}</p>
                <p className="userBirthday">{birthdayCakeIcon}{birthdate}</p>
                </div>
            </div>
        </div>
    );
}