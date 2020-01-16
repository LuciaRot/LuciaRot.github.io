interface Todo{
    text:string[];
    checked:boolean[];
}
var list: Todo = {
    text:  ["Einkaufen" , "Kochen" , "GEschenk kaufen"],
    checked: [true    , false   , false]

}

var newInput: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    newInput = document.querySelector("#addtask");
    addButtonDOMElement = document.querySelector("#addbutton");
    todosDOMElement = document.querySelector("#tasks");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < list.text.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + list.checked[index] + "'><i class='fas fa-check'></i></span>"
                            + list.text[index] +
                            "<span class='trash fas fa-trash-alt'></span>";


 todo.querySelector(".check").addEventListener("click", function(): void {
    toggleCheckState(index);
});

    todo.querySelector(".trash").addEventListener("click", function(): void {
    });

    todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo,todosDOMElement.childNodes[0]);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = list.text.length + " in total";
}

function addTodo(): void {
    if (newInput.value != "") {
        list.text.push(newInput.value);
        list.checked.push(false);
        newInput.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    list.checked[index] = !list.text[index];

    drawListToDOM();
}
function deleteTodo(index: number): void {


    list.text.splice(index, 1);
    list.checked.splice(index, 1);

    drawListToDOM();
}
