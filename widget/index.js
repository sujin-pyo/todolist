import { createDiv } from "./div";
import { createButton } from "./button";
import { createCheckbox } from "./checkbox";
import { createContents } from "./contents";
import { createInput } from "./input";
import { createList } from "./list";
//import { getControl } from "./control";

window.Widget = {
  div: createDiv,
  button: createButton,
  checkbox: createCheckbox,
  contents: createContents,
  list: createList,
  getControl: function (id) {
    var el = document.getElementById(id);
    el.focus();
    return el.value;
  },
  input: createInput,
};
