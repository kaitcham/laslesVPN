const menu = document.querySelector('.menu');
const mobileLinks = document.querySelectorAll('.mobile');

menu.addEventListener('click', () => {
  menu.innerHTML = menu.innerHTML === '☰' ? '✖' : '☰';
  mobileLinks.forEach((link) => {
    link.classList.toggle('hidden');
  });
});
