// global vars and stuff

const CONTAINER_HEIGHT = 500;

// functions and stuff

function makeGrid(div) {
    div.style.height = CONTAINER_HEIGHT;
    div.style.width = CONTAINER_HEIGHT; // square
    for (let i = 0; i < 16 ** 2; i++) {
        const el = document.createElement("div");
        el.classList.add("block");
        el.style.width = CONTAINER_HEIGHT / 16 + "px";
        el.style.height = CONTAINER_HEIGHT / 16 + "px";
        div.appendChild(el);
    }
}

// vars and stuff

const container = document.querySelector("#container");
makeGrid(container);