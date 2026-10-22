import { AlertModel } from "./models/AlertModel.js";
import { AlertView } from "./views/AlertView.js";
import { AlertController } from "./controllers/AlertController.js";

document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome-screen");
  const application = document.getElementById("application");
  const form = document.getElementById("welcome-form");
  const nameInput = document.getElementById("visitor-name");
  const dateInput = document.getElementById("access-date");
  let view;

  const refreshDate = () => {
    dateInput.value = new Date().toLocaleDateString("pt-BR");
  };
  refreshDate();
  nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.setCustomValidity("Informe seu nome para continuar.");
      nameInput.reportValidity();
      return;
    }
    refreshDate();
    document.getElementById("visitor-greeting").textContent = `Olá, ${name}!`;
    welcome.hidden = true;
    application.hidden = false;
    if (!view) {
      const model = new AlertModel();
      view = new AlertView();
      const controller = new AlertController(model, view);
      controller.init();
    } else {
      view.map.invalidateSize();
    }
    const switchButton = document.getElementById("btn-switch-user");
    switchButton.focus();
  });

  document.getElementById("btn-switch-user").addEventListener("click", () => {
    application.hidden = true;
    welcome.hidden = false;
    document.getElementById("visitor-greeting").textContent = "";
    form.reset();
    refreshDate();
    nameInput.focus();
  });
});
