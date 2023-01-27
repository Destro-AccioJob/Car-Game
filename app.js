let score = document.querySelector('.score');
let gameScreen = document.querySelector('.gameScreen');
let startScreen = document.querySelector('.startScreen');


startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);


let controls = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function keyPressed(e) {
    console.log("Pressed",e.key);
    if(controls.e.key !== undefined){
      controls[e.key] = true;
    //   console.log(controls);
    }
}

function keyReleased(e) {
    console.log("Released",e.key);
    if(controls.e.key !== undefined){
        controls[e.key] = false;
        // console.log(controls);
      }
}

// startScreen.classList.add('hide');
function startGame() {
     console.log("Clicked")
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');

     // create a car

     let car = document.createElement('div');
     car.setAttribute('class', 'car');
     car.innerText = "Car";
     car.style.left = "100px";
     car.style.top = "100px";
     car.style.backgroundColor = "red";
     gameScreen.appendChild(car);
     
 

}