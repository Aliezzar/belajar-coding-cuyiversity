const videoComponent = document.querySelector("video")
function play() {
    console.log("playing")
    videoComponent.play()
}

function pause() {
    console.log('pause')
    videoComponent.pause()
}

function minimize() {
    console.log('minimize')
    videoComponent.requestPictureInPicture()
}