const canvas = document.querySelector('.mycanvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.beginPath();
// //starting point
// ctx.moveTo(10,90);
// ctx.quadraticCurveTo(60,10,90,90)
// ctx.lineTo(60,10)
// ctx.stroke()
// ctx.closePath()

let currentAngle = -0.5 * Math.PI


function star(x, y) {
    let radius = 50, xCenter = x + radius, yCenter = y + radius;
    ctx.beginPath();
    ctx.moveTo(xCenter + radius, yCenter);
    for (let i = 1; i <= 8; i++) {
      let angle = i * Math.PI / 4;
      ctx.quadraticCurveTo(xCenter, yCenter,
                          xCenter + Math.cos(angle) * radius,
                          yCenter + Math.sin(angle) * radius);
    }
    ctx.fillStyle = "gold";
    ctx.fill();
  }
  star(440, 20);

let isDrawing = false;

function draw(e){
    if (!isDraw) return;
    ctx.beginPath();
}

canvas.addEventListener('click', (e) => {
    isDrawing =  true;
    draw()
})