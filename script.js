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
let radius = 15, xCenter = 100 + radius, yCenter = 300 + radius;
let speedX = 100, speedY = 60
let lastTime = null;

function frame(time){
    if (lastTime != null) {
        updateAnimation(Math.min(100, time - lastTime)/ 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame)
}

requestAnimationFrame(frame)


function updateAnimation(step){
    xCenter += step * speedX;
    yCenter += step * speedY;
    if (xCenter < radius || xCenter > canvas.width - radius) speedX = -speedX;
    if (yCenter < radius || yCenter > canvas.width - radius) speedY = -speedY;
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



// for (let width = 0;  width <= canvas.width; width+= 10) {
//     star(width,Math.random() * canvas.height )
// }

// function play(){
//     let scale = 0.5
//        for (let width = 0;  width <= canvas.width; width+= 10) {
//     star(width * scale,Math.random() * canvas.height )
//     }
        
// }

// function animate(){
//     play()
//     requestAnimationFrame(animate)
// }

// animate()

star(Math.random() * canvas.width ,Math.random() * canvas.height)


//rotate the stars
//animation

  


function draw(e){
    if (!isDraw) return;
    ctx.beginPath();
}

canvas.addEventListener('click', (e) => {
    isDrawing =  true;
    draw()
})