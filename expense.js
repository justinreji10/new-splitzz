document.getElementById("expenseForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
    const expenseCategory = document.getElementById("expenseCategory").value;
    const expenseDate = document.getElementById("expenseDate").value;
  
    // Validation
    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0 || !expenseCategory || !expenseDate) {
      alert("Please fill all fields with valid data.");
      return;
    }
  
    // Add to the table
    const tableBody = document.querySelector("#expenseTable tbody");
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${expenseName}</td>
      <td>₹${expenseAmount.toFixed(2)}</td>
      <td>${expenseCategory}</td>
      <td>${expenseDate}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    tableBody.appendChild(row);
  
    // Add delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function () {
      tableBody.removeChild(row);
    });
  
    // Clear form
    document.getElementById("expenseForm").reset();
  });
  