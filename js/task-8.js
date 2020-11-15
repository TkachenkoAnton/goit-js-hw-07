const inputRef = document.querySelector('#controls input');

const buttonRenderRef = document.querySelector('button[data-action="render"]');

const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

let inputCurrentValue = '';

const getCurrentValue = () => inputCurrentValue = inputRef.valueAsNumber;

const createBoxes = (amount) => {

    for (let i = 0; i < amount; i += 1) {
        const divCreate = document.createElement('div');
        divCreate.append(i + 1);
        boxesRef.append(divCreate);    
    };
};

const destroyBoxes = () => {
    const divDestroy = document.querySelectorAll('#boxes div');
    divDestroy.forEach(item => item.remove());
};

buttonRenderRef.addEventListener('click', () => { getCurrentValue(); createBoxes(inputCurrentValue) });

buttonDestroyRef.addEventListener('click', () => destroyBoxes());