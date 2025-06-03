// set up grid 
const row = 16;
const col = 16;

function makeGrid(row,col) {
    const newDiv = document.querySelector(`.container`);

    for (let i = 0; i < row; i++) {
        let div = document.createElement('div.row');
        div.classList.add('row');
        newDiv.appendChild(div);
        for (let j = 0; j < col; j++) {
            div = document.createElement('div.row');
            div.classList.add('col');
            newDiv.appendChild(div);
        }
    }
}
//const div = document.createElement('div.row');
//div.classList.add('row');
console.log(makeGrid(row,col));