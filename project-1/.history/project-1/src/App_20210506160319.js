import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

const App = (props) => {
    const [nameAndAge, setAllInfo] = useState("");

    const addInfoHandler = (extra) => {
        setAllInfo((nameAndAge) => {
            return [extra, ...nameAndAge];
        });
    };

    const onSaveUserInfoHandler = (enteredUserInfo) => {
        console.log("enteredUserInfo", enteredUserInfo);
        const userInfo = {
            ...enteredUserInfo,
            id: Math.random().toString(),
        };

        // return userInfo;

        console.log("app-userInfo", userInfo);
        console.log("app-enteredUserInfo", enteredUserInfo);
        setAllInfo(userInfo);
    };

    console.log("setall", nameAndAge);

    return (
        <div>
            <AddUserForm onSaveUserInfo={onSaveUserInfoHandler} />;
            <UserList info={nameAndAge} />;
        </div>
    );
};

export default App;
