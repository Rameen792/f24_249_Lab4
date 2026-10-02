document.getElementById("tillForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let bill = Number(document.getElementById("bill").value);
    let paidText = document.getElementById("paid").value;
    let paid = paidText === "" ? null : Number(paidText);
    let result = document.getElementById("result");

    if (paid === null) {
        result.innerHTML = "Paid: null<br>Kind: " + typeof paid;
        return;
    }

    let change = getChange(bill, paid);

    if (change < 0) {
        result.innerHTML = "Still owed: " + Math.abs(change);
    } else {
        result.innerHTML = "Change: " + change;

        if (change > 0) {
            result.innerHTML += "<br>Half of change: " + change / 2;
        }
    }
});

function getChange(bill, paid) {
    return paid - bill;
}