import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ExpenseList;
