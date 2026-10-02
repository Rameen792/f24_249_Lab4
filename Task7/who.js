// The first person has a name but no answer for their status.
let people = [
    {
        name: "Unknown",
        inShop: undefined
    }
];

const nameInput = document.getElementById("personName");
const hereButton = document.getElementById("hereButton");
const outButton = document.getElementById("outButton");

hereButton.addEventListener("click", function () {
    addPerson(true);
});

outButton.addEventListener("click", function () {
    addPerson(false);
});

function addPerson(status) {
    const name = nameInput.value.trim();

    if (name === "") {
        nameInput.focus();
        return;
    }

    people.push({
        name: name,
        inShop: status
    });

    nameInput.value = "";
    drawPeople();
}

function drawPeople() {
    const tableBody = document.getElementById("peopleRows");
    tableBody.innerHTML = "";

    let count = 0;

    people.forEach(function (person) {
        // Read both properties together using object destructuring.
        const { name, inShop } = person;

        const tableRow = document.createElement("tr");
        tableRow.innerHTML =
            "<td>" + name + "</td>" +
            "<td>" + inShop + "</td>";

        tableBody.appendChild(tableRow);

        if (inShop === true) {
            count++;
        }
    });

    document.getElementById("peopleCount").textContent = count;
}

// Show the initial Unknown — undefined row when the page opens.
drawPeople();
