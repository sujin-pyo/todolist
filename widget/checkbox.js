export function createCheckbox(option) {
  var el = document.createElement("input");
  el.type = "checkbox";
  el.checked = option.checked;
  el.onchange = option.onChange;

  return {
    //el자체가 아니라 el을 감싼
    el: el,
  };
}
