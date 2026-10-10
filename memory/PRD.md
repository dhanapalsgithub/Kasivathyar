# Kashi Vadhyar — React Rebuild (PRD)

## Original Problem Statement
Rebuild https://kashivadhyar.com/ (same content + navbar) in React with a dark liquid-glass modern theme (like ribillingpro.com), sitemap + Google Search Console support, floating WhatsApp on all pages, HD Pexels videos of Kashi/Hinduism, and a contact form that sends enquiries to WhatsApp.

## User Personas
- Tamil-speaking Hindu families planning ancestral rituals (Pind Daan, Shradh) at Kashi/Gaya/Prayag
- Pilgrims booking guided yatra packages with stay + transport
- Devotees checking festival dates and ritual availability

## Architecture
- Frontend: React 19 + react-router-dom 7 (multi-page SPA), Tailwind, framer-motion (reveals, masked hero), lenis (smooth scroll), sonner (toasts)
- Backend: FastAPI (`/api` prefix) + MongoDB (motor) — enquiry logging only
- SEO: static `public/sitemap.xml` + `robots.txt` (base https://kashivadhyar.com), GSC verification placeholder meta in `public/index.html`, LocalBusiness JSON-LD
- Media: verified direct Pexels video files (videos.pexels.com/video-files/...), Unsplash images from design_guidelines.json

## Core Requirements (static)
- Same nav as original: Home, About Us, Poojas, Packages, Events, Gallery, Contact Us
- Floating WhatsApp → wa.me/919919403288 on all pages
- Contact form → composes WhatsApp message + logs enquiry to Mongo
- Sanskrit shloka marquee, dark liquid-glass aesthetic, gold/saffron accents

## Implemented (2026-07-04)
- 8 routes: /, /about-us, /poojas, /packages, /packages/:slug (5/7/11-day itineraries), /events, /gallery (filterable), /contact-us (form + map)
- Cinematic Pexels video hero (Ganga Aarti) with masked line-by-line reveal + parallax; 6-video HD gallery section
- Ritual cards (6), packages (3), events (5, 2026–27 dates), testimonials (3), stats band
- Backend: GET /api/health, POST /api/contact (Mongo `enquiries` collection, BaseDocument pattern)
- SEO pack: sitemap.xml, robots.txt, GSC placeholder meta (`PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE`), OG tags, JSON-LD
- Original SVG diya logo mark used as favicon
- Tamil/English toggle (navbar pill, persists in localStorage; full Tamil translations for nav, hero, rituals, packages, itineraries, events, testimonials, forms; Catamaran + Noto Serif Tamil fonts via `lang-ta` html class)
- Muhurat calendar on Contact page (Amavasya/Pournami/festival highlights from src/data/muhurat.js, upcoming list, picking a day fills the enquiry form date + scrolls to it)
- Client's real photos integrated (public/images/): vadhyars-boat-tarpan.jpg (Pind Daan + About), boat-kalash-pooja.jpg (Shradh), homam-ritual.jpg (Special Poojas); all 3 also in Gallery

## Verified
- curl: /api/health ok; POST /api/contact persists enquiry
- e2e (screenshot tool): hero video plays, form fill → WhatsApp popup with prefilled text to 919919403288, package detail renders, 375/768/1366px responsive OK

## Backlog
- P0: User pastes real GSC verification code; deploy to kashivadhyar.com domain
- P1: Replace Unsplash photos with client's own ritual/temple photography
- P1: Real testimonial quotes/photos from client
- P2: Tamil language toggle, blog for SEO, online muhurat booking calendar

## Notes
- No authentication in app; no admin panel. Enquiries viewable via Mongo `enquiries` collection.
- Sitemap/robots use kashivadhyar.com as canonical base — update if the deployed domain differs.
