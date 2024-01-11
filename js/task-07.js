const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
    const size = input.value + 'px';
    text.style.fontSize = size;
})