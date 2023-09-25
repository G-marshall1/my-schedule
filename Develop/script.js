for (var i = 0; i < 9; i++) {
    const timeBlockEl = $('<div>');
    const timeShownEl = $('<div>')
    const textAreaEl = $('<textarea>')
    const buttonEl = $('<button>')
    const iconEl = $('<i>')




timeBlockEl.attr("id", "hour-"+(i+9))
const currentTime = dayjs().format("H")
if (currentTime == i+9) {
    timeBlockEl.attr("class", "row time-block present")
}
else if (currentTime > i+9) {
    timeBlockEl.attr("class", "row time-block past")
} else {
    timeBlockEl.attr("class", "row time-block future")
}

timeShownEl.attr("class", "col-2-md-1 hour text-center py-3")
timeShownEl.text(i+9)
textAreaEl.attr("class", "col-8 col-md-10 description")
textAreaEl.attr("row", "3")
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







