const container = document.getElementById('container');
const input = document.getElementById('new-grid');
const main= document.getElementById('main');
const refresh = document.getElementById('refresh');
document.addEventListener('DOMContentLoaded', default16);
input.addEventListener('click', numberOfBoxes);
refresh.addEventListener('click', refreshColoring);

function refreshColoring() {
  let boxes = document.getElementsByClassName('box');
  let arrBoxes = Array.from(boxes);
  arrBoxes.forEach(box => {
    box.style.background = 'white';
  })
};

function default16() {
  let box = 16;
  let size = 450/box;
  for (let i=0;i<box*box;i++) {
    let div = document.createElement('div');
    div.className ='box';
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    container.appendChild(div);
    div.addEventListener('mouseenter', function(e) {
    div.style.background = '#36D6E7';
    })
  }
};

function numberOfBoxes() {
  let defaultBox = document.getElementById('container');
  defaultBox.parentElement.removeChild(defaultBox);
  let box = prompt('How many squares per side would you like to play with?', 16);
  let size = 450/box;
  let newContainer = document.createElement('div')
  for (let i=0;i<box*box;i++) {
    let div = document.createElement('div');
    div.className ='box';
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    newContainer.id = 'container';
    newContainer.appendChild(div);
    main.appendChild(newContainer);
    div.addEventListener('mouseenter', function(e) {
    div.style.background = '#36D6E7';
    } 
    )
  }
};


