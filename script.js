const gridContainer = document.querySelector("#grid-container");
const buttonContainer = document.querySelector("#button-container");

const button = document.createElement("button");
button.innerText = "Create New Grid";
button.addEventListener("click", () => {
    let input = "";
    input = prompt("Input the number of sides for the grid");
    removeGrid();
    generateGrid(input);
})
buttonContainer.appendChild(button);

function generateGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for (let j = 0; j < dimensions; j++) {
            const div2 = document.createElement("div");
            div2.classList.add("grid-box");
            div.appendChild(div2);
        }
        gridContainer.appendChild(div);
    }

    const gridBoxes = Array.from(document.querySelectorAll(".grid-box"));
    for (const box of gridBoxes) {
        box.addEventListener("mouseover", () => {
            box.classList.add("enabled");
        })
    }
}

function removeGrid() {
    const grid = Array.from(document.querySelectorAll(".row"));
    grid.forEach(row => {
        row.remove()
    });
}

generateGrid(16);