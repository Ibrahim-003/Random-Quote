import { shareOnLinkedIn, shareOnFacebook, shareOnTwitter } from "./share.js";
import { showModal } from "./modal.js";
import { mainFunc } from "./main.js";

export const setupEventListeners = (modalContainer) => {
  const main = document.getElementById("main");

  main.addEventListener("click", (event) => {
    const target = event.target.closest(".quote-action");

    if (target) {
      if (target.id === "random-button") {
        mainFunc();
      } else if (target.id === "share-button") {
        showModal(true, modalContainer);
      }
    }
  });

  const closeModalBtn = document.getElementById("close-modal");
  const shareLinkedIn = document.getElementById("share-linkedin");
  const shareFacebook = document.getElementById("share-facebook");
  const shareTwitter = document.getElementById("share-twitter");

  if (shareLinkedIn) {
    shareLinkedIn.addEventListener("click", () => {
      shareOnLinkedIn();
    });
  }

  if (shareFacebook) {
    shareFacebook.addEventListener("click", () => {
      shareOnFacebook();
    });
  }

  if (shareTwitter) {
    shareTwitter.addEventListener("click", () => {
      shareOnTwitter();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      showModal(false, modalContainer);
    });
  }
};
