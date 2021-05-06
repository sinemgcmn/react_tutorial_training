import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setEditMode] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);

        console.log(expenseData);
    };

    return (
        <div className="new-expense">
            <button name="add" type="click">
                Add New Expense
            </button>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
