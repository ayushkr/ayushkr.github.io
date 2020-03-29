// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Get input from user
var fruitInput;
var totalInput;

// Keep list of DOM elements for clearing later when reloading
var listItems = [];
var database,points_db;
var drawing= [];
var idLast;
var pointG;

var ball;

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
 createCanvas(720, 400);
  // Start loading the data
  loadFirebase();
}

function loadFirebase() {
    points_db = database.ref("points");
  points_db.on("value", gotData_p, errData);
    
}
var pDown,pUp;

function mouseDragged() {
//     background(120);
  line(pDown.x,pDown.y,mouseX,mouseY);
//    pointG.x=pointG.x+10;
    
//     var p = database.ref("points/-M3_xLa1WJebYcMcK5dF").set(pointG, finished);
}



function mouseMoved(){
     
    
}

function mouseReleased() {
//      background(120);
     var pUp={
            x:mouseX,
            y:mouseY
        }
   
    
    var dx=-pDown.x+pUp.x;
     var dy=-pDown.y+pUp.y;
    console.log(dx);
     line(pDown.x,pDown.y,pUp.x,pUp.y);
    
//       var p = database.ref("points/-M3_xLa1WJebYcMcK5dF").set(point, finished);
    if(ball){
    if(abs(dx)>10){
        ball.x=ball.x+dx/10;
    }
     if(abs(dy)>10){
        ball.y=ball.y+dy/10;
    }

        
          
             var p = database.ref("points/ball").set(ball, finished);
        
}
   
    
}

function mousePressed() {
    pDown={
            x:mouseX,
            y:mouseY
        }

}



function gotData_p(data) {
    
      background(120);
  var points = data.val();
  // Grab all the keys to iterate over the object
  var keys = Object.keys(points);


  // Loop through array
  for (var i = 0; i < keys.length; i++) {
      
    var key = keys[i];
       var point = points[key];
      console.log("point="+JSON.stringify(point));
       idLast=key;
      
      if(key==("ball")){
          ball=point;
//          console.log("key="+key);
          fill(150,2,2);
           stroke(150,2,2);
            ellipse(point.x, point.y, 10, 10);
      }else{
          fill(100,10,199);
          
//           rect(point.x+5, point.y, 30, 5);
             ellipse(point.x, point.y, 10, 10);
          stroke(200);
          fill(200);
          textAlign(CENTER);
      text(point.name,point.x, point.y-10);
          
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

