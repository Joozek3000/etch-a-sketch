const grid = document.getElementById('grid');
const sizer = document.getElementById('sizer');
const eraser = document.getElementById('eraser');
const color = document.getElementById('color');

// grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.className = 'row';
  for (let j = 0; j < 16; j++) {
    let box = document.createElement('div');
    box.className = 'box';
    row.appendChild(box);
  }
  document.getElementById('grid').appendChild(row);
}

// change color on mouseover
color.addEventListener('mouseover', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
  });
});

// erase functionality
eraser.addEventListener('click', function () {
  grid.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'white';
  });
});
