import view from "../views/imc.html";
import {subFormImc} from "../assets/js/calculatorImc";

export default () => {
  const boxImc = document.createElement("div");
  boxImc.setAttribute('class','imc-box');
  boxImc.innerHTML = view;

  //send the element for operate with functions
  //If show result then clean all fields from form
  subFormImc(boxImc);

  return boxImc;
}

