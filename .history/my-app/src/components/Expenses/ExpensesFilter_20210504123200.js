import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = () => {
    const dropDownListen = (event) => {
        console.log(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select>
                    <option onChange={dropDownListen} value="2022">
                        2022
                    </option>
                    <option onChange={dropDownListen} value="2021">
                        2021
                    </option>
                    <option onChange={dropDownListen} value="2020">
                        2020
                    </option>
                    <option onChange={dropDownListen} value="2019">
                        2019
                    </option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
