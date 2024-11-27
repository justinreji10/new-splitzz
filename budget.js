let budgetLimit = 0;
let totalExpenses = 0;

const budgetInput = document.getElementById("budget-limit");
const setBudgetBtn = document.getElementById("set-budget-btn");
const expenseInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseList = document.getElementById("expense-list");
const progressBar = document.getElementById("progress-bar");
const warningMessage = document.getElementById("warning-message");
const toast = document.getElementById("toast");
const budgetDisplay = document.getElementById("budget-display");

setBudgetBtn.addEventListener("click", () => {
    budgetLimit = parseFloat(budgetInput.value) || 0;
    if (budgetLimit > 0) {
        budgetDisplay.textContent = `Budget Limit: ₹${budgetLimit.toFixed(2)}`;
        warningMessage.textContent = "";
        totalExpenses = 0;
        progressBar.style.width = "0%";
        expenseList.innerHTML = "";
    } else {
        alert("Please enter a valid budget.");
    }
});

addExpenseBtn.addEventListener("click", () => {
    const expenseAmount = parseFloat(expenseInput.value) || 0;
    const category = categoryInput.value;

    if (expenseAmount > 0) {
        totalExpenses += expenseAmount;

        // Update expense list
        const listItem = document.createElement("li");
        listItem.textContent = `₹${expenseAmount.toFixed(2)} - ${category}`;
        expenseList.appendChild(listItem);

        // Update progress bar
        const percentage = Math.min((totalExpenses / budgetLimit) * 100, 100);
        progressBar.style.width = `${percentage}%`;

        // Check budget
        if (totalExpenses > budgetLimit) {
            warningMessage.textContent = "Warning: You have exceeded your budget!";
            progressBar.style.background = "red";
        } else {
            warningMessage.textContent = "";
            progressBar.style.background = "#4CAF50";
        }

        // Show toast
        showToast();
    } else {
        alert("Please enter a valid expense.");
    }

    expenseInput.value = "";
});

function showToast() {
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}
