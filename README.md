# Good Company · BrightPier Studio

A responsive website concept showing how a small service business can present its work and guide visitors towards a clear next step.

**[Explore the live demo](https://brightpier-good-company.shevik-business.workers.dev/?mode=creative#main)** · [BrightPier Studio](https://brightpierstudio.com/)

## The work behind the project

BrightPier Studio is a website-building initiative focused on small service businesses. We create and customise websites for small businesses, turning their branding, services and content into a clear, practical online presence.

Our work covers understanding the business, planning the page structure, adapting the design and copy, implementing responsive interactions, checking the experience and preparing the site for launch. Depending on the agreed scope, a real project can connect visitors to an existing booking platform or a properly configured enquiry service.

Good Company is a portfolio concept we use to demonstrate that approach. It shows how the same design foundation can support different businesses and customer journeys. The business name, services and moodboard imagery are illustrative; this is not a commissioned client website.

Development uses AI assistance alongside human review, customisation and testing. This repository documents the resulting implementation and its current limits.

## Three business journeys

| Concept | Live preview | Example customer journey |
| --- | --- | --- |
| Home & property | [Open demo](https://brightpier-good-company.shevik-business.workers.dev/?mode=home) | Explore services and preview a project enquiry |
| Studio & appointments | [Open demo](https://brightpier-good-company.shevik-business.workers.dev/?mode=studio) | Choose a service, sample date and example time |
| Creative & craft | [Open demo](https://brightpier-good-company.shevik-business.workers.dev/?mode=creative) | Browse a moodboard and preview a creative brief |

Switch concepts using the controls at the top of the page. The URL preserves the selected mode so each concept can be shared directly.

## Features

- Responsive editorial layout with concept-specific colours, copy, services and photographs.
- Interactive enquiry and appointment previews with required-field and date validation.
- Browser-only saving, editing and deletion of a sample enquiry using localStorage.
- Image lightbox with previous/next controls, expandable FAQs and mobile navigation.
- Semantic HTML, a skip link, labelled controls, native dialogs and focus restoration.
- Self-hosted photographs and DM Sans font, with no JavaScript framework or build step.

## Technology

**HTML5 · CSS3 · Vanilla JavaScript · Browser APIs · Static hosting**

The supplied package includes Cloudflare Pages response-header configuration. The live preview uses a Cloudflare-hosted workers.dev address. No server application, database, account system or API credentials are included.

## Run locally

Clone the repository and start a static server from its root:

```sh
git clone https://github.com/ViktorAtanasov08/brightpier-good-company.git
cd brightpier-good-company
python -m http.server 8000
```

Open [http://localhost:8000/?mode=creative](http://localhost:8000/?mode=creative). On Windows, `py -m http.server 8000` is an alternative if the Python launcher is installed.

There are no npm dependencies to install. Opening `index.html` directly also displays the site, but clipboard and storage behaviour can vary under file://. Use a local server for review and HTTPS for a published site.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, dialogs and BrightPier contact links |
| `styles.css` | Visual design, responsive layouts and motion preferences |
| `app.js` | Concept content, form previews, local storage, gallery and navigation |
| `assets/` | Local photography, favicon, font and font licence |
| `_headers` | Security and cache headers for compatible Cloudflare Pages hosting |
| `404.html` | Static error page |
| `ASSETS.json` | Original asset URLs and attribution information |
| `CUSTOMIZE.md` | Checklist for adapting the concept to a real business |
| `README-BG.txt` | Original Bulgarian setup and deployment notes |
| `QA-REPORT.md` | Original build's dated QA report and testing limitations |

## Deployment

This is a static site: publish the root containing `index.html`, `app.js`, `styles.css` and `assets/`. No build command is required.

For Cloudflare Pages, use a static deployment with the repository root as the output directory. Keep `_headers` alongside the HTML. Header handling differs between hosting products; verify the deployed response headers and all three concept URLs after publishing.

The deployment should be reviewed separately from the original local QA report. It does not certify every browser or future deployment.

## Demo behaviour and production work

The forms **do not send enquiries, reserve appointments or check availability**. A sample service, date, option and optional note are stored only in the visitor's browser. Use illustrative details; the saved preview can be removed with the demo's delete control.

The BrightPier contact link opens the visitor's email application; it does not send a message automatically. The page includes no analytics script. Hosting providers may process ordinary request logs.

Before delivering a real business website, replace fictional content with approved business details and photography, configure and test the chosen enquiry or booking integration, review the applicable privacy information and complete launch checks. This demo deliberately uses `noindex, nofollow`; review that setting when launching a real business site.

## Assets and rights

Photographs are illustrative Unsplash moodboard images, not BrightPier client work. Source URLs are recorded in [ASSETS.json](ASSETS.json). DM Sans is distributed with its [SIL Open Font License](assets/DM-Sans-OFL.txt).

No blanket licence is granted for the complete project by this repository. Third-party assets remain subject to their own terms.

