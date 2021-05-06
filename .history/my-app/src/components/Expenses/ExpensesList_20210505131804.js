import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    console.log("ExpenseList", props);

    if (props.items.length === 0) {
        return <h2> Found no expenses</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;