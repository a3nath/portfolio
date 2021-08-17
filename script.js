const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;

function draw(e){
    if (!isDraw) return;
    ctx.beginPath();
}

canvas.addEventListener('click', (e) => {
    isDrawing =  true;
    draw()
})