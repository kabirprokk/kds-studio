# KDS Studio — Minimalist Demo Website

Premium, minimalist portfolio for **KDS Studio (@kds__studio)** — wedding photography & filmmakers, founder @shamji__b_ahir.

## Run demo (2 sec)
1. Open `index.html` in browser, or:
```
cd kds-photography-demo
npx serve .
# or: python -m http.server 8000
```
2. Open http://localhost:8000

## What client sees
- Full-screen hero, Marquee, Philosophy
- Filterable Portfolio (All / Wedding / Pre-Wedding / Films)
- Lightbox gallery (click any image, arrows work)
- Services, Studio/About with stats, Testimonials
- Enquiry form → WhatsApp, Instagram CTA, mobile menu

## IMPORTANT: Real pics of them
Instagram blocks auto-scraping (login wall + copyright), so demo ships with **free CC0 placeholders** (Unsplash, commercial-use OK per RESOURCES.md) matched to their warm wedding style.

To swap to REAL KDS shoots (2 min):
1. Ask client for 9-12 best JPGs (export 1600px wide)
2. Drop into `/images/` as `work-1.jpg` … `work-9.jpg` + `hero.jpg` + `studio.jpg`
3. Replace `https://images.unsplash.com/...` URLs in `index.html` with `images/work-1.jpg` etc.
Layout, filters, lightbox keep working — no code change needed.

Full swap map is commented in `index.html` figcaptions.

## Next for final launch
- [ ] Replace WhatsApp number in `script.js` (WHATSAPP_NUMBER)
- [ ] Add real phone/email/city
- [ ] Connect form to email / Google Sheet if needed
- [ ] Buy domain + deploy (Vercel/Netlify free)
- [ ] Add credit line if any CC-BY assets remain (currently all CC0/Unsplash)

Built by AI Manager crew — library-first, CC0-first.
