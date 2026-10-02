let rows = [];

document.getElementById("itemForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let item = document.getElementById("item").value;
    let quantity = Number(document.getElementById("quantity").value);
    let priceText = document.getElementById("price").value;
    let price = Number(priceText);

    let row = {
        quantity: quantity,
        price: price,
        line: quantity * price,
        note: priceText + quantity
    };

    if (item !== "") {
        row.item = item;
    }

    rows.push(row);

    let table = document.getElementById("sheetRows");
    table.innerHTML = "";

    rows.forEach(function (r) {
        table.innerHTML += `<tr>
            <td>${r.item}</td>
            <td>${r.quantity}</td>
            <td>${r.price}</td>
            <td>${r.line}</td>
            <td>${r.note}</td>
        </tr>`;
    });

    let total = 0;

    rows.forEach(function (r) {
        if (!Number.isNaN(r.line)) {
            total += r.line;
        }
    });

    document.getElementById("total").textContent = total;
    document.getElementById("totalKind").textContent = typeof total;

    let checks = "Kind of Note: " + typeof row.note;
    checks += "<br>Price matches number: " + (priceText == price);
    checks += "<br>Same type: " + (typeof priceText === typeof price);

    if (Number.isNaN(row.line)) {
        checks += "<br>Kind of NaN Line: " + typeof row.line;
    }

    document.getElementById("checks").innerHTML = checks;

    document.getElementById("itemForm").reset();
});