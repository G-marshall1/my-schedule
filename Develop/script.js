var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D'));
  
  
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  $(function () {
    for (var i = 0; i<9; i++) {
        const timeBlockEl = $('<div>')
      const timeShownEl = $('<div>')
      const textAreaEl = $('<textarea>')
      const buttonEl = $('<button>')
      const iconEl = $('<i>')
      const time = 9+i
      //let saveBtnEl = $('.savBtn');
      
      timeBlockEl.attr("id", "hour-"+(i+9))
      const currentTime = dayjs().format("H ")
      console.log(dayjs().format("H "))
      if (currentTime == i+9) {
        timeBlockEl.attr("class", "row time-block present" )
      }
      else if (currentTime > i+9){
        timeBlockEl.attr("class", "row time-block past" )
      } else {
        timeBlockEl.attr("class", "row time-block future" )
      }
      
      timeShownEl.attr("class", "col-2 col-md-1 hour text-center py-3")
      timeShownEl.text(time)
      textAreaEl.attr("class", "col-8 col-md-10 description")
      textAreaEl.attr("rows", "3")
      buttonEl.attr("class", "btn saveBtn col-2 col-md-1")
      buttonEl.attr("aria-label", "save")
      iconEl.attr("class", "fas fa-save")
      iconEl.attr("aria-hidden", "true")
      
      buttonEl.append(iconEl)
      timeBlockEl.append(timeShownEl)
      timeBlockEl.append(textAreaEl)
      timeBlockEl.append(buttonEl)
      
      
      const container = $('#container')
      container.append(timeBlockEl)
      }


      //changing the timeShownEl 9-17 to 9am-5pm
        var timeIs = document.querySelectorAll(".hour");
        var timeArray = Array.from(timeIs);
        timeArray.forEach(function (timeBlock) {
          var time = timeBlock.textContent;
          if (time < 12) {
            timeBlock.textContent = time + "am";
          } else if (time == 12) {
            timeBlock.textContent = time + "pm";
          } else {
            timeBlock.textContent = time - 12 + "pm";
          }
        });


        








// create event listener for save button and capture values for time and input
// create object with time and input values
//save text to local storage and retrieve it when page is refreshed 
//create function to display text from local storage
 function saveText() {
    var time = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input);
    }
    $(".saveBtn").on("click", saveText);
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    












    
    
   
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });



