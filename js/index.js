// Navigation Bar
// Scrolling behavior
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

// Contact Me
// Submission modal
document.addEventListener("DOMContentLoaded", function () {
  // Get contact form element
  const contactForm = document.querySelector(".contact-form");

  // Attach a event listener to the form
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );
    successModal.show();
    contactForm.reset();
  });
});
