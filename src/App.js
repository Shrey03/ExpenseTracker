import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // create expense array
  const expenses = [
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
      date: new Date(2022, 5, 17),
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

  const addExpenseHandler = (expense) => {
    console.log("IN APP.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
