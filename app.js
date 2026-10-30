'use strict';
(() => {
  const concepts = {
    home: {
      title: 'Good Company — Spaces worth coming home to',
      eyebrow: 'GOOD HOMES. GOOD HANDS.', heading: ['Good spaces.', 'Better living.'],
      description: 'A fresh coat. A thoughtful repair. The little things that make a house feel more like you. Home care, handled with care.',
      cta: 'Let’s talk about your home', heroCTA: 'Tell us what you have in mind', heroNote: 'Your space. Your plans.\nA good place to start.',
      hero: ['home-hero.jpg', 'A warm, thoughtfully arranged living space with natural textures'],
      approachImage: ['home-detail.jpg', 'Carefully considered interior details and natural light'],
      imageCaption: 'Room to feel at home.', imageNote: 'Good things\nstart here.',
      promise1: 'THOUGHTFUL WORK', promise2: 'CLEAR CONVERSATIONS', promise3: 'THE DETAILS MATTER',
      servicesHeading: ['A little expertise.', 'A lot of care.'],
      servicesIntro: 'From a single room to the finishing touches, choose the kind of help that feels right for your home.',
      services: [
        ['Refresh & redecorate', 'A new colour, a cleaner finish, a fresh way to feel about your space.'],
        ['Care & repair', 'The small jobs on your list, approached with patience and attention.'],
        ['Finishing touches', 'Thoughtful details that help a room come together.']
      ],
      asideTitle: 'Tell us about\nyour space.', asideText: 'We’ll help you find the right next step. No complicated forms. No pressure.',
      servicesFootnote: 'Illustrative services for this fictional concept. Scope and pricing would be agreed with a real provider.',
      approachHeading: ['Not just a service.', 'A good experience.'],
      approachLead: 'The best work starts with listening. To your ideas, your everyday routines, and what would make your space work better.',
      approachBody: 'We like things straightforward: thoughtful advice, a clear plan and attention to the finish. The kind of care that feels personal, because it is.',
      approachEnd: 'Less hassle.\nMore feeling at home.',
      workHeading: ['It’s the details', 'you come back for.'], workIntro: 'Natural light. A pleasing finish. A space that feels just right. A visual direction for what your own project gallery could become.',
      gallery: [['home-work.jpg', 'A considered finish', 'A bright interior with warm materials and considered finishing details'], ['home-detail.jpg', 'Room for the everyday', 'Quiet architectural details and a thoughtfully arranged room']],
      processIntro: 'A clear conversation makes everything easier. Here’s how the journey could work.',
      process: [['Tell us your plans', 'A little about your space, the work you have in mind and your preferred timing.'], ['Find the right approach', 'Agree a clear scope, schedule and written quote before any work begins.'], ['Enjoy the difference', 'Thoughtful work, a careful finish, and a space ready for everyday life.']],
      ctaHeading: ['Let’s make room', 'for something better.'],
      faq: [['What kind of work can this show?', 'This home-services concept demonstrates decorating, maintenance and finishing services. A real business would list only the work it actually offers, its service area and any relevant qualifications.'], ['How would a quote work?', 'On a live site, your enquiry could go to the business for a discussion and written quote. Here, the form is only an interactive demonstration and no quote is issued.'], ['Can I choose a start date?', 'You can select an example preferred date in the demo. It does not check real availability or reserve any work.'], ['Are these real projects?', 'No. This is a fictional business concept. All photography is illustrative moodboard imagery, not completed work or customer endorsements.']],
      formLabel: 'A HOME & PROPERTY ENQUIRY', formTitle: ['What do you', 'have in mind?'], formIntro: 'Try a sample project enquiry. No personal details needed.',
      dateLabel: 'Preferred start date', detailLabel: 'Project size', details: ['One small job', 'One room', 'A few spaces', 'Let’s discuss'], submitLabel: 'Preview my enquiry',
      successMessage: 'Your sample enquiry is ready to preview. No message has been sent and no work has been scheduled.'
    },
    studio: {
      title: 'Good Company — A little time, just for you',
      eyebrow: 'YOUR TIME. WELL SPENT.', heading: ['A little time.', 'Just for you.'],
      description: 'A welcoming space. An unhurried appointment. A little attention that makes the rest of your day feel different.',
      cta: 'Find a little time for you', heroCTA: 'Explore an appointment', heroNote: 'A calmer moment.\nA more considered experience.',
      hero: ['studio-hero.jpg', 'A bright, welcoming studio space with natural materials and greenery'],
      approachImage: ['studio-detail.jpg', 'Sunlight, greenery and warm details in a relaxed studio interior'],
      imageCaption: 'Make yourself at home.', imageNote: 'A moment\njust for you.',
      promise1: 'UNHURRIED APPOINTMENTS', promise2: 'A PERSONAL APPROACH', promise3: 'COME AS YOU ARE',
      servicesHeading: ['Your next visit.', 'A little more personal.'],
      servicesIntro: 'A simple way to discover the services, find the right appointment and feel at ease before you arrive.',
      services: [['The first visit', 'A little time to talk through what you’re looking for and find your starting point.'], ['The signature appointment', 'An unhurried service, shaped around your preferences and your routine.'], ['The return visit', 'Familiar faces and thoughtful attention, whenever you’re ready to come back.']],
      asideTitle: 'Find your\nkind of visit.', asideText: 'Choose an example service and sample time. See how simple booking could feel.',
      servicesFootnote: 'Illustrative service names for a fictional studio. Sample slots are not real appointment availability.',
      approachHeading: ['Good hands.', 'Even better company.'],
      approachLead: 'A good appointment starts before you take a seat. With a warm welcome, a proper conversation and time to understand what you need.',
      approachBody: 'No one-size-fits-all approach. Just a calm space, clear choices and thoughtful details that make you feel looked after.',
      approachEnd: 'Take a breath.\nMake yourself at home.',
      workHeading: ['A space to settle in.', 'A reason to return.'], workIntro: 'A relaxed welcome. Natural textures. A little room to switch off. Moodboard imagery for a more personal appointment experience.',
      gallery: [['studio-detail.jpg', 'An easy kind of welcome', 'A warm studio interior with greenery and natural light'], ['studio-hero.jpg', 'Space to slow down', 'A relaxed, open-plan creative studio with considered furniture']],
      processIntro: 'A clear path from finding your service to finding a time that suits you.',
      process: [['Find your service', 'Understand what each appointment includes and choose what feels right.'], ['Choose your moment', 'A live website could connect directly to your existing booking platform.'], ['Make yourself at home', 'Arrive knowing where to go, what to expect and how to prepare.']],
      ctaHeading: ['Your next good day', 'starts with a little time.'],
      faq: [['Can I book an appointment here?', 'Only a sample appointment. The demo lets you choose a service, date and example time, but no real slot is reserved and no message is sent.'], ['Would I need a new booking system?', 'Not necessarily. A live website can take customers straight to your existing booking provider, keeping your current calendar and process in place.'], ['Where would prices and opening hours go?', 'They can sit alongside your actual services and location. This fictional studio deliberately does not invent an address, opening hours, team or service prices.'], ['Is this a real studio?', 'No. Good Company is a website concept by BrightPier Studio. The business identity, service names and moodboard photography are illustrative.']],
      formLabel: 'A STUDIO APPOINTMENT PREVIEW', formTitle: ['A little time.', 'A good next step.'], formIntro: 'Choose an example appointment. No real availability is checked.',
      dateLabel: 'Sample visit date', detailLabel: 'Example time', details: ['09:30', '11:00', '14:30', '16:00'], submitLabel: 'Preview my appointment',
      successMessage: 'This is your sample appointment. No real slot has been reserved and no confirmation has been sent.'
    },
    creative: {
      title: 'Good Company — Creative work with a point of view',
      eyebrow: 'GOOD IDEAS. THOUGHTFULLY MADE.', heading: ['Made to be', 'remembered.'],
      description: 'A clear idea. A fresh point of view. Creative work that feels like you — and gives people a reason to look a little closer.',
      cta: 'Let’s make something good', heroCTA: 'Tell us about your project', heroNote: 'Your ideas, made tangible.\nA good place to begin.',
      hero: ['creative-hero.jpg', 'A light-filled creative workspace with a long communal table'],
      approachImage: ['creative-detail.jpg', 'A camera held ready to capture a considered creative composition'],
      imageCaption: 'Room for a fresh perspective.', imageNote: 'Make it\nmean something.',
      promise1: 'A CLEAR POINT OF VIEW', promise2: 'THOUGHTFUL COLLABORATION', promise3: 'MADE WITH INTENTION',
      servicesHeading: ['A good idea.', 'A considered finish.'],
      servicesIntro: 'From an initial thought to the final details, a collaborative approach to making your next project feel right.',
      services: [['Creative direction', 'Find the thread that brings your ideas, your story and your visual world together.'], ['Photography & imagery', 'A visual point of view for the people, places and details worth showing.'], ['A project, together', 'An open brief, a fresh idea or a collaboration that needs a considered pair of eyes.']],
      asideTitle: 'An idea worth\nexploring?', asideText: 'Tell us where you’d like to go. We’ll start with the right questions.',
      servicesFootnote: 'Illustrative creative services. Moodboard images are not an actual portfolio or examples of commissioned work.',
      approachHeading: ['Less formula.', 'More feeling.'],
      approachLead: 'The strongest creative work feels specific. To a person, a place, a story. We start by getting to know yours.',
      approachBody: 'Then we bring ideas into focus, share a clear direction and work through the details together. A thoughtful process, without the unnecessary theatre.',
      approachEnd: 'A fresh perspective.\nA story that feels yours.',
      workHeading: ['A point of view.', 'Not just a pretty picture.'], workIntro: 'Places, textures and moments that invite a second look. A moodboard showing how your own portfolio could be presented.',
      gallery: [['creative-detail.jpg', 'The act of looking closer', 'Close-up of a camera and hands preparing to make a photograph'], ['creative-hero.jpg', 'Where ideas take shape', 'A sunlit creative workspace with a large table and natural textures']],
      processIntro: 'Room for a good conversation, a shared direction and the details that make it yours.',
      process: [['Start with the story', 'Share what you’re making, who it’s for and what you want it to feel like.'], ['Shape a direction', 'Agree the creative approach, deliverables, schedule and project fee.'], ['Make it meaningful', 'Bring the work together, refine the details and hand over the agreed final files.']],
      ctaHeading: ['You bring the idea.', 'Let’s find its form.'],
      faq: [['Can I view the images in more detail?', 'Yes. Open either moodboard image to view it in the gallery. These are illustrative photographs, not work created by this fictional business.'], ['Can I send a creative brief?', 'You can preview a sample brief in the demo form. It stays in this browser and is not sent anywhere. A live website would use your chosen secure enquiry system.'], ['What would a real portfolio include?', 'Your own projects, approved photography, clear project descriptions and any client permissions needed. We would never present stock imagery as completed client work.'], ['Can this design work for my business?', 'Yes, the structure can be tailored to your real identity, services and customer journey. The BrightPier Studio contact link below opens an email to the studio behind this concept.']],
      formLabel: 'A CREATIVE PROJECT PREVIEW', formTitle: ['A good idea', 'starts somewhere.'], formIntro: 'Try a sample project brief. Please use illustrative details only.',
      dateLabel: 'Preferred project date', detailLabel: 'Project stage', details: ['An early idea', 'A clear brief', 'Ready to get started', 'Let’s explore it'], submitLabel: 'Preview my brief',
      successMessage: 'Your sample brief is ready to preview. Nothing has been sent to a real business or creative team.'
    }
  };
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const form = $('#demo-form');
  const enquiry = $('#enquiry-dialog');
  const lightbox = $('#gallery-dialog');
  const storageKey = 'brightpier-good-company-demo-v1';
  let mode = 'home';
  let galleryIndex = 0;
  let saved = null;
  let toastTimer;
  let restoreFocus = null;
  let canStore = true;
  try {
    const raw = localStorage.getItem(storageKey);
    const candidate = raw ? JSON.parse(raw) : null;
    if (candidate && concepts[candidate.mode] && typeof candidate.service === 'string' && typeof candidate.date === 'string' && typeof candidate.detail === 'string' && typeof candidate.note === 'string' && candidate.note.length <= 350 && concepts[candidate.mode].services.some(([label]) => label === candidate.service) && concepts[candidate.mode].details.includes(candidate.detail) && /^\d{4}-\d{2}-\d{2}$/.test(candidate.date)) saved = candidate;
  } catch (_) { canStore = false; }
  function text(selector, value) { $$(selector).forEach(el => { el.textContent = value; }); }
  function heading(selector, parts) {
    const el = $(selector); el.replaceChildren(document.createTextNode(parts[0]), document.createElement('br'));
    const em = document.createElement('em'); em.textContent = parts[1]; el.append(em);
  }
  function multiline(selector, value) {
    $$(selector).forEach(el => { el.replaceChildren(); value.split('\n').forEach((line, i) => { if (i) el.append(document.createElement('br')); el.append(document.createTextNode(line)); }); });
  }
  function image(selector, pair) { const el = $(selector); el.src = 'assets/' + pair[0]; el.alt = pair[1]; }
  function notify(message) {
    const t = $('#toast'); t.textContent = message; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 3500);
  }
  function setDateMin() {
    const now = new Date();
    const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
    $('#demo-date').min = date;
  }
  function applyConcept(next, announce = true) {
    if (!concepts[next]) next = 'home';
    mode = next;
    const c = concepts[mode]; document.body.dataset.mode = mode; document.title = c.title;
    $$('[data-mode-button]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.modeButton === mode)));
    ['eyebrow', 'description', 'cta', 'heroCTA', 'imageCaption', 'promise1', 'promise2', 'promise3', 'servicesIntro', 'asideText', 'servicesFootnote', 'approachLead', 'approachBody', 'workIntro', 'processIntro'].forEach(key => text('[data-bind="' + key + '"]', c[key]));
    ['heroNote', 'imageNote', 'asideTitle', 'approachEnd'].forEach(key => multiline('[data-bind="' + key + '"]', c[key]));
    heading('#hero-title', c.heading); heading('#services-heading', c.servicesHeading); heading('#approach-heading', c.approachHeading); heading('#work-heading', c.workHeading); heading('#cta-heading', c.ctaHeading);
    image('#hero-image', c.hero); image('#approach-image', c.approachImage);
    c.gallery.forEach((g, i) => { image('#gallery-image-' + i, [g[0], g[2]]); text('[data-gallery-caption="' + i + '"]', g[1]); });
    const services = $('#service-list'); services.replaceChildren();
    c.services.forEach(([title, description], i) => {
      const b = document.createElement('button'); b.className = 'service-item'; b.type = 'button';
      const number = document.createElement('span'); number.className = 'service-num'; number.textContent = String(i + 1).padStart(2, '0');
      const copy = document.createElement('span'); const h = document.createElement('h3'); h.textContent = title; const p = document.createElement('p'); p.textContent = description; copy.append(h, p);
      const arrow = document.createElement('span'); arrow.className = 'service-arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); b.append(number, copy, arrow); b.setAttribute('aria-label', 'Try a demo for ' + title); b.addEventListener('click', () => openForm(title)); services.append(b);
    });
    const steps = $('#process-list'); steps.replaceChildren();
    c.process.forEach(([title, description], i) => {
      const li = document.createElement('li'); const num = document.createElement('span'); num.className = 'process-num'; num.textContent = String(i + 1).padStart(2, '0');
      const copy = document.createElement('div'); const h = document.createElement('h3'); h.textContent = title; const p = document.createElement('p'); p.textContent = description; copy.append(h, p); li.append(num, copy); steps.append(li);
    });
    const faqs = $('#faq-list'); faqs.replaceChildren();
    c.faq.forEach(([q, answer]) => { const d = document.createElement('details'); const s = document.createElement('summary'); s.textContent = q; const p = document.createElement('p'); p.textContent = answer; d.append(s, p); faqs.append(d); });
    $('#view-saved').hidden = !saved || saved.mode !== mode;
    try { const url = new URL(location.href); url.searchParams.set('mode', mode); history.replaceState(null, '', url); } catch (_) { /* file:// browser restrictions do not affect the demo */ }
    document.body.classList.remove('mode-transition'); requestAnimationFrame(() => { document.body.classList.add('mode-transition'); });
    if (announce) $('#announcement').textContent = 'Now showing the ' + ({home:'home and property',studio:'studio and appointments',creative:'creative and craft'})[mode] + ' concept.';
  }
  function openDialog(d) {
    restoreFocus = document.activeElement;
    d.showModal(); d.scrollTop = 0; document.body.style.overflow = 'hidden';
  }
  $$('dialog').forEach(d => {
    $('.close-dialog', d).addEventListener('click', () => d.close());
    d.addEventListener('click', e => { if (e.target === d) { const r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close(); } });
    d.addEventListener('close', () => { if (!$$('dialog[open]').length) document.body.style.overflow = ''; if (restoreFocus && document.contains(restoreFocus)) restoreFocus.focus({preventScroll:true}); });
  });
  function setupForm() {
    const c = concepts[mode]; form.reset();
    $('#form-panel').hidden = false; $('#success-panel').hidden = true;
    text('#dialog-mode-label', c.formLabel); heading('#dialog-title', c.formTitle); text('#dialog-intro', c.formIntro); text('#date-label', c.dateLabel); text('#time-label', c.detailLabel); text('#submit-label', c.submitLabel);
    const select = $('#service-select'); select.replaceChildren(new Option('Choose a service', ''));
    c.services.forEach(([name]) => select.add(new Option(name, name)));
    const detail = $('#time-select'); detail.replaceChildren(new Option(mode === 'studio' ? 'Choose a sample time' : 'Choose an option', ''));
    c.details.forEach(name => detail.add(new Option(name, name))); setDateMin();
  }
  function openForm(service) {
    closeMenu(); setupForm(); if (typeof service === 'string') $('#service-select').value = service;
    openDialog(enquiry);
  }
  function displaySummary() {
    const c = concepts[mode]; $('#form-panel').hidden = true; $('#success-panel').hidden = false;
    text('#success-message', c.successMessage + (canStore ? ' Saved only in this browser.' : ' Browser storage is unavailable, so it will not survive a refresh.'));
    const summary = $('#demo-summary'); summary.replaceChildren();
    const date = new Date(saved.date + 'T12:00:00');
    const displayDate = Number.isNaN(date.getTime()) ? saved.date : new Intl.DateTimeFormat('en-GB', {day:'numeric',month:'long',year:'numeric'}).format(date);
    [['Service', saved.service], [mode === 'studio' ? 'Sample date' : 'Preferred date', displayDate], [mode === 'studio' ? 'Sample time' : 'Project', saved.detail], ...(saved.note ? [['Sample note', saved.note]] : [])].forEach(([label, value]) => { const row = document.createElement('div'); const dt = document.createElement('dt'); dt.textContent = label; const dd = document.createElement('dd'); dd.textContent = value; row.append(dt, dd); summary.append(row); });
    enquiry.scrollTop = 0; $('#view-saved').hidden = false;
    $('#success-title').setAttribute('tabindex', '-1'); $('#success-title').focus({preventScroll:true});
  }
  form.addEventListener('submit', e => {
    e.preventDefault(); if (!form.reportValidity()) return;
    const dateInput = $('#demo-date');
    const d = new Date(dateInput.value + 'T12:00:00');
    if (!dateInput.value || Number.isNaN(d.getTime()) || dateInput.value < dateInput.min || d.getFullYear() > 2100) { dateInput.setCustomValidity('Choose a valid sample date between today and the year 2100.'); dateInput.reportValidity(); return; }
    saved = {mode, service:$('#service-select').value, date:dateInput.value, detail:$('#time-select').value, note:$('#demo-note').value.trim().slice(0,350)};
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); canStore = true; } catch (_) { canStore = false; }
    displaySummary();
  });
  $('#demo-date').addEventListener('input', e => e.target.setCustomValidity(''));
  $('#edit-demo').addEventListener('click', () => {
    if (!saved) return; setupForm(); $('#service-select').value = saved.service; $('#demo-date').value = saved.date; $('#time-select').value = saved.detail; $('#demo-note').value = saved.note;
    $('#service-select').focus(); enquiry.scrollTop = 0;
  });
  $('#delete-demo').addEventListener('click', () => {
    try { localStorage.removeItem(storageKey); } catch (_) { notify('Browser storage is unavailable.'); }
    saved = null; $('#view-saved').hidden = true; enquiry.close(); notify('Saved demo cleared from this browser.');
  });
  $('#view-saved').addEventListener('click', () => { if (!saved || saved.mode !== mode) return; openDialog(enquiry); displaySummary(); });
  $$('[data-open-form]').forEach(b => b.addEventListener('click', () => openForm()));
  $$('[data-open-info]').forEach(b => b.addEventListener('click', () => openDialog($('#info-dialog'))));
  function showGallery(i) {
    galleryIndex = (i + 2) % 2; const g = concepts[mode].gallery[galleryIndex]; image('#lightbox-image', [g[0], g[2]]); text('#gallery-dialog-title', g[1] + ' — illustrative moodboard photograph'); text('#gallery-count', (galleryIndex + 1) + ' / 2');
  }
  $$('[data-gallery]').forEach(b => b.addEventListener('click', () => { showGallery(Number(b.dataset.gallery)); openDialog(lightbox); }));
  $('#gallery-prev').addEventListener('click', () => showGallery(galleryIndex - 1)); $('#gallery-next').addEventListener('click', () => showGallery(galleryIndex + 1));
  lightbox.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); showGallery(galleryIndex + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); showGallery(galleryIndex - 1); } });
  const toggle = $('#menu-toggle'); const menu = $('#mobile-nav');
  function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); menu.hidden = true; }
  toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); menu.hidden = expanded; });
  $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !enquiry.open && !lightbox.open && !$('#info-dialog').open) closeMenu(); });
  $$('[data-mode-button]').forEach(b => b.addEventListener('click', () => { closeMenu(); applyConcept(b.dataset.modeButton); }));
  $('#share-variant').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || location.protocol === 'file:') throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(location.href); notify('Link to this concept copied.');
    } catch (_) {
      notify(location.protocol === 'file:' ? 'After publishing, copy the page address to share this concept.' : 'Copy the address from your browser to share this concept.');
    }
  });
  const initial = new URLSearchParams(location.search).get('mode');
  applyConcept(concepts[initial] ? initial : 'home', false);
})();
