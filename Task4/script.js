// Task 4: A bad price stays as NaN. An empty item has no item property.
let rows = [];

const form = document.getElementById("itemForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const itemText = document.getElementById("item").value;
    const quantity = Number(document.getElementById("quantity").value);
    const priceText = document.getElementById("price").value;
    const price = Number(priceText);

    const row = {
        quantity: quantity,
        price: price,
        line: quantity * price,
        note: priceText + quantity
    };

    if (itemText !== "") {
        row.item = itemText;
    }

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
