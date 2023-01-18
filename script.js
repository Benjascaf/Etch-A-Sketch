
function fillContainer(container, squaresPerSide = 16) {
    prepareGrid(container, squaresPerSide);
    for (let j = 0; j < squaresPerSide; j++) {
        for (let i = 0; i < squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "black";
            container.appendChild(square);
        }
    }
    document.querySelector(".border").appendChild(container);
    addButtonEventListeners();
}

function toggleColor(square, mode="Default") {
    switch (mode) {
        case "Default":
            square.style.backgroundColor = "yellow";
            break;
        case "Rainbow":
            square.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
            break;
    }
}

function toggleMode(button) {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    addButtonEventListeners(button.textContent);
    console.log(button.textContent);
}
function getUserLayout() {
    let layout = parseInt(prompt("How many rows and columns do you want to display? \n Type a number between 1-100", "16"));
    if (!layout || layout > 100 || layout < 1) {
        return;
    }
    return layout;
}

function resetContainer(container = document.querySelector(".container")) {
    if (container) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            container.remove();
        }
    }
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    
    return newContainer;
}

function prepareGrid(container,layout) {
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${layout}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${layout}, 1fr)`;
}

function addButtonEventListeners(mode="Default") {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => toggleColor(square, mode)));
}
function getRandomColor() {
    return Math.floor(Math.random() * 255 + 1);
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = "black");
}

const container = document.querySelector(".container");
fillContainer(container);

const gridButton = document.querySelector(".grid-btn");
gridButton.addEventListener("click", () => fillContainer(resetContainer(), getUserLayout()));

const modeSelectorButtons = document.querySelectorAll(".mode-selector");
modeSelectorButtons.forEach(button => button.addEventListener("click", () => toggleMode(button)));

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => clearGrid());