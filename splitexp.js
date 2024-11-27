let friends = [];

function addFriend() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (name) {
        friends.push(name);
        nameInput.value = '';
        renderFriends();
        updateSplitButtonState();
    } else {
        alert("Please enter a valid name.");
    }
}

function renderFriends() {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = '';
    
    friends.forEach((friend, index) => {
        const li = document.createElement('li');
        li.textContent = friend;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editFriend(index);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFriend(index);

        li.appendChild(editButton);
        li.appendChild(removeButton);
        friendList.appendChild(li);
    });
}

function removeFriend(index) {
    friends.splice(index, 1);
    renderFriends();
    updateSplitButtonState();
}

function editFriend(index) {
    const newName = prompt("Edit friend's name:", friends[index]);
    
    if (newName) {
        friends[index] = newName.trim();
        renderFriends();
        updateSplitButtonState();
    }
}

function splitExpense() {
    const amountInput = document.getElementById('amountInput');
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0 || friends.length === 0) {
        alert("Please enter a valid amount and add at least one friend.");
        return;
    }

    const splitAmount = (amount / friends.length).toFixed(2);
    
    document.getElementById('result').innerText = `Each friend owes: ₹${splitAmount}`;
}

function updateSplitButtonState() {
   const amountInput = document.getElementById('amountInput');
   const splitButton = document.querySelector('.expense-group button');

   splitButton.disabled = !(friends.length > 0 && amountInput.value > 0); 
}