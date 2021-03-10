const btns = document.querySelectorAll(".btn");
const modal = document.querySelector("#modal");
const btnClose = document.getElementById("btn-close");
const layer = document.getElementById("blur");
const openModal = function () {
  modal.classList.remove("hide");
  layer.classList.remove("hide");
  return;
};

const closeModal = function () {
  modal.classList.add("hide");
  layer.classList.add("hide");
};

const closeModalByPress = function (e) {
  console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
};
for (btn of btns) {
  console.log(btn);
  btn.addEventListener("click", openModal);
}

btnClose.addEventListener("click", closeModal);
document.querySelector("body").addEventListener("keydown", closeModalByPress);
