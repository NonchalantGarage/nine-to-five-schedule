
//create local storage array
var schedule = {};
//query select save button to push new text into local storage array 
var saveTasks = function(){
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }


// Current time using dayjs.
var rightNow = dayjs().format("H")

// set hours for each time block
var startHour = dayjs().hour(9).format("H")

// if curret time is before start of current time block, highlight row red
// if current time is within time block , hightlight row yelow
// if time is after the next time block start time, highlight row green 


// set time block hours using dayjs
$( "span" ).each(function() {
    $( this).html(startHour)
    for (var i =0; i<this.length;i++){
        $( this).html(startHour[i]);    
    }
  });








console.log(rightNow)
var test = ( startHour <= rightNow || false);

console.log(startHour);