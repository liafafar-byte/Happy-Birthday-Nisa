let count = 0;

const fire = document.getElementById("fire");
const game = document.getElementById("game");
const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");

fire.addEventListener("click", () => {
  if (count >= 19) return;
  count++;

  // vibrate HP
  if (navigator.vibrate) navigator.vibrate(40);

  // sound
  new Audio("pop.mp3").play();

  // angka random
  const num = document.createElement("div");
  num.textContent = count;
  num.style.position = "absolute";
  num.style.fontSize = "46px";
  num.style.fontWeight = "bold";
  num.style.color = `hsl(${Math.random() * 360},100%,70%)`;
  num.style.left = Math.random() * 200 + 30 + "px";
  num.style.top = Math.random() * 250 + 90 + "px";
  num.style.animation = "pop 0.8s ease-out forwards";

  game.appendChild(num);
  setTimeout(() => num.remove(), 800);

  // api mati pelan-pelan
  fire.style.opacity = 1 - count / 19;

  // pindah frame
  if (count === 19) {
    setTimeout(() => {
      frame1.classList.remove("active");
      frame2.classList.add("active");
      confetti();
    }, 600);
  }
});

// confetti
function confetti() {
  for (let i = 0; i < 35; i++) {
    const c = document.createElement("div");
    c.style.position = "absolute";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.background = `hsl(${Math.random() * 360},100%,60%)`;
    c.style.left = Math.random() * 260 + "px";
    c.style.top = "-10px";
    c.style.animation = "fall 2s linear forwards";
    game.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}
