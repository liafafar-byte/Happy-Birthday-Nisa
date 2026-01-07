let count = 0;

const fire = document.getElementById("fire");
const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");
const popSound = document.getElementById("popSound");

fire.addEventListener("touchstart", tapFire);
fire.addEventListener("click", tapFire);

function tapFire(e) {
  e.preventDefault();
  if (count >= 19) return;

  count++;
  popSound.currentTime = 0;
  popSound.play();

  if (navigator.vibrate) {
    navigator.vibrate(40);
  }

  showNumber(count);

  if (count === 19) {
    fire.classList.add("fire-off");
    launchConfetti();
    setTimeout(() => {
      frame1.classList.remove("active");
      frame2.classList.add("active");
    }, 1600);
  }
}

function showNumber(num) {
  const span = document.createElement("span");
  span.className = "number";
  span.innerText = num;
  span.style.left = Math.random() * 220 + "px";
  span.style.top = Math.random() * 320 + "px";
  span.style.color = randomColor();
  frame1.appendChild(span);

  setTimeout(() => span.remove(), 800);
}

function randomColor() {
  const colors = ["#FFD700", "#00FFFF", "#FF69B4", "#ADFF2F", "#FF4500"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 260 + "px";
    c.style.background = randomColor();
    frame1.appendChild(c);

    setTimeout(() => c.remove(), 2000);
  }
}
