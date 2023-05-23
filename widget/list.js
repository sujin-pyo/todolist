//전체 컨테이너
export function createList(option) {
  var el = document.createElement("ul");
  el.style.listStyle = "none";
  el.style.padding = "0";
  render(option.datas, option.columns);

  //   option.datas; //배열 목록
  //   option.columns; //항목 정보

  //   option.datas.forEach(function (datas) {
  //     var liEl = document.createElement("li");
  //     //체크박스, 컨텐츠, 삭제 만들기. 근데 여기서는 컬럼정보를 받아 만들어주는 것으로 구현.
  //     option.columns.forEach(function (column) {
  //       var control = column.render();
  //       liEl.appendChild(control);
  //     });
  //     el.appendChild(liEl);
  //   });
  return {
    el: el,
    reload: function (datas) {
      el.innerHTML = "";
      render(datas, option.columns);
    },
    getValue: function () {
      return el.value;
    },
  };

  function render(datas, columns) {
    datas.forEach(function (data) {
      var liEl = document.createElement("li");
      //체크박스, 컨텐츠, 삭제 만들기. 근데 여기서는 컬럼정보를 받아 만들어주는 것으로 구현.
      columns.forEach(function (column) {
        var control = column.render(data);
        liEl.appendChild(control);
      });
      el.appendChild(liEl);
    });
  }
}
