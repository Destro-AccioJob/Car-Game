let score = document.querySelector('.score');
let gameScreen = document.querySelector('.game');
let startScreen = document.querySelector('.startScreen');


startScreen.addEventListener('click', startGame);

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function keyPressed(event){
    event.preventDefault();
    console.log("key pressed",event.key)
    keys[event.key] = true
    console.log(keys) // something need to taught later
    
    
}


function keyReleased(event){
    event.preventDefault();
    console.log("key released", event.key)
    keys[event.key] = false
    console.log(keys)
}





function startGame() {
    // add or remove a calss from certain element
    //  console.log(startScreen.classList)
     startScreen.classList.add('hide');
     gameScreen.classList.remove('hide');

for(i = 0; i<5; i++){
    let car = document.createElement('div');
    car.innerText = "Car" + " " + i;
    gameScreen.appendChild(car);
  }
 

}