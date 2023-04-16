// for today
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var todayHour = date.getHours()
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
var today = yyyy + "-" + mm + "-" + dd;

// for tomorrow
var tmr = new Date();
tmr.setDate(tmr.getDate() + 1);
var tmrday = tmr.getDate();
var tmrmth = tmr.getMonth() + 1;
var tmryear = tmr.getFullYear();
if (tmrday < 10) {
  tmrday = "0" + tmrday;
}
if (tmrmth < 10) {
  tmrmth = "0" + tmrmth;
}
var tmr = tmryear + "-" + tmrmth + "-" + tmrday;

// set default date for date picker
switch (new Date().getDay()) {
  case 0:
    if (todayHour > 15) {
      document.getElementById("date").value = tmr;
    } else {
      document.getElementById("date").value = today;
    }
    break;
  case 5:
  case 6:
    if (todayHour > 19) {
      document.getElementById("date").value = tmr;
    } else {
      document.getElementById("date").value = today;
    }
    break;
  default:
    if (todayHour > 18) {
      document.getElementById("date").value = tmr;
    } else {
      document.getElementById("date").value = today;
    }
}

// prevent choosing the invalid days
document.getElementById("date").min = today;

// check the form onsubmit
function formSubmitted() {
  alert("Thanks for choosing our restaurant!\nWe will contact you within the next 24 hours to confirm your reservation.");
}


// set default time for time picker
var formattedTime = (todayHour + 1) + ":" + ("00");
if (document.getElementById("date").value == today) {
  document.getElementById("time").defaultValue = formattedTime;
}
if (document.getElementById("date").value == tmr) {
  document.getElementById("time").value = "12:00";
}

// prevent choosing the invalid hours

// before opening time or during operating time
if (document.getElementById("date").value == today) {
  document.getElementById("time").min = formattedTime;
}
if (document.getElementById("date").value == tmr) {
  document.getElementById("time").min = "12:00";
}

// after closing time
// user using default date to book
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
var dayoftoday = date.getDay();
if (dayoftoday === 0) { // Sunday
  timeInput.max = '16:00';
} else if (dayoftoday === 5 || dayoftoday === 6) { // Friday & Saturday
  timeInput.max = '20:00';
} else { // Any other day
  timeInput.max = '19:00';
}

//user choose a new date to book
dateInput.addEventListener('input', (event) => {
  const selectedDate = new Date(event.target.value);
  const dayOfWeek = selectedDate.getDay();
  if (dayOfWeek === 0) { // Sunday
    timeInput.max = '16:00';
  } else if (dayOfWeek === 5 || dayOfWeek === 6) { // Friday & Saturday
    timeInput.max = '20:00';
  } else { // Any other day
    timeInput.max = '19:00';
  }
});



