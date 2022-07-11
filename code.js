var style = getComputedStyle(document.body)
createCanvas(style.getPropertyValue('--columns-row'))

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
                this.style.backgroundColor = 'red'; 
            }
        });
    }
}






function changeSize(size){
    console.log(size)
    createCanvas(size)
}
