let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16,1fr)';
container.style.gridTemplateRow = 'repeat(16,1fr)'

for(i = 0; i<256; i++) {
    let square = document.createElement('div')
    square.className = "grid-square"
    container.appendChild(square);
}