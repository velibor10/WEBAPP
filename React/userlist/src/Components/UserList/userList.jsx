import React from "react";
import "./userList.css";

export const UserList = ({user}) => {
    
    let date = new Date(user.dob.date);

    return (

        <section className='user'>

            <div className='logo'>

                <img className='avatar' src={user.picture.large} alt='...alternative'></img>

            </div>

            <div className='data'>

                <p className='paragraphTwo'>name: {user.name.first} {user.name.last}</p>

                <p className='paragraphTwo'>email: {user.email}</p>

                <p className='paragraphTwo'>date of birth: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}.</p>

            </div>

        </section>
    )
}