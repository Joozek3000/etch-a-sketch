const grid = document.getElementById('grid');
const size = document.getElementById('size');
const eraser = document.getElementById('eraser');
const color = document.getElementById('color');
const gridBorder = document.getElementById('grid-borders');
const clear = document.getElementById('clear');

// grid
function makeGrid(number) {
  number = number || 16;
  let cellWidth = 40 / number + 'rem';
  let cellHeight = 40 / number + 'rem';
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 0; i < number * number; i++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).id = 'box';
    cell.classList.add('border');
    cell.classList.add('box');
    cell.style.backgroundColor = 'white';
    cell.style.width = cellWidth;
    cell.style.height = cellHeight;
    cell.addEventListener('mouseover', function (e) {
      e.target !== grid ? (e.target.style.backgroundColor = 'black') : null;
    });
  }
  size.textContent = `${number} x ${number}`;
}
makeGrid();

// drawing on hover
color.addEventListener('input', function () {
  let newColor = document.getElementById('input-color').value;
  console.log(newColor);
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = newColor) : null;
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

// clear button
clear.addEventListener('click', function () {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
});

// size button
// size.addEventListener('click', function () {
//   let number = prompt(`Enter grid size less or equal to 100`);
//   if (number !== Number.isInteger()) {
//     return;
//   } else if (number > 100) {
//     number = prompt(`Enter grid size greater or equal to 100`);
//   }
// });
