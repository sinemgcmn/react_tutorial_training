import React from "react";

function ExpensesList(props) {
    console.log("ExpenseList", props);
    let expensesContent = <p> No expenses found</p>;

    if (props.items.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
}

export default ExpensesList;
