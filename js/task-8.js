const inputRef = document.querySelector('#controls input');

const buttonRenderRef = document.querySelector('button[data-action="render"]');

const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

let inputCurrentValue = '';

const getCurrentValue = () => inputCurrentValue = inputRef.valueAsNumber;

const randColor = function () {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const createBoxes = (amount) => {
    
    for (let i = 0; i < amount; i += 1) {
        boxesRef.insertAdjacentHTML('beforeend', `<div>${i + 1}</div>`);
    };

    const divStyle = document.querySelector('#boxes div');
    divStyle.style.width = `30px`;
    divStyle.style.height = `30px`;

    const divStyleAll = document.querySelectorAll('#boxes div');

    divStyleAll.forEach(item => {
        item.style.backgroundColor = randColor();
        // item.style.width = (() => `${30 + 10}px`);
        // item.style.height = `30px`;
    });
};

const destroyBoxes = () => {
    const divDestroy = document.querySelectorAll('#boxes div');
    divDestroy.forEach(item => item.remove());
};

buttonRenderRef.addEventListener('click', () => { getCurrentValue(); createBoxes(inputCurrentValue) });

buttonDestroyRef.addEventListener('click', () => destroyBoxes());