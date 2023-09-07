import '../styles/style.css';

import {
  getAllRestaurants,
  getRestaurantMediumImage,
} from './data/remote/restaurant-api';
import { renderRestaurantsList } from './dom-manipulation.js';

(async () => {
  try {
    const restaurants = (await getAllRestaurants()).map((item) => ({
      ...item,
      pictureUrl: getRestaurantMediumImage(item.pictureId),
    }));

    renderRestaurantsList(restaurants);
  } catch (error) {
    alert('Oh no! Something wrong happens.');
    console.error(error);
  }
})();
