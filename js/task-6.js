const inputRef = document.querySelector('#validation-input')

const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
        inputRef.classList.add('invalid');
        inputRef.classList.replace('valid', 'invalid');
    
    if (inputRef.value.length === dataLength) {

        inputRef.classList.add('valid');
        inputRef.classList.replace('invalid', 'valid')

    } else if (inputRef.value.length === 0) {

        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');

    }
})