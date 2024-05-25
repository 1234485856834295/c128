song="";
right_wristx=0;
left_wristx=0;
right_wristy=0;
left_wristy=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(560,250);

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}

function hi(){
    song.play();
}

function modelLoaded(){
    console.log("ITS WORKIN");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        left_wristx=results[0].pose.leftWrist.x;
        left_wristy=results[0].pose.leftWrist.y;

        right_wristx=results[0].pose.rightWrist.x;
        right_wristy=results[0].pose.rightWrist.y;

        console.log("left wrist x="+left_wristx+",left wrist y="+left_wristy+",right wrist x="+right_wristx+",right wrist y="+right_wristy);
    }
}

