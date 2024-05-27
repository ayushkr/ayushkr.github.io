
const colorYellow = '#f1e13a';
const colorRed = '#95171b';
const colorBlue = '#020f70';

const black = '#000000';
const white = '#ffffff';
const colorSet1 = {"bg": colorBlue, "fg": white};
const colorSet2 = {"bg": colorRed, "fg": white};
var doctorPanel;


let c1, doc1, doc2;
let fontGaret;
class Button {

    constructor(str, x, y) {
        this.x = x, this.y = y, this.w = 100, this.h = 25;
        this.color = colorSet1;
        this.str = str;
        this.onClick = function () {
            console.log(this.str);
            doctorPanel.visible = true;
            draw();
        };
    }

    isInside() {
        return    ((mouseX > this.x) && (mouseX < this.x + this.w) && (mouseY > this.y) && (mouseY < this.y + this.h));
    }

    isOk() {
        console.log('aaa');
        return true;
    }

    draw2() {
//        stroke('gray');
        fill(this.color.bg);
        rect(this.x, this.y, this.w, this.h, this.h);
        strokeWeight(0.5);
        stroke(this.color.fg);
        fill(this.color.fg);
        textSize(16);
        textAlign(CENTER, CENTER);
        text(this.str, this.x + this.w / 2, this.y + this.h / 2);
    }

    mousePressed2() {
        if (this.isInside()) {
            this.color = colorSet2;
            this.draw2();
            this.onClick();
        }

    }

    mouseReleased2() {
        if (this.isInside()) {
            this.color = colorSet1;
//            this.draw2();
        }

    }

}

const buttons = new Set();
buttons.add(new Button("Doctors", -15, 100));
buttons.add(new Button("Contact", -15, 128));


const drawables = new Set();
drawables.add(function ()
{
    stroke(black);
    rect(100, 100, 100, 100);
}
);



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

preload = function () {
    logo = loadImage('assets/logo2.png');
    fontGaret = loadFont('assets/Garet-Book.otf');
    fontPoppins = loadFont('assets/Poppins-Regular.ttf');

    doctorPanel = {
        visible: true,
        dia: 140,
        x: 200,
        y: 200,
        doctors: [
            {

                name: 'DR. JOAN PANGANIBAN',
                image: loadImage('assets/doc1.jpg'),
                specialisation: 'General Dentist',

                o: 0
            },
            {
                name: 'DR. DIONI RAMOS',
                image: loadImage('assets/doc2.jpg'),
                specialisation: 'General Dentist',
                o: 0
            },
            {
                name: 'DR. KRISTEL BASOD',
                image: loadImage('assets/doc3.jpg'),
                specialisation: 'General Dentist',
                o: 0
            },
            {
                name: 'DR. CELINE NARON',
                image: loadImage('assets/doc4.jpg'),
                specialisation: 'General Dentist',
                o: 0
            }
        ]
        ,
        draw: function () {
            let xi = this.x;
            this.doctors.forEach(doc => {
                doc.x = xi;
                doc.y = this.y;
                push();
                beginClip();
                circle(xi, this.y, this.dia);
                endClip();

                imageMode(CENTER);
                image(doc.image, xi, this.y);

                stroke('#000000');
                noFill();
                stroke(colorBlue);
                strokeWeight(14);
                circle(xi, this.y, this.dia);
                pop();

                if (doc.showDetails) {
                    strokeWeight(1);
                    stroke(colorBlue);
                    fill(colorBlue);
                    textFont(fontPoppins);
                    text(doc.name, xi, this.y + this.dia / 2 + 10);
                    text(doc.specialisation, xi, this.y + this.dia / 2 + 10+20);
                }

//                xi += this.dia * 2 / 3;
                xi += this.dia;
            });

        }
        ,
        mousePressed: function () {
            this.doctors.forEach(doc => {
                doc.showDetails = false;
                if (dist(mouseX, mouseY, doc.x, doc.y) <= this.dia / 2) {
                    doc.showDetails = true;
                }
            });

        },
        showDetails: function (doc) {
            console.log("Pressed =" + doc.name);

        },

        a: 0
    };


};


setup = function () {
    createCanvas(windowWidth, 400);
    smooth();
    noLoop();
//    colorMode(RGB, 255, 255, 255, 1);
    c1 = colorBlue;
};

draw = function () {
    clear();
//    background(colorYellow);
    imageMode(CORNERS);
    image(logo, 0, 5);
//        p.ellipse(30, 100, 30, 30);
    buttons.forEach(button => {
        button.draw2();
    });

//    drawables.forEach(drawable => {
//        drawable();
//    });
    if (doctorPanel.visible) {
        doctorPanel.draw();
    }

};

mousePressed = function () {
    buttons.forEach(button => {
        button.mousePressed2();
    });

    if (doctorPanel.visible) {
        doctorPanel.mousePressed();
    }

    draw();
};

mouseReleased = function () {
    buttons.forEach(button => {
        button.mouseReleased2();
    });
    draw();
};



