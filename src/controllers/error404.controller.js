import view from "../views/error404.html";

export default () => {
  const boxError = document.createElement("div");
  boxError.setAttribute('class','error-box');
  boxError.innerHTML = view;
  return boxError;
};
