let doors = [0, 0, 0];
let doorsId = ["#one", "#two", "#three"];
let pick = [0, 0, 0];
let hintNeeded = 1;


function main() {
  doorWin();
  // userPick();
  // revealWrong();
  // userSwitch();
  // judgement();
}

let hint = () =>{       //  if user is stuck on the beginning
  if(hintNeeded == 1){  // well, if not
  $(".advice-click-door").css({"display": "block"});
  }
}

function doorWin() {  // here the winning door is decided
  doors = [0, 0, 0];
  pick = [0, 0, 0];
  let winning = Math.floor(Math.random()*3);  // "randomly" of course
  doors[winning] = 1;                         // value 1 given to correct door
  $(".grid-cell").css({"background-color": "#651717"});  // reset colors

  setTimeout (hint, 20000);     // waiting for user to read  the isntructions
  // colors(winning);  // should not be on final version
} // end of function

function colors(winning) {
  switch (winning) {                                  // revealing winning door
    case 0:
        $("#one").css({"background-color": "#05ff2b"});
        $("#two").css({"background-color": "#ff0d05"});
        $("#three").css({"background-color": "#ff0d05"});
      break;
    case 1:
        $("#two").css({"background-color": "#05ff2b"})
        $("#one").css({"background-color": "#ff0d05"});
        $("#three").css({"background-color": "#ff0d05"});
      break;
    case 2:
        $("#three").css({"background-color": "#05ff2b"})
        $("#two").css({"background-color": "#ff0d05"});
        $("#one").css({"background-color": "#ff0d05"});
      break;
    default:
      console.log("Purjo Pera was here");
  }
} // end of fucntion

function userPick(door) { // here user pics door
  hintNeeded = 0;
  pick = [0, 0, 0];
  let selectedDoor = door-1;    // this was necessary to get selection coloring
  pick[selectedDoor] = 1;       // which is then logged to pick-array
  $(doorsId[selectedDoor]).css({"box-shadow": "0 0 2rem 0.5rem rgba(200, 40, 0, 0.8)"})
  setTimeout(revealWrong, 500);           // executing next function
  console.log("What the fuck");
  setTimeout(bringQuestion, 2000)
  $(".advice-click-door").css({"display": "none"});

}

function bringQuestion() {
  $(".switch-question").css({"display": "block"})
}

function revealWrong() {  // this opens ONE WRONG door on random
  let i = 0;
  let j = 0;
  while (i == 0) {        // as long as no empty door is found
    if (j > 10){i++};     // in case of random giving same value
    console.log("While rolling :--D");
    i = Math.floor(Math.random()*3);  // pick one door
    if (doors[i] == 0 && pick[i] == 0) {  // if door is "lose",
      switch (i) {                        // paint that door grey
        case 0:                           // unless user picked it (&&)
          $("#one").css({"background-image": "url(images/goat.jpg)",
          "color": "rgba(0, 0, 0, 0)", "text-shadow": "none"});
          doors[i] = 2; pick[i] = 2;
          break;
        case 1:
          $("#two").css({"background-image": "url(images/goat.jpg)",
          "color": "rgba(0, 0, 0, 0)", "text-shadow": "none"});
          doors[i] = 2; pick[i] = 2;
          break;
        case 2:
          $("#three").css({"background-image": "url(images/goat.jpg)",
          "color": "rgba(0, 0, 0, 0)", "text-shadow": "none"});
          doors[i] = 2; pick[i] = 2;
          break;
        default:
          console.log("Hingeroostas");
      } break; //end of switch
    }else{                          // if not empty door, reset i to keep
      i = 0;                        // while-loop rolling
    } // end of if-else
    j++;
    if (j > 20){
      break;
    } // maybe a bit bad design here :D
  } // end of while
  return 1;
} // end of function

function userSwitch(decision) {
  switch (decision) {
    case "n":
      console.log("Didn't switch.");
      break;
    case "y":
    console.log("Switched!");
    $(doorsId[0]).css({"box-shadow": "none"});
    $(doorsId[1]).css({"box-shadow": "none"});
    $(doorsId[2]).css({"box-shadow": "none"});
    for (i = 0; i < pick.length; i++){
      if (pick[i] == 0){pick[i] = 1;
        $(doorsId[i]).css({"box-shadow": "0 0 2rem 0.5rem rgba(200, 40, 0, 0.8)"})
      }else if (pick[i] == 1) {pick[i] = 0
      }else{
        continue;
      }
    }
      break;
    default: console.log("Spede beard. :--D")
  } // end of switch
  $(".switch-question").css({"display": "none"});
  $(".revelation").css({"display": "block"})
} // end of function

function judgement() {
  let finalPick = 4;
  let finalDoor = 4;
  for (i = 0; i < pick.length; i++){
    if (pick[i] == 1){finalPick = i}
  } console.log(finalPick); // end of for
  if (doors[finalPick] == 1){
    console.log("Winner!");
    $(doorsId[finalPick]).css({"background-image": "url(images/car.jpeg)",
    "color": "rgba(0, 0, 0, 0)", "text-shadow": "none"});
  }else{
    console.log("Loser.");
    $(doorsId[finalPick]).css({"background-image": "url(images/goat.jpg)",
    "color": "rgba(0, 0, 0, 0)", "text-shadow": "none"});

  }

} // end of function

function openDoor() { // maybe deleted
  judgement();
  $(".revelation").css({"display": "none"})

}


function log() {
  console.log("This door wins: "+doors);
  console.log("User picked this door: "+pick);
}
