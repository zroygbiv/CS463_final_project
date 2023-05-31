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