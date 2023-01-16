const container = document.querySelector("div");
addDivLine(container);

function addDivLine(container) {
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            const miniDiv = document.createElement("div");
            miniDiv.style.backgroundColor = "black";
            container.appendChild(miniDiv);
        }
    }
}