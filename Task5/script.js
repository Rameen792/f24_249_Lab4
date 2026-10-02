// Task 5: Calculate the total and display the required type checks.
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

    // Leave the item property out when the item box is empty.
    if (itemText !== "") {
        row.item = itemText;
    }

    rows.push(row);

    drawRows();
    showSummary(row, priceText);
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

function showSummary(lastRow, priceText) {
    // Add valid numeric Line values. Ignore NaN.
    const total = rows.reduce(function (sum, row) {
        if (typeof row.line === "number" && !Number.isNaN(row.line)) {
            return sum + row.line;
        }

        return sum;
    }, 0);

    document.getElementById("total").textContent = total;
    document.getElementById("totalKind").textContent = typeof total;

    // == compares values after conversion; === also checks the type.
    const priceMatches = priceText == lastRow.price;
    const sameKind = typeof priceText === typeof lastRow.price;

    let checks = "Kind of Note on last row: " + typeof lastRow.note + "<br>";
    checks += "Price text matches price as a number: " + priceMatches + "<br>";
    checks += "Price text and price number are the same kind: " + sameKind;

    if (Number.isNaN(lastRow.line)) {
        checks += "<br>Kind of Line (NaN): " + typeof lastRow.line;
    }

    document.getElementById("checks").innerHTML = checks;
}
