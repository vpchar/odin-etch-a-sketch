let gridSize = 100; //original grid as per assignment

let step0createBody = () => {
    const body = document.getElementsByTagName('body');
    //step 4 asks for button, step 2 wants grid:
    body[0].innerHTML = 
    '<div class="buttons">'
        +'<button class="gridBtn" id="prompt">grid size</button> '
        +'<button class="gridBtn">random color</button> '
        +'<button class="gridBtn">eraser</button> '
    +'</div>'
    +'<div class="grid"></div>';
}
let step2createGrid = () => {
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
step0createBody();
step2createGrid();

//step3 on hover
function attachOnHover(){
    const divs = document.querySelectorAll('.col');
    divs.forEach(div =>{
        //console.log(div.id)
        div.addEventListener('mouseover',(e)=>{
            //attach onHover here
            //console.log(e);
            div.classList.add( 'black' ); //change to black
        });
    });
}
attachOnHover();

//step 4 prompt and resize
const prompt = document.getElementById('prompt');
prompt.addEventListener('click',(e)=>{
    let result = '100';
    result = window.prompt('Grid Size?','100');
    if (result>0 && result<101){ //as per assignment, maximum is 100
        gridSize=result;
        step2createGrid();
        attachOnHover();
    }
})