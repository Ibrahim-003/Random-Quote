export const showModal = (isHidden, modalContainer) => {
  if (isHidden) {
    modalContainer.classList.remove("hidden");
  } else {
    modalContainer.classList.add("hidden");
  }
};
