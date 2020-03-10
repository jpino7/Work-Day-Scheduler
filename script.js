// Variable to display current date
var today = moment().format('dddd, MMMM Do YYYY, h:mm a');
console.log(today);

// Logs time to Jumbotron area
$("#currentDay").text(today);

// for loop to create div elements on html page for timeblocks
for (var i = 8; i < 17; i++) {
    var pElement = $("<p></p>").text(i + ":00am ");

    // if statement will switch from military to standard time and adds the class="hour" to the <p>.
    if (i > 12) {
        pElement.text(i - 12 + ":00pm  ");
    }
    pElement.addClass("hour col-md-2")

    // Local Variables to create the text areas to input data
    var textField = $("<textarea></textarea>");
    // add ID and input elements within textarea and what time it is on
    textField.attr("id", "input"+i);
    textField.addClass("description col-md-8");
    // Logging to make sure textarea is being implemented
    console.log(textField);

    // Variable to create a button to save input data
    var saveBtn = $("<button></button>").text("Save");
    saveBtn.attr("name", i);
    saveBtn.addClass("saveBtn col-md-2");
    console.log(saveBtn);

    //Variable to create div element on html for timeblocks
    var divEl = $("<div></div>").append(pElement, textField, saveBtn);
    divEl.addClass("time-block row");
    console.log(divEl);

    // if and else if statements to assign classes to past, present, future
    // classes that are assigned will then be color coded reflecting past, present, future
    if ( i > moment().hours()){
        textField.addClass("future");
    } else if ( i < moment().hours()) {
        textField.addClass("past");
    } else if ( i == moment().hours()) {
        textField.addClass("present")
    }
    // Logging exact hour
    console.log(moment().hours());

    // To append all Divs "time-blocks to HTML"
    $(".container").append(divEl);
}

// Click Event for saveButton
$(document).on("click", ".saveBtn", function(){

    // Variable for input data in textarea
    var input = $("#input" + $(this).attr("name")).val();
    // stores what input data gets received
    localStorage.setItem($(this).attr("name"), input);
});


// Anything that gets entered in these time blocks will get stored
$("input8").val(localStorage.getItem("8"));
$("input9").val(localStorage.getItem("9"));
$("input10").val(localStorage.getItem("10"));
$("input11").val(localStorage.getItem("11"));
$("input12").val(localStorage.getItem("12"));
$("input13").val(localStorage.getItem("13"));
$("input14").val(localStorage.getItem("14"));
$("input15").val(localStorage.getItem("15"));
$("input16").val(localStorage.getItem("16"));
$("input17").val(localStorage.getItem("17"));
