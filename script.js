const container = document.querySelector(".container");
const numOfRows = 16
let width = container.offsetWidth / numOfRows;
for (let i = 0; i < numOfRows * numOfRows; i++) {
    
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.background = "red";
    cell.style.border = "1px solid black";
    cell.style.width = `${width}px`
    cell.style.height = `${width}px`
    cell.style.flex = `0 0 auto`;
    cell.addEventListener("mouseover", () => {
        cell.style.background = ("blue");
    });
    
    container.appendChild(cell);
}
