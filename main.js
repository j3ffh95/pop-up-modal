const open = document.querySelector("#open"),
  close = document.querySelector("#close"),
  container = document.querySelector(".popup-container");

open.addEventListener("click", () => {
  container.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});
