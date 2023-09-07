import '../styles/style.css';

import { getAllRestaurants } from './data/local/restaurant-json';
import { renderRestaurantsList } from './dom-manipulation.js';

(async () => {
  const restaurants = await getAllRestaurants();

  renderRestaurantsList(restaurants);
})();
