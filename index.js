function randomText() {
  const text = "!@#$%^*()";
  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
}

function rain() {
  const cloud = document.querySelector(".cloud");
  const e = document.createElement("div");
  e.classList.add("drop");
  cloud.appendChild(e);

  const left = Math.floor(Math.random() * 300);
  const size = Math.random() * 1.5;
  const duration = Math.random() * 1;

  e.innerText = randomText();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 1 + duration + "s";

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}

setInterval(rain, 20);
