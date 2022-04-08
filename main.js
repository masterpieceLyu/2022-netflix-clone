/* Intro slide in, slide back */
let maintext = document.querySelector(".signInCmt");
let maintext2 = document.querySelector(".signInCmtsm");
let maintext3 = document.querySelector(".signInBtn");

window.addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 350) {
    maintext.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext.style.animation = "leftslide 1.3s ease-in-out";
  }
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 350) {
    maintext2.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext2.style.animation = "leftslide 1.3s ease-in-out";
  }
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 350) {
    maintext3.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext3.style.animation = "leftslide 1.3s ease-in-out";
  }
});

/* Search animation */
const searchIcon = document.querySelector(".searchIcon");
const search = document.querySelector(".search");
searchIcon.onclick = function () {
  search.classList.toggle("active");
};

/* Toggling Vedio */
function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.currentTime = 0;
}

/*
const movie = document.querySelector(".movie");
const trailer = document.querySelector("trailer");

movie.onclick = function () {
  trailer.classList.toggle("active");
};
*/
