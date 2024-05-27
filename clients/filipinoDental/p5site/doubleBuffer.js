var leftBuffer;
var rightBuffer;

function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(windowWidth, 400*2);
    // Create both of your off-screen graphics buffers
    leftBuffer = createGraphics(windowWidth, 400);
    rightBuffer = createGraphics(windowWidth, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, 400*2);
}

function draw() {
    // Draw on your buffers however you like
    drawLeftBuffer();
    drawRightBuffer();
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, 0, 400);
}

function drawLeftBuffer() {
    leftBuffer.background(0, 0, 0);
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(32);
    leftBuffer.text("This is the left buffer!", 50, 50);
}

function drawRightBuffer() {
    rightBuffer.background(255, 100, 255);
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(32);
    rightBuffer.text("This is the right buffer!", 50, 50);
}
