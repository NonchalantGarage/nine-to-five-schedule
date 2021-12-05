
//query select save button class to push new text into local storage array
$(".saveBtn").on("click", function(){
    var timeBlockContent = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')

    localStorage.setItem(time, timeBlockContent);
  })

// Display Current Date in Header
var currentDay = dayjs().format('MM/DD/YYYY')
$("#currentDay").html("Today's Date : " + currentDay);

// Current time using dayjs formatted by hour
var rightNow = dayjs().format("H")


// loop through parent and and timeblock hour to set conditionals 
// if curret time is before start of current time block, set css property past
// if current time is within time block , set css property present
// if time is after the next time block start time, set css property future
for (var i = 9; i < 18; i++){
  var ParentEl = $("#" + i );
  var assessTime = $("#hour-" + i).html();
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

// local storage get item by selecting parent div ID and text area class 
$("#9 .description").val(localStorage.getItem('9'))  
$("#10 .description").val(localStorage.getItem('10'))  
$("#11 .description").val(localStorage.getItem('11'))  
$("#12 .description").val(localStorage.getItem('12'))  
$("#13 .description").val(localStorage.getItem('13'))  
$("#14 .description").val(localStorage.getItem('14'))  
$("#15 .description").val(localStorage.getItem('15'))  
$("#16 .description").val(localStorage.getItem('16'))  
$("#17 .description").val(localStorage.getItem('17'))  
