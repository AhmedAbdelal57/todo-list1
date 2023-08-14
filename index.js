let textinput = document.getElementById("textinput");
let btnadd = document.getElementById("btnadd");
let container = document.getElementsByClassName("container")[0]

let tasks = []
// tasks.push(JSON.parse(localStorage.getItem("TodosList"))) 
let storageJson = localStorage.getItem("TodosList")
let storageJs = JSON.parse(storageJson);
console.log(storageJs)
if(storageJs !=null)
{
    tasks = storageJs;
}else{
    let tasks = [] 
}
display();
console.log(tasks)
 btnadd.addEventListener("click" , function () {
    if(textinput.value != "")
    {
    let todo = {
        id : Date.now(),
        data : textinput.value,
    }
    tasks.push(todo)
    addtodo(todo.data,todo.id)
    localStorage.setItem("TodosList",JSON.stringify(tasks))
    textinput.value = "";
    console.log(tasks)
    }else{
        alert("enter text in input");
    }
 })

function display()
{
    for(let i=0;i<tasks.length;i++)
    {
        addtodo(tasks[i].data,tasks[i].id)
    }
}

function addtodo (todotext,todoid)
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
    task.textContent = todotext +" " +todoid
    btndel.addEventListener("click",function delet(id) {
        id = todoid
        console.log("ahmed")
        console.log(id)
        let newList = [];
        for(let i = 0; i<tasks.length;i++)
        {
        if(tasks[i].id != id)
        {
            newList.push(tasks[i]);
        }else
        {
            console.log(id,tasks[i].id)
        }
        }
    tasks = newList;
    console.log(newList)
    localStorage.setItem("TodosList",JSON.stringify(tasks))
    container.removeChild(taskview)
    
    })
}


