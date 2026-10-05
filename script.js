let transactions = [];

function addTransaction() {

    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const type =
        document.getElementById("type").value;

    if (description === "" || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    transactions.push({
        description: description,
        amount: amount,
        type: type
    });

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    displayTransactions();
}

function displayTransactions() {

    const list = document.getElementById("transactionList");

    list.innerHTML = "";

    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction, index) => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }

        list.innerHTML += `
            <div class="transaction">

                <div>
                    <strong>${transaction.description}</strong>
                    <br>
                    <span class="${transaction.type}">
                        ${transaction.type === "income" ? "+" : "-"}
                        ₹${transaction.amount}
                    </span>
                </div>

                <button
                    class="delete-btn"
                    onclick="deleteTransaction(${index})">
                    Delete
                </button>

            </div>
        `;
    });

    if (transactions.length === 0) {
        list.innerHTML = "<p>No transactions yet.</p>";
    }

    document.getElementById("income").textContent =
        "₹" + income;

    document.getElementById("expenses").textContent =
        "₹" + expenses;

    document.getElementById("balance").textContent =
        "₹" + (income - expenses);
}

function deleteTransaction(index) {

    transactions.splice(index, 1);

    displayTransactions();
}