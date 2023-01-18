
//Set the container grid layout properties and add the appropiate amount of cells
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
}

//Depending on the current active button, the squares will be painted with yellow 
//or another random colour
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

//Changes which button is currently active by moving the active class
function toggleMode(button) {
    const currActiveButton = document.querySelector(".active");
    currActiveButton.classList.remove("active");
    button.classList.add("active");
    addButtonEventListeners(button.textContent);
}

//Promopts the user for the desired grid layout (nxn) and returns it as an int
function getUserLayout() {
    let layout = parseInt(prompt("How many rows and columns do you want to display? \n Type a number between 1-100", "16"));
    if (!layout || layout > 100 || layout < 1) {
        return;
    }
    return layout;
}

//Have to remove old container and create a new one since I could't change grid-template-(rows/columns) dynamically
function resetContainer(container = document.querySelector(".container")) {
    if (container) {
        container.remove();
    }
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    
    return newContainer;
}

//Set appropiate grid properties
function prepareGrid(container,layout) {
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${layout}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${layout}, 1fr)`;
}


function addButtonEventListeners(mode="Default") {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => toggleColor(square, mode)));
}
//Returns random RGB value
function getRandomColor() {
    return Math.floor(Math.random() * 255 + 1);
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = "black");
}

//Create initial grid (16x16), and add event listeners to each button
const container = document.querySelector(".container");
fillContainer(container);
addButtonEventListeners();

const gridButton = document.querySelector(".grid-btn");
gridButton.addEventListener("click", () => {
    fillContainer(resetContainer(), getUserLayout());
    addButtonEventListeners();
    });

const modeSelectorButtons = document.querySelectorAll(".mode-selector");
modeSelectorButtons.forEach(button => button.addEventListener("click", () => toggleMode(button)));

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => clearGrid());

