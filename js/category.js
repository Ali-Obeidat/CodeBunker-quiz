window.onload = function () {
  if (localStorage.getItem("sessionState") === "null") {
    alert("At first you have to log in ");
    window.open("../index.html", "_self");
  }
  localStorage.removeItem("quizNumber");
};

document.body.addEventListener("click", function (event) {
  if (!event.target.classList.contains("login-click")) {
    if (localStorage.getItem("sessionState") === "null") {
      alert("At first you have to log in ");
      window.open("../html/signup.html", "_self");
    }
  }
});

let fname = document.querySelector(".fname");

let data = window.localStorage.getItem("information");
let tasks = JSON.parse(data);
let logNAME = window.localStorage.getItem("logName");

fname.innerHTML = `${logNAME}!`;

/* Check if it log in or not */

let login = document.querySelector(".home-btn-login");
login.onclick = function () {
  localStorage.setItem("sessionState", null);
  window.open("../index.html", "_self");
};

let categoryBtn = document.querySelectorAll(".category-button");

categoryBtn.forEach(function (ele, index) {
  ele.onclick = function () {
    switch (index) {
      case 0:
        localStorage.setItem("quizNumber", 1);
        break;
      case 1:
        localStorage.setItem("quizNumber", 2);
        break;
      case 2:
        localStorage.setItem("quizNumber", 3);
        break;
    }
    window.open("../html/quize.html", "_self");
  };
});
const openHtmlModalButtons = document.querySelector(".Html");
const closeHtmlModalButtons = document.querySelector("#close-html");

openHtmlModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_html");
  openModal(modal);
});

closeHtmlModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_html");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
//////////////////////////////////////////////////////////////////////
const openJsModalButtons = document.querySelector(".css");
const closeJsModalButtons = document.querySelector("#close-css");

openJsModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_css");
  openModal(modal);
});

closeJsModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_css");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
///////////////////////////////////////////////////////////////
const openCssModalButtons = document.querySelector(".js img");
const closeCssModalButtons = document.querySelector("#close-js");

openCssModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_js");
  openModal(modal);
});

closeCssModalButtons.addEventListener("click", () => {
  const modal = document.querySelector(".modal_js");
  closeModal(modal);
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
