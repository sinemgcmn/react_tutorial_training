import "./ExpenseItem.css";

function ExpenseItem(props) {
    // console.log(props);
    const month = props.date.toLocaleString("en-US", { month: "long" });
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294;

    return (
        <div className="expense-item">
            <div>
                <div>month</div>
                <div>Year</div>
                <div>Day</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
