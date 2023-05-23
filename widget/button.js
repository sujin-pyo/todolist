//이 button은 어디서든 쓸 수 있어야함. widget만 번들링할 것임.
// Widget.button();

function createButton(option) {
  var el = document.createElement("button");
  el.textContent = option.label;
  el.onclick = option.onClick;

  return {
    //el자체가 아니라 el을 감싼
    el: el,
  };
}
