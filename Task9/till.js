// Read the form and show the change or amount still owed.
const tillForm = document.getElementById("tillForm");

tillForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const bill = Number(document.getElementById("bill").value);
    const paidText = document.getElementById("paid").value;

    // An empty Paid box must store null.
    let paid = null;

    if (paidText !== "") {
        paid = Number(paidText);
    }

    const result = document.getElementById("result");

    if (paid === null) {
        result.innerHTML =
            "Paid: null<br>" +
            "Kind of paid: " + typeof paid;
        return;
    }

    // The function call is above the function definition.
    const change = getChange(bill, paid);

    if (change < 0) {
        result.innerHTML =
            "Still owed: " + Math.abs(change);
    } else {
        result.innerHTML =
            "Change: " + change;

        if (change > 0) {
            result.innerHTML +=
                "<br>Half of change: " + change / 2;
        }
    }
});

function getChange(bill, paid) {
    return paid - bill;
}
