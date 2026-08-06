const followButton = document.querySelector('.follow-button');
const profileLinks = document.querySelector('.profile-links');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

followButton?.addEventListener('click', () => {
  const isOpen = followButton.getAttribute('aria-expanded') === 'true';
  followButton.setAttribute('aria-expanded', String(!isOpen));
  profileLinks.classList.toggle('is-hidden', isOpen);
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('is-open', !isOpen);
});

document.querySelector('#year').textContent = new Date().getFullYear();
