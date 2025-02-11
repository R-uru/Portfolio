function setProgress(circle, text, targetPercent, delay) {
  let circumference = 2 * Math.PI * 50;
  let currentPercent = 0;
  let intervalTime = 20;
  let step = targetPercent / (1000 / intervalTime);

  setTimeout(() => {
    let interval = setInterval(() => {
      currentPercent += step;
      if (currentPercent >= targetPercent) {
        currentPercent = targetPercent;
        clearInterval(interval);
      }

      let offset = circumference - (currentPercent / 100) * circumference;
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = offset;
      text.textContent = Math.round(currentPercent) + "%";
    }, intervalTime);
  }, delay);
}

let progressBars = document.querySelectorAll(".progress-ring");
let values = [60, 94, 80, 40, 40, 15];
let delay = 0;
progressBars.forEach((svg, index) => {
  let circle = svg.querySelector(".progress-ring-fill");
  let text = svg.querySelector(".progress-text");
  setProgress(circle, text, values[index], delay);
  delay += 2000;
});


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link.border-sm');
  let activeNav = document.querySelector('.active');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          document.querySelector('.active')?.classList.remove('active');
          link.classList.add('active');
      });

      link.addEventListener('mouseleave', () => {
          document.querySelector('.active')?.classList.remove('active');
          activeNav.classList.add('active');
      });
  });
});
