let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 10;



window.onload = function() {
    console.log("Hello World!");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
     }, 1000/framesPerSecond);
}

function callBoth() {
    moveEverything();
    drawEverything();
}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

function drawEverything() {

    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 210, 10, 100);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballX, 100, 10, 10);
}