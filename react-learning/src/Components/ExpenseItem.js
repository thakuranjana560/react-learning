import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
//    const expenseDate = new Date(2022, 11, 29); 
//    const expenseTitle='CarInsurance';
//    const expensePrice= 344;

    return (
    <Card className="expense-item">
            <ExpenseDate date={props.date}/>
           <div className="expense-name">{props.title}</div>
           <div className="expense-price">${props.amount}</div>
     </Card>
    );  
}
export default ExpenseItem;