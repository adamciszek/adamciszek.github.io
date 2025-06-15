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

// Highlight active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute('id');

      const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  /*==================== TOGGLE MOBILE MENU ====================*/
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  /*==================== CLOSE MENU ON LINK CLICK ====================*/
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Only close menu on small screens
      if (window.innerWidth <= 767) {
        menu.classList.remove('show');
      }
    });
  });



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
    // Toggle the clicked content only
    if (content.classList.contains('skills__close')) {
      content.classList.remove('skills__close');
      content.classList.add('skills__open');
      analytics.logEvent('skills_section_open', {
        section: content.querySelector('.skills__title').textContent.trim()
      });
    } else {
      content.classList.remove('skills__open');
      content.classList.add('skills__close');
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
  const sendButton = form ? form.querySelector("button[type='submit']") : null;

  if (form && sendButton) {
    // Initialize EmailJS
    emailjs.init('8zZiGKytUjcIiqBXn');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation(); // Add this to prevent any parent form handlers

      // Set sending state
      sendButton.classList.add("sending");
      sendButton.disabled = true;

      try {
        await emailjs.sendForm(
            'service_tv33ph3',
            'template_w64uc4s',
            form
        );

        // Success state
        sendButton.classList.remove("sending");
        sendButton.classList.add("sent");

        // Track success
        analytics.logEvent('contact_form_submit_success');

        // Reset form
        form.reset();

        // Keep checkmark visible for 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Return to normal state
        sendButton.classList.remove("sent");
        sendButton.disabled = false;

      } catch (error) {
        console.error('Failed to send:', error);

        // Error state
        sendButton.classList.remove("sending", "sent");
        sendButton.disabled = false;

        // Show error temporarily
        const buttonText = sendButton.querySelector('.button-text');
        const originalText = buttonText.textContent;
        buttonText.textContent = 'Error - Try Again';

        // Track error
        analytics.logEvent('contact_form_submit_error', {
          error: error.message
        });

        // Reset after 3 seconds
        setTimeout(() => {
          buttonText.textContent = originalText;
        }, 3000);
      }
    });
  }

  /*==================== CLICK EFFECT TO EMAIL CARD ====================*/
  const emailCard = document.querySelector('.email-card');
  emailCard.addEventListener('click', function() {
    // This will work even without JS, but adds a nice click effect
    this.style.transform = 'translateY(0)';
    window.location.href = "mailto:contact@adamciszek.ca?subject=Let's%20Work%20Together";
  });

// Enhanced hover effects
  emailCard.addEventListener('mouseenter', () => {
    emailCard.style.transform = 'translateY(-7px)';
    emailCard.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
  });
  emailCard.addEventListener('mouseleave', () => {
    emailCard.style.transform = 'translateY(-5px)';
    emailCard.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
  });
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