// create a grid of 16 divs 
const container = document.querySelector('#container');

for(i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className= 'square';
    container.appendChild(square);
}