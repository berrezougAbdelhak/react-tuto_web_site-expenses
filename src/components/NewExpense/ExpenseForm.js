import "./ExpenseForm.css";
import React,{useState} from "react";
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
     
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    const titleChangeHandler=(event)=>{
        console.log(enteredTitle)
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // console.log(userInput)
        
        //When we have to work with prevStat
        // setUserInput((prevStat)=>{
        //     return {...prevStat,
        //     enteredTitle:event.target.value}
        // })
    }
    const amountChangeHandler=(event)=>{
        console.log(enteredAmount)
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        // console.log(userInput)
    }
    const dateChangeHandler=(event)=>{
        console.log(enteredDate)
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        // console.log(userInput)
    }
    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form> 
  );
};

export default ExpenseForm;