let textinput = document.getElementById("textinput");
let btnadd = document.getElementById("btnadd");
let container = document.getElementsByClassName("container")[0]

let tasks = []

 btnadd.addEventListener("click" , function () {
    let todo = {
        id : Date.now(),
        data : textinput.value,
    }
    tasks.push(todo)
    addtodo(todo.data)
    textinput.value = ""
    console.log(tasks)
 })

for(let i=0 ; i<tasks.length ; i++)
{
    addtodo(tasks[i]) 
    
}

function addtodo (todotext)
{
    let taskview =document.createElement("div");
    taskview.className = "taskview"
    container.appendChild(taskview)

    let check =document.createElement("input");
    check.type = "checkbox";
    taskview.appendChild(check);

    
    let task = document.createElement("h2");
    task.id = "task";
    taskview.appendChild(task);


    let btndel = document.createElement("button");
    btndel.textContent = "delet"
    btndel.id = "btndel";
    taskview.appendChild(btndel);
    task.textContent = todotext
}

function delettodo ()
{
    
}

