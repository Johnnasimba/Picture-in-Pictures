const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        console.log('shoops, error here:', error)
    }
}

//On Load 
selectMediaStream();