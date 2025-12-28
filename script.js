const lights = document.querySelectorAll(".tree-light, .garland-light");
const ornaments = document.querySelectorAll(".ball");

const randomize = (collection) => {
  collection.forEach((el) => {
    const delay = Math.random() * 2;
    const duration = 1.6 + Math.random() * 1.5;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${duration}s`;
  });
};

randomize(lights);
randomize(ornaments);

ornaments.forEach((ball) => {
  ball.style.animation = "sway 3s ease-in-out infinite";
  ball.style.animationDelay = `${Math.random() * 2}s`;
});

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes sway {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(4px) rotate(2deg); }
  }
`;
document.head.appendChild(styleSheet);
