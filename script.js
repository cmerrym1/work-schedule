var today = document.querySelector("#currentDay");
var currentDay = moment();

today.textContent = currentDay.format("dddd, MMMM Do");

var curentTime = document.querySelector("currentTime");
var now = moment();

currentTime.textContent = now.format("h:mm a");

// save the task to local storage
$(document).ready(function (){
  $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val()
      var time = $(this).siblings().attr("id").split("-")[1]

      localStorage.setItem(time, value)
      console.log(time, value)
  })

  // change color of time block
  function updatedHour() {
      var currentHour = moment().hours()
      $(".hour").each(function (){
          var hourBlock = parseInt($(this).attr("id").split("-")[1])
          if (hourBlock < currentHour) {
            $(this).siblings(".description").addClass("past")
          } else if (hourBlock == currentHour) {
              $(this).siblings(".description").removeClass("past")
              $(this).siblings(".description").addClass("present")
              
          } else {
              $(this).siblings(".description").removeClass("past")
              $(this).siblings(".description").removeClass("present")
              $(this).siblings(".description").addClass("future")
          }
      }) 
  }


  updatedHour()

})