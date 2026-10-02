let people = [
    { name: "Unknown", inShop: undefined }
];

function addPerson(status) {
    let name = document.getElementById("personName").value.trim();

    if (name === "") {
        return;
    }

    people.push({
        name: name,
        inShop: status
    });

    document.getElementById("personName").value = "";
    showPeople();
}

document.getElementById("hereButton").addEventListener("click", function () {
    addPerson(true);
});

document.getElementById("outButton").addEventListener("click", function () {
    addPerson(false);
});

function showPeople() {
    let table = document.getElementById("peopleRows");
    let count = 0;

    table.innerHTML = "";

    people.forEach(function (person) {
        let { name, inShop } = person;

        table.innerHTML += `<tr>
            <td>${name}</td>
            <td>${inShop}</td>
        </tr>`;

        if (inShop === true) {
            count++;
        }
    });

    document.getElementById("peopleCount").textContent = count;
}

showPeople();