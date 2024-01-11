const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const number = document.querySelector('#value');

let calk = 0;
btnMinus.addEventListener('click', () => {
    calk -= 1;
    number.textContent = calk;
});

btnPlus.addEventListener('click', () => {
    calk += 1;
    number.textContent = calk;
})