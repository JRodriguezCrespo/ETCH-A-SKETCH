var style = getComputedStyle(document.body)
createCanvas(style.getPropertyValue('--columns-row'))
var colorPick

const btnBlack = document.querySelector('#black');
btnBlack.addEventListener('click', () => {
    colorPick = 'black'
    console.log(colorPick)
})

const btnRainbow = document.querySelector('#rainbow');
btnRainbow.addEventListener('click', () => {
    colorPick = 'rainbow'
    console.log(colorPick)
})

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    createCanvas(style.getPropertyValue('--columns-row'))
})



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
                }else if(colorPick === 'rainbow'){
                    this.style.backgroundColor = 'blue';

                }else{
                    this.style.backgroundColor = 'red'; 
                    console.log(colorPick)
                }
            }
        });
    }
}






function changeSize(size){
    console.log(size)
    createCanvas(size)
}
