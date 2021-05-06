import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const [enteredFilter, setEnteredFilter] = useState("");

    const filterChangeHandler = (event) => {
        setEnteredFilter(event.target.value);
    };

    const dropDownListen = (event) => {
        event.preventDefault();
        const enteredFilter = {
            filter: enteredFilter,
        };

        console.log(event.target.value);
        console.log(enteredFilter);

        props.onDropDownFilter();
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={dropDownListen}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
