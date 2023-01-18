
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
    document.querySelector("body").appendChild(container);
    addButtonEventListeners();
}

function toggleColor(square) {
    square.style.backgroundColor === "black" ? square.style.backgroundColor = "yellow"
    : square.style.backgroundColor = "black";
    }

function getUserLayout() {
    let layout = parseInt(prompt("How many rows and columns do you want to display? (max 100)", "16"));
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

function addButtonEventListeners() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => toggleColor(square)));
}

const container = document.querySelector(".container");
fillContainer(container);

const button = document.querySelector("button");
button.addEventListener("click", () => fillContainer(resetContainer(), getUserLayout()));

