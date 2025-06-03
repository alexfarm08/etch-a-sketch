// set up grid 
let dimensions = 16;

function makeGrid(dimensions) {
    const container = document.querySelector(`.container`);

    for (let i = 0; i < dimensions; i++) {
        const parentDiv = document.createElement('div.parent');
        parentDiv.classList.add('parentDiv');
        for (let j = 0; j < dimensions; j++) {
            let div = document.createElement('div.col');
            div.classList.add('col');
            parentDiv.appendChild(div);
        }
        container.appendChild(parentDiv);
    }
}
//const div = document.createElement('div.row');
//div.classList.add('row');
console.log(makeGrid(dimensions));