// global vars and stuff

const CONTAINER_HEIGHT = 500;

// functions and stuff

function makeGrid(div, size) {
    div.innerHTML = "";
    div.style.height = CONTAINER_HEIGHT;
    div.style.width = CONTAINER_HEIGHT; // square
    for (let i = 0; i < size ** 2; i++) {
        const el = document.createElement("div");
        el.classList.add("block");
        el.style.width = CONTAINER_HEIGHT / size + "px";
        el.style.height = CONTAINER_HEIGHT / size + "px";
        div.appendChild(el);
        addHoverEffect(el);
        addColorEffect(div);
    }
}

function setColor(color) {
    element_color = color;
}

function addColorEffect(container) {
    let isHolding = false;
    container.addEventListener('mousedown', (e) =>{
        isHolding = true;
        if (e.target.classList.contains('block') && isHolding)
            color(e.target);
    });
    container.addEventListener('mouseup', () => {
        isHolding = false;
    })
    container.addEventListener('mouseover', e => {
        if (e.target.classList.contains('block') && isHolding) {
            color(e.target);
        }
    })
}

function addHoverEffect(pixel) {
    pixel.addEventListener('mouseover', ()=>{hover(pixel)});
    pixel.addEventListener('mouseout', ()=>{hover(pixel)});
}

function hover(pixel) {
    pixel.classList.toggle('hovered');
}

function color(pixel) {
    if (!rgbOn)
        pixel.style.background = element_color;
    else {
        pixel.style.background = 
`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }
}

// vars and stuff

let element_color = "black";
let rgbOn = false;

const applyColorButton = document.querySelector("#apply-color");
const colorInput = document.querySelector("#color")
const container = document.querySelector("#container");
const rgbMode = document.querySelector("#rgb-mode");
const changeGrid = document.querySelector("#change-grid");


makeGrid(container, 16);


changeGrid.addEventListener('click', () => {
    const size = prompt("how big should be ur new grid? (2-128)");
    if (Number.isInteger(+size) && +size >= 2 && +size <= 128) {
        makeGrid(container, +size);
    } else {
        alert("invalid choice, try again");
    }
})
rgbMode.addEventListener('click', () => {
    rgbOn = rgbOn ? false : true;
})

applyColorButton.addEventListener('click', () => {
    setColor(colorInput.value)
})