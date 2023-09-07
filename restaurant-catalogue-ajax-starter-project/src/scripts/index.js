import '../styles/style.css';

import { getAllRestaurants } from './data/remote/restaurant-api';
import { renderRestaurantsList } from './dom-manipulation';

(async () => {
  try {
    const restaurants = getAllRestaurants();

    renderRestaurantsList(restaurants);
  } catch (error) {
    alert('Oh no! Something wrong happens.');
    console.error(error);
  }
})();
