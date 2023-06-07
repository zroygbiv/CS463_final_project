// Fade in effect on page load
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  body.style.opacity = "0";

  setTimeout(function () {
    body.style.transition = "opacity 0.6s ease";
    body.style.opacity = "1";
  }, 100);
});

// Smooth scrolling for anchor tags
document.querySelectorAll('a[href^="#"]').forEach((anchorTag) => {
  anchorTag.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Submit event listener for contact form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );
    successModal.show();
    contactForm.reset();
  });
});
