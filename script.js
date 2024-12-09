const container = document.querySelector(".container");
const numOfRows = 16
let width = container.offsetWidth / numOfRows;
console.log(width);

// const width = parseInt(container.width) / 16;
for (let i = 0; i < numOfRows * numOfRows; i++) {
    
    const cell = document.createElement("button");
    cell.style.background = "red";
    cell.style.border = "1px solid black";
    cell.style.width = `${width}px`
    cell.style.height = `${width}px`
    cell.style.flex = `0 0 auto`;
    
    container.appendChild(cell);
}
