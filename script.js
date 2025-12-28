const lights = Array.from(document.querySelectorAll(".tree-light"));

function twinkle() {
  lights.forEach((light) => {
    const isOn = Math.random() > 0.4;
    light.classList.toggle("on", isOn);
  });
}

setInterval(twinkle, 700);
twinkle();
