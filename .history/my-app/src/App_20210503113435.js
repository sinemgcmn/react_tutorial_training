// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

// import ExpenseDate from "./components/ExpenseDate";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    render(){
        const expenses = expenses.map((expense) =>
        <li key={expense.id}>{expense.title}{expense.amount}{expense.date}</li> 

    };
    return (
       
        <div className="expenses">
            <h2>Let's get started!</h2>

            <Expenses />
        </div>
    );
}

export default App;
