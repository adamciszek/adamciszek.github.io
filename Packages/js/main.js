/*==================== LOADER ====================*/
window.addEventListener('load', function() {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const mainContent = document.querySelector('.main');
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');

  setTimeout(() => {
    loaderWrapper.style.display = 'none';
    mainContent.style.display = 'block';
    header.style.display = 'block';
    footer.style.display = 'block';
  }, 1500); // 3000 milliseconds = 3 seconds
});

/*==================== CONTACT FORM LOADING ====================*/
const form = document.getElementById("contact-form");
const button = document.getElementById("send-button");

if (form && button) {
  form.addEventListener("submit", (e) => {
    // Change cursor to 'wait' and disable button
    document.body.style.cursor = "wait";
    button.disabled = true;
    button.textContent = "Sending...";

    // Revert cursor back after submission (optional if redirection occurs)
    form.addEventListener("submit", () => {
      document.body.style.cursor = "default";
      button.disabled = false;
      button.textContent = "Send";
    });
  });
}


/*==================== NAV-MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOWN =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== CUSTOM CURSOR ====================*/
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
});

document.addEventListener("click", () => {
  cursor.classList.add("click");
  cursor2.classList.add("click");

  setTimeout(() => {
    cursor.classList.remove("click");
    cursor2.classList.remove("click");
  }, 500);
});