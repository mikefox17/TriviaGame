function game() {
  stopTimer();

  var total = 5;
  var score = 0;

  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;

  // Counting score
  var answers = ["b", "b", "d", "b", "a"];
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++;
    }
    console.log(eval("q" + i) + answers[i - 1]);
  }

  // Results
  var results =
    "<h4>YEEEHAW, You!</h4>" +
    "<p>Correct Answers: " +
    score +
    "</p>" +
    "<p>Incorrect Answers: " +
    (total - score) +
    "</p>" +
    "<p>Total Score: " +
    (score / total) * 100 +
    "%";
  $("#layout").html(results);

  //document.querySelector("#layout").innerHTML = results;

  // Not actually submitting anything
  return false;
}

//Timer
var time = 30;
var timer = setInterval(timerCounter, 1000);

function timerCounter() {
  time--;
  document.getElementById("timer").textContent = time;
  if (time <= 10 && time != 0) {
    red();
  } else if (time < 1) {
    clearInterval(timer);
    game();
    reloadButton();
  }
}

// Stops the timer when the form is submitted
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
