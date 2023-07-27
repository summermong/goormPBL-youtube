const titleBtn = document.querySelector(".info .data .titleBtn");
const title = document.querySelector(".info .data .titleandBtn .title");

titleBtn.addEventListener("click", () => {
  titleBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
