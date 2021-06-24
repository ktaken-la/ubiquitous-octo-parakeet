
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
    leftWristX = results[0].pose.nose.x;
    leftWristY = results[0].pose.nose.y;
	rightWristX = results[0].pose.nose.x;
	rightWristY = results[0].pose.nose.y;
  }
}

function draw() {
	game()

	fill('#ff0000');
	stroke('#ff0000');
	circle(rightWristX,rightWristY,20);
}


















