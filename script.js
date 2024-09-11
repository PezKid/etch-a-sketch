const gridContainer = document.querySelector("#grid-container");
const buttonContainer = document.querySelector("#button-container");

const button = document.createElement("button");
button.innerText = "Create New Grid";
button.addEventListener("click", () => {
    let input = "";
    input = prompt("Input the number of sides for the grid (1-100)");
    removeGrid();
    generateGrid(input);
})
buttonContainer.appendChild(button);

function generateGrid(dimensions) {
    if (dimensions < 1)
        dimensions = 1;
    if (dimensions > 100)
        dimensions = 100;

    const sizing = (680 / dimensions) - 1;
    console.log(sizing);

    for (let i = 0; i < dimensions; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for (let j = 0; j < dimensions; j++) {
            const div2 = document.createElement("div");
            div2.classList.add("grid-box");
            div2.style.width = sizing + "px";
            div2.style.height = sizing + "px";
            div.appendChild(div2);
        }
        gridContainer.appendChild(div);
    }

    const gridBoxes = Array.from(document.querySelectorAll(".grid-box"));
    for (const box of gridBoxes) {
        box.addEventListener("mouseover", () => {
            box.classList.add("enabled");
            addColor(box);
        })
    }
}

let RGB = [255, 0, 0];

function addColor(gridBox) {
    gridBox.style.backgroundColor = `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`;
    const randomShift = Math.random() * 80 - 40;
    const randomIndex = Math.floor(Math.random() * 3);
    RGB[randomIndex] = RGB[randomIndex] + randomShift;
    if (RGB[randomIndex] < 0)
        RGB[randomIndex] = RGB[randomIndex] + 15;
    if (RGB[randomIndex] > 255)
        RGB[randomIndex] = RGB[randomIndex] - 15;
}

function removeGrid() {
    const grid = Array.from(document.querySelectorAll(".row"));
    grid.forEach(row => {
        row.remove()
    });
}

generateGrid(16);