import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    console.log("expenses:", props);
    return (
        <div className="expense-date">
            {/* <ExpenseItem
                title={props.title}
                amount={props.amount}
                date={props.date}
            />
            <ExpenseItem
                title={props.title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            /> */}
        </div>
    );
}

export default Expenses;
