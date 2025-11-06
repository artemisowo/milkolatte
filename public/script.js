// function for index.html
function back() {
            window.history.back();
        };

// home.html audio control
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const music = new Audio()
const songName = document.getElementById('song-name')
const currentAlbum = document.getElementById('album-link')
const currentAlbumCover = document.getElementById('album-cover')

const playButton = document.getElementById('play-audio')
const pauseButton = document.getElementById('pause-audio')
const returnButton = document.getElementById('return-audio')

const progressSelector = document.getElementById('progressBar')
const volumeSelector = document.getElementById('volumeControl')

const playlist = [
    {title: 'Sacrifice - London After Midnight', src: 'https://file.garden/aQuHYdBl00DLzR5d/sacrifice.mp3', album_link: 'https://www.youtube.com/watch?v=sWcyxztky0g&list=RDEM7ieRqnS0MvMUf9rwkd5uaw&index=1', album_cover: 'https://files.catbox.moe/zyne5y.jpg'},
    {title: 'Danse Vampyr - Inkubus Sukkubus', src: 'https://file.garden/aQuHYdBl00DLzR5d/danse_vampyr.mp3', album_link: 'https://www.youtube.com/watch?v=soxmwY6rRhA&list=OLAK5uy_n5vNc_cOIdnwIZJlWNidIsuJTA9QF85y4&index=2', album_cover: 'https://files.catbox.moe/uy4g6h.jpg'},
    {title: 'Happy House - Siouxsie And The Banshees', src: 'https://file.garden/aQuHYdBl00DLzR5d/Happy%20House%20-%20Siouxsie%20%26%20The%20Banshees.mp3', album_link: 'https://www.youtube.com/watch?v=37PKcsvD0hg&list=PL4EmnILFoFZwHsDMG_GzM_2BXEl-pzB9D&index=1', album_cover: 'https://files.catbox.moe/1oydhu.jpg'},
    {title: 'Demon - London After Midnight', src: 'https://file.garden/aQuHYdBl00DLzR5d/Demon%20-%20London%20After%20Midnight.mp3', album_link: 'https://www.youtube.com/watch?v=sWcyxztky0g&list=RDEM7ieRqnS0MvMUf9rwkd5uaw&index=1', album_cover: 'https://files.catbox.moe/zyne5y.jpg'},
    {title: 'Israel - Siouxsie And The Banshees', src: 'https://file.garden/aQuHYdBl00DLzR5d/Israel%20-%20Siouxsie%20%26%20The%20Banshees.mp3', album_link: 'https://www.youtube.com/watch?v=ZDsqnkHepTg&list=PL4EmnILFoFZwHsDMG_GzM_2BXEl-pzB9D&index=12', album_cover: 'https://files.catbox.moe/1oydhu.jpg'},
    {title: 'Republic - London After Midnight', src: 'https://file.garden/aQuHYdBl00DLzR5d/Republic%20-%20London%20After%20Midnight.mp3', album_link: 'https://www.youtube.com/watch?v=sWcyxztky0g&list=RDEM7ieRqnS0MvMUf9rwkd5uaw&index=1', album_cover: 'https://files.catbox.moe/zyne5y.jpg'},
    {title: 'Cities in Dust - Siouxsie And The Banshees', src: 'https://file.garden/aQuHYdBl00DLzR5d/Cities%20In%20Dust%20-%20Siouxsie%20%26%20The%20Banshees.mp3', album_link: 'https://www.youtube.com/watch?v=Ruq33iAxL5k&list=PLfimnwaZdumj7L08gjvh3NY2bhSZrXBDu&index=4', album_cover: 'https://files.catbox.moe/4pj8rr.jpg'},
]

// variable for updating playlist song
let currentIndex = getRandomInt(0, playlist.length)

// setting music config
music.volume = 0.2

// updates song everytime currentIndex changes
const updateSong = () => {
    music.src = playlist[currentIndex].src
    songName.innerText = playlist[currentIndex].title
    currentAlbum.href = playlist[currentIndex].album_link
    currentAlbumCover.src = playlist[currentIndex].album_cover
    music.play()
}

// function for skipping to next song
const skipSong = () => {
    if (currentIndex == (playlist.length - 1)) {
        currentIndex = 0
        updateSong()
    } else {
        currentIndex += 1
        updateSong()
    }
}

// autoplays music whenever content loads
window.onload = () => {
    updateSong()
}

// changes to next song when current one finishes
music.addEventListener('ended', () => {
    skipSong()
})

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

returnButton.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = playlist.length - 1
        updateSong()
    } else {
        currentIndex -= 1
        updateSong()
    }
})

// If the page is restored from bfcache

window.addEventListener('pageshow', () => {
  // try to resume playback if the document was restored
  music.play().catch(()=>{});
});