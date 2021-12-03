var task = {};
var currentDate = document.getElementById("currentDay");
// var timeSlot = document.getElementById("time-slot")
var Nine = document.getElementById("9")
var divMain = document.querySelector(".todo")

var textBox = document.querySelector(".textBox")

console.log(textBox)
var form = document.getElementById("form")
var task = document.getElementById("textarea")

let li = document.createElement("li")
var timeBlock9 = document.getElementById("9")
var timeBlock10 = document.getElementById("10")
var timeBlock11 = document.getElementById("11")
var timeBlock12 = document.getElementById("12")
var timeBlock1 = document.getElementById("1")
var timeBlock2 = document.getElementById("2")
var timeBlock3 = document.getElementById("3")
var timeBlock4 = document.getElementById("4")
var timeBlock5 = document.getElementById("5")

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

displayTask = function(){
    for( i=0; i < arrayData.length; i++ ) {
        let numberSlot = arrayData[i].button
        let arrayText = arrayData[i].task
        let li = document.createElement("li")
        
        console.log(numberSlot, "numbers")
        console.log(arrayText, "task")

        if(numberSlot == 9){
            li.textContent = arrayText
            timeBlock9.appendChild(li)
        }
        if(numberSlot == 10){
            li.textContent = arrayText
            timeBlock10.appendChild(li)
        }
        if(numberSlot == 11){
            li.textContent = arrayText
            timeBlock11.appendChild(li)
        }
        if(numberSlot == 12){
            li.textContent = arrayText
            timeBlock12.appendChild(li)
        }
        if(numberSlot == 1){
            li.textContent = arrayText
            timeBlock1.appendChild(li)
        }
        if(numberSlot == 2){
            li.textContent = arrayText
            timeBlock2.appendChild(li)
        }
        if(numberSlot == 3){
            li.textContent = arrayText
            timeBlock3.appendChild(li)
        }
        if(numberSlot == 4){
            li.textContent = arrayText
            timeBlock4.appendChild(li)
        }
        if(numberSlot == 5){
            li.textContent = arrayText
            timeBlock5.appendChild(li)
        }
    }
    
}


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
    let newOption5 = new Option('1:00 Pm',1)
    let newOption6 = new Option('2:00 Pm',2)
    let newOption7 = new Option('3:00 Pm',3)
    let newOption8 = new Option('4:00 Pm',4)
    let newOption9 = new Option('5:00 Pm',5)
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
    selectEl.appendChild(newOption5)
    selectEl.appendChild(newOption6)
    selectEl.appendChild(newOption7)
    selectEl.appendChild(newOption8)
    selectEl.appendChild(newOption9)

    
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

        if(taskList.button == 9){
            li.textContent = taskList.task
            timeBlock9.appendChild(li)
        }
        if(taskList.button == 10){
            li.textContent = taskList.task
            timeBlock10.appendChild(li)
        }
        if(taskList.button ==11){
            li.textContent = taskList.task
            timeBlock11.appendChild(li)
        }
        if(taskList.button == 12){
            li.textContent = taskList.task
            timeBlock12.appendChild(li)
        }
        if(taskList.button == 1){
            li.textContent = taskList.task
            timeBlock1.appendChild(li)
        }
        if(taskList.button == 2){
            li.textContent = taskList.task
            timeBlock2.appendChild(li)
        }
        if(taskList.button == 3){
            li.textContent = taskList.task
            timeBlock3.appendChild(li)
        }
        if(taskList.button == 4){
            li.textContent = taskList.task
            timeBlock4.appendChild(li)
        }
        if(taskList.button == 5){
            li.textContent = taskList.task
            timeBlock5.appendChild(li)
        }
        
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




displayTask();



for(i =0; i < 9; i++){
    var thisTimeBlock = i + 9
    // console.log(thisTimeBlock)
    var thishour = ("#") + thisTimeBlock
    // console.log(thishour)
    
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


