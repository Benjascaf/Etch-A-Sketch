const container = document.querySelector(".container");
fillContainer(container);

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover",() => toggleColor(square)));

function fillContainer(container, squaresPerSide = 16) {
    for (let j = 0; j < squaresPerSide; j++) {
        for (let i = 0; i < squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "black";
            container.appendChild(square);
        }
    }
}

function toggleColor(square) {
    square.style.backgroundColor === "black" ? square.style.backgroundColor = "yellow"
    : square.style.backgroundColor = "black";
    }
