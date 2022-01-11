import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: "e1",
    title: "chair",
    amount: 100,
    date: new Date(2022, 2, 17),
  },
  {
    id: "e2",
    title: "table",
    amount: 102,
    date: new Date(2019, 5, 17),
  },
  {
    id: "e3",
    title: "socks",
    amount: 10,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e4",
    title: "shoes",
    amount: 200,
    date: new Date(2022, 8, 17),
  },
];

const App = () => {
  // create expense array
  // using state , first we took the constant array out of the component and set as dummyData and then latter we setExpenses as new expense which we add via form and added prevExpenses
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
