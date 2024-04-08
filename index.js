function RegisterButtonHandle() {
  alert("You have been singed");
}

const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".register-button");
const modal = document.querySelector(".modal");

console.log(btn);
btn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });

  modal.classList.add("active");
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
    } else {
      console.log("Modal nieaktywny");
    }
  }
});
