// const quantityOfCategoryItem = document.querySelector('#categories').children.length;

const category = document.querySelector('#categories');

console.log(`В списке ${category.childElementCount} категории`)

const categoryItemTitle = document.querySelectorAll('h2');

const getItemTitle = [...categoryItemTitle].map(({ textContent }) => [`Категория: ${textContent}`]);


console.log(getItemTitle)