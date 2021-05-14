nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    canvas.position(550, 150);
    video.size(400, 400);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
}

function draw(){
    background('lightblue');
   
    background('lightblue');
    document.getElementById("size_text").innerHTML = "size of text will be = "+ difference +"px" ;
    fill('red');
   stroke('green');
   text("aarav", nosex, nosey) ;
   textSize(difference);
  
}


function modelloaded(){
    console.log("model loaded");
}

function gotresult(result){
if(result.length > 0 ){
  console.log(result);  
  nosex = result[0].pose.nose.x; 
  nosey = result[0].pose.nose.y; 
  console.log("nosex = "+nosex);
  console.log("nosey = "+nosey);
  leftwristx= result[0].pose.leftWrist.x;
  rightwristx= result[0].pose.rightWrist.x;

  difference = floor(leftwristx - rightwristx);
}
}