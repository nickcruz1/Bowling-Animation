// Function to start bowling ball animation 
function startRoll() {
 let ball = document.getElementById("bowlingBall");
   setTimeout(movePins, 2000);
  ball.style.transition = "3s";
  ball.style.transform = "translateY(-200px)";
}

// Function for Pins Animation 
function movePins() {
  
    let pin1 = document.getElementById("pin1");
    pin1.style.transform = "translate(-10px)";
    pin1.style.transition = "1s";
    pin1.style.transform = "rotate(360deg)";
     
     let pin2 = document.getElementById("pin2");
     pin2.style.transform = "translate(-10px)";
     pin2.style.transition = "1s";
     pin2.style.transform = "rotate(360deg)";
     
   }