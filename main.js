let doors = [0, 0, 0];
let doorsId = ["#one", "#two", "#three"];
let pick = [0, 0, 0];


function main() {
  doorWin();
  // userPick();
  // revealWrong();
  // userSwitch();
  // judgement();
}

function doorWin() {  // here the winning door is decided
  doors = [0, 0, 0];
  pick = [0, 0, 0];
  let winning = Math.floor(Math.random()*3);  // "randomly" of course
  doors[winning] = 1;                         // value 1 given to correct door
  $(".grid-cell").css({"background-color": "#ccc"});  // reset colors
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
  pick = [0, 0, 0];
  pick[door-1] = 1;       // which is then logged to pick-array
  setTimeout(revealWrong, 500);           // executing next function
  console.log("What the fuck");
  setTimeout(bringQuestion, 2000)

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
          $("#one").css({"background-color": "#111"});
          doors[i] = 2;
          pick[i] = 2;
          break;
        case 1:
          $("#two").css({"background-color": "#111"});
          doors[i] = 2;
          pick[i] = 2;
          break;
        case 2:
          $("#three").css({"background-color": "#111"});
          doors[i] = 2;
          pick[i] = 2;
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
    for (i = 0; i < pick.length; i++){
      if (pick[i] == 0){pick[i] = 1
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
    $(doorsId[finalPick]).css({"background-color": "#05ff2b"});
  }else{
    console.log("Loser.");
    $(doorsId[finalPick]).css({"background-color": "#ff0d05"});

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
