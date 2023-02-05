import '../css/styles.css';
import Groceries from './groceries.js';

window.addEventListener('DOMContentLoaded', () => {
  function init() {
    const groceriesList = document.getElementById('groceriesList');

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

    Groceries.createItem({
      name: groceriesName.value,
      quantity: groceriesQuantity.value,
    });

    groceriesName.value = '';
    groceriesQuantity.value = '';
  });

  init();
});
