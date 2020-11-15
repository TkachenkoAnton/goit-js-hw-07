const inputRef = document.querySelector('#controls input');

const buttonRenderRef = document.querySelector('button[data-action="render"]');

const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

let inputCurrentValue = '';

const getCurrentValue = () => inputCurrentValue = inputRef.valueAsNumber;

const createBoxes = (amount) => {
    
    for (let i = 0; i < amount; i += 1) {
        boxesRef.insertAdjacentHTML('beforeend', `<div>${i + 1}</div>`);

        // const divStyleAll = document.querySelector('#boxes').children;
        //     divStyleAll[0].style.backgroundColor = 'grey';
        //     divStyleAll[0].style.width = `30px`;
        //     divStyleAll[0].style.height = `30px`;

        // [...divStyleAll].forEach(item => {
        //     item.style.backgroundColor = 'grey';
        //     item.style.width = `${divStyleAll[0].clientWidth + 10}px`;
        //     item.style.height = `30px`;
        //     console.log(divStyleAll)
        // });
    };

};

const destroyBoxes = () => {
    const divDestroy = document.querySelectorAll('#boxes div');
    divDestroy.forEach(item => item.remove());
};

buttonRenderRef.addEventListener('click', () => { getCurrentValue(); createBoxes(inputCurrentValue) });

buttonDestroyRef.addEventListener('click', () => destroyBoxes());