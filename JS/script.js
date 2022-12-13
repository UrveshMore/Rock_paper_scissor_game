const selectedAll = document.querySelectorAll(".selelct");
const playerChoose = document.querySelector(".player-choose");
const computerChoose = document.querySelector(".computer-choose");

let playerWins = 0;
let computerWins = 0;
let draws = 0;
// counter condition
let cheakWin=document.querySelector('.whoWin');
let hide=document.querySelector('whoWin');
function playerWin() {
  playerWins++;
  cheakWin.classList.remove('hidden');
  cheakWin.textContent = "You win...🏆🎊";
  cheakWin.style.backgroundColor = '#53c606d6';
}
function computerWin() {
  computerWins++;
  cheakWin.classList.remove('hidden');
  cheakWin.textContent = "You Lose...☹";
  cheakWin.style.backgroundColor = '#ec1b1be9';
}
function draw() {
  draws++;
  cheakWin.classList.remove('hidden');
  cheakWin.textContent = "Draw...🙌";
  cheakWin.style.backgroundColor = '#f6f20ad6';
}
//Generate Random Number
function randomNumber() {
  let number = Math.floor(Math.random() * 5) + 1;
  return number;
}
// computer choices
for (let i = 0; i < selectedAll.length; i++) {
  console.log(selectedAll.length);
  selectedAll[i].addEventListener("click", function () {
    switch (randomNumber()) {
      case 1:
        document.querySelector(".computer-choose").textContent =
          "computer choose rock";
        break;
      case 2:
        document.querySelector(
          ".computer-choose"
        ).textContent = `Computer choose paper`;
        break;
      case 3:
        document.querySelector(".computer-choose").textContent =
          "Computer choose sessior";
        break;
      case 4:
        document.querySelector(".computer-choose").textContent =
          "Computer choose lizard";
        break;
      case 5:
        document.querySelector(".computer-choose").textContent =
          "Computer choose spock";
        break;
      default:
        console.log("none");
    }
    //player choices
    if (selectedAll[i] == selectedAll[0]) {
      document.querySelector(
        ".player-choose"
      ).textContent = `You choose rock`;
    } else if (selectedAll[i] == selectedAll[1]) {
      document.querySelector(
        ".player-choose"
      ).textContent = `You choose paper`;
    } else if (selectedAll[i] == selectedAll[2]) {
      var playerSe = (document.querySelector(".player-choose").textContent =
        "You choose sessior");
      console.log(playerSe);
    } else if (selectedAll[i] == selectedAll[3]) {
      document.querySelector(".player-choose").textContent =
        "You choose lizard";
    } else if (selectedAll[i] == selectedAll[4]) {
      document.querySelector(".player-choose").textContent =
        "You choose spock";
    }
//split string
    const comChoose = computerChoose.textContent.valueOf();
    const computer = comChoose.split(" ");
    const plaChoose = playerChoose.textContent.valueOf();
    const player = plaChoose.split(" ");

    //switch case for cheaking winner
    switch (player[2]) {
      case "rock":
        if (player[2] == computer[2]) {
          draw();
        } else if (player[2] == "rock" && computer[2] == "paper") {
          computerWin();
        } else if (player[2] == "rock" && computer[2] == "spock") {
          computerWin();       
        } else {
          playerWin();    
        }
        break;
      case "paper":
        if (player[2] == computer[2]) {
          draw(); 
        } else if (player[2] == "paper" && computer[2] == "sessior") {
          computerWin();
        } else if (player[2] == "paper" && computer[2] == "spock") {
          computerWin();
        } else {
          playerWin();
        }
        break;
      case "sessior":
        if (player[2] == computer[2]) {
          draw();
          console.log("drow");
        } else if (player[2] == "sessior" && computer[2] == "rock") {
          computerWin();
        } else if (player[2] == "sessior" && computer[2] == "spock") {
          computerWin();   
        } else {
          playerWin(); 
        }
        break;
      case "lizard":
        if (player[2] == computer[2]) {
          draw();
        } else if (player[2] == "lizard" && computer[2] == "rock") {
          computerWin();
        } else if (player[2] == "lizard" && computer[2] == "paper") {
          computerWin();
        } else {
          playerWin();  
        }
        break;
      case "spock":
        if (player[2] == computer[2]) {
          draw();
        } else if (player[2] == "spock" && computer[2] == "lizard") {
          computerWin();
        } else if (player[2] == "spock" && computer[2] == "paper") {
          computerWin(); 
        } else {
          playerWin(); 
        }
        break;
    }
    document.querySelector(".ps").textContent = playerWins;
    document.querySelector(".cs").textContent = computerWins;
  });
}

