import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css'; 

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (expenseToDelete) => {
    setExpenses(expenses.filter(expense => expense !== expenseToDelete));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
