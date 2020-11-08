//Set's the time and displays it dynamically in our jumbotron
var time = $("#currentDay");

var time     = null,
date         = null;

var update = function () {
    date = moment(new Date())
    time.text(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    time = $('#currentDay')
    update();
    setInterval(update, 1000);
});

//Set my variables to grab whatever the user inputs in the textarea

var textEntry9 = $("#textin9");
var textEntry10 = $("#textin10");
var textEntry11 = $("#textin11");
var textEntry12 = $("#textin12");
var textEntry1 = $("#textin1");
var textEntry2 = $("#textin2");
var textEntry3 = $("#textin3");
var textEntry4 = $("#textin4");
var textEntry5 = $("#textin5");

//Grab the data from locale storage, if there is anything there

textEntry9.val(localStorage.getItem('ninth'));
textEntry10.val(localStorage.getItem('tenth'));
textEntry11.val(localStorage.getItem('eleventh'));
textEntry12.val(localStorage.getItem('twelfth'));
textEntry1.val(localStorage.getItem('first'));
textEntry2.val(localStorage.getItem('second'));
textEntry3.val(localStorage.getItem('third'));
textEntry4.val(localStorage.getItem('fourth'));
textEntry5.val(localStorage.getItem('fifth'));

//Creating variables which I will use to compare my current time with in order to set the past, present, and future colors

var check9 = 9;
var check10 = 10;
var check11 = 11;
var check12 = 12;
var check1 = 13;
var check2 = 14;
var check3 = 15;
var check4 = 16;
var check5 = 17;

//Creating function which check current time against the variable which is representing each different time on my planner. This will change the class.

function adder (check9, time) {
    if (check9 > parseInt(moment().format("LT"))) {
        $("#textin9").removeClass('past present future')
        $("#textin9").addClass("future")
    } else if(check9 === parseInt(moment().format("LT"))) {
        $("#textin9").removeClass('past present future')
        $("#textin9").addClass("present")
    } else if (check9 < parseInt(moment().format("LT"))) {
        $("#textin9").removeClass('past present future')
        $("#textin9").addClass("past")
    }
};
    if (check10 > parseInt(moment().format("LT"))) {
        $("#textin10").removeClass('past present future')
        $("#textin10").addClass("future")
    } else if(check10 === parseInt(moment().format("LT"))) {
        $("#textin10").removeClass('past present future')
        $("#textin10").addClass("present")
    } else if (check10 < parseInt(moment().format("LT"))) {
        $("#textin10").removeClass('past present future')
        $("#textin10").addClass("past")
    }
    if (check11 > parseInt(moment().format("LT"))) {
        $("#textin11").removeClass('past present future')
        $("#textin11").addClass("future")
    } else if(check11 === parseInt(moment().format("LT"))) {
        $("#textin11").removeClass('past present future')
        $("#textin11").addClass("present")
    } else if (check11 < parseInt(moment().format("LT"))) {
        $("#textin11").removeClass('past present future')
        $("#textin11").addClass("past")
    }
    if (check12 > parseInt(moment().format("LT"))) {
        $("#textin12").removeClass('past present future')
        $("#textin12").addClass("future")
    } else if(check12 === parseInt(moment().format("LT"))) {
        $("#textin12").removeClass('past present future')
        $("#textin12").addClass("present")
    } else if (check12 < parseInt(moment().format("LT"))) {
        $("#textin12").removeClass('past present future')
        $("#textin12").addClass("past")
    }
    if (check1 > parseInt(moment().format("LT"))) {
        $("#textin1").removeClass('past present future')
        $("#textin1").addClass("future")
    } else if(check1 === parseInt(moment().format("LT"))) {
        $("#textin1").removeClass('past present future')
        $("#textin1").addClass("present")
    } else if (check1 < parseInt(moment().format("LT"))) {
        $("#textin1").removeClass('past present future')
        $("#textin1").addClass("past")
    }
    if (check2 > parseInt(moment().format("LT"))) {
        $("#textin2").removeClass('past present future')
        $("#textin2").addClass("future")
    } else if(check2 === parseInt(moment().format("LT"))) {
        $("#textin2").removeClass('past present future')
        $("#textin2").addClass("present")
    } else if (check2 < parseInt(moment().format("LT"))) {
        $("#textin2").removeClass('past present future')
        $("#textin2").addClass("past")
    }
    if (check3 > parseInt(moment().format("LT"))) {
        $("#textin3").removeClass('past present future')
        $("#textin3").addClass("future")
    } else if(check3 === parseInt(moment().format("LT"))) {
        $("#textin3").removeClass('past present future')
        $("#textin3").addClass("present")
    } else if (check3 < parseInt(moment().format("LT"))) {
        $("#textin3").removeClass('past present future')
        $("#textin3").addClass("past")
    }
    if (check4 > parseInt(moment().format("LT"))) {
        $("#textin4").removeClass('past present future')
        $("#textin4").addClass("future")
    } else if(check4 === parseInt(moment().format("LT"))) {
        $("#textin4").removeClass('past present future')
        $("#textin4").addClass("present")
    } else if (check4 < parseInt(moment().format("LT"))) {
        $("#textin4").removeClass('past present future')
        $("#textin4").addClass("past")
    }
    if (check5 > parseInt(moment().format("LT"))) {
        $("#textin5").removeClass('past present future')
        $("#textin5").addClass("future")
    } else if(check5 === parseInt(moment().format("LT"))) {
        $("#textin5").removeClass('past present future')
        $("#textin5").addClass("present")
    } else if (check5 < parseInt(moment().format("LT"))) {
        $("#textin5").removeClass('past present future')
        $("#textin5").addClass("past")
    }

//Creating an event handler so when I click on my save button it stores the entry to local storage

$("#button9").on("click", function() {
    if (textEntry9.val() !== "") {
        localStorage.setItem("ninth", textEntry9.val())
    }
});
$("#button10").on("click", function() {
    if (textEntry10.val() !== "") {
        localStorage.setItem("tenth", textEntry10.val())
    }
});
$("#button11").on("click", function() {
    if (textEntry11.val() !== "") {
        localStorage.setItem("eleventh", textEntry11.val())
    }
});
$("#button12").on("click", function() {
    if (textEntry12.val() !== "") {
        localStorage.setItem("twelfth", textEntry12.val())
    }
});
$("#button1").on("click", function() {
    if (textEntry1.val() !== "") {
        localStorage.setItem("first", textEntry1.val())
    }
});
$("#button2").on("click", function() {
    if (textEntry2.val() !== "") {
        localStorage.setItem("second", textEntry2.val())
    }
});
$("#button3").on("click", function() {
    if (textEntry3.val() !== "") {
        localStorage.setItem("third", textEntry3.val())
    }
});
$("#button4").on("click", function() {
    if (textEntry4.val() !== "") {
        localStorage.setItem("fourth", textEntry4.val())
    }
});
$("#button5").on("click", function() {
    if (textEntry5.val() !== "") {
        localStorage.setItem("fifth", textEntry5.val())
    }
});

console.log(adder(check9, time));