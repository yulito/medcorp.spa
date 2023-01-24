import view from "../views/home.html";

export default () => {
  const box = document.createElement("div");
  box.setAttribute('class','home-box');
  box.innerHTML = view;

  return box;
}