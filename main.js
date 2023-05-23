var todolist = [];
render();

//var containerEl = document.getElementById("container");
//var inputControl = Widget.input("todoInput");

//containerEl.append(inputControl.el);

//입력버튼
// var inputBtnControl = Widget.button({
//   label: "입력",
//   onClick: function () {
//     if (!inputControl.getValue()) {
//       alert("할일을 입력해 주세요");
//       return;
//     }

//     //Widget.getControl("todo-input");

//     todolist.push({
//       id: crypto.randomUUID(),
//       contents: inputControl.getValue(),
//       done: false,
//     });
//     checkboxControl.reload(todolist);
//     contentsControl.reload(todolist);
//     todolistControl.reload(todolist);

//     inputControl.el.value = "";
//     inputControl.el.focus();
//   },
// });
//containerEl.append(inputBtnControl.el);
//입력버튼 render
var inputValue = Widget.getControl("todoInput");
var onClickSave = function () {
  if (!inputValue()) {
    alert("할 일을 입력해 주세요");
    return;
  }
  todolist.push({
    id: crypto.randomUUID(),
    contents: input.getValue(),
    done: false,
  });
  checkboxControl.reload(todolist);
  contentsControl.reload(todolist);
  todolistControl.reload(todolist);

  //inputValue = "";
};
//체크박스
var checkboxControl = Widget.list({
  datas: todolist,
  columns: [
    {
      render: function (data) {
        var checkboxCtrl = Widget.checkbox({
          checked: data.done,
          onChange: function () {
            data.done = !data.done;
            checkboxControl.reload(todolist);
          },
        });
        return checkboxCtrl.el;
      },
    },
  ],
});
containerEl.append(checkboxControl.el);
//컨텐츠
var contentsControl = Widget.list({
  datas: todolist,
  columns: [
    {
      render: function (data) {
        var contentsCtrl = Widget.contents({
          textContent: data.contents,
        });
        return contentsCtrl.el;
      },
    },
  ],
});
containerEl.append(contentsControl.el);

//삭제버튼
var todolistControl = Widget.list({
  datas: todolist,
  columns: [
    {
      render: function (data) {
        var delBtnCtrl = Widget.button({
          label: "삭제",
          onClick: function () {
            // splice
            todolist.splice(todolist.indexOf(data), 1);
            todolistControl.reload(todolist);
            contentsControl.reload(todolist);
            checkboxControl.reload(todolist);
          },
        });
        return delBtnCtrl.el;
      },
    },
  ],
});
containerEl.append(todolistControl.el);

function render() {
  var root = document.getElementById("contents");
  var div = Widget.div("container", { parent: root });

  // div.append(Widget.input("todoInput", { onKeyDown: onKeyDownTodoInput }));
  div.append(Widget.input("todoInput"));
  div.append(Widget.button("btnSave", { label: "입력", onClick: onClickSave }));
  div.append(
    Widget.list("todoList", {
      datas: getSortedTodoList({ done: false }),
      columns: [
        { id: "done", render: renderColumnDone },
        { id: "todo", render: renderColumnTodo },
        { id: "delete", render: renderColumnDelete },
      ],
    })
  );
  div.append(
    Widget.list("todoListDone", {
      datas: getSortedTodoList({ done: true }),
      columns: [
        { id: "done", render: renderColumnDone },
        { id: "todo", render: renderColumnTodo },
        { id: "delete", render: renderColumnDelete },
      ],
    })
  );
}
