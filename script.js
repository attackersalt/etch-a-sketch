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
makeGrid(container);

rgbMode.addEventListener('click', () => {
    rgbOn = rgbOn ? false : true;
})

applyColorButton.addEventListener('click', () => {
    setColor(colorInput.value)
})