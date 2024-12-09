const container = document.querySelector(".container");
const resizeGridBtn = document.querySelector(".resizeGridBtn");
const randomColourBtn = document.querySelector(".randomColourBtn");
const lightToDarkkBtn = document.querySelector(".lightToDarkBtn");
const initialOpacity = 0.5;
const intialColor = `rgb(255 0 0/${initialOpacity})`;

let randomColorIsActive = false;

let numOfRows = 16;
let width = container.offsetWidth / numOfRows;
let color = `rgb(0 255 0/${initialOpacity})`;
let newColor = "green";

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

randomColourBtn.addEventListener("click", () => {
    randomColorIsActive ? randomColourBtn.classList.remove("active"): randomColourBtn.classList.add("active")
    randomColorIsActive = !randomColorIsActive;
})

function createGrid(size){
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.background = intialColor;
        cell.style.width = `${width}px`
        cell.style.height = `${width}px`
        cell.style.flex = `0 0 auto`;
        cell.addEventListener("pointerenter", () => {
            if (randomColorIsActive){
                console.log(randomColorIsActive);
                let r = Math.floor(Math.random() * 255).toString(16);
                let g = Math.floor(Math.random() * 255).toString(16);
                let b = Math.floor(Math.random() * 255).toString(16);
                newColor = `#${r+g+b}`;
            }
            else {newColor ="red";
                console.log(randomColorIsActive);
            }
            cell.style.background = newColor;
        });
        container.appendChild(cell);
    }
}


