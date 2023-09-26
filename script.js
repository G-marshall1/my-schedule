//dayjs to display current date
var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D'));
  
  
 //funtion to create time blocks and append to container.
  $(function () {
    for (var i = 0; i<9; i++) {
        const timeBlockEl = $('<div>')
      const timeShownEl = $('<div>')
      const textAreaEl = $('<textarea>')
      const buttonEl = $('<button>')
      const iconEl = $('<i>')
      const time = 9+i
      
      
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

// save object to local storage 
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
  });



