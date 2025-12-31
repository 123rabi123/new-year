const questions = [
  "Do you love me? ❤️",
  "Will you always stay with me? 🥺",
  "Am I special to you? 😜",
  "Will you miss me everyday? 😌",
  "Can I steal all your kisses? 💋",
  "Will you marry me one day? 💍"
];

let i = 0;

function yesLove() {
  i++;

  kissEffect();

  if (i < questions.length) {
    document.getElementById("question").innerText = questions[i];
  } else {
    document.getElementById("title").innerText = "😍 I KNEW IT!";
    document.getElementById("question").innerText =
      "Tum mujhe bahut pyaar karti ho ❤️";
    document.getElementById("result").innerText =
      "Happy New Year My Love 🎆💓";

    for (let j = 0; j < 30; j++) firework();
  }
}

/* NO BUTTON RUN 😈 */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
  noBtn.style.left = Math.random()*150-75+"px";
  noBtn.style.top = Math.random()*100-50+"px";
});

/* 🌙 TOGGLE */
function toggleMode(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

/* 🎆 FIREWORK */
function firework(){
  const f=document.createElement("div");
  f.className="firework";
  f.style.left=Math.random()*100+"vw";
  f.style.top=Math.random()*50+"vh";
  document.body.appendChild(f);
  setTimeout(()=>f.remove(),1500);
}

/* 💋 KISS EFFECT */
function kissEffect(){
  const k=document.createElement("div");
  k.className="kiss";
  k.innerText="💋💓";
  k.style.left=Math.random()*100+"vw";
  document.body.appendChild(k);
  setTimeout(()=>k.remove(),2000);
}
