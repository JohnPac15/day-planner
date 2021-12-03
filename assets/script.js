var currentDate = document.getElementById("currentDay");
// var timeSlot = document.getElementById("time-slot")
var Nine = document.getElementById("9")
var div = document.querySelector(".todo")


var form = document.getElementById("form")
var task = document.getElementById("textarea")

savedData = JSON.parse(localStorage.getItem("data"));



// var hour = moment().set({'hour': 9, 'minute': 00, 'seconds': 00})
// var minute = moment().set('minute', '0')

// var task = [];
// var taskDate = $("#modalDueDate").val();
// console.log(timeSlot).name
// var showTime = timeSlot.innerHTML = hour
// var blockTime =showTime._d
// console.log(blockTime)

let todaysDate = new Date();
console.log(todaysDate);

let getHour = todaysDate.getHours();
console.log(getHour);
currentDate.innerHTML = todaysDate;



$(".savebtn").click(function(){
    var todo = $("#textarea").val();
    btnNumber = $(this).val();
    console.log(btnNumber)
    
    var taskList = {
        
        toDoText: todo,
        button: btnNumber,
        
    };
    var saveData = function() {
        localStorage.setItem("data", JSON.stringify(todo))
    }
    
    
    console.log(taskList)
    
    if(savedData == null) {
        console.log(savedData)
        savedData = []
        savedData.push(taskList)
        saveData();
        alert("Item Saved")
    }else {
        console.log(savedData)
        console.log(todo)
        savedData.push(taskList)
        saveData();
        alert("Item Saved")
        
    };
    
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

$(".addbtn").on("click", function() {
    console.log("clicked")
    let li = document.createElement("li")
    let text = document.createElement("textarea")
    
    li.setAttribute("style", "width: 100%;");
    text.setAttribute("style", "width: 100%; border: 1px solid white");
    
    
    
    div.appendChild(li)
    li.appendChild(text)
    
    let divNumber = $("this")
    console.log(divNumber)
})


displayLocalStorage = function() {
    savedData = JSON.parse(localStorage.getItem("data"));
    console.log(savedData)
}

displayLocalStorage();


