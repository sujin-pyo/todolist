var todolist = [];
//var donelist = []; 따로 만들 경우, 자기거를 찾은 다음 제거해야함, .filter 안해도 됨
renderTodoList();
renderDoneList();

var inputEl = document.getElementById("todo-input");
var contentsEl = document.getElementById("todo-contents");

inputEl.onclick = function () {
  if (!contentsEl.value) {
    alert("Please enter todo list contents...");
    return;
  }
  todolist.push({
    id: crypto.randomUUID(),
    contents: contentsEl.value,
    done: false,
  });
  contentsEl.value = "";
  contentsEl.focus();
  renderTodoList();
};

//리스트 렌더링
function renderTodoList() {
  var todoListEl = document.getElementById("todo-list");

  todoListEl.innerHTML = "";
  todolist
    .filter(function (item) {
      return !item.done;
    })
    .forEach(function (item) {
      var itemEl = createTodoItem(item);
      todoListEl.append(itemEl);
    });
}
function renderDoneList() {
  var doneListEl = document.getElementById("done-list");

  doneListEl.innerHTML = "";
  todolist
    .filter(function (item) {
      return item.done;
    })
    .forEach(function (item) {
      var itemEl = createTodoItem(item);
      doneListEl.append(itemEl);
    });
}

function createTodoItem(item) {
  var liEl = document.createElement("li");
  //체크박스
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.done;
  checkbox.onchange = function (e) {
    item.done = !item.done;
    //TODO : target, currentTarget 차이, 버블링이 뭔지
    renderTodoList();
    renderDoneList();
  };

  //컨텐츠
  var contents = document.createElement("span");
  contents.textContent = item.contents;

  //삭제버튼
  var delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.onclick = function () {
    //   //filter : 새로운 리스트에 재할당. (bad) todoList 참조 주소값이 바뀜.
    //   todolist = todolist.filter(function (item2) {
    //     return item2 !== item;
    //   });

    //splice : (bad) indexOf, splice 두개나 써야함. (good) todolist 참조 주소값 유지.
    todolist.splice(todolist.indexOf(item), 1);
    item.done ? renderDoneList() : renderTodoList();
  };

  liEl.append(checkbox);
  liEl.append(contents);
  liEl.append(delBtn);

  return liEl;
}
