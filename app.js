const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const backColor = document.querySelector("body");
const buttonClick = document.querySelector(".buttonClick");

function changeColor() {
  const startColor = colors[Math.floor(Math.random() * colors.length)];
  const endColor = colors[Math.floor(Math.random() * colors.length)];
  backColor.style.background = `linear-gradient(90deg, ${startColor}, ${endColor})`;
}

buttonClick.addEventListener("click", changeColor);
changeColor();
