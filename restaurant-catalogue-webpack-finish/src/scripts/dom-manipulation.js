export function renderRestaurantsList(restaurants) {
  const restaurantsListElement = document.querySelector('#restaurantsList');

  restaurants.forEach((restaurant) => {
    const restaurantElement = document.createElement('article');
    restaurantElement.classList.add('restaurant-item');

    restaurantElement.innerHTML = `
      <img src="${restaurant.pictureUrl}" alt="${restaurant.name}">
      <div class="restaurant-item__detail">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
      </div>
    `;

    restaurantsListElement.appendChild(restaurantElement);
  });
}
