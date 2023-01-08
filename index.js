let color = "black";

function changeBoard(size) {
    let container = document.querySelector('.container');
    let allSquares = container.querySelectorAll('div');
    allSquares.forEach(div => div.remove())
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRow = `repeat(${size},1fr)`;

    let boardAmount = size * size;
    for(i = 0; i<boardAmount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend" , square);
    }
    
}

function changeBoardSize(newSize) {
    if(newSize >= 2 && newSize <= 100) {
        changeBoard(newSize);
    }else {
        console.log("Size is too big");
    }
    
}

function colorSquare() {
    if(color === "rgb") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else {
        this.style.backgroundColor = color;
    }
    
}

function changeColorTrace (newColor) {
    color = newColor;
}

function resetBoard() {
    let container = document.querySelector('.container');
    let allSquares = container.querySelectorAll('div');
    allSquares.forEach(div => div.style.backgroundColor = 'white')
}