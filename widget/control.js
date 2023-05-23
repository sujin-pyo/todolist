//id를 넘겨받아 tagName에 따라 다른 기능 수행.
export function getControl(id) {
  var el = document.getElementById(id);

  if (el.tagName.toLowerCase() === "input") {
    return el.value;
  }
}
