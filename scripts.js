let isMouseDown = false;

const gridContainer = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row')
    for (let j = 0; j < 16; j++) {
        square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mousedown', () => {
            isMouseDown = true;
        });
        square.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        square.addEventListener('mouseover', function (e) {
            if (isMouseDown){
                e.target.classList.add('colored');
            }
        });
        gridRow.appendChild(square)
    }
    gridContainer.appendChild(gridRow)
}