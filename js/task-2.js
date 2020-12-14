const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// ===== Вариант 1 =====

// const li1 = document.createElement('li');
// li1.textContent = ingredients[0];
// const li2 = document.createElement('li');
// li2.textContent = ingredients[1];
// const li3 = document.createElement('li');
// li3.textContent = ingredients[2];
// const li4 = document.createElement('li');
// li4.textContent = ingredients[3];
// const li5 = document.createElement('li');
// li5.textContent = ingredients[4];
// const li6 = document.createElement('li');
// li6.textContent = ingredients[5];

// ingredientsRef.append(li1, li2, li3, li4, li5, li6);

// ===== Вариант 2 =====

const ingredientsArr = ingredients.map(item => {
  const ingredientsLi = document.createElement('li');

  ingredientsLi.textContent = item;

  return ingredientsLi;
});

ingredientsRef.append(...ingredientsArr);
