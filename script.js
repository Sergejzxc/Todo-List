function onPageLoaded() {
    const input=document.querySelector("input[type='text']");
    const ul=document.querySelector("ul.todos");


function createTodo() {
    const li=document.createElement("li");
    const textSpan=document.createElement("span");
    textSpan.classList.add("todo-text");
    const newTodo=input.value;
    textSpan.append(newTodo);

const deleteBtn=document.createElement("span");
deleteBtn.classList.add("todo-trash");
const icon=document.createElement("i");
icon.classList.add("fas","fa-trash-alt");
deleteBtn.appendChild(icon);

ul.appendChild(li).append(textSpan,deleteBtn);
input.value="";
listenDeleteTodo(deleteBtn);

}

input.addEvenListener("keypress", (keyPressed) => {
    const keyEnter=13;
    if (keyPressed.which == keyEnter) {
        createTodo();
    }
});
    ul.addEvenListener("click", onclickTodo);
}   
document.addEventListener("DOMContentLoaded", onPageLoaded);


function onPageLoaded() {

    function createTodo() {
        
        listenDeleteTodo(deleteBtn);
    }

    function listenDeleteTodo(element) {
        element.addEvenListener("click",(event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }
}


function onPageLoaded() {
    
    function createTodo() {
        
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }

    ul.addEvenListener("click", onClickTodo);
}
       document.addEventListener("DOMContentLoaded", onPageLoaded);


function onPageLoaded() {
    const saveButton=document.querySelector("button.save");
    const clearButton=document.querySelector("button.clear");
    const showTipsButton=document.querySelector("button.showTips");
    const clearTipsButton=document.querySelector("a.closeTips");

    saveButton.addEventListener("click",() => {
        localStorage.setItem("todos", ul.innerHTML);
    });
    clearButton.addEventListener("click",() =>{
        localStorage.removeItem("todos", ul.innerHTML);
    });  
}   


function OnPageLoaded() {
    function listenDeleteTodo(element) {
    }
    function loadTodos() {
        const data=localStorage.getItem("todos");
        if (data) {
            ul.innerHTML=data;
        }
        const deleteButtons=document.querySelector("span-todo-trash");
        for (const button of deleteButtons){
            listenDeleteTodo(button);
        }
            
    }
        loadTodos();
    }
    document.addEventListener("DOMContentLoaded", onPageLoaded);



