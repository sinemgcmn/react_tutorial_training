import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";

function Expenses(props) {
    console.log("expenses:", props);
    return (
        <div className="expense-date">
            {
                <ExpenseItem
                    title={props.title}
                    amount={props.amount}
                    date={props.date}
                />
            }
        </div>
    );
}

export default Expenses;
