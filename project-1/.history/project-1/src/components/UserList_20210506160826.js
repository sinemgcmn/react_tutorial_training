import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props);

    return (
        <div className="input">
            <li className="expenses-list">
                {props.info.map((data) => (
                    
                        {data.id},
                     {data.name}
                   
                ))}
            </li>
        </div>
    );
};

export default UserList;
