let currentDay = $("#currentDay");
let timeBlocks = $(".time-block");

//Display current date and time
function dateAndTime() {
    let currentDate = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    currentDay.text(currentDate);
}

//Format timeblocks colors based on current time
function colorTimeBlocks(){
    timeBlocks.each(function(){
        let thisBlock = $(this);
        let thisHour = $(this).data("id");
        let currentHour = moment().format("H");

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

//Save a to do item to local storage


setInterval(dateAndTime, 1000);
colorTimeBlocks();
