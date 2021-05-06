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
        setEditMode(false);

        console.log(expenseData);
    };

    const startEditingHandler = () => {
        setEditMode(true);
    };

    const stopEditingHandler = () => {
        setEditMode(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button name="add" onClick={startEditingHandler} type="click">
                    Add New Expense
                </button>
            )}

            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
