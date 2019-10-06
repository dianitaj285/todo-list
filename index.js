var toDoForm = document.getElementById("toDoForm")
var ulTask = document.getElementById("ulTask")
toDoForm.addEventListener("submit", task)
var deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", deleteTask)
var tasks = document.getElementById("tasks")


function task(event) {
    event.preventDefault()
    if (event.target[0].value !== "") {
        var taskForm = document.createElement("form")
        var task = document.createElement("label")
        var inputCheck = document.createElement("input")
        var span = document.createElement("span")
        var buttonEdit = document.createElement("input")
        var inputEdit = document.createElement("input")
        inputEdit.classList.add("hide")
        inputCheck.type = "checkbox"
        buttonEdit.type = "submit"
        tasks.appendChild(taskForm)
        taskForm.appendChild(task)
        span.innerHTML = event.target[0].value
        task.appendChild(inputCheck)
        task.appendChild(span)
        task.appendChild(inputEdit)
        task.appendChild(buttonEdit)
        buttonEdit.value = "Edit"
        buttonEdit.addEventListener("click", editTask)
        toDoForm.reset()
    }
}

function deleteTask() {
    Array.from(taskForm.children).forEach(function (task) {
        if (task.children[0].children[0].checked) {
            taskForm.removeChild(task)
        }
    });
}

function editTask(event) {
    event.preventDefault()
    event.stopPropagation()
    var label = event.target.parentElement
    var editCheck = label.children[0]
    var span = label.children[1]
    var inputEdit = label.children[2]
    var editButton = label.children[3]
    var textEditar = span.innerHTML

    span.classList.add("hide")
    inputEdit.classList.remove("hide")
    editCheck.checked = false
    editButton.value = "Ok"
    inputEdit.value = textEditar
    editButton.removeEventListener("click", editTask)
    editButton.addEventListener("click", saveTask)
}

function saveTask(event) {
    event.preventDefault()
    var label = event.target.parentElement
    var span = label.children[1]
    var inputEdit = label.children[2]
    var editButton = label.children[3]
    var newText = inputEdit.value
    span.innerHTML = newText
    span.classList.remove("hide")
    inputEdit.classList.add("hide")
    editButton.value = "Edit"
    editButton.removeEventListener("click", saveTask)
    editButton.addEventListener("click", editTask)

}