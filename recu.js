document.getElementById("recurringForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const recurringName = document.getElementById("recurringName").value;
    const recurringAmount = parseFloat(document.getElementById("recurringAmount").value);
    const recurringPeriod = document.getElementById("recurringPeriod").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    // Validation
    if (!recurringName || isNaN(recurringAmount) || recurringAmount <= 0 || !recurringPeriod || !startDate) {
      alert("Please fill all required fields with valid data.");
      return;
    }
  
    // Add to the table
    const tableBody = document.querySelector("#recurringTable tbody");
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${recurringName}</td>
      <td>₹${recurringAmount.toFixed(2)}</td>
      <td>${recurringPeriod}</td>
      <td>${startDate}</td>
      <td>${endDate ? endDate : "Ongoing"}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    tableBody.appendChild(row);
  
    // Add delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function () {
      tableBody.removeChild(row);
    });
  
    // Clear form
    document.getElementById("recurringForm").reset();
  });
  