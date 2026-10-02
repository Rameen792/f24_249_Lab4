// Task 3: Add an object to the array and redraw the table.
let rows = [];

const form = document.getElementById("itemForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const item = document.getElementById("item").value;
    const quantity = Number(document.getElementById("quantity").value);
    const priceText = document.getElementById("price").value;
    const price = Number(priceText);

    const row = {
        item: item,
        quantity: quantity,
        price: price,
        line: quantity * price,
        note: priceText + quantity
    };

    rows.push(row);
    drawRows();
    form.reset();
});

function drawRows() {
    const tableBody = document.getElementById("sheetRows");
    tableBody.innerHTML = "";

    rows.forEach(function (row) {
        const tableRow = document.createElement("tr");

        tableRow.innerHTML =
            "<td>" + row.item + "</td>" +
            "<td>" + row.quantity + "</td>" +
            "<td>" + row.price + "</td>" +
            "<td>" + row.line + "</td>" +
            "<td>" + row.note + "</td>";

        tableBody.appendChild(tableRow);
    });
}
