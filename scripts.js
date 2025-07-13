const gridContainer = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row')
    for (let j = 0; j < 16; j++) {
        square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', function (e) {
            e.target.classList.add('colored');
        });
        gridRow.appendChild(square)
    }
    gridContainer.appendChild(gridRow)
}