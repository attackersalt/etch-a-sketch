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
    pixel.classList.add('colored');
}

// vars and stuff

const container = document.querySelector("#container");
makeGrid(container);