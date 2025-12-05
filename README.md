# Guru Ji — Vedic Astrology & Spiritual Guidance (Static SPA)

### https://www.webstrot.com/html/horoscope/light_version/index.html

This repository contains a production-ready static single page website designed for an astrology / personal brand using HTML5 + Bootstrap 5 + jQuery.

Features
- Single page app structure (index.html)
- Modern Vedic theme: saffron/orange gradients, subtle starry background, zodiac icons
- Semantic markup and accessible features (WCAG AA practices): skip link, keyboard focus, ARIA where relevant
- Responsive and mobile-friendly (Bootstrap 5)
- SEO basics: meta tags, Open Graph, structured data (JSON-LD)
- Bootstrap 5 + jQuery usage for interactivity

Files
- index.html — The main single page app
- css/style.css — Custom site styles and theming
- js/script.js — UI behavior (smooth scroll, form validation)
- assets/ — icons and SVG image assets

How to run
1. Copy to a webserver root (already in `/var/www/html/guruji` for typical LAMP setups).
2. Open `index.html` in a browser or visit the site in the server (e.g., http://localhost/guruji/).

Notes
- This site is static: forms are example-only and do not send emails by default. You may hook the contact form to a backend or service (like Formspree) for production.
- All images are SVGs for sharp scaling; replace with real photography if required.

Accessibility & SEO tips
- Use descriptive alt text for images and meaningful link text for improved accessibility and search ranking.
- Consider adding server-side sitemap.xml and robots.txt, and integrate with analytics and SEO pipelines.

Enjoy — built by GitHub Copilot
