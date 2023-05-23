export function createDiv(id, option) {
  var el = document.createElement("div");
  el.id = id;
  option.parent.append(el);

  return {
    //el자체가 아니라 el을 감싼
    el: el,
    append: function (child) {
      el.append(child.el);
    },
  };
}
