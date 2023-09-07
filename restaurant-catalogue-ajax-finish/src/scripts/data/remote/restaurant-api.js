const BASE_URL = 'https://restaurant-api.dicoding.dev';

const API_ENDPOINT = {
  LIST: `${BASE_URL}/list`,
  SMALL_IMAGE(pictureId) {
    return `${BASE_URL}/images/small/${pictureId}`;
  },
  MEDIUM_IMAGE(pictureId) {
    return `${BASE_URL}/images/medium/${pictureId}`;
  },
  LARGE_IMAGE(pictureId) {
    return `${BASE_URL}/images/large/${pictureId}`;
  },
};

export async function getAllRestaurants() {
  const response = await fetch(API_ENDPOINT.LIST);
  const { restaurants } = await response.json();

  return restaurants;
}

export function getRestaurantSmallImage(pictureId) {
  return API_ENDPOINT.SMALL_IMAGE(pictureId);
}

export function getRestaurantMediumImage(pictureId) {
  return API_ENDPOINT.MEDIUM_IMAGE(pictureId);
}

export function getRestaurantLargeImage(pictureId) {
  return API_ENDPOINT.LARGE_IMAGE(pictureId);
}
