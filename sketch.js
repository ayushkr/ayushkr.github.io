
// Keep list of DOM elements for clearing later when reloading
var listItems = [];
var database,points_db;
var drawing= [];
var idLast;
var pointG;
var screenWidtha=360*2;
var screenHeighta=640*2;
var ball;
var playerCodeInput ;
var playerThis;
var playerCode=0;
var playerName="---";
let  input,inputName;
function setup() {
    stroke(100);
    strokeWeight(4);
    var config = {
        apiKey: "AIzaSyAShXegJqba0Xzv4GnFIEPhUfXhxdB5gmY",
        authDomain: "game-of-covid.firebaseapp.com",
        databaseURL: "https://game-of-covid.firebaseio.com",
        projectId: "game-of-covid",
        storageBucket: "game-of-covid.appspot.com",
        messagingSenderId: "842788870899",
        appId: "1:842788870899:web:b0ab8093609280fc973586",
        measurementId: "G-PG3YBSVF4H"
    };
    firebase.initializeApp(config);
    database = firebase.database();

    createCanvas(screenWidtha,screenHeighta);
    // Start loading the data
    loadFirebase();
input
inputName
    inputName = createInput();
    inputName.position(0, 0);
    
    input = createInput();
    input.position(inputName.x + inputName.width, 0);

    let  button = createButton('submit');
    button.position(input.x + input.width, 0);
    button.mousePressed(mySelectEvent);

    //   playerCode= getItem('playerCode');

}

function mySelectEvent() {
    console.log('changed ');
    playerCode= input.value();
    playerName=inputName.value();
    //    storeItem('playerCode', playerCode);
}

function loadFirebase() {
    points_db = database.ref("points");
    points_db.on("value", gotData_p, errData);   
}
var pDown,pUp;

function mouseDragged() {
    line(pDown.x,pDown.y,mouseX,mouseY);
}
function mouseMoved(){
}

function mouseReleased() {
    playerCode= input.value();
    console.log("playerCode="+playerCode); 
    //     var p = database.ref("points/now").set({name:""}, finished);
    //      background(120);
    var pUp={
        x:mouseX,
        y:mouseY
    }
    var dx=-pDown.x+pUp.x;
    var dy=-pDown.y+pUp.y;

    line(pDown.x,pDown.y,pUp.x,pUp.y);
    //       var p = database.ref("points/-M3_xLa1WJebYcMcK5dF").set(point, finished);
    if(playerThis){

        if(abs(dx)>10){
            playerThis.x=playerThis.x+dx/10;
        }
        if(abs(dy)>10){
            playerThis.y=playerThis.y+dy/10;
        }

        var magnet=10;
        if((abs(ball.x-playerThis.x) <magnet) && (abs(ball.y-playerThis.y) <magnet) ){

            var xsign=dx/Math.abs(dx);
            var ysign=dy/Math.abs(dy);
            if(xsign==0) xsign=1;
            if(ysign==0) ysign=1;

            ball.x=ball.x+ xsign*  magnet;
            ball.y=ball.y+ysign*magnet;
            var p = database.ref("points/ball").set(ball, finished);
        } 

        if((ball.x<=0) || (ball.x>=screenWidtha) ||  (ball.y<=0) || (ball.y>=screenHeighta) ){
            ball.x=screenWidtha/2;
            ball.y=screenHeighta/2;
        }
        playerThis.name=playerName;
        var p = database.ref("points/p_"+playerCode).set(playerThis, finished);

        //            drawGroundEtc();

    }


}

function mousePressed() {
    pDown={
        x:mouseX,
        y:mouseY
    }
}

var points;
function gotData_p(data) {
    points = data.val();
    drawGroundEtc();




}

function drawGroundEtc(){
    background(120);
    //    drawPost
    {
        rect(screenWidtha/2-50,0,100,50);

    }

    // Grab all the keys to iterate over the object
    var keys = Object.keys(points);

    // Loop through array
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var point = points[key];
        console.log(key+"="+JSON.stringify(point));
        idLast=key;

        if(key==("ball")){
            ball=point;
            //          console.log("key="+key);
            fill(255);
            stroke(255);
            ellipse(point.x, point.y, 10, 10);
        }else{

            if(key=="p_"+playerCode){
                console.log("reading player ");
                playerThis=point;
                stroke(240,1,1);
            }

            fill(100,10,199);
            ellipse(point.x, point.y, 20, 20);

            stroke(200);
            fill(200);
            textAlign(CENTER);
            var name=split(key, '_')[1];
            //          
            name=point.name;
            if(name)
                text(name,point.x, point.y+3);  
        }

        pointG=point; 
    }

}

function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
}

// Reload the data for the page
function finished(err) {
    if (err) {
        console.log("ooops, something went wrong.");
        console.log(err);
    } else {
        console.log('Data saved successfully');
    }
}
//storeItem('myText', myText);
