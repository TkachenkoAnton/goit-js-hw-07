const inputRef = document.querySelector('#controls input');

const buttonRenderRef = document.querySelector('button[data-action="render"]');

const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

const inputValue = inputRef.valueAsNumber;

const createBoxes = (amount) => {
    [...boxesRef.children].map(item => {
            const div = document.createElement('div');
            div.innerHTML = item;
            boxesRef.append(div);
    });
};

const destroyBoxes = () => { };

buttonRenderRef.addEventListener('click', () => createBoxes(inputValue))