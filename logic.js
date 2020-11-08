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

//Creating an event handler so when I click on my save button it stores the entry to local storage

$("#button9").on("click", function() {
    if (textEntry9.val() !== "") {
        localStorage.setItem("ninth", textEntry9.val())
    }
});