# Good Company — QA report

Test run: 2026-10-24T14:54:16.843232+03:00

## Scope
Static HTML/CSS/JavaScript concept, three business journeys, local assets and Cloudflare Pages upload package. Tested in Chromium; no external sending, payments, real bookings or production deployment performed.

## Passed
- 3 concept-specific interaction flows: service selection, empty/valid form checks, preview, safe text rendering, local save, edit, delete, gallery and FAQs.
- 18 responsive combinations: 3 modes at 320, 375, 390, 768, 1024 and 1440 pixels. No horizontal document overflow, hero overlap or broken images observed in the recorded runs.
- Direct links to all three modes and safe fallback for an unknown mode.
- Local persistence across reload, past-date rejection, Escape-to-close and mobile menu interactions.
- Local font and image resources loaded; no external page resources, fetches or XMLHttpRequests observed.
- Packaged CSP tested on a local HTTP server: application and demo form work without recorded policy violations.
- Unique HTML IDs, valid internal targets and existing referenced files.
- JavaScript syntax: Node --check passed.

## Text contrast
Ratios against each paper background (code-calculated; not a full accessibility audit):

| Concept | Main text | Muted text |
|---|---|---|
| home | 11.14:1 | 5.13:1 |
| studio | 9.9:1 | 4.97:1 |
| creative | 10.64:1 | 4.88:1 |

## Design self-audit
Composition: editorial Decide/Learn landing page with a split hero, typographic service list, asymmetric gallery and a focused primary action. No fake metrics, fabricated testimonials, icon feature-tile grid, glassmorphism or tech-gradient palette. A centred composition is limited to the conversion section. This is a code/layout self-audit, not a third-party design certification.

## Limits and deployment check
- Demo business, services and moodboard imagery are explicitly fictional/illustrative.
- No form backend, availability service or confirmation email exists.
- Clipboard write needs browser permission; fallback instructs visitors to copy the address.
- Tested locally in Chromium, not on physical iOS/Safari or Firefox.
- Production HTTPS, Cloudflare dashboard configuration and provider behaviour must be checked after the owner uploads the ZIP.
- No outreach messages were sent during this build.

Detailed test evidence and screenshots are retained in the project source QA directory. They are intentionally excluded from the deployment ZIP to keep it small and avoid publishing internal test URLs.
