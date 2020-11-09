// const quantityOfCategoryItem = document.querySelector('#categories').children.length;

const category = document.querySelector('#categories');

console.log(`В списке ${category.childElementCount} категории`)

const categoryItemTitles = document.querySelectorAll('h2');

const getItemTitle = categoryItemTitles.forEach(({ textContent }) => console.log(`Категория: ${textContent}\nКоличество элементов:`));

const 


