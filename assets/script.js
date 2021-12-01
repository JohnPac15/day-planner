var currentDate = document.getElementById("currentDay");
var timeSlot = document.getElementById("time-slot")

var form = document.getElementById("form")
var task = document.getElementById("textarea")

// console.log(time)

var hour = moment().set({'hour': 9, 'minute': 00, 'seconds': 00})
// var minute = moment().set('minute', '0')

// var task = [];
// var taskDate = $("#modalDueDate").val();


let todaysDate = new Date();
console.log(todaysDate);
currentDate.innerHTML = todaysDate;


var showTime = timeSlot.innerHTML = hour
var blockTime =showTime._d
console.log(blockTime)


saveTask = function() {
    
       
}

var auditDate = function(taskEl) {
    var date = $(taskEl)
    .find("span")
    .text()
    .trim();

    console.log(taskEl)
}
auditDate();


// let time = todaysDate.getHours()
// console.log(time)
