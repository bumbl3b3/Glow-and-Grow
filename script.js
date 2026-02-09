const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');
const countdown = document.getElementById('countdown');
const learnMoreBtn = document.getElementById('learn-more');
const signupForm = document.getElementById('signup-form');
const formMessage = document.getElementById('form-message');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const target = tab.getAttribute('data-target');
    tabContent.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});

const herHouseDate = new Date();
herHouseDate.setDate(herHouseDate.getDate() + 30);

function updateCountdown() {
  const now = new Date();
  const distance = herHouseDate - now;

  if (distance <= 0) {
    countdown.textContent = "Her House is happening now!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  countdown.textContent = `Her House starts in ${days} days and ${hours} hours.`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

learnMoreBtn.addEventListener('click', () => {
  document.getElementById('event').scrollIntoView({ behavior: 'smooth' });
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(signupForm);
  const name = data.get('name');

  formMessage.textContent = `Thanks, ${name}! You're now on the Her Sister's Corner update list.`;
  formMessage.style.color = '#7d2567';
  signupForm.reset();
});

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('show');
});

document.getElementById('year').textContent = new Date().getFullYear();
