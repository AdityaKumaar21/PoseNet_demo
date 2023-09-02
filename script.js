let capture;
let posenet;
// let noseX,noseY,rightEyeX,rightEyeY,leftEyeX,leftEyeY;
// let leftEarX,leftEarY,rightEarX,rightEarY,rightShoulderX,rightShoulderY;
let singlePose,skeleton;

function setup(){
    createCanvas(800,500);
    capture=createCapture(VIDEO);
    capture.hide();
    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
        // noseX=singlePose.pose.nose.x;
        // noseY=singlePose.pose.nose.y;

        // rightEyeX=singlePose.pose.rightEye.x;
        // rightEyeY=singlePose.pose.rightEye.y;

        // leftEyeX=singlePose.pose.leftEye.x;
        // leftEyeY=singlePose.pose.leftEye.y;

        // leftEarX=singlePose.pose.leftEar.x;
        // leftEarY=singlePose.pose.leftEar.y;

        // rightEarX=singlePose.pose.rightEar.x;
        // rightEarY=singlePose.pose.rightEar.y;

        // rightShoulderX=singlePose.pose.rightShoulder.x;
        // rightShoulderY=singlePose.pose.rightShoulder.y;
    }
    // console.log(noseX+" "+noseY);
}
function modelLoaded(){
    console.log('Model has loaded');
}
// function getRand(min,max){
//     return Math.random()*(max-min)+min;
// }
function draw(){
   image(capture,0,0);
    fill(255,0,0);
    // ellipse(noseX,noseY,20);
    // ellipse(rightEyeX,rightEyeY,20);
    // ellipse(leftEyeX,leftEyeY,20);
    // ellipse(leftEarX,leftEarY,20);
    // ellipse(rightEarX,rightEarY,20);
    // ellipse(rightShoulderX,rightShoulderY,20);
    if(singlePose){
        for(let i=0;i<singlePose.keypoints.length;i++){
            ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,30);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y)
        }
    }
    // line(200,200,200,200);
    // triangle(100,200,200,400,150,450);
}