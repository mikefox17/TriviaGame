//on submit of form stop timer
function game() {
  stopTimer();

  var total = 5;
  var score = 0;
  //getting users answers from form, questions 1-5 plus the value of A-D for input
  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;

  //for loop that ensures the user is answering all the questions, if not the quiz is reset
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You didn't answer question " + i);
      return false;
    }
  }

  // A VAR array of correct answers
  var answers = ["b", "b", "d", "b", "a"];
  //for loop that checks the checks the users input vs the answers and adds to the score if
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++;
    }
    console.log(eval("q" + i) + answers[i - 1]);
  }

  // Results will be printed as html and concatenate with the score as below
  var results =
    "<h4>YEEEHAW, You're a real Huckleberry!!</h4>" +
    "<p>Correct Answers: " +
    score +
    "</p>" +
    "<p>Incorrect Answers: " +
    (total - score) +
    "</p>" +
    "<p>Total Score: " +
    (score / total) * 100 +
    "%";

  //had this working at one point
  //$("#layout").html(results);

  //prints the results plus the html code above onto the page
  document.querySelector("#layout").innerHTML = results;

  return false;
}

//Timer set to 30 seconds, inverals of 1 second --
var time = 30;
var timer = setInterval(timerCounter, 1000);

function timerCounter() {
  time--;
  //selects timer id in html and runs the function when page is loaded
  document.getElementById("timer").textContent = time;
  if (time <= 10 && time != 0) {
    //when timer hits below 10 secinds the timer will change color ro red to warn user that time is almost up
    red();
  } else if (time < 1) {
    clearInterval(timer);
    game();
    reloadButton();
  }
}

// Stops the timer when the form is submitted and restarts when user clicks restart
function stopTimer() {
  clearTimeout(timer);
  reloadButton();
}

// Color the timer red when under 10 seconds
function red() {
  document.getElementById("timer").style.color = "white";
  document.getElementById("timer").style.background = "red";
}

// Turn timer into restart button
function reloadButton() {
  document.getElementById("timer").innerHTML =
    "<button id='restart' class='btn' onclick='return reload()'>Restart</button>";
}

//Reload Page on button click
function reload() {
  document.location.reload();
}
