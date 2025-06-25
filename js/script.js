// 🍔 Toggle mobile nav
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-nav");
  const navLinks = document.querySelector(".nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
  
});



