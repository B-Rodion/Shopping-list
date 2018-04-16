(function() {
  var btnCheckAll = document.querySelector(".checkBtn");
  var btnDeleteAll = document.querySelector(".deleteBtn");
  var btnFilterActive = document.querySelector(".filter-active");
  var btnAdd = document.querySelector(".toDo");
  var todoInput = document.querySelector(".input");
  var todosUl = document.querySelector(".output");
  var counter = document.querySelector(".counter");

  var todoArr = [];

  function ToDo(text) {
    this.isCompleted = false;
    this.text = text;
  };

  btnAdd.addEventListener("click", function() {
    if (!validateInput(todoInput)) return;
    
    var inputText = todoInput.value;
    var todoObj = new ToDo(inputText);
    todoArr.unshift(todoObj);

    var todoLi = document.createElement("li");
    todoLi.appendChild(document.createTextNode(inputText));
    todoLi.className = "list";

    var buttonDel = document.createElement("span");
    buttonDel.appendChild(document.createTextNode("\u00D7"));
    buttonDel.className = "delBtn";
    todoLi.appendChild(buttonDel);

    todoLi.addEventListener("click", function(event) {
      todoObj.isCompleted = !todoObj.isCompleted;
      if (todoObj.isCompleted) {
        todoLi.classList.add("checked");
      } else {
        todoLi.classList.remove("checked");
      }
      console.log(todoArr);
    });

    buttonDel.addEventListener("click", function(event) {
      event.stopPropagation();

      var index = todoArr.indexOf(todoObj);
      todoArr.splice(index, 1);

      todoLi.parentNode.removeChild(todoLi);
      console.log(todoArr);
    });

    btnCheckAll.addEventListener("click", function(event) {
      // if (!validateCheckDel(todoArr)) return;

      var todosLi = todosUl.querySelectorAll("li");
      for (var i = 0; i < todosLi.length; i++) {
        todoArr[i].isCompleted = true;
        todosLi[i].classList.add("checked");
      }
      console.log(todoArr);
    });

    btnDeleteAll.addEventListener("click", function(event) {
      // if (!validateCheckDel(todoArr)) return;
      
      var todosLi = todosUl.querySelectorAll("li");
      for (var j = 0; j < todosLi.length; j++) {
        var index = todoArr.indexOf(todoObj);
        todoArr.splice(index, 1);

        todosLi[j].parentNode.removeChild(todosLi[j]);
      }
      console.log(todoArr);
    });

    // btnFilterActive.addEventListener("click", function(event) {

    //   for (var i = 0; i < todoArr.length; i++) {
    //     if (todoArr[i].isCompleted == true) {
    //       
    //     }
    //   }
    // });

    prepend(todosUl, todoLi);
    todoInput.value = "";
    console.log(todoArr);
  });

  // utils
  function prepend(parent, child) {
    var firstEl = parent.firstChild;
    if (firstEl) {
      parent.insertBefore(child, firstEl);
    } else {
      parent.appendChild(child);
    }
  }
  
  function validateInput(input) {
    if (input.value === "") {
      alert("Текстовое поле не должно быть пустым!");
      return false;
    }
    return true;
  }

  // function validateCheckDel(value) {
  //   if (value.length == 0) {
  //     alert("Список задач пуст :(");
  //     return false;
  //   }
  //   return true;
  // }

})();


