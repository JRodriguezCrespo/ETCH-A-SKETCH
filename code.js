var style = getComputedStyle(document.body)
createCanvas(style.getPropertyValue('--columns-row'))
var colorPick = 'black'

const gridSize = document.querySelector('#range')
gridSize.addEventListener('input', function() {
    document.getElementById('grimSize-label').innerHTML = `Grid size: ${gridSize.value} x ${gridSize.value}`
})

const btnBlack = document.querySelector('#black');
btnBlack.addEventListener('click', () => {
    colorPick = 'black'
    console.log(colorPick)
    btnBlack.classList.add('btn-selected')
    btnRainbow.classList.remove('btn-selected')
    btnEraser.classList.remove('btn-selected')
})

const btnRainbow = document.querySelector('#rainbow');
btnRainbow.addEventListener('click', () => {
    colorPick = 'rainbow'
    console.log(colorPick)
    btnRainbow.classList.add('btn-selected')
    btnBlack.classList.remove('btn-selected')
    btnEraser.classList.remove('btn-selected')
})

const btnEraser = document.querySelector('#eraser');
btnEraser.addEventListener('click', () => {
    colorPick = 'white'
    console.log(colorPick)
    btnEraser.classList.add('btn-selected')
    btnBlack.classList.remove('btn-selected')
    btnRainbow.classList.remove('btn-selected')
})

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('mousedown', () => {
    createCanvas(style.getPropertyValue('--columns-row'))
    btnClear.backgroundColor = 'orange';
})

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}


function createCanvas(size){
    var canvas = document.getElementById("canvas");
    canvas.innerHTML = '';

    let x = size**2;
    let i = 0;

    document.documentElement.style.setProperty('--columns-row', size);
    for(i = 0; i < x; i++){
        var div = document.createElement('div');
        document.getElementById('canvas').appendChild(div);
        div.addEventListener('mousemove', function(event)
        {
            if(event.buttons == 1){
                if(colorPick === 'black'){
                    this.style.backgroundColor = 'black';    
                }
                if(colorPick === 'rainbow'){
                    this.style.backgroundColor = randomColor();
                }
                if(colorPick === 'white'){
                    this.style.backgroundColor = 'white';
                }
            }
        });
    }
}






function changeSize(size){
    createCanvas(size)
}
