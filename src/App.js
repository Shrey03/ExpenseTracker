import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div>
      <h1>Lets Get Started!!!</h1>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
