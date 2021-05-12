import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props);

    const lessThan = <h1> this number is less than 0! </h1>;
    const emptyInfo = <h1> please give your info</h1>;

    return (
        <div className="input">
            {props.info.map((data, index) => (
                <li key={data.id}>{data.age < 0 && <h1>number</h1>}</li>
            ))}
        </div>
    );
};

export default UserList;
