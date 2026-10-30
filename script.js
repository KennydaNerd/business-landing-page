// ------------------------------------------------------------
// CONFIG: change these two values for your own business.
// WhatsApp number format: country code + number, no "+" or spaces.
// Example (South Africa): 27821234567
// ------------------------------------------------------------
const CONFIG = {
  whatsappNumber: '27XXXXXXXXX',
  businessName: "Thandi's Braids & Beauty",
};

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const form = document.getElementById('bookingForm');
const errorBox = document.getElementById('formError');
const dateInput = document.getElementById('date');

// Mobile menu
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }),
);

// Block past dates in the date picker
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
dateInput.min = `${yyyy}-${mm}-${dd}`;

// Build the WhatsApp message and open WhatsApp
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const date = dateInput.value;
  const notes = document.getElementById('notes').value.trim();

  if (!name || !service || !date) {
    errorBox.textContent = 'Please enter your name, choose a service and pick a date.';
    return;
  }
  errorBox.textContent = '';

  const niceDate = new Date(date + 'T00:00:00').toLocaleDateString('en-ZA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const message = [
    `Hi ${CONFIG.businessName}, I would like to book an appointment.`,
    '',
    `Name: ${name}`,
    `Service: ${service}`,
    `Preferred date: ${niceDate}`,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
});

// Fade-in on scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.15 },
  );
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();
