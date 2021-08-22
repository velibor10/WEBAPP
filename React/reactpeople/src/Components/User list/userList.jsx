import React from 'react';
import { birthdayCakeIcon, emailIcon } from '../../Data/data';
import './userList.css';


/*Function for create HTML elements for rendering*/
export const UserList = ({name, email, birthdate, image}) => {
    
    return(
        <div className="userListBox">

            <div className="userImage">
                <img src={image} alt="img..." />
            </div>

            <div className="userData">
                <p className="userName">{name}</p>
                <p className="userEmail">{emailIcon}{email}</p>
                <p className="userBirthday">{birthdayCakeIcon}{birthdate}</p>
            </div>

        </div>
    );
}