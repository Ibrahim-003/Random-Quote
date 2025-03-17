import { mainFunc } from "./main.js";
import { setupEventListeners } from "./events.js";

document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("share-modal");
  mainFunc();
  setupEventListeners(modalContainer);
  modalContainer.classList.add("hidden");
});
