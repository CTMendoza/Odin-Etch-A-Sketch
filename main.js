// create a grid of 16 divs 
const container = document.querySelector('#container');

function createSquare (size) {
    for(i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.flexBasis = `calc(100%/${size})`
        square.className= 'square';
        // create listener for hover event on each "square" div
        square.addEventListener('mouseover', () => {
            // change "square" backgroundColor when hovered over
            square.style.backgroundColor = 'black';
            toggleDraw(square);
        })
        container.appendChild(square);
    }
    
}

createSquare(16);


//  function toggleDraw (square) {
//     if(!square.style.backgroundColor) {
//         square.style.backgroundColor = 'black';
//     }
//     //  else square.style.backgroundColor = '';
//  }
// select button

const button =document.querySelector('#replace-grid');
// listen for click event on button and then call prompt() so that user can fill in grid size
button.addEventListener('click', () => {
let size =prompt('Choose a grid size');
if(size > 100) {
    alert('Grid size cannot be greater than 100, choose again please :)')
}
//container.innerHTML=''; removes the original grid
container.innerHTML = '';
//calling createSquare again while passing user's prompt info creates a new grid
createSquare(Number(size));
})
