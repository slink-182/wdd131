const button = document.querySelector('button');
const nav = document.getElementById('nav');

button.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
