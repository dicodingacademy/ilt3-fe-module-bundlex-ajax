import { getAllRestaurants } from './data/local/restaurant-json.js';
import { renderRestaurantsList } from './dom-manipulation.js';

(() => {
  const restaurants = getAllRestaurants();

  renderRestaurantsList(restaurants);
})();
