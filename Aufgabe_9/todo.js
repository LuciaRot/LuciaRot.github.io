var list = {
    text: ["Einkaufen", "Kochen", "GEschenk kaufen"],
    checked: [true, false, false]
};
var newInput;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    newInput = document.querySelector("#addtask");
    addButtonDOMElement = document.querySelector("#addbutton");
    todosDOMElement = document.querySelector("#tasks");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + list.checked[index] + "'><i class='fas fa-check'></i></span>"
            + list.text[index] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
        });
        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    };
    for (var index = 0; index < list.text.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = list.text.length + " in total";
}
function addTodo() {
    if (newInput.value != "") {
        list.text.push(newInput.value);
        list.checked.push(false);
        newInput.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    list.checked[index] = !list.text[index];
    drawListToDOM();
}
function deleteTodo(index) {
    list.text.splice(index, 1);
    list.checked.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=todo.js.map