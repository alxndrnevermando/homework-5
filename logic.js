//Set's the time and displays it in our jumbotron
var time = $("#currentDay");

time.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));