import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ description, amount: parseFloat(amount), category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
      </div>
      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
