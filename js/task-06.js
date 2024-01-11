const input = document.querySelector('#validation-input');
const length = parseInt(input.getAttribute('data-length'), 10);

const checkLength = () => {
    if (input.value.length !== length) {
       input.classList.add('invalid');
       input.classList.remove('valid');
    }
    else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
};
input.addEventListener('blur', checkLength);