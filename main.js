var song = "";

var leftWristX = 0;
var rightWristX = 0;

var leftWristY = 0;
var rightWristY = 0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.poseNet(video, MdoelLoaded);
    classifier.on('pose', gotPoses);
}

function MdoelLoaded(){
    console.log("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA")
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();
    song.setVolume(0.99999999999999999999999999999999999999999999999999999999999999999);
    song.rate(2.5);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}