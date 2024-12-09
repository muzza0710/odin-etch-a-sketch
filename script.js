const container = document.querySelector(".container");
const resizeGridBtn = document.querySelector("button");
let numOfRows = 16
let width = container.offsetWidth / numOfRows;
let opacity = 0.1

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
        cell.style.background = `rgb(255 0 0/${opacity}`;
        cell.style.width = `${width}px`
        cell.style.height = `${width}px`
        cell.style.flex = `0 0 auto`;
        cell.addEventListener("pointerenter", () => {
            if(opacity < 1){
                opacity += 0.05;
            }
        cell.style.background = `rgb(0 0 0/${opacity}`;
        });
        
        container.appendChild(cell);
    }
}


