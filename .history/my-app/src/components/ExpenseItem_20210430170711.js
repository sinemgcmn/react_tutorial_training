import "./ExpenseItem.css";

function ExpenseItem(props) {
    console.log(props);
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294;

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
