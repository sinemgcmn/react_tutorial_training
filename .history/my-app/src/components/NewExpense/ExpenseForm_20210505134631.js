import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [editMode, setEditMode] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const formClickHandler = (event) => {
        const addExpense = 
            <button onChange={formClickHandler} type="submit">
                Add Expense
            </button>
       

        // if (editMode === false) {
            setEditMode(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // so that the page is not gonna reload namley it is gonna prevent the default behaivour of the form.

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        console.log(expenseData);
    };

    return (
       
        // <form onSubmit={submitHandler}>
        //     <div className="new-expense__controls">
        //         <div className="new-expense__controls">
        //             <label>Title</label>
        //             <input
        //                 type="text"
        //                 value={enteredTitle}
        //                 onChange={titleChangeHandler}
        //             />
        //         </div>
        //         <div className="new-expense__controls">
        //             <label>Amount</label>
        //             <input
        //                 type="number"
        //                 value={enteredAmount}
        //                 min="0,01"
        //                 step="0,01"
        //                 onChange={amountChangeHandler}
        //             />
        //         </div>
        //         <div className="new-expense__controls">
        //             <label>Date</label>
        //             <input
        //                 type="date"
        //                 value={enteredDate}
        //                 min="2019-01-01"
        //                 max="2022-12-31"
        //                 onChange={dateChangeHandler}
        //             />
        //         </div>
        //         <div className="new-expense__actions">
        //             <button type="submit">Add Expense</button>
        //             <button type="submit">Cancel</button>
        //         </div>
        //     </div>
        // </form>
    );
};

export default ExpenseForm;

//ANOTHER WAY - SPICED WAY AT THE SAME TIME

// const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
// });

// const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//         return { ...userInput, enteredTitle: event.target.value };
//     });
// };
// const amountChangeHandler = (event) => {
//     setUserInput((prevState) => {
//         return { ...userInput, enteredAmount: event.target.value };
//     });
// };

// const dateChangeHandler = (event) => {
//     setUserInput((prevState) => {
//         return { ...userInput, enteredDate: event.target.value };
//     });
// };

///////////////////////////////////////
