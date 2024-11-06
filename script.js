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
    container.addEventListener('mousedown', () =>{
        isHolding = true;
        //console.log("rf1:", isHolding);
    });
    container.addEventListener('mouseup', () => {
        isHolding = false;
        //console.log("rf2:", isHolding);
    })
    container.addEventListener('mouseover', e => {
        //console.log("rf4:", e.target, isHolding)
        if (e.target.classList.contains('block') && isHolding) {
            color(e.target);
            //console.log("rf3:", isHolding);
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