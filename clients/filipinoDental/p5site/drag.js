
function sketch_div1(p) {
    p.preload = function () {
        img1 = p.loadImage('assets/bricks.jpg');
        logo = p.loadImage('assets/logo2.png');
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, 400);
        p.smooth();
        p.noLoop();
    };

    p.draw = function () {
//        p.background(100,200,200,10);
        p.clear();
//        p.rect(10, 10, 100, 100);
        p.image(logo, 0, 5);
//        p.ellipse(30, 100, 30, 30);
        button.draw(p);
    };
    p.mousePressed = function () {
        button.mousePressed(p);
        p.draw();
    };

    p.mouseReleased = function () {
        button.mouseReleased(p);
        p.draw();
    };
}


let button = {
    x: 100, y: 100, w: 200, h: 50,
    red: 200, green: 200, blue: 100,
//    let red = 0;
//    let green = 0;
//    let blue = 0;
    draw: function (p) {
        p.fill(this.red, this.green, this.blue, 100);
        p.rect(this.x, this.y, this.w, this.h, 25);
    }
    ,

    mousePressed: function (p) {
        let d = p.dist(p.mouseX, p.mouseY, this.w, this.h);

//        if (d < 100) 
        if ((p.mouseX > this.x) && (p.mouseX < this.x + this.w) && (p.mouseY > this.y) && (p.mouseY < this.y + this.h))
        {
            this.red = 255;
            this.green = 255;
            this.blue = 255;
        }
    },
    mouseReleased: function (p) {


        this.red = p.random(255);
        this.green = p.random(255);
        this.blue = p.random(255);
    }




};



function sketch_div2(p) {

    let bx;
    let by;
    let boxSize = 75;
    let overBox = false;
    let locked = false;
    let xOffset = 0.0;
    let yOffset = 0.0;
    let brick, logo;

    let height2 = 1400;
    let y0 = 0;
//
    p.preload = function () {
        brick = p.loadImage('assets/bricks.jpg');
//         logo = p.loadImage('assets/logo2.png');
    };
//
//
    p.setup = function () {
        p.createCanvas(p.windowWidth, height2);
        bx = p.width / 2.0;
        by = 200 / 2.0;
        p.rectMode(p.RADIUS);
        p.strokeWeight(2);
        p.noLoop();
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, height2);
    };


    p.draw = function () {
//  background(237, 34, 93);
        p.background('#fde5e6');
          p.clear();

        // Test if the cursor is over the box
        if (
                p.mouseX > bx - boxSize &&
                p.mouseX < bx + boxSize &&
                p.mouseY > by - boxSize &&
                p.mouseY < by + boxSize
                ) {
            overBox = true;
            if (!locked) {
                p.stroke(255);
                p.fill(244, 122, 158);
            }
        } else {
            p.stroke(156, 39, 176);
            p.fill(244, 122, 158);
            overBox = false;
        }

        // Draw the box
        p.rect(bx, by, boxSize, boxSize);
        p.image(brick, bx, 17);

    };

    p.mousePressed = function () {
        if (overBox) {
            locked = true;
            p.fill(255, 255, 255);
        } else {
            locked = false;
        }
        xOffset = p.mouseX - bx;
        yOffset = p.mouseY - by;
        p.draw();
    };

    p.mouseDragged = function () {
        if (locked) {
            bx = p.mouseX - xOffset;
            by = p.mouseY - yOffset;
        }
        p.draw();
    };

    p.mouseReleased = function () {
        locked = false;
        p.draw();
    };

    p.mouseWheel = function (event) {
//        p.print(event.delta);
        //move the square according to the vertical scroll amount
//        if (y0 <= 0) {
//            y0 -= event.delta;
//        } else {
//            y0 = 0;
//
//        }
        //uncomment to block page scrolling
        //return false;
        p.draw();
    };
}

new p5(sketch_div1, 'div1');
new p5(sketch_div2, 'div2');