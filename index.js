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
    var span=document.createElement("span")
    var buttonEdit=document.createElement("button")
    inputCheck.type="checkbox"
    ulTask.appendChild(liTask)
    span.innerHTML=event.target[0].value
    liTask.appendChild(label)
    label.appendChild(inputCheck)
    label.appendChild(span)
    label.appendChild(buttonEdit)
    buttonEdit.innerHTML="Edit"
    buttonEdit.addEventListener("click",editTask)
    toDoForm.reset()}
}

function deleteTask(){
    Array.from(ulTask.children).forEach(function(li){
        if (li.children[0].children[0].checked){
            ulTask.removeChild(li)   
        }
    }); 
}

function editTask(event){
    event.preventDefault()
var label = event.target.parentElement
var span=label.children[1]
var editButton=label.children[2]
var editCheck=label.children[0]
    var textEditar=span.innerHTML
    var inputEdit=document.createElement("input")
    label.removeChild(span)
    label.removeChild(editButton)
    editCheck.checked=false
    label.appendChild(inputEdit)
    inputEdit.value=textEditar
    
}