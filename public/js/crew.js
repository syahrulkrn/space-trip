const dots = document.querySelectorAll('.dot');
const crewTitle = document.querySelector('.command');
const crewName = document.querySelector('.crew-name');
const crewDesc = document.querySelector('.crew-desc');
const image = document.querySelector('.image');
let elements = [];
fetch('http://localhost:3000/space')
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  });

dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dot.classList.add('active');
    crewTitle.innerHTML = elements[dot.dataset.num - 1].role;
    crewName.innerHTML = elements[dot.dataset.num - 1].name;
    crewDesc.innerHTML = elements[dot.dataset.num - 1].bio;
    image.src = elements[dot.dataset.num - 1].images.webp;
  });
});
