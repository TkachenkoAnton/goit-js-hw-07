const inputRangeRef = document.querySelector('#font-size-control');

const spanTexRef = document.querySelector('#text')

inputRangeRef.addEventListener('input', () => { spanTexRef.style.fontSize = `${inputRangeRef.valueAsNumber}px` })