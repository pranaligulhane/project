let expenses = [];
let totalExpense = 0;

function addExpense() {
  const description = document.getElementById('expense-input').value.trim();
  const amount = parseFloat(document.getElementById('amount-input').value.trim());

  if (description === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description and amount!');
    return;
  }

  const expense = {
    id: expenses.length + 1,
    description: description,
    amount: amount
  };

  expenses.push(expense);
  updateExpensesList();
  updateTotal();
  resetForm();
}

function updateExpensesList() {
  const expensesContainer = document.getElementById('expenses');
  expensesContainer.innerHTML = '';

  expenses.forEach(expense => {
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
      <span>${expense.description} - $${expense.amount.toFixed(2)}</span>
      <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    expensesContainer.appendChild(expenseItem);
  });
}

function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  updateExpensesList();
  updateTotal();
}

function updateTotal() {
  totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  document.getElementById('total').textContent = `Total Expenses: $${totalExpense.toFixed(2)}`;
}

function resetForm() {
  document.getElementById('expense-input').value = '';
  document.getElementById('amount-input').value = '';
}
