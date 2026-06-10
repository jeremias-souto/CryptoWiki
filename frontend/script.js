const op = document.querySelector(".options-select"); // Bitcoin o Ethereum
const button = document.querySelector(".button");

button.addEventListener("click", function () {

    const selectedValue = op.value; // 1, 2 o 3

    const PORT = 3000;

    let url;

    if (selectedValue === "1") {
        url = "/bitcoin";
    } else if (selectedValue === "2") {
        url = "/ethereum";
    } else {
        url = "/usdt";
    }

    fetch(url)
        .then(response => response.json()) // Convertir a JSON
        .then(data => {
            const infoSpan = document.querySelector(".information");
            infoSpan.innerHTML = `
                <h2>${data.Name}</h2>
                <p><strong>Creator:</strong> ${data.Creator}</p>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Supply:</strong> ${data.Supply}</p>
                <p><strong>Consensus Mechanisms:</strong> ${data.ConsensusMechanisms}</p>
                <p style="max-width: 750px; margin: 0 auto;"><strong>Description:</strong> ${data.Description}</p>
                <img src="${data.Icon}" style="width: 100px; height: auto; margin-top:10px;" alt="Icon of ${data.Name}">
            `;
        })
        .catch(error => console.error("Error:", error)); // Por si el servidor está apagado
});