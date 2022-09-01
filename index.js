const templateId = "template_d3m8z9n";
const serviceId = "service_qqyvl8j";
const userId = "kvaFNfJwKnJexWb3t";

let darkmode = false;
let modalOpen = false;
let menuOpen = false;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const succes = document.querySelector(".modal__overlay--succes");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(serviceId, templateId, event.target, userId)
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      succes.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is not working as of right now. Please contact me directly on jip.van.sommeren@gmail.com"
      );
    });
}

function toggleModal() {
  // modalOpen = !modalOpen;
  if (modalOpen) {
    modalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  modalOpen = true;

  document.body.classList += " modal__open";
}

function darkMode() {
  if (darkmode) {
    darkmode = false;
    return document.body.classList.remove("dark__mode");
  }
  darkmode = true;

  document.body.classList += " dark__mode";
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  for (i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function openMenu() {
  // modalOpen = !modalOpen;
  if (menuOpen) {
    menuOpen = false;
    return document.body.classList.remove("menu__open");
  }
  menuOpen = true;

  document.body.classList += " menu__open";
}
