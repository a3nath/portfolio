// const canvas = document.querySelector('.mycanvas');
// const ctx = canvas.getContext('2d'); 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // ctx.beginPath();
// // //starting point
// // ctx.moveTo(10,90);
// // ctx.quadraticCurveTo(60,10,90,90)
// // ctx.lineTo(60,10)
// // ctx.stroke()
// // ctx.closePath()



// let currentAngle = -0.5 * Math.PI
// let radius = 15, xCenter = Math.random() * canvas.width + radius, yCenter = Math.random() * canvas.height + radius;
// let speedX = 150, speedY = 150
// let lastTime = null;

// function frame(time){
//     if (lastTime != null) {
//         updateAnimation(Math.min(100, time - lastTime)/ 1000);
//     }
//     lastTime = time;
//     requestAnimationFrame(frame)
// }

// requestAnimationFrame(frame)

// let img = document.querySelector('.svg')


// function updateAnimation(step){
//     xCenter += step * speedX;
//     yCenter += step * speedY;
//     if (xCenter < radius || xCenter > canvas.width - radius) speedX = -speedX;
//     if (yCenter < radius || yCenter > canvas.height - radius) speedY = -speedY;
//     ctx.beginPath();
//     ctx.moveTo(xCenter + radius, yCenter);
//     for (let i = 1; i <= 8; i++) {
//     //   let angle = i * Math.PI / 4;
//     //   ctx.quadraticCurveTo(xCenter, yCenter,
//     //                       xCenter + Math.cos(angle) * radius,
//     //                       yCenter + Math.sin(angle) * radius);
//     }
//     ctx.fillStyle = "gold";
//     ctx.fill();
// }
// let spriteH = canvas.height - 100, spriteW = canvas.width - 100

// canvas.addEventListener(onclick, console.log('clicked'))




// // for (let width = 0;  width <= canvas.width; width+= 10) {
// //     star(width,Math.random() * canvas.height )
// // }

// // function play(){
// //     let scale = 0.5
// //        for (let width = 0;  width <= canvas.width; width+= 10) {
// //     star(width * scale,Math.random() * canvas.height )
// //     }
        
// // }

// // function animate(){
// //     play()
// //     requestAnimationFrame(animate)
// // }

// // animate()

// // star(Math.random() * canvas.width ,Math.random() * canvas.height)


// //rotate the stars
// //animation

  


// // function draw(e){
// //     if (!isDraw) return;
// //     ctx.beginPath();
// // }

// // canvas.addEventListener('click', (e) => {
// //     isDrawing =  true;
// //     draw()
// // })


// const blobs = document.querySelectorAll(".svg");
// let last = 0;
// let changeSpeed = 1500;
// let rAF;

// function render(now) {
//   if (!last || now - last >= changeSpeed) {
//     last = now;
//     blobs.forEach(blob => {
//       blob.style.borderTopLeftRadius = `${random()}px ${random()}px`;
//       blob.style.borderTopRightRadius = `${random()}px ${random()}px`;
//       blob.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
//       blob.style.borderBottomRightRadius = `${random()}px ${random()}px`;
//     });
//   }
//   rAF = requestAnimationFrame(render);
// }

// const random = () => {
//   return Math.floor((Math.random() * 1000000));
// };

// render(last);

// const root = document.documentElement;

// const widthSlider = document.querySelector("#width-range");
// widthSlider.addEventListener("input", e => {
//   root.style.setProperty('--width', e.target.value + "px");
// })
// const xSlider = document.querySelector("#x-range");
// xSlider.addEventListener("input", e => {
//   root.style.setProperty('--x-speed', e.target.value + "s");
// })
// const ySlider = document.querySelector("#y-range");
// ySlider.addEventListener("input", e => {
//   root.style.setProperty('--y-speed', e.target.value + "s");
// })
// const transitionSlider = document.querySelector("#transition-speed");
// transitionSlider.addEventListener("input", e => {
//   root.style.setProperty('--transition-speed', e.target.value + "s");
// })
// const changeSlider = document.querySelector("#change-speed");
// transitionSlider.addEventListener("input", e => {
//   cancelAnimationFrame(rAF);
//   last = 0;
//   render(last);
//   changeSpeed = e.target.value;
// })


let svgs = document.querySelectorAll('.svg')
svgs.forEach(svg => svg.style.setProperty('--y-speed', Math.min(Math.max(Math.random() * 10,2), 5) +'s'))

let wrapOdd = document.querySelectorAll('.wrap-odd')
wrapOdd.forEach(wrap => wrap.style.setProperty('--wrap-left',  Math.min(Math.max(Math.random() * 100,20), 80) +'px'))

let wrapEven = document.querySelectorAll('.wrap-even')
wrapEven.forEach(wrap => wrap.style.setProperty('--wrap-right',  Math.min(Math.max(Math.random() * 100,20), 80) +'px'))



// let wrapLeft = document.querySelector('.svg-7')

// console.log(wrapLeft)

// wrapLeft.style.setProperty('--y-speed', bounceLeft +'s');