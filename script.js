$(document).ready(function () {

    var currentDate = moment().format('MMMM D, YYYY<br>h:mm a');
    var currentTime = moment().format("HH");

    var clockArr24 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    var clockArr = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
    var numArr = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven"];

    $("#currentDay").append(currentDate);
  
    for (var i = 0; i < clockArr.length; i++) {
        var newRow = $("<row>");
        $(".container").append(newRow);
        var newCol1 = $("<col>");
        var newCol2 = $("<col>");
        newRow.append(newCol1, newCol2);
        newCol1.attr("class", "col-2 hour");
        newCol2.attr("class", "col-9 input");
        newCol2.attr("id", numArr[i]);
        newCol2.html("<textarea rows='3'style='width: 100%; margin-left:-2rem; height: 100%'></textarea>");
        newRow.addClass("time-block row");
        newRow.attr("id", clockArr24[i]);
        var newButt = $("<button>");
        newButt.attr("id", clockArr[i]);
        newButt.attr("class", "saveBtn fas fa-save col-1");
        newRow.append(newButt);
        if (clockArr[i] === 12) {
            newCol1.text(clockArr[i] + "PM");
        } else if (clockArr[i] > 8) {
            newCol1.text(clockArr[i] + "AM");
        } else { newCol1.text(clockArr[i] + "PM") };
    }

    $("row").each(function () {
        var getId = parseInt($(this).attr("id"));
        console.log("id= " + getId);

        if (parseInt(currentTime) < 9 || parseInt(currentTime) > 19) {
            $(this).addClass("past");
        } if (getId < parseInt(currentTime)) {
            $(this).addClass("past");
        } if (getId > parseInt(currentTime)) {
            $(this).addClass("future");
        } if (getId === parseInt(currentTime)) {
            $(this).addClass("present");

        }

    })

    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function (event) {
        event.preventDefault();
        console.log($(this).attr("id"));
        console.log($(this).siblings(".input").children("textarea"));
        console.log($(this).siblings(".input").children("textarea").val());

        var hour = $(this).attr("id");
        var note = $(this).siblings(".input").children("textarea").val();

        localStorage.setItem(hour, note);
    })

    for (let i=0; i < clockArr.length; i++) {
    $("#"+numArr[i]).children("textarea").text(localStorage.getItem(clockArr[i]));
    }
})


