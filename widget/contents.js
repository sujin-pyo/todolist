export function createContents(option) {
  var el = document.createElement("span");
  el.textContent = option.textContent;

  return {
    //el자체가 아니라 el을 감싼
    el: el,
  };
}
