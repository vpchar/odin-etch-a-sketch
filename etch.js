let gridSize = 16; //original grid as per assignment
let colorMode = 1;

let step0createBody = () => {
    const body = document.getElementsByTagName('body');
    //step 4 asks for button, step 2 wants grid:
    body[0].innerHTML = 
    '<div class="buttons">'
        +'<button class="gridBtn" id="prompt">grid size</button> '
        +'<button class="gridBtn" id="setBlack">black </button> '
        +'<button class="gridBtn" id="setRandom">random </button> '
        +'<button class="gridBtn" id="set10">+10% </button> '
        +'<button class="gridBtn" id="eraser">eraser</button> '
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
            if(colorMode==1){//change to black
                div.style.backgroundColor = 'black'
            } 
            else if(colorMode==4){//eraser
                div.style.backgroundColor = 'transparent';
            } 
            else if(colorMode==2){//random color
                let o = Math.round, r = Math.random, s = 255;
                div.style.backgroundColor =  'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';            
            }
            else if(colorMode==3){ //+10% on each pass
                let col = div.style.backgroundColor;
                //console.log(col);
                switch(col){
                    case('rgba(0, 0, 0, 0.1)'):
                        col = 'rgba(0, 0, 0, 0.2)';
                        break;
                    case('rgba(0, 0, 0, 0.2)'):
                        col = 'rgba(0, 0, 0, 0.3)';
                        break;
                    case('rgba(0, 0, 0, 0.3)'):
                        col = 'rgba(0, 0, 0, 0.4)';
                        break;
                    case('rgba(0, 0, 0, 0.4)'):
                        col = 'rgba(0, 0, 0, 0.5)';
                        break;
                    case('rgba(0, 0, 0, 0.5)'):
                        col = 'rgba(0, 0, 0, 0.6)';
                        break;
                    case('rgba(0, 0, 0, 0.6)'):
                        col = 'rgba(0, 0, 0, 0.7)';
                        break;
                    case('rgba(0, 0, 0, 0.7)'):
                        col = 'rgba(0, 0, 0, 0.8)';
                        break;
                    case('rgba(0, 0, 0, 0.8)'):
                        col = 'rgba(0, 0, 0, 0.9)';
                        break;
                    case('rgba(0, 0, 0, 0.9)'):
                        col = 'rgba(0, 0, 0, 0.99)';
                        break;
                    case('rgba(0, 0, 0, 0.99)'):
                        //empty
                        break;
                    default:
                        col = 'rgba(0, 0, 0, 0.1)';
                }
                div.style.backgroundColor = col;
            }
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
        if(colorMode==4)colorMode=1; //reset for forgotten eraser
    }
});

//set it black (default)
const blackBtn = document.getElementById('setBlack');
blackBtn.addEventListener('click',(e)=>{
    colorMode = 1;
});
//set it random
const randBtn = document.getElementById('setRandom');
randBtn.addEventListener('click',(e)=>{
    colorMode = 2;
});
//set it 10%+
const btn10 = document.getElementById('set10');
btn10.addEventListener('click',(e)=>{
    colorMode = 3;
});
//set it to eraser
const eraseBtn = document.getElementById('eraser');
eraseBtn.addEventListener('click',(e)=>{
    colorMode = 4;
});