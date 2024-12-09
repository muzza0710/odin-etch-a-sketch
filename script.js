const container = document.querySelector(".container");
const resizeGridBtn = document.querySelector("button");
let numOfRows = 16
let width = container.offsetWidth / numOfRows;

createGrid(numOfRows)

resizeGridBtn.addEventListener("click", () => {
    numOfRows = parseInt(prompt("number of rows/columns?"));
    if (!numOfRows || 8 < numOfRows > 99) {
        alert(`${numOfRows} is not a valid number! \nEnter a number between 8 and 100`)
    }
    else {
    container.replaceChildren();
    width = container.offsetWidth / numOfRows;
    createGrid(numOfRows);
    }
})

function createGrid(size){
    for (let i = 0; i < size * size; i++) {
        
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.background = "red";
        // cell.style.border = "1px solid black";
        cell.style.width = `${width}px`
        cell.style.height = `${width}px`
        cell.style.flex = `0 0 auto`;
        cell.addEventListener("pointerenter", () => {
            cell.style.background = ("blue");
        });
        
        container.appendChild(cell);
    }
}


