export function createInput(id) {
  var el = document.createElement("input");
  el.id = id;
  return {
    //el자체가 아니라 el을 감싼
    el: el,
    getValue: function () {
      return el.value;
    },
  };
}
