let counterValue = 0;

const getValue = () => ref.valueRef.textContent = counterValue;

const increment = () => {
    counterValue += 1;

    getValue();
};

const decrement = () => {
    counterValue -= 1;

    getValue();
};

const ref = {
    valueRef: document.querySelector('#value'),
    incrementBtnRef: document.querySelector('button[data-action="increment"]'),
    decrementBtnRef: document.querySelector('button[data-action="decrement"]'),
};

ref.incrementBtnRef.addEventListener('click', () => increment())
ref.decrementBtnRef.addEventListener('click', () => decrement())