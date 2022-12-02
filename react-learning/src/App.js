import Expenses from 'Components/Expenses/Expenses';
import NewExpense from 'Components/NewExpenses/NewExpenses';
const App = () => {
  const expenses = [
    { title: 'Car insurance', amount: 200, date: new Date(2022, 11, 29) },
    { title: 'Laptop', amount: 200, date: new Date(2021, 110, 24) },
    { title: 'Phone', amount: 200, date: new Date(2020, 11, 29) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
