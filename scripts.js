let isMouseDown = false;

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let squares_on_each_side = parseInt(prompt('Enter the number of squares per side for the new grid (max 100): ', '16'));
    if (!squares_on_each_side ||squares_on_each_side > 100 || squares_on_each_side <= 0) {
        squares_on_each_side = 16;
    }
    resetGrid(squares_on_each_side);
});

window.onload = function () {
    resetGrid(16);
}

function resetGrid(size) {
    const gridContainer = document.querySelector('.container');
    gridContainer.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row')
        for (let j = 0; j < size; j++) {
            square = document.createElement('div')
            square.classList.add('square')
            // square.style.width = `${100/size - 0.75}vh`
            // square.style.height = `${100/size - 0.75}vh`
            square.addEventListener('mousedown', function(e) {
                let red = Math.floor(Math.random()*257)
                let green = Math.floor(Math.random() * 257)
                let blue = Math.floor(Math.random() * 257)
                e.target.classList.add('colored');
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
                isMouseDown = true;
            });
            square.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
            square.addEventListener('mouseover', function (e) {
                if (isMouseDown){
                    let red = Math.floor(Math.random() * 257)
                    let green = Math.floor(Math.random() * 257)
                    let blue = Math.floor(Math.random() * 257)
                    e.target.classList.add('colored');
                    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
                }
            });
            gridRow.appendChild(square)
        }
        gridContainer.appendChild(gridRow)
    }
}