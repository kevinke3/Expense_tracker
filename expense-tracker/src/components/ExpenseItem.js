import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <li>
      <span>{expense.description} - ${expense.amount.toFixed(2)} - {expense.category}</span>
      <button onClick={() => onDelete(expense)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
