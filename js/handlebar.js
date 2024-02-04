let btn = document.getElementById('btn');
const closeButton = document.getElementById('bars');
let x = true;

btn.addEventListener('click', () => {
  x = !x;
  if (x) {
    closeButton.classList.remove("fa-regular", "fa-x");
    closeButton.classList.add("fa-solid", "fa-bars");
  }
  else {
    closeButton.classList.remove("fa-solid", "fa-bars");
    closeButton.classList.add("fa-regular", "fa-x");
  }
})