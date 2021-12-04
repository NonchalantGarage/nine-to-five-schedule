

//create local storage array

//query select save button to push new text into local storage array
$(".saveBtn").on("click", function(){
    var timeBlockContent = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, timeBlockContent);
  })



// set innertext to be a .val for each htime block 


// Element selector for parent <div>

// Display Current Date in Header
var currentDay = dayjs().format('MM/DD/YYYY')
$("#currentDay").html("Today's Date : " + currentDay);


// Current time using dayjs.
var rightNow = dayjs().format("H")

// Beginning hour of work day
var startHour = dayjs().hour(9).format("H")

// if curret time is before start of current time block, set css property past
// if current time is within time block , set css property present
// if time is after the next time block start time, set css property future
for (var i = 9; i < 18; i++){
  var ParentEl = $("#" + i );
  var assessTime = $("#hour-" + i).html();
console.log(ParentEl);
  if (parseInt(assessTime) < parseInt(rightNow)){
    ParentEl.addClass("past");
  } else if (parseInt(assessTime) === parseInt(rightNow)){
    ParentEl.removeClass("past");
    ParentEl.addClass("present");
  } else {
    ParentEl.removeClass("past");
    ParentEl.removeClass("present")
    ParentEl.addClass("future");
  }

}
// set time block hours using dayjs

$("#9 .description").val(localStorage.getItem('9'))  
$("#10 .description").val(localStorage.getItem('10'))  
$("#11 .description").val(localStorage.getItem('11'))  
$("#9 .description").val(localStorage.getItem('9'))  
$("#9 .description").val(localStorage.getItem('9'))  
$("#9 .description").val(localStorage.getItem('9'))  
$("#9 .description").val(localStorage.getItem('9'))  
$("#9 .description").val(localStorage.getItem('9'))  
$("#9 .description").val(localStorage.getItem('9'))  
