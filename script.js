const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const music = document.querySelector("audio");

const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const currentTimeEle = document.getElementById("current-time");
const durationEle = document.getElementById("duration");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// array of songs to insert
const songs = [
  {
    name: "audio1",
    displayName: "Audio Clip One",
    artist: "Artist One",
  },
  {
    name: "audio2",
    displayName: "Audio Clip Two",
    artist: "Artist Two",
  },
  {
    name: "audio3",
    displayName: "Audio Clip Three",
    artist: "Artist Three",
  },
  {
    name: "audio4",
    displayName: "Audio Clip Four",
    artist: "Artist Four",
  },
  {
    name: "audio5",
    displayName: "Audio Clip Five",
    artist: "Artist Five",
  },
  {
    name: "audio6",
    displayName: "Audio Clip Six",
    artist: "Artist Six",
  },
];
// boolean to check play or pause
let isPlaying = false;

// play function
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// pause function
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// play or pause button event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// function that add songs in DOM elements
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `./music/${song.name}.mp3`;
  image.src = `./img/${song.name}.jpg`;
}
// current song update DOM
let songIndex = 0;

// previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
// next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// on loading first time, selecting first song
loadSong(songs[songIndex]);

// update progress bar and time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // console.log(duration, currentTime);
    // update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    // console.log(progressPercent);
    progress.style.width = `${progressPercent}%`;
    // calculate display duration of song
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // delaying switching element duration to avoid NaN
    if (durationSeconds) {
      durationEle.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // calculate current display duration of song
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEle.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}
// set progress bar function
function setProgressBar(e) {
  // console.log(e);
  const width = this.clientWidth;
  const clickValue = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickValue / width) * duration;
}
// event listeners for buttons
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

music.addEventListener("ended", nextSong);
