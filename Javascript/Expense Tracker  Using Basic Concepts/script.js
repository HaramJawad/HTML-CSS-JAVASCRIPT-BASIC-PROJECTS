let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let expenseName = document.querySelector("#expenseName");
let expenseAmount = document.querySelector("#expenseAmount");
let selectExpense = document.querySelector("#Select-Expense");
let addExpenseBtn = document.querySelector("#Add-Expense");
let displayExpense = document.querySelector("#Display-Expense");
let totalExpense = document.querySelector("#Total-Expense");
let deleteExpenseBtn = document.querySelector("#Delete-Btn");
addExpenseBtn.addEventListener('click', function () {
  let InputName = expenseName.value.trim();
  let InputAmount = expenseAmount.value.trim();
  let InputSelect = selectExpense.value.trim();
  if (InputName === "" || InputAmount === "" || InputSelect === "") {
    console.log("Please Enter all details!");
    return;
  }
  else {
    console.log("Expense Added:", InputName, InputAmount, InputSelect);
  }
  let expensesObj = {
    name: InputName,
    amount: InputAmount,
    category: InputSelect,
  }
  expenses.push(expensesObj);
  expenseName.value = "";
  expenseAmount.value = "";
  selectExpense.value = "";
  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpenses();
  displayTotalExpense();

})
function displayExpenses() {
  displayExpense.innerHTML = "";
  let storedExpenses = localStorage.getItem("expenses");
  if (storedExpenses) {
    expenses = JSON.parse(storedExpenses);
  }
  expenses.forEach((e, index) => {
    let newTr = document.createElement("tr");
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");
    let newTd3 = document.createElement("td");
    let newTd4 = document.createElement("td");
    newTd1.textContent = e.name;
    newTd2.textContent = e.amount;
    newTd3.textContent = e.category;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      removeExpense(index);
    })
    newTd4.append(deleteBtn);
    newTr.append(newTd1, newTd2, newTd3, newTd4);
    displayExpense.append(newTr);
  })
}
function displayTotalExpense() {
  let total = 0;
  expenses.forEach((e) => {
    total += Number(e.amount);
    totalExpense.textContent = `total:$${total}`;
  })
}
function removeExpense(index) {
  expenses.splice(index, 1)
  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
  displayTotalExpense();
}
// **Run when the page loads**
document.addEventListener("DOMContentLoaded", function () {
  displayExpenses();
  displayTotalExpense();
});