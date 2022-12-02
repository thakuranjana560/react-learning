import { useState } from 'react';
const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   });
    // };
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        ></input>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
