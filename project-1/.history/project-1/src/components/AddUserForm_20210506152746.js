import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = (props) => {
    // console.log("adduserbar", props);
    const [enteredName, setUserName] = useState("");
    const [enteredAge, setUserAge] = useState("");

    const handleEnteredName = (event) => {
        setUserName(event.target.value);
    };

    const handleEnteredAge = (event) => {
        setUserAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //so that the page is not gonna reload the page.
        const userInfo = {
            name: enteredName,
            age: enteredAge,
        };

        props.onSaveUserInfo(userInfo);

        console.log("adduserbar-userInfo", userInfo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label> Username </label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={handleEnteredName}
                    />
                    <label> Age(Years) </label>
                    <input
                        type="text"
                        value={enteredAge}
                        onChange={handleEnteredAge}
                    />

                    <div className="button">
                        <button type="submit"> Add User</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUserForm;
