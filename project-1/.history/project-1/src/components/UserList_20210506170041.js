import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props.info);

    return (
        <div className="input">
            {props.info.map((data) => (
                <li key={data.id}> {data.name} </li>
            ))}
        </div>
    );
};

export default UserList;
