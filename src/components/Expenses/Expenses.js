import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // addding filter to show only expenses of the selected year without deleting or removing other expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // ADDING ALTERNATE AND EASY WAY TO ADD CONDITIONS
  // FIRST WE WILL CREATE VARIABLE WHICH WILL STORE TEXT CONTENT OF HTML WHICH WILL RENDER AND IT WILL CHANGE IF SOME CONDITIONS ARE MATCHED
  // I AM NOT REMOVING ANOTHER METHOD FO RJUST FUTURE REFERENCE
  // let expensesContent = (
  //   <h2>
  //     <b>Ooopss!! No Expenses are found!!</b>
  //   </h2>
  // );
  // // now we will add condition using IF
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  // Moved above code to new file ExpenseList.js for beter refactoring
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        {/* THIS METHOD CREATES ALL THE EXPENSE ITEMS DYNAMICALLY BY MAP() , TAKING AN ARRAY EXPENSE FROM PARENT COMPONENT APP.JS , using ITEMS */}
        {/* Previosuly this was props.item instead of filteredExpenses before adding filter  */}

        {/* now added condition that if there is no data in filteredExpenses then it will show some some messages otherwise it will render the data.  */}

        {/* {filteredExpenses.length === 0 ? (
          <h2>
            <b>Ooopss!! No Expenses are found!! </b>
          </h2>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* Now here we will just add the constant which we added */}

        {/* {expensesContent} */}
        {/* So as we moved list into different componenet we will comment this one and add ExpenseList.js */}
        <ExpenseList items={filteredExpenses} />

        {/* THIS WORKS SAME AS ABOVE METHOD < IT IS JUST THAT IT'S HARDCODED, IN THIS WE ARE ADDING MANUALLY ALL THE ITEMS ONE by ONE WHICH IS NOT THE GOOD APPROACH, THIS IS STATIC */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
