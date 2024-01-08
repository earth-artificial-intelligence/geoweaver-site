
// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Projects Slider
  // --------------------------------------------
  new Swiper(".project-swiper-container", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".project-swiper-pagination",
      clickable: true,
    }
  });
})();

const landingPageText = "Build workflows that scale";
let index = 0;

function typeWriter() {
  "use strict";
  if (index < landingPageText.length) {
    document.getElementById("landing-page-text").innerHTML += landingPageText.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Adjust speed here
  }
}

typeWriter();


