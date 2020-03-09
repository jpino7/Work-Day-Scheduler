// Variable to display current date
var today = moment().format('MMMM Do YYYY, h:mm a');
console.log(today);

// Logs time to Jumbotron area
$("#currentDay").text(today);

// for loop to create div elements on html page for timeblocks
for (var i = 8; i < 17; i++);{
    var pElement = $("<p></p>").text(i + ":00am ");

    // if statement will switch from military to standard time and adds the class="hour" to the <p>.
if (i > 12){
    pElement.text(i - 12 + ":00pm ");
}
pElement.addClass("hour col-md-4")

// Local Variables to create the text areas to input data
var textField = $("<textarea></textarea>");
// add ID and input elements within textarea and what time it is on
textField.attr("id", "input"+i);
textField.addClass("description col-md-10");
// to test that the textarea is being implemented
console.log(textField);

// Variable to create a button to save input data
var saveButton = $("<button></button>").text("Save");
saveButton.attr("name", i);
saveButton.addClass("description col-md-4");
console.log(saveButton);

//Variable to create div element on html page for timeblocks
var divEl = $("<div></div>").append(pElement, textField, saveButton);
divEl.addClass("time-block row");

// if and else if statements to assign classes to past, present, future
// classes that are assigned will then be color coded reflecting past, present, future












}