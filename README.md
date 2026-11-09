# Business Landing Page with WhatsApp Booking

A fast, mobile-first landing page for a local beauty business. Visitors pick a service and date, and the form opens WhatsApp with their booking already typed out. It is a template I can customise for small business clients.

Live demo: https://business-landing-page-smoky.vercel.app

## Features

- Clear hero, services and prices, reviews, FAQ and booking sections
- Booking form that builds a WhatsApp message and opens a chat with the business
- Form validation and a date picker that blocks past dates
- Responsive design with a mobile menu
- Smooth scrolling, scroll animations and accessible focus states
- Respects "reduced motion" settings
- No frameworks, so it loads fast

## Tech stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, media queries)
- JavaScript (ES6+, IntersectionObserver)

## Run it locally

No install needed. Open `index.html` in your browser.

## Customise it for a client

Open `script.js` and change the two values at the top:

```js
const CONFIG = {
  whatsappNumber: '27XXXXXXXXX', // country code + number, no + or spaces
  businessName: "Thandi's Braids & Beauty",
};
```

Then update the text, prices and colours (the colour variables are at the top of `style.css`).

## What I practised

- Building a conversion-focused page layout
- Mobile-first, responsive CSS
- Working with the DOM, forms and `encodeURIComponent`
- Accessibility basics (labels, focus, aria attributes)
- Designing for the South African market, where WhatsApp is the main way customers book

## Contact

Kgothatso Kenny Manyaka
Pretoria / Johannesburg, South Africa
[Email](mailto:manyakakgothatso7@gmail.com) · [LinkedIn](https://linkedin.com/in/kgothatso-manyaka-00036627b) · [GitHub](https://github.com/KennydaNerd)
