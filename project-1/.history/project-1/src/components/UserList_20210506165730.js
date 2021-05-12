import React from "react";
import "./AddUserForm.css";

const UserList = (props) => {
    console.log("userList", props);

    // render(){
    //     return (
    //     <div className="input">
    //         {props.info.map((data, index) => (
    //             <li key={index}> {data.name} </li>
    //         ))}
    //     </div>
    // );
    //         }

    render() {
    return (<div>
    {this.state.people.map((person, index) => (
        <p>Hello, {person.name} from {person.country}!</p>
    ))}
    </div>);
}
};

export default UserList;
