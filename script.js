var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("H");

var toDoItems = [];

//Show current date
currentDay.text(currentDate);

//Format timeblock colors based on current time
function colorTimeBlocks(){
    timeBlocks.each(function(){
      var thisBlock = $(this);
      var thisBlockHr = parseInt(thisBlock.attr("data-hour"));

      if (thisBlockHr === currentHour) {
        thisBlock.addClass("present").removeClass("past future");
      }
      if (thisBlockHr < currentHour) {
        thisBlock.addClass("past").removeClass("present future");
      }
      if (thisBlockHr > currentHour) {
        thisBlock.addClass("future").removeClass("past present");
      }
    });
}

colorTimeBlocks();