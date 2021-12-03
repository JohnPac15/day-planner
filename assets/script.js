var task = {};
var currentDate = document.getElementById("currentDay");
// var timeSlot = document.getElementById("time-slot")
var Nine = document.getElementById("9")
var divMain = document.querySelector(".todo")

var textBox = document.querySelector(".textBox")

console.log(textBox)
var form = document.getElementById("form")
var task = document.getElementById("textarea")

arrayData = JSON.parse(localStorage.getItem("data"));
console.log(arrayData)



// var hour = moment().set({'hour': 9, 'minute': 00, 'seconds': 00})
// var minute = moment().set('minute', '0')

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

$(".addbtn").on("click", function() {
    console.log("clicked")
    let div2El = document.createElement("div")
    let formEl = document.createElement("form")
    let inputEl = document.createElement("input")
    let selectEl = document.createElement("select")
    let newOption1 = new Option('9:00 Am', 9)
    let newOption2 = new Option('10:00 Am', 10)
    let newOption3 = new Option('11:00 Am',11)
    let newOption4 = new Option('12:00 Pm',12)
    let optionEl = document.createElement("options")

    

    
    $(divMain).addClass("h-100")
    $(div2El).addClass("border-dark h-100")
    $(formEl).addClass(" textBox border-white w-100 h-100")
    $(selectEl).addClass(" border-white")
    $(inputEl).addClass("taskItem w-100 border-dark")
    inputEl.setAttribute("style", "width: 100%; border: 1px solid white");
    
    divMain.appendChild(div2El)
    div2El.appendChild(formEl)
    formEl.appendChild(inputEl)
    formEl.appendChild(selectEl)
    selectEl.appendChild(newOption1)
    selectEl.appendChild(newOption2)
    selectEl.appendChild(newOption3)
    selectEl.appendChild(newOption4)

    
    $(".savebtn").click(function(event){
        event.preventDefault();
    
        todoTask = document.querySelector(".taskItem");
        taskText = todoTask.value;
        optionNumber = selectEl.value
        // timeBlock = btnNumber * 1
        console.log(todoTask.value)
        console.log(optionNumber)
        
        var taskList = 
        {
            task: taskText,
            button: optionNumber,   
        };
        console.log(taskList)
        
        if(arrayData == null) {
            console.log(arrayData)
            arrayData = []
            arrayData.push(taskList)
            localStorage.setItem("data", JSON.stringify(arrayData));
            alert("First Item Saved")
        }else {
            console.log(arrayData)
            arrayData.push(taskList)
            localStorage.setItem("data", JSON.stringify(arrayData));
            alert("Item Saved")
            
        };
        
    })
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



// displayLocalStorage = function() {
//     debugger
//     savedData
//     console.log(savedData)
// }

// displayLocalStorage();


