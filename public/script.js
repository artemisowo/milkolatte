// function for index.html
function back() {
            window.history.back();
        };

// home.html audio control

const music = new Audio()
const playButton = document.getElementById('play-audio')
const pauseButton = document.getElementById('pause-audio')

const progressSelector = document.getElementById('progressBar')
const volumeSelector = document.getElementById('volumeControl')

// autoplays music whenever content loads
window.onload = () => {
    music.src = 'music/sacrifice.mp3'
    music.volume = 0.2
    music.play()
}

// make progress bar update when music is playing

music.onloadedmetadata = () => {
    progressSelector.max = music.duration
}

progressSelector.onchange = () => {
    music.currentTime = progressSelector.value
}

music.ontimeupdate = () => {
    progressSelector.value = music.currentTime
}

// updates volume when bar is edited

volumeSelector.onchange = () => {
    music.volume = volumeSelector.value
}

// control buttons

playButton.addEventListener('click', () => {
    music.play()
});

pauseButton.addEventListener('click', () => {
    music.pause()
});