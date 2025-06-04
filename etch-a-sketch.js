// set up grid 
let dimensions = 16;

// function makes grid
function makeGrid(dimensions) {
    const container = document.querySelector(`.container`);

    // loops through dimensions and makes new div to make grid
    for (let i = 0; i < dimensions; i++) {
        const parentDiv = document.createElement('div.parent');
        parentDiv.classList.add('parentDiv');
        for (let j = 0; j < dimensions; j++) {
            let div = document.createElement('div.col');
            div.classList.add('col');
            // sets up event listener for hover
            div.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = 'black';
            })
            parentDiv.appendChild(div);
        }
        container.appendChild(parentDiv);
    }

}

// calls the make grid function to make grid of specified size
makeGrid(dimensions);

const gridBtn = document.querySelector('#sizeBtn');

gridBtn.addEventListener('click', event => {
    var removeCanvas = document.querySelectorAll('.parentDiv');

    // asks user for to input num 0 - 100
    do {
        dimensions = prompt("Enter a number for the hight and width of your canvas over 0 and under 100");
    } while(dimensions < 0 || dimensions > 100);

    // removes old grid
    for (let i = 0; i < removeCanvas.length; i++) {
        removeCanvas[i].remove();
    }

    // makes new grid
    makeGrid(dimensions);
});