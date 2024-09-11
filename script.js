const container = document.querySelector("#container");

function generateGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for (let j = 0; j < dimensions; j++) {
            const div2 = document.createElement("div");
            div2.classList.add("grid-box");
            div.appendChild(div2);
        }
        container.appendChild(div);
    }
}

generateGrid(16);

const gridBoxes = Array.from(document.querySelectorAll(".grid-box"));
for (const box of gridBoxes) {
    box.addEventListener("mouseover", () => {
        box.classList.add("enabled");
    })
}