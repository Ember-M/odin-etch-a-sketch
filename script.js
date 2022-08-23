let gridContainer = document.querySelector("#gridContainer");
let colorVar = "black"
let colorButton = document.querySelector('.colorButton');
colorButton.addEventListener('click', ()=>{
    colorVar = prompt('What color would you like?', 'black')
})


let populateGrid = (x) => {
    if (x>64){
        x = 64
    }
    else if (x<1){
        x = 1
    }
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (i=0; i<(x*x); i++){
        gridContainer.appendChild(document.createElement('button'));
    }
    
}
populateGrid(16);

let buttonColor = function(){
    let allButtons = document.querySelectorAll('button');
    allButtons.forEach((button) =>{
        button.addEventListener(['mouseover'], () =>{
            button.style.backgroundColor = colorVar;

    })})}
buttonColor()

let screenClear = function() {
    let allButtons = document.querySelectorAll('button');
    allButtons.forEach((button) =>{
        button.style.backgroundColor = 'white';
    })
}

let sizeButton = document.querySelector(".sizeButton");
sizeButton.addEventListener('click', () =>{
    gridContainer.textContent = "";
    populateGrid(prompt("What size do you want the grid? Enter between 1 and 64!", '16'));
    buttonColor();
})

let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', ()=>{
screenClear();
buttonColor();
})


