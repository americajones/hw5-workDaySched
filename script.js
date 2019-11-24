$(document).ready(function () {

    var currentDate = moment().format('MMMM D, YYYY<br>h:mm a');
    var currentTime = moment().format("HH");
    // var actualTime = moment().format('h:mm a');

    var clockArr24 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    var clockArr = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
    var numArr = ["nine", "ten", "eleven", "twelve", "one", "two","three","four","five","six", "seven"];
    
    $("#currentDay").append(currentDate);
    //this is... a lot but i wanted to see if i could do it all in jquery and not touch the other files, hahaaaa
    for (var i = 0; i < clockArr.length; i++) {
        var clockArr24 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        var clockArr = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
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

        if(parseInt(currentTime) < 9 || parseInt(currentTime) > 19) {
            $(this).addClass("past");
        } if (getId < parseInt(currentTime)) {
            $(this).addClass("past");
        } if (getId > parseInt(currentTime)) {
            $(this).addClass("future");
        } if (getId === parseInt(currentTime)) {
            $(this).addClass("present");

        }
            
        })
        
        // if (getId === parseInt(currentTime)) {
        //     $(this).addClass("present");
        // } if ((getId < parseInt(currentTime)) && (index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10)) {
        //     $(this).addClass("future");
        // } if ((getId < parseInt(currentTime)) && (index === 0 || index === 1 || index === 2 || index === 3)) {
        //     $(this).addClass("past");
        // } else {
        //     $(this).addClass("past");

        // }
    
    // let storageArray
    // if (localStorage.getItem('Note:')) {
    //     storageArray = JSON.parse(localStorage.getItem('Note:'))
    // } else {
    //     storageArray = []
    // }

    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function (event) {
        event.preventDefault();
        console.log($(this).attr("id"));
        console.log($(this).siblings(".input").children("textarea"));
        console.log($(this).siblings(".input").children("textarea").val());

        var hour= $(this).attr("id");
        var note= $(this).siblings(".input").children("textarea").val();

        localStorage.setItem(hour, note);
        // console.log($(this).siblings(".input").children("textbox"));
        // var textBox = $(this).siblings(".input").children().children();
        // console.log(textBox.val());
        //what area and what it says, each text area has diff key
        // for (var i=0; i< clockArr.length; i++) {
            
        // }

        //instead of note and time with values 
        //make the key the hour and the value the note(textarea)
        // localStorage.setItem($(this).attr("id"));
        // localStorage.setItem();
        // storageArray.push($("textarea").val());
    })

    $("#nine").children("textarea").text(localStorage.getItem("9"));
    $("#ten").children("textarea").text(localStorage.getItem("10"));
    $("#eleven").children("textarea").text(localStorage.getItem("11"));
    $("#twelve").children("textarea").text(localStorage.getItem("12"));
    $("#one").children("textarea").text(localStorage.getItem("1"));
    $("#two").children("textarea").text(localStorage.getItem("2"));
    $("#three").children("textarea").text(localStorage.getItem("3"));
    $("#four").children("textarea").text(localStorage.getItem("4"));
    $("#five").children("textarea").text(localStorage.getItem("5"));
    $("#six").children("textarea").text(localStorage.getItem("6"));
    $("#seven").children("textarea").text(localStorage.getItem("7"));

})


