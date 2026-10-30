# Tailoring the concept to a real business

The demo is a starting point, not a licence to invent facts. Keep the original demo intact and work on a copy for a real project.

## Choose the customer journey

- `?mode=home`: home and property services; customers request a quote.
- `?mode=studio`: appointment-led businesses; customers select or open an existing booking service.
- `?mode=creative`: creative services; customers explore a portfolio and discuss a brief.

Use the closest journey. A restaurant, online store or complex booking service needs its own information architecture, not just changed nouns.

## Adaptation brief / prompt

Use this prompt with verified source material:

> Adapt this Good Company website to the business described below. Preserve the considered editorial design, responsive behaviour, accessibility, local asset loading and clear customer journey. First identify missing information and conflicts. Never invent reviews, qualifications, awards, client projects, addresses, contact information, service claims, prices or availability. Use only the supplied public sources and approved client materials. Keep third-party photography clearly illustrative until approved real work is supplied. If the business already uses a booking platform, link to the exact approved URL rather than pretending the demo reserves appointments. Do not turn this static demo form into an apparently working enquiry form: use an explicitly labelled preview until a real backend is installed and tested. Make no automated contact, publish nothing and send no email. Return the changes and a test report.
>
> Business name: [verified name]
> Business type and location: [verified information]
> Approved public sources: [exact links and relevant facts]
> Brand, logo and photography: [client-approved files and rights]
> Actual services and prices: [approved content, or explicitly missing]
> Existing booking platform: [exact verified URL, or none confirmed]
> Primary action: [book / request a quote / discuss a brief]
> Contact details: [explicitly published and approved]
> Selected demo journey: [home / studio / creative]
> Website scope and agreed exclusions: [written scope]

## Before outreach

Do not build a full bespoke website for every cold prospect. First show the closest honest demo. Personalise the message with one verified observation, not fabricated claims about their performance. Only develop a tailored concept after interest or an explicitly agreed small proof of concept.

## Assets

The photos in this package are illustrative Unsplash images, not BrightPier client work or proof that the fictional business performed any work. Their original URLs are listed in `ASSETS.json`. The font licence is included in `assets/DM-Sans-OFL.txt`.

## Deployment

Use `README-BG.txt` for Cloudflare Pages Direct Upload. The website has no runtime build dependency and no server-side form processing.
