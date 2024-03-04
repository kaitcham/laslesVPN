const menu = document.querySelector('.menu');
const mobileLinks = document.querySelectorAll('.mobile');

menu.addEventListener('click', () => {
  menu.innerHTML = menu.innerHTML === '☰' ? '✖' : '☰';
  mobileLinks.forEach((link) => {
    link.classList.toggle('hidden');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const windowHeight = window.innerHeight;
  const section = document.querySelector('section');
  const headerHeight = document.querySelector('header').offsetHeight;
  section.style.height = windowHeight - headerHeight + 'px';
});
