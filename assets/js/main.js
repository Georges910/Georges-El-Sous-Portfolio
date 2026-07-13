(function () {
  "use strict";

  /* ===============================
     Mobile Navigation
  =============================== */

  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const body = document.body;

  if (mobileNavToggle) {
    const navIcon = mobileNavToggle.querySelector("i");

    mobileNavToggle.addEventListener("click", function () {

      body.classList.toggle("mobile-nav-active");

      if (navIcon) {
        navIcon.classList.toggle("bi-list");
        navIcon.classList.toggle("bi-x");
      }

    });

  }

  /*
    Close mobile menu after clicking a link
  */

  document.querySelectorAll(".navmenu a").forEach(link => {

    link.addEventListener("click", () => {

      if (body.classList.contains("mobile-nav-active")) {

        body.classList.remove("mobile-nav-active");

        const navIcon = mobileNavToggle?.querySelector("i");
        if (navIcon) {
          navIcon.classList.remove("bi-x");
          navIcon.classList.add("bi-list");
        }

      }

    });

  });

  /* ===============================
     Header Scroll Effect
  =============================== */

  const header = document.querySelector("#header");

  function toggleHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }

  window.addEventListener("scroll", toggleHeader);
  toggleHeader();

  /* ===============================
     AOS Animation
  =============================== */

  window.addEventListener("load", function () {

    if (typeof AOS !== "undefined") {

      AOS.init({

        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false

      });

    }

  });

  /* ===============================
     Scroll To Top Button
  =============================== */

  const scrollTop = document.querySelector("#scroll-top");

  function toggleScrollTop() {

    if (!scrollTop) return;

    if (window.scrollY > 300) {

      scrollTop.classList.add("active");

    } else {

      scrollTop.classList.remove("active");

    }

  }

  window.addEventListener("scroll", toggleScrollTop);

  if (scrollTop) {

    scrollTop.addEventListener("click", function (e) {

      e.preventDefault();

      window.scrollTo({

        top: 0,
        behavior: "smooth"

      });

    });

  }

  /* ===============================
     Active Navigation On Scroll
  =============================== */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navmenu a");

  function updateActiveLink() {

    let current = "";

    sections.forEach(section => {

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {

        current = section.getAttribute("id");

      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

      }

    });

  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  /* ===============================
     Remove Preloader
  =============================== */

  const preloader = document.querySelector("#preloader");

  if (preloader) {

    window.addEventListener("load", function () {

      preloader.remove();

    });

  }

})();