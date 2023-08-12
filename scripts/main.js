const buttonEl = document.querySelector('.button-for-cat');
const catImgEl = document.querySelector('.cat-img');

buttonEl.addEventListener('click', ()=>{
    catImgEl.style.display = 'block';
    catImgEl.style.zIndex = '1';
    catImgEl.style.transform = "translateY(-110px)";
    const rect = catImgEl.getBoundingClientRect();
    let absoluteTop = rect.top;
    let absoluteLeft = rect.left;
    console.log(absoluteTop,absoluteLeft)
})


 

var mouseX, mouseY;

catImgEl.addEventListener("mousemove", function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});


var eyeDistance = 30; // Припустима відстань між очима
var eyeCenterX = catImgEl.offsetLeft + eyeDistance;
var eyeCenterY = catImgEl.offsetTop + eyeDistance;

var deltaX = mouseX - eyeCenterX;
var deltaY = mouseY - eyeCenterY;
var angle = Math.atan2(deltaY, deltaX);

var leftEye = document.getElementById("leftEye");
var rightEye = document.getElementById("rightEye");
var eyeRotation = angle * (180 / Math.PI); // Перетворення радіан в градуси

leftEye.style.transform = "rotate(" + eyeRotation + "deg)";
rightEye.style.transform = "rotate(" + eyeRotation + "deg)";





