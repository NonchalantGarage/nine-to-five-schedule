
//create local storage array
var schedule = {};
//query select save button to push new text into local storage array 
var saveTasks = function(){
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }

var timeBlockEl = $("#parent-" + i);


// Display Current Date in Header
var currentDay = dayjs().format('MM/DD/YYYY')
$("#currentDay").html("Today's Date : " + currentDay);


// Current time using dayjs.
var rightNow = dayjs().format("H")

// Beginning hour of work day
var startHour = dayjs().hour(9).format("H")


for (var i = 9; i < 18; i++){
  var timeEl = document.createElement("li");
  timeBlockEl.appendChild(timeEl);
  timeBlockEl.html(i)
  
}

// set time block hours using dayjs


console.log(rightNow)
var test = ( startHour <= rightNow || false);

console.log(test);


// if curret time is before start of current time block, highlight row red
// if current time is within time block , hightlight row yelow
// if time is after the next time block start time, highlight row green