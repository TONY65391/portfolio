const menu = document.querySelector('header ul');
const openBtn = document.querySelector('header nav');

openBtn.onclick = () => {
    openBtn.classList.toggle('open');
    menu.classList.toggle('open');
}
// const fadeElements = document.querySelectorAll('.fade-in');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//     else{
//         entry.target.classList.remove('show');
//     }
//   });
// }, { threshold: 0.2 });

// fadeElements.forEach(el => observer.observe(el));

// // Mobile nav toggle
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// // Contact form handler
// document.getElementById("contactForm")?.addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Thank you for reaching out! I will get back to you soon.");
// //   this.reset();
// });