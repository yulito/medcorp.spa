import view from "../views/calories.html";
import {calories} from "../assets/js/calculatorCalories";

export default () => {
  const boxTc = document.createElement("div");
  boxTc.setAttribute('class','tc-box');
  boxTc.innerHTML = view;

  calories(boxTc)

  return boxTc;
}