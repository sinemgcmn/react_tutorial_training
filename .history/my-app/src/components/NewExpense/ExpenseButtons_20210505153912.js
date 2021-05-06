import React, { useState } from "react";

function ExpenseButtons() {
    const [editMode, setEditMode] = useState(false);

    const handleClick = (event) => {
        console.log(event);
        if (event.target.name === "cancel") {
            setEditMode(false);
        } else if (event.target.name === "add") {
            setEditMode(true);
        }
    };

    const addExpense = (
        <button name="add" onClick={handleClick} type="click">
            Add New Expense
        </button>
    );

    const openExpense = (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0,01"
                        step="0,01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button name="cancel" onClick={handleClick} type="click">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
    return (
        <div>
            {editMode && openExpense}
            {!editMode && addExpense}
        </div>
    );
}
