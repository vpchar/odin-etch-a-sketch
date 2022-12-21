let gridSize = 100; //original grid as per assignment

let step2createGrid = () => {
    const body = document.getElementsByTagName('body');
    body[0].innerHTML = '<div class="grid"></div>';
    const grid = document.getElementsByClassName('grid');
    let str = '';
    for(i=0;i<gridSize;i++){
        str+=`<div class="row" id="row-${i}">`; //new line
            for(j=0;j<gridSize;j++){
                str+=`<div class="col" id="row-${i}-col-${j}"></div>`;
            }
        str+=`</div>`; //new line
    }
    grid[0].innerHTML=str;
}

// step1createRepository
step2createGrid()