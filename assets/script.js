var currentDate = document.getElementById("currentDay");
// var timeSlot = document.getElementById("time-slot")
var Nine = document.getElementById("9am")

var form = document.getElementById("form")
var task = document.getElementById("textarea")

savedData = JSON.parse(localStorage.getItem("data"));


console.log(Nine)

// var hour = moment().set({'hour': 9, 'minute': 00, 'seconds': 00})
// var minute = moment().set('minute', '0')

// var task = [];
// var taskDate = $("#modalDueDate").val();
// console.log(timeSlot).name

let todaysDate = new Date();
console.log(todaysDate);

let getHour = todaysDate.getHours();
console.log(getHour);
currentDate.innerHTML = todaysDate;


// var showTime = timeSlot.innerHTML = hour
// var blockTime =showTime._d
// console.log(blockTime)


$(".savebtn").click(function(){
    var todo = $("#textarea").val();
    btnNumber = $(this).val();
    console.log(btnNumber)
    
    var taskList = {
    
        toDoText: todo,
        button: btnNumber,
    
    };

    console.log(taskList)

    if(savedData == null) {
        console.log(savedData)
        savedData = []
        savedData.push(taskList)
        localStorage.setItem("data", JSON.stringify(todo))
        alert("Item Saved")
    }else {
        console.log(savedData)
        console.log(todo)
        savedData.push(taskList)
        localStorage.setItem("data", JSON.stringify(todo))
        alert("Item Saved")

    }

})

for(i =0; i < 9; i++){
    var thisTimeBlock = i + 9
    console.log(thisTimeBlock)
    var thishour = ("#") + thisTimeBlock
    console.log(thishour)

    if(thisTimeBlock < getHour){
        $(thishour).addClass("bg-primary")
    }

    if(thisTimeBlock == getHour) {
        $(thishour).addClass("bg-warning text-dark")
    }

    if(thisTimeBlock > getHour){
        $(thishour).addClass("bg-secondary")
    }
    else{
        $(thishour).addClass("bg-danger")
    }


}

displayLocalStorage = function() {
    savedData
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
