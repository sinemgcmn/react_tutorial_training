import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props);

    return (
        <div className="input">
            {/* {props.info.map((data) => (
                <li key={data.id}>
                    {" "}
                    {data.name} {data.age}{" "}
                </li>
            ))} */}
        </div>
    );
};

export default UserList;
