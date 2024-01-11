function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxElem = document.querySelector('#boxes');
const number = document.querySelector('input');
const newBoxes = document.querySelector('button[data-create]');
const deleteBoxes = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  amount = number.value;
  let size = 30;
  for (let i = 0; i < amount; i++){
const ne = document.createElement('div')
ne.style.width = size + 'px';
ne.style.height = size + 'px';
ne.style.backgroundColor = getRandomHexColor();
size += 10;
boxElem.appendChild(ne);
number.value = '';
}};

newBoxes.addEventListener('click', createBoxes);
deleteBoxes.addEventListener('click',()=> {
      while (boxElem.firstChild) {
        boxElem.removeChild(boxElem.firstChild);
    }
});

