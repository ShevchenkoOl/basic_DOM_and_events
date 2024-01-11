const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const item = document.createElement('li');
  item.classList.add('item')
  item.textContent = element;
  list.appendChild(item)
});
