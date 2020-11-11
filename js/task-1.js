// const quantityOfCategoryItem = document.querySelector('#categories').children.length;

const category = document.querySelector('#categories');

console.log(`В списке ${category.childElementCount} категории`)

const categoryItem = document.querySelectorAll('.item');

const getItem = categoryItem.forEach(item =>
console.log(`Категория: ${item.children[0].textContent}\nКоличество элементов: ${item.children[1].childElementCount}`));

// const getItem = categoryItem.forEach(item =>
// console.log(`Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${item.lastElementChild.childElementCount}`));

