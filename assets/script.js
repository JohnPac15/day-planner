var task = {};
var currentDate = document.getElementById("currentDay");
var divMain = document.querySelector(".todo")
var textBox = document.querySelector(".textBox")
var spanText = document.querySelector(".todo-form")
var addbtn = document.getElementById("add")
var btn9 =document.querySelector("addbtn-9")
var btn10 =document.querySelector("addbtn-10")
var btn11 =document.querySelector("addbtn-11")
var btn12 =document.querySelector("addbtn-12")
var btn13 =document.querySelector("addbtn-13")
var btn14 =document.querySelector("addbtn-14")
var btn15 =document.querySelector("addbtn-15")
var btn16 =document.querySelector("addbtn-16")
var btn17 =document.querySelector("addbtn-17")

console.log(textBox)
var form = document.getElementById("form")
var task = document.getElementById("textarea")

let li = document.createElement("li")
var timeBlock9 = document.getElementById("9")
var timeBlock10 = document.getElementById("10")
var timeBlock11 = document.getElementById("11")
var timeBlock12 = document.getElementById("12")
var timeBlock1 = document.getElementById("13")
var timeBlock2 = document.getElementById("14")
var timeBlock3 = document.getElementById("15")
var timeBlock4 = document.getElementById("16")
var timeBlock5 = document.getElementById("17")

arrayData = JSON.parse(localStorage.getItem("data"));
console.log(arrayData)

divArray= [
    timeBlock9,
    timeBlock10,
    timeBlock11,
    timeBlock12,
    timeBlock1,
    timeBlock2,
    timeBlock3,
    timeBlock4,
    timeBlock5
];
divndex = 0
clickTheDiv = function() {
    console.log(divArray[0].text)


}


var hour = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var timeHour = moment().hour()
var timeSpecial = moment().format("h:mm:ss a")
console.log(timeSpecial)

let todaysDate = new Date();
console.log(todaysDate);

let getHour = todaysDate.getHours();
console.log(getHour);


currentDate.innerHTML = hour;

reload = function () {
    document.location.reload();
}



btn9.addEventListener("click", function() {
    btn9 = 9 
})



$("#add").on("click", function(event) {
    console.log(event.target, "click event")
    let div2El = document.createElement("div")
    let formEl = document.createElement("form")
    let inputEl = document.createElement("input")
    let selectEl = document.createElement("select")
    let newOption1 = new Option('9:00 Am', 9)
    let newOption2 = new Option('10:00 Am', 10)
    let newOption3 = new Option('11:00 Am',11)
    let newOption4 = new Option('12:00 Pm',12)
    let newOption5 = new Option('1:00 Pm',13)
    let newOption6 = new Option('2:00 Pm',14)
    let newOption7 = new Option('3:00 Pm',15)
    let newOption8 = new Option('4:00 Pm',16)
    let newOption9 = new Option('5:00 Pm',17)

    

    
    $(divMain).addClass("h-100")
    $(div2El).addClass("border-dark h-100")
    $(formEl).addClass(" textBox border-white w-100 h-100")
    $(selectEl).addClass(" border-white")
    $(inputEl).addClass("taskItem w-100 border-dark")
    inputEl.setAttribute("style", "width: 100%; border: 1px solid white");
    
    spanText.appendChild(div2El)
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
            timeStamp: timeSpecial   
        };
        console.log(taskList)
        
        if(arrayData == null) {
            console.log(arrayData)
            arrayData = []
            arrayData.push(taskList)
            localStorage.setItem("data", JSON.stringify(arrayData));
            alert("First Item Saved")
            spanText.textContent = ""
            reload();
        }else {
            console.log(arrayData)
            arrayData.push(taskList)
            localStorage.setItem("data", JSON.stringify(arrayData));
            alert("Item Saved")
            spanText.textContent = ""
            reload();
            
        };
    });
    
})

displayTask = function(){
    if(arrayData === null) {
        arrayData =[]
    }
    for( i=0; i < arrayData.length; i++ ) {
        let numberSlot = arrayData[i].button
        let arrayText = arrayData[i].task
        let arrrayTime = arrayData[i].timeStamp
        let li = document.createElement("li")
        
        console.log(numberSlot, "numbers")
        console.log(arrayText, "task")

        if(numberSlot == 9){
            li.textContent = arrayText + " / " + arrrayTime
            timeBlock9.appendChild(li)
        }
        if(numberSlot == 10){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock10.appendChild(li)
        }
        if(numberSlot == 11){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock11.appendChild(li)
        }
        if(numberSlot == 12){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock12.appendChild(li)
        }
        if(numberSlot == 13){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock1.appendChild(li)
        }
        if(numberSlot == 14){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock2.appendChild(li)
        }
        if(numberSlot == 15){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock3.appendChild(li)
        }
        if(numberSlot == 16){
            li.textContent = arrayText+ " :Saved at " + arrrayTime
            timeBlock4.appendChild(li)
        }
        if(numberSlot == 17){
            li.textContent = arrayText+ " / " + arrrayTime
            timeBlock5.appendChild(li)
        }
    }
    
}

for(i =0; i < 9; i++){
    var thisTimeBlock = i + 9
    // console.log(thisTimeBlock)
    var thishour = ("#") + thisTimeBlock
    console.log(timeHour)
    
    if(thisTimeBlock < timeHour){
        $(thishour).addClass("bg-danger")
    }
    
    if(thisTimeBlock == timeHour) {
        $(thishour).addClass("bg-warning text-dark")
    }

    if(thisTimeBlock > timeHour) {
        $(thishour).addClass("bg-primary")
    }
    
    
}

displayTask();

    

