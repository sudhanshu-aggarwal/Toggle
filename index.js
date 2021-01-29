let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let tgl = document.getElementById("tgl");
let le = document.getElementById("left");
let ri = document.getElementById("right");
let ce = document.getElementById("center");
let ul = document.getElementById("tglist");
let left = 0;
let inter;
let toggle = true;
let widLe = 0;
let widRi = 0;
let marTop = -800;

tgl.addEventListener("click", () => {
  if (toggle) {
    d1.style.transform = "rotate(50deg)";
    d1.style.transition = "0.5s";
    d1.style.transformOrigin = "10%";
    d3.style.transform = "rotate(-50deg)";
    d3.style.transition = "0.5s";
    d3.style.transformOrigin = "10%";
    le.style.visibility = "visible";
    ri.style.visibility = "visible";
    ce.style.visibility = "visible";
    hide = setInterval(forHide, 1);
    leftDiv = setInterval(animateLeft, 10);
    rightDiv = setInterval(animateRight, 10);
    marUl = setInterval(animateUl, 1);
    toggle = !toggle;
  } else {
    d1.style.transform = "rotate(0deg)";
    d3.style.transform = "rotate(0deg)";
    hideLeft = setInterval(hideLe, 10);
    hideRight = setInterval(hideRi, 10);
    hideUl = setInterval(hideul, 1);
    show = setInterval(forShow, 1);
    toggle = !toggle;
  }
});

function forHide() {
  if (left == -30) {
    clearInterval(hide);
    d2.style.visibility = "hidden";
  } else {
    left = left - 3;
    d2.style.transform = "translateX(" + left + "px)";
  }
}

function forShow() {
  if (left == 0) {
    clearInterval(show);
  } else {
    d2.style.visibility = "visible";
    left = left + 3;
    d2.style.transform = "translateX(" + left + "px)";
  }
}

function animateLeft() {
  if (widLe >= 30) {
    clearInterval(leftDiv);
  } else {
    widLe = widLe + 0.8;
    le.style.width = widLe + "%";
  }
}

function animateRight() {
  if (widRi >= 30) {
    clearInterval(rightDiv);
  } else {
    widRi = widRi + 0.8;
    ri.style.width = widRi + "%";
  }
}

function hideRi() {
  if (widRi <= 0) {
    clearInterval(hideRight);
    ri.style.visibility = "hidden";
  } else {
    widRi = widRi - 0.8;
    ri.style.width = widRi + "%";
  }
}

function hideLe() {
  if (widLe <= 0) {
    clearInterval(hideLeft);
    le.style.visibility = "hidden";
  } else {
    widLe = widLe - 0.8;
    le.style.width = widLe + "%";
  }
}

function animateUl() {
  if (marTop >= 0) {
    clearInterval(marUl);
  } else {
    marTop += 10;
    ul.style.marginTop = marTop + "px";
  }
}

function hideul() {
  if (marTop <= -800) {
    clearInterval(hideUl);
    ce.style.visibility = "hidden";
  } else {
    marTop -= 10;
    ul.style.marginTop = marTop + "px";
  }
}
