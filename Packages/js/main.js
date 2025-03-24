document.addEventListener('DOMContentLoaded', function() {
  /*==================== FIREBASE INITIALIZATION ====================*/
  const firebaseConfig = {
    apiKey: "AIzaSyAU9tiOkoyo6sdIwZQZRKDQ1pyxNiVem-o",
    authDomain: "adamciszek-647d0.firebaseapp.com",
    projectId: "adamciszek-647d0",
    storageBucket: "adamciszek-647d0.appspot.com",
    messagingSenderId: "397670153154",
    appId: "1:397670153154:web:6ec5dc65a6e854a3c5745b",
    measurementId: "G-32QT72H0E6"
  };

  // Initialize Firebase only if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const analytics = firebase.analytics();

  // Track initial page view
  analytics.logEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });

  /*==================== NAVIGATION MENU ====================*/
  const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      analytics.logEvent('menu_open');
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      analytics.logEvent('menu_close');
    });
  }

  /*==================== SKILLS ACCORDION ====================*/
  const skillsContents = document.querySelectorAll(".skills__content");

  skillsContents.forEach(content => {
    const header = content.querySelector('.skills__header');

    content.addEventListener('click', function(e) {
      if (e.target === content || e.target.closest('.skills__header')) {
        toggleSkills(content);
      }
    });
  });

  function toggleSkills(content) {
    const wasClosed = content.classList.contains('skills__close');

    // Close all first
    skillsContents.forEach(item => {
      item.classList.remove('skills__open');
      item.classList.add('skills__close');
    });

    // Open clicked one if it was closed
    if (wasClosed) {
      content.classList.remove('skills__close');
      content.classList.add('skills__open');
      analytics.logEvent('skills_section_open', {
        section: content.querySelector('.skills__title').textContent.trim()
      });
    }
  }

  /*==================== QUALIFICATION TABS ====================*/
  const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

  // Initialize first tab as active
  if (tabs.length > 0 && tabContents.length > 0) {
    tabs[0].classList.add("qualification__active");
    tabContents[0].classList.add("qualification__active");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");

      tabs.forEach((t) => {
        t.classList.remove("qualification__active");
      });
      tab.classList.add("qualification__active");

      analytics.logEvent('qualification_tab_change', {
        tab_name: tab.textContent.trim()
      });
    });
  });

  /*==================== SCROLL HEADER ====================*/
  function scrollHeader() {
    const nav = document.getElementById("header");
    this.scrollY >= 80
        ? nav.classList.add("scroll-header")
        : nav.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

  /*==================== SCROLL UP ====================*/
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 560
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);

  /*==================== CUSTOM CURSOR ====================*/
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");

  if (cursor && cursor2) {
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
  }

  /*==================== CONTACT FORM ====================*/
  const form = document.getElementById("contact-form");
  const sendButton = document.getElementById("send-button");

  if (form && sendButton) {
    // Initialize EmailJS
    emailjs.init('8zZiGKytUjcIiqBXn');

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // UI Feedback
      sendButton.disabled = true;
      sendButton.textContent = "Sending...";
      document.body.style.cursor = "wait";

      emailjs.sendForm('service_tv33ph3', 'template_w64uc4s', form)
          .then(() => {
            // Success
            sendButton.innerHTML = '<i class="uil uil-check-circle"></i> Sent!';
            analytics.logEvent('contact_form_submit_success');
            form.reset();
          })
          .catch((error) => {
            // Error
            sendButton.innerHTML = '<i class="uil uil-exclamation-circle"></i> Error';
            analytics.logEvent('contact_form_submit_error', { error: error.toString() });
            console.error('Failed to send:', error);
          })
          .finally(() => {
            // Reset UI
            setTimeout(() => {
              sendButton.textContent = "Send";
              sendButton.disabled = false;
              document.body.style.cursor = "default";
            }, 2000);
          });
    });
  }

  /*==================== PROJECT CLICK TRACKING ====================*/
  document.querySelectorAll('.project__card').forEach(card => {
    card.addEventListener('click', () => {
      analytics.logEvent('project_click', {
        project_title: card.querySelector('.project__title')?.textContent.trim() || 'Unknown'
      });
    });
  });

  /*==================== INITIALIZE ACTIVE TAB ON LOAD ====================*/
  // Force the first qualification tab to be active on load
  if (tabs.length > 0) {
    const firstTab = tabs[0];
    const firstTabContent = document.querySelector(firstTab.dataset.target);

    if (firstTabContent) {
      tabs.forEach(t => t.classList.remove("qualification__active"));
      tabContents.forEach(c => c.classList.remove("qualification__active"));

      firstTab.classList.add("qualification__active");
      firstTabContent.classList.add("qualification__active");
    }
  }
});