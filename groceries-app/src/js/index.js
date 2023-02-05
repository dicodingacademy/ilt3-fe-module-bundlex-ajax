import '../css/styles.css';
import Groceries from './groceries.js';

window.addEventListener('DOMContentLoaded', () => {
  const groceriesList = document.getElementById('groceriesList');

  function init() {
    const groceries = Groceries.getItems();

    groceries.forEach((grocery) => {
      const el = Groceries.createItem(grocery);
      groceriesList.appendChild(el);
    });
  }

  const groceriesForm = document.getElementById('groceriesForm');
  const groceriesName = document.getElementById('groceriesName');
  const groceriesQuantity = document.getElementById('groceriesQuantity');

  groceriesForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const el = Groceries.createItem({
      name: groceriesName.value,
      quantity: groceriesQuantity.value,
    });
    groceriesList.appendChild(el);

    groceriesName.value = '';
    groceriesQuantity.value = '';
  });

  init();
});
