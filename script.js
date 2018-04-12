var button = document.querySelector(".toDo");
var input = document.querySelector(".input");
var ul = document.querySelector(".output");

var textContainer = [];

function ToDo(text) {
    this.isCompleted = false;
    this.text = text;
};

button.onclick = function() {
    var inputText = input.value;
    var obj = new ToDo(inputText);
    textContainer.push(obj);

    var li = document.createElement("li");
    var ul = document.querySelector(".output");
    var liText = document.createTextNode(inputText);
    var list = document.querySelector("li");
    var ul = document.querySelector(".output");

    li.appendChild(liText);

    var buttonDel = document.createElement("span");
    var buttonText = document.createTextNode("\u00D7");
    buttonDel.className = "delBtn";
    buttonDel.appendChild(buttonText);
    li.appendChild(buttonDel);

	if (inputText === "") {
        alert("Текстовое поле не должно быть пустым!");
    } else if (!list) {
        ul.insertBefore(li, null);
        li.classList.add("list");
    } else {
        ul.insertBefore(li, ul.firstChild);
        li.classList.add("list");
    }
    

    input.value = "";
};

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
        var removeLi = event.target.parentNode;
        removeLi.remove();
    }
}, false);

// ul.onclick = function(event) {
//     if (event.target.tagName === "li") {
//         event.target.classList.toggle("checked");
//     }
// };

// // if (ul.childNodes === true) {
//     function check() {
//         for (var i = 0; i < checkbox.length; i++) {
//             checkbox[i].checked = "checked";
//         }
    
//         // if (checkbox.checked == true) {
//         //     checkbox.checked = false;
//         // }
//     }


