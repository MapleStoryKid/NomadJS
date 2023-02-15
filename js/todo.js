const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


// 
function saveToDos() {
    //localStorage에 저장된 array (즉 toDos)에 저장 계속 ^^^^^^^^^^^^^^^^^
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}


//새로운 element를 생성하는 코드
function paintToDo(a) {
  const li = document.createElement("li");
  li.id = a.id;
  const span = document.createElement("span");
  span.innerText = a.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //localStorage 안에 데이터(즉 saveToDos)가 위에 빈 array(즉 toDos에 입력)
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//삭제 플로우: 전체 삭제 후 새로운 배열 생성.

