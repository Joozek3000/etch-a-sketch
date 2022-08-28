const grid = document.getElementById('grid');
const size = document.getElementById('size');
const eraser = document.getElementById('eraser');
const color = document.getElementById('color');
const gridBorder = document.getElementById('grid-borders');

// grid
function makeGrid(number) {
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 0; i < number * number; i++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).id = 'box';
    cell.classList.add('border');
    cell.classList.add('box');
    cell.style.backgroundColor = 'white';
  }
  size.textContent = `${number} x ${number}`;
}
makeGrid(16);

// drawing on hover
color.addEventListener('click', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = 'black') : null;
  });
});

// erase functionality
eraser.addEventListener('click', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = 'white') : null;
  });
});

// grid borders
const allBoxes = document.querySelectorAll('.box');
gridBorder.addEventListener('click', function () {
  allBoxes.forEach((box) => {
    box.classList.toggle('no-border');
    box.classList.toggle('border');
  });
});
