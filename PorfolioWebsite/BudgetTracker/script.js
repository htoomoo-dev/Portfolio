const form = document.getElementById("expense-form");
const list = document.getElementById("expense-list");
const ctx = document.getElementById("chart").getContext("2d");
let chart;
const data = {};

form.addEventListener("submit", e => {
    e.preventDefault();
    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);
    if (desc && !isNaN(amount)) {
        data[desc] = (data[desc] || 0) + amount;
        updateList();
        updateChart();
        form.reset();
    }
});

function updateList() {
    list.innerHTML = "";
    for (let [desc, amount] of Object.entries(data)) {
        const li = document.createElement("li");
        li.textContent = `${desc}: $${amount.toFixed(2)}`;
        list.appendChild(li);
    }
}

function updateChart() {
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"]
            }]
        }
    });
}