$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

const saveBtn = $(".saveBtn");

const fillSchedule = function() {
  // set color for each block
  const currentHour = moment().hour();

  $(".time-block").each(function() {
    const blockHour = parseInt($(this).attr("id"));

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // populate text areas with local storage data
    $(".hour").each(function() {
      const hour = $(this).text();
      const storedEvent = localStorage.getItem(hour);

      if (storedEvent) {
          $(this).siblings(".event").val(storedEvent);
      }
  });
};

// save data on button click to corresponding block
const saveEvent = function () {
  const hour = $(this).siblings(".hour").text();
  const event = $(this).siblings(".event").val();

  localStorage.setItem(hour, event);
}

saveBtn.on("click", saveEvent);

fillSchedule();