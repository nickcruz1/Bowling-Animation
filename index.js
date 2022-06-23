// Function to start bowling ball animation 
function startRoll() {
 let ball = document.getElementById("bowlingBall");
   setTimeout(movePins, 2000);
  ball.style.transition = "3s";
  ball.style.transform = "translateY(-200px)";
}
