import view from "../views/mets.html";
import {subFormMets} from "../assets/js/calculatorMets"; 
import {listenChange} from "../assets/js/helper.js";

export default () => {
  const boxMets = document.createElement("div");
  boxMets.setAttribute('class','mets-box');
  boxMets.innerHTML = view;

  listenChange(boxMets)

  subFormMets(boxMets)

  return boxMets;
}