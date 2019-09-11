var toDoForm = document.getElementById("toDoForm")

toDoForm.addEventListener("submit", task)

function task(event){
    event.preventDefault()
    console.log(event.target[0])
    console.log(event.target[1])
}