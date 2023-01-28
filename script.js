const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// boolean to check play or pause
let isPlaying = false;

// play function
function playSong() {
  isPlaying = true;
  music.play();
}

// pause function
function pauseSong() {
  isPlaying = false;
  music.pause();
}

// play or pause button event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
