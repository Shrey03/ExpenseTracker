import React, { useState } from "react";
import "./ExpenseItem.css";
import "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // function clickHandler() {
  //   console.log("CLICKEEEDDD!!!");
  // }
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit Title</button>
    </Card>
  );
};
export default ExpenseItem;
