const Groceries = {
  getItems() {
    const groceries = [
      {
        id: 1,
        name: 'Bread',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Milk',
        quantity: 3,
      },
      {
        id: 3,
        name: 'Eggs',
        quantity: 12,
      },
    ];

    return groceries;
  },

  createItem({ name, quantity }) {
    const li = document.createElement('li');

    li.innerHTML = `${name} - ${quantity}`;

    li.addEventListener('click', () => {
      this.deleteItem({ name });
    });

    return li;
  },

  deleteItem({ name }) {
    const groceriesList = document.getElementById('groceriesList');
    const items = groceriesList.getElementsByTagName('li');

    for (const item of items) {
      if (item.innerHTML.includes(name)) {
        groceriesList.removeChild(item);
      }
    }
  },
};

export default Groceries;
