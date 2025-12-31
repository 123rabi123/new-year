function yesLove() {
  document.getElementById("result").innerHTML =
    "😍 Mujhe pata tha! Tum meri hi ho ❤️";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 120 - 60 + "px";
  noBtn.style.top = Math.random() * 80 - 40 + "px";
});
