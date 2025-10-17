import { JeanChoices } from "./JeanChoices";

const container = document.querySelector("#container");

const render = () => {
  const jeansHTML = JeanChoices();

  container.innerHTML = `
    ${jeansHTML}
    `;
};
console.log(container);
render();
