import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h1>Lets Get Started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
