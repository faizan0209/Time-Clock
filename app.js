const endDate = "01 September 2024 12:00 AM";
document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  var date = new Date(endDate);
  var date2 = new Date();
  var timeRemaining = (date - date2) / 1000; // in seconds

  if (timeRemaining < 0) {
    clearInterval(intervalId);
    return;
  }

  inputs[0].value = Math.floor(timeRemaining / 3600 / 24);
  inputs[1].value = Math.floor(timeRemaining / 3600) % 24;
  inputs[2].value = Math.floor(timeRemaining / 60) % 60;
  inputs[3].value = Math.floor(timeRemaining % 60);
}

clock();

const intervalId = setInterval(clock, 1000);