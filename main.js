video="";
status="";

function preload(){
    video=createVideo('');
    video.hide();

}
function setup(){
    canvas= createCanvas(450,320);
    canvas.center();
}
function draw(){
    image(video,0,0,450,320);
}
function start(){
    objectDetector = ml5.objectDetecter('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
