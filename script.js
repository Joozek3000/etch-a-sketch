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
