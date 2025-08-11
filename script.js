function goToCakePage() {
  window.location.href = "cake.html";
}


function cutCake() {
  const button = document.getElementById("cutButton");
  button.disabled = true;
  button.innerText = "🎉 Cutting...";

celebrate();


  const balloonColors = ['#ff4d4d', '#4da6ff', '#33cc33', '#ffff66', '#ff99cc', '#9966ff', '#ff6600'];
  const container = document.getElementById("balloonContainer");

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (4 + Math.random() * 2) + "s";
    balloon.style.animationDelay = (Math.random() * 0.5) + "s";
    container.appendChild(balloon);
  }

  setTimeout(() => {
    window.location.href = "home.html";
  }, 6000);

}
