let maintext = document.querySelector("h1");
let maintext2 = document.querySelector("h2");
let maintext3 = document.querySelector(".signInBtn");

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  console.log(value);

  if (value > 400) {
    maintext.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext.style.animation = "leftslide 1.3s ease-in-out";
  }
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 400) {
    maintext2.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext2.style.animation = "leftslide 1.3s ease-in-out";
  }
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value > 400) {
    maintext3.style.animation = "slideback 1.3s ease-in-out forwards";
  } else {
    maintext3.style.animation = "leftslide 1.3s ease-in-out";
  }
});
