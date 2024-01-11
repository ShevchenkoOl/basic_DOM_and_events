function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const bg = document.querySelector('.widget');
const bgColor = document.querySelector('.color');

btn.addEventListener('click', () => {
bg.style.backgroundColor = getRandomHexColor();
bgColor.textContent = getRandomHexColor();
});