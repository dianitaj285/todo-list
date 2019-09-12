var toDoForm = document.getElementById("toDoForm")
var ulTask=document.getElementById("ulTask")
toDoForm.addEventListener("submit", task)
var deleteButton=document.getElementById("deleteButton")
deleteButton.addEventListener("click",deleteTask)

function task(event){
    event.preventDefault()
    if (event.target[0].value!==""){
    var liTask=document.createElement("li")
    var label=document.createElement("label")
    var inputCheck=document.createElement("input")
    inputCheck.type="checkbox"
    ulTask.appendChild(liTask)
    label.innerHTML=event.target[0].value
    liTask.appendChild(label)
    label.appendChild(inputCheck)
    toDoForm.reset()}
}

function deleteTask(){
    Array.from(ulTask.children).forEach(function(li){
        if (li.children[0].children[0].checked){
            ulTask.removeChild(li)   
        }
    }); 
}