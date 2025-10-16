var video = document.getElementById("video");
//play and pause functions
function playPause(){
    if (video.paused){
        video.play();
     } 
    else{
        video.pause();
    }
}

//back and forward 10 seconds but not going below zero seconds which is the start
function back10(){
    video.currentTime = Math.max(0, video.currentTime - 10);
}

function forward10(){
    video.currentTime = Math.min(153, video.currentTime + 10);
}