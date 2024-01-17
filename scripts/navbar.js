//on smaller screen
// Get the navbar collapse button
const navbarCollapseBtn = document.querySelector('.navbar-toggler');

// Get all the mobile menu links
const mobileMenuLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add a click event listener to each mobile menu link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // If the navbar collapse button is visible (i.e. the navbar is collapsed),
    // trigger a click on the navbar collapse button to collapse the navbar
    if (navbarCollapseBtn.offsetParent !== null) {
      navbarCollapseBtn.click();
    }
  });
});