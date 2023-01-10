const planetNames = document.querySelector('.planet');
const description = document.querySelector('.planet-desc');
const distance = document.querySelector('.distance');
const travel = document.querySelector('.distance-time');
const moon = document.querySelector('.moon');
const europe = document.querySelector('.europe');
const titan = document.querySelector('.titan');
const mars = document.querySelector('.mars');
const image = document.querySelector('.planet-photo');
let elements = [];
fetch('http://localhost:3000/space')
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
      elements.push(data.destinations[i]);
    }
  });

moon.addEventListener('click', () => {
  planetNames.innerHTML = elements[0].name;
  image.src = elements[0].images.webp;
  description.innerHTML = elements[0].description;
});
mars.addEventListener('click', () => {
  planetNames.innerHTML = elements[1].name;
  image.src = elements[1].images.webp;
  description.innerHTML = elements[1].description;
});
europe.addEventListener('click', () => {
  planetNames.innerHTML = elements[2].name;
  image.src = elements[2].images.webp;
  description.innerHTML = elements[2].description;
});
titan.addEventListener('click', () => {
  planetNames.innerHTML = elements[3].name;
  image.src = elements[3].images.webp;
  description.innerHTML = elements[3].description;
});
