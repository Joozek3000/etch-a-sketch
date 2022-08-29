const grid = document.getElementById('grid');
const size = document.getElementById('size');
const eraser = document.getElementById('eraser');
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const gridBorder = document.getElementById('grid-borders');
const clear = document.getElementById('clear');

// grid
function makeGrid(number) {
  number = number || 16;
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 0; i < number * number; i++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).id = 'box';
    cell.classList.add('border');
    cell.classList.add('box');
    cell.style.backgroundColor = 'white';
    cell.addEventListener('mouseover', function (e) {
      e.target !== grid ? (e.target.style.backgroundColor = 'black') : null;
    });
  }
  size.textContent = `${number} x ${number}`;
}
makeGrid();

// color on hover
color.addEventListener('input', function () {
  let newColor = document.getElementById('input-color').value;
  console.log(newColor);
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = newColor) : null;
  });
});

//rainbow functionality
const randomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};

rainbow.addEventListener('click', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = randomColor()) : null;
    console.log(e.target.style.backgroundColor);
  });
});

// erase functionality
eraser.addEventListener('click', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target !== grid ? (e.target.style.backgroundColor = 'white') : null;
  });
});

// grid borders
gridBorder.addEventListener('click', function () {
  const allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach((box) => {
    box.classList.toggle('no-border');
    box.classList.toggle('border');
  });
});

// clear button
clear.addEventListener('click', function () {
  const elem = document.querySelectorAll('.box');
  elem.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
});

// size button
size.addEventListener('click', function () {
  const elem = document.querySelectorAll('.box');
  elem.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
  let input = prompt(`Enter canvas size (below 100)`);
  if (isNaN(input) || input > 100 || input <= 0 || input == '') {
    window.alert(`Please enter a number between 0 and 100`);
    return;
  } else makeGrid(input);
  console.log(input);
});
