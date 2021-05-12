import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props);

    const lessThan = <h1> this number is less than 0! </h1>;

    return (
        <div className="input">
            {props.info.age < 0 && lessThan}
            {props.info.map((data, index) => (
                <li key={data.id}>
                    {" "}
                    {data.name} {data.age}{" "}
                </li>
            ))}
        </div>
    );
};

export default UserList;
