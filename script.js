const canvas = document.querySelector('.mycanvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
//starting point
ctx.moveTo(10,90);
ctx.quadraticCurveTo(60,10,90,90)
ctx.lineTo(60,10)
ctx.stroke()
ctx.closePath()






ctx.stroke()

let isDrawing = false;

function draw(e){
    if (!isDraw) return;
    ctx.beginPath();
}

canvas.addEventListener('click', (e) => {
    isDrawing =  true;
    draw()
})