const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const music = document.querySelector("audio");
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
  image.src = "https://source.unsplash.com/random/300×400/?song";
}

// on loading - selecting first song
loadSong(songs[4]);
