let currentDay = $("#currentDay");
let timeBlocks = $(".time-block");

let toDoItems = [];

// Display current date and time
function dateAndTime() {
    let currentDate = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    currentDay.text(currentDate);
}

//Format timeblocks colors based on current time
function colorTimeBlocks(){
    timeBlocks.each(function(){
        let thisBlock = $(this);
        let currentHour = moment().format("H");
        let thisHour = parseInt(thisBlock.attr("data-hour"));

        if (thisHour == currentHour) {
        thisBlock.addClass("present").removeClass("past future");
        }
        if (thisHour < currentHour) {
        thisBlock.addClass("past").removeClass("present future");
        }
        if (thisHour > currentHour) {
        thisBlock.addClass("future").removeClass("past present");
        }
    });
}

setInterval(dateAndTime, 1000);
colorTimeBlocks();


