import ExpenseItem from './Components/ExpenseItem';
function App() {
  const expenses = [
    { title: 'Car insurance', amount: 200, date: new Date(2022, 11, 29) },
    { title: 'Laptop', amount: 200, date: new Date(2021, 110, 24) },
    { title: 'Phone', amount: 200, date: new Date(2020, 11, 29) },
  ];
  return (
    <div>
      <h2>abc</h2>
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
    </div>
  );
}

export default App;
