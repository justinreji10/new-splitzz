// script.js

document.addEventListener("DOMContentLoaded", () => {
  const goalForm = document.getElementById("goal-form");
  const goalType = document.getElementById("goal-type");
  const groupUsers = document.getElementById("group-users");
  const goalsList = document.getElementById("goals");

  // Show or hide group users field based on goal type
  goalType.addEventListener("change", () => {
    if (goalType.value === "group") {
      groupUsers.classList.remove("hidden");
    } else {
      groupUsers.classList.add("hidden");
    }
  });

  // Handle goal form submission
  goalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const type = goalType.value;
    const name = document.getElementById("goal-name").value;
    const amount = parseFloat(document.getElementById("goal-amount").value).toFixed(2);
    const users = document.getElementById("user-list").value.split(",").map(user => user.trim());

    // Create goal item
    const goalItem = document.createElement("li");
    goalItem.innerHTML = `
      <strong>${name}</strong> (${type.toUpperCase()} Goal)<br>
      Amount: ₹${amount}
      ${type === "group" && users.length > 0 ? `<br>Users: ${users.join(", ")}` : ""}
    `;

    // Append to goals list
    goalsList.appendChild(goalItem);

    // Reset form
    goalForm.reset();
    groupUsers.classList.add("hidden");
  });
});
