const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeControl = document.querySelector(".volume-control input");
const keyCheckbox = document.querySelector(".checkbox-keys input");

let allkeys = [];
let audio = new Audio("tunes/a.wav"); //by default tune src is "a.wav"

const playTune = (keys) => {
  audio.src = `tunes/${keys}.wav`; //pass audio src as per key-pressed
  audio.play(); //playing audio
  console.log(allkeys);

  const clickedKey = document.querySelector(`[data-key="${keys}"]`); //getting clicked key element
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active"); //removing active class after 150 ms from clicked key
  }, 150);
};

pianoKeys.forEach((keys) => {
  allkeys.push(keys.dataset.key); //push all valid keys to array
  //calling playTune fucntion by passing data-key value as an argunment
  keys.addEventListener("click", () => playTune(keys.dataset.key));
  //   console.log(keys.dataset.key); gives key value
});

const pressedKey = (event) => {
  if (allkeys.includes(event.key)) {
    playTune(event.key);
  }
  //   console.log(event.key);
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const controlVolume = (event) => {
  audio.volume = event.target.value; //passing range slider value as input to audio volume control
};

keyCheckbox.addEventListener("input", showHideKeys);
volumeControl.addEventListener("input", controlVolume);
document.addEventListener("keydown", pressedKey);
