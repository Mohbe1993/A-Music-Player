let Prog = document.getElementById("Prog");
let song = document.getElementById("song");
let crtI = document.getElementById("crtI");

song.onloadedmetadata = function () {
  Prog.max = song.duration;
  Prog.value = song.currentTime;
};

song.ontimeupdate = function () {
  Prog.value = song.currentTime;
};

function playPause() {
  if (crtI.classList.contains("fa-pause")) {
    song.pause();
    crtI.classList.remove("fa-pause");
    crtI.classList.add("fa-play");
  } else {
    song.play();
    crtI.classList.add("fa-pause");
    crtI.classList.remove("fa-play");
  }
}

Prog.onchange = function () {
  song.currentTime = Prog.value;
  song.play();
  crtI.classList.add("fa-pause");
  crtI.classList.remove("fa-play");
};

song.onended = function () {
  Prog.value = song.duration;
  crtI.classList.remove("fa-pause");
  crtI.classList.add("fa-play");
};
