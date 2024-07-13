// create a grid of 16 divs 
const container = document.querySelector('#container');

for(i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className= 'square';
    container.appendChild(square);
}

 function toggleDraw (square) {
    if(!square.style.backgroundColor) {
        square.style.backgroundColor = 'black';
    }
    //  else square.style.backgroundColor = '';
 }
// create listener for hover event on each "square" div
const squares = container.querySelectorAll('div.square');
squares.forEach((square) => { square.addEventListener('mouseover', () => {
    // change "square" backgroundColor when hovered over
    // square.style.backgroundColor = 'black';
    toggleDraw(square);
})});