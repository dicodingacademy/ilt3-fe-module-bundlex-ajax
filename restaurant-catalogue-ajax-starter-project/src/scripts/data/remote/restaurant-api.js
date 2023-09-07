export async function getAllRestaurants() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './restaurants.json');
  xhr.send();

  if (xhr.status < 200 && xhr.status >= 300) {
    throw new Error(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const { restaurants } = JSON.parse(xhr.responseText);
    return restaurants;
  }
}
