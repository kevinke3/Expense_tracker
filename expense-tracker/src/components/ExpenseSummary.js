import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const categories = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>Total: ${total.toFixed(2)}</h2>
      <h3>Breakdown by Category:</h3>
      <ul>
        {Object.entries(categories).map(([category, amount]) => (
          <li key={category}>{category}: ${amount.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
