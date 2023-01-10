const dots = document.querySelectorAll('.dot');
const techName = document.querySelector('.title-tech');
const techDesc = document.querySelector('.description');
const techImage = document.querySelector('.images');
const elements = [];

fetch('http://localhost:3000/space')
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.technology.length; i++) {
      elements.push(data.technology[i]);
    }
  });

dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dot.classList.add('active');
    techName.innerHTML = elements[dot.dataset.num - 1].name;
    techDesc.innerHTML = elements[dot.dataset.num - 1].description;
    techImage.src = elements[dot.dataset.num - 1].images.portrait;
  });
});
