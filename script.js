// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form alert
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});
// Download CV button functionality
const downloadBtn = document.getElementById('download-cv');

downloadBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior

  // Optional: show a message
  alert('Your CV download will start shortly.');

  // Create a temporary link to trigger download
  const link = document.createElement('a');
  link.href = this.href;
  link.download = 'YourName_Resume.pdf'; // custom file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


