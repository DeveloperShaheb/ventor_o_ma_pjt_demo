
const DEFAULT_DATA = {
  "site": {
    "name": "Vento Roma Travel",
    "shortName": "Vento Roma",
    "tagline": "Luxury Vatican Museums tickets and trip planning",
    "description": "A premium, transparent, conversion-focused travel and ticketing experience for Vatican Museums visitors.",
    "disclaimer": "Independent booking platform. The official online ticketing portal of the Vatican Museums is tickets.museivaticani.va.",
    "supportEmail": "hello@aureliavatican.com",
    "supportPhone": "+39 06 0000 0000",
    "whatsapp": "+39 320 000 0000",
    "address": "Viale Vaticano, Rome, Italy"
  },
  "hero": {
    "headline": "Discover the Vatican Museums with quiet luxury.",
    "subheadline": "Book trusted tickets, plan the perfect visit, and enjoy a refined experience built for international travelers.",
    "primaryCta": "Browse tickets",
    "secondaryCta": "Plan your visit",
    "searchLabel": "Find your ideal ticket"
  },
  "trustBadges": [
    "Secure booking",
    "Instant confirmation",
    "Multilingual support",
    "Flexible ticket options"
  ],
  "highlights": [
    {
      "title": "Treasures of the Vatican Museums",
      "text": "Curated access to the museums, galleries, and the Sistine Chapel experience, with every step explained clearly."
    },
    {
      "title": "Elegant planning",
      "text": "Choose your date, compare ticket types, and add audio guide or guided tour extras in a calm, guided flow."
    },
    {
      "title": "Transparent and editable",
      "text": "Prices, availability, policies, and notices are structured for CMS editing because museum rules can change."
    },
    {
      "title": "Built for conversion",
      "text": "A premium checkout, trust indicators, clear policies, and a low-friction flow help visitors book with confidence."
    }
  ],
  "itinerary": [
    {
      "time": "08:00",
      "title": "Early entry",
      "text": "Arrive early for a quieter, more elegant museum experience."
    },
    {
      "time": "10:00",
      "title": "Galleries and maps",
      "text": "Follow a paced route through the most iconic rooms and collections."
    },
    {
      "time": "12:30",
      "title": "Lunch break",
      "text": "Plan a nearby café stop before continuing into Rome."
    },
    {
      "time": "14:00",
      "title": "Sistine Chapel focus",
      "text": "Reserve calm time for the chapel and your best photo opportunities outside it."
    }
  ],
  "reviews": [
    {
      "name": "Elena, Spain",
      "text": "The booking flow felt premium and reassuring. Everything was clear from the start."
    },
    {
      "name": "Marcus, USA",
      "text": "Elegant design, fast checkout, and excellent information for planning the visit."
    },
    {
      "name": "Aisha, UAE",
      "text": "A refined travel experience with proper trust signals and helpful visitor guidance."
    }
  ],
  "faq": [
    {
      "q": "Is this the official Vatican Museums website?",
      "a": "No. This is an independent booking and trip-planning platform. The official online ticketing portal is tickets.museivaticani.va."
    },
    {
      "q": "Can I change my date after booking?",
      "a": "Date changes depend on the ticket and policy configuration. The admin dashboard keeps these rules editable."
    },
    {
      "q": "Are tickets refundable?",
      "a": "Refund and cancellation conditions are displayed at checkout and can be edited in the CMS."
    },
    {
      "q": "Do you support reduced and student categories?",
      "a": "Yes. Reduced, student, school, pilgrimage, university, seminary, and accessibility categories are clearly labeled."
    }
  ],
  "blog": [
    {
      "title": "How to plan a calm Vatican Museums visit",
      "tag": "Travel tip",
      "excerpt": "Choose the right time slot, keep your route light, and respect the museum rules for a smoother experience."
    },
    {
      "title": "What to pack for the Vatican Museums",
      "tag": "Guide",
      "excerpt": "From dress code to cloakroom reminders, a small checklist helps you move with ease and confidence."
    },
    {
      "title": "Choosing between standard, skip-the-line, and guided options",
      "tag": "Comparison",
      "excerpt": "A concise guide to help international visitors match the ticket type to their travel style."
    }
  ],
  "visitorGuide": [
    {
      "label": "Opening hours",
      "value": "Monday to Saturday, 08:00–20:00. Last Sunday of the month, 09:00–14:00."
    },
    {
      "label": "Last Sunday notice",
      "value": "Free entry on the last Sunday of the month, with guided tours upon reservation."
    },
    {
      "label": "Suggested duration",
      "value": "Plan at least 2 to 4 hours; longer if you want a slower pace."
    },
    {
      "label": "Cloakroom",
      "value": "Large bags, suitcases, umbrellas, and other unsuitable items must be left in the free cloakroom."
    },
    {
      "label": "Photography",
      "value": "Personal photography is allowed in most areas except the Sistine Chapel; flash is forbidden."
    },
    {
      "label": "Mobile phones",
      "value": "Silent mode is required; mobile phone use is forbidden inside the Sistine Chapel."
    },
    {
      "label": "Accessibility",
      "value": "Free entry is offered to visitors with certified invalidity of at least 67% and, where applicable, a companion."
    },
    {
      "label": "Family-friendly",
      "value": "The museums welcome families, strollers, and facilities such as elevators and baby-changing areas."
    }
  ],
  "policies": [
    {
      "title": "Transparent disclaimer",
      "text": "This platform is independent and not the official Vatican Museums website. The official online ticketing portal is clearly highlighted in the header, footer, and checkout."
    },
    {
      "title": "Date-based tickets",
      "text": "Tickets are valid for specific dates and times. Availability, conditions, and price rules are editable in the CMS/admin dashboard."
    },
    {
      "title": "No misleading claims",
      "text": "All reduced categories, accessibility categories, and special visitor groups are labeled clearly to reduce confusion."
    },
    {
      "title": "Last updated",
      "text": "Default visitor information is seeded from official Vatican Museums pages and can be refreshed from the admin dashboard."
    }
  ],
  "tickets": [
    {
      "id": "full-entry",
      "name": "Full Entry Ticket",
      "typeLabel": "Standard",
      "category": "General admission",
      "basePrice": 20,
      "skipFee": 0,
      "description": "The essential entry option for independent visitors who want a classic Vatican Museums experience.",
      "audience": "Adults and general visitors",
      "includes": [
        "Museum entry",
        "Editable date selection",
        "Visitor guide access"
      ],
      "policy": "Date-based and editable. Refund rules are configurable in the admin dashboard.",
      "featured": true,
      "badge": "Most selected"
    },
    {
      "id": "full-entry-skip",
      "name": "Full Entry Ticket with Skip the Line",
      "typeLabel": "Priority",
      "category": "General admission",
      "basePrice": 20,
      "skipFee": 5,
      "description": "A premium priority option designed to streamline access and reduce waiting friction.",
      "audience": "Time-sensitive travelers",
      "includes": [
        "Museum entry",
        "Priority booking",
        "Clear arrival instructions"
      ],
      "policy": "Priority service fee is editable. Availability can be limited by date and slot.",
      "featured": true,
      "badge": "Priority access"
    },
    {
      "id": "reduced-entry",
      "name": "Reduced Entry Ticket",
      "typeLabel": "Reduced",
      "category": "Reduced / eligible visitors",
      "basePrice": 10,
      "skipFee": 5,
      "description": "Reserved for eligible visitors who qualify for reduced admission under museum rules.",
      "audience": "Eligible reduced-rate visitors",
      "includes": [
        "Museum entry",
        "Reduced-rate pricing",
        "Policy notes"
      ],
      "policy": "Eligibility is required. Ineligible reduced bookings must be repurchased at full rate.",
      "featured": false,
      "badge": "Eligibility required"
    },
    {
      "id": "student-ticket",
      "name": "Student Ticket",
      "typeLabel": "Student",
      "category": "Student / university",
      "basePrice": 10,
      "skipFee": 5,
      "description": "For students up to and including 25 years of age with valid educational documentation.",
      "audience": "Students 25 or under",
      "includes": [
        "Museum entry",
        "Student-rate pricing",
        "Eligibility reminder"
      ],
      "policy": "Student status must be proven with official documentation issued by the school or university.",
      "featured": false,
      "badge": "Document required"
    },
    {
      "id": "school-ticket",
      "name": "School Ticket",
      "typeLabel": "School",
      "category": "School groups",
      "basePrice": 5,
      "skipFee": 2,
      "description": "A school-group option with group guidance notes and teacher-oriented booking details.",
      "audience": "School groups and teachers",
      "includes": [
        "Museum entry",
        "School-group routing",
        "Group info notes"
      ],
      "policy": "Teacher entitlement and group rules can be edited in the admin panel.",
      "featured": false,
      "badge": "Group booking"
    },
    {
      "id": "pilgrimage-ticket",
      "name": "Pilgrimage Ticket",
      "typeLabel": "Pilgrimage",
      "category": "Pilgrimage groups",
      "basePrice": 10,
      "skipFee": 5,
      "description": "Reserved for pilgrimage groups accompanied by a priest, deacon, or religious member.",
      "audience": "Pilgrimage groups",
      "includes": [
        "Museum entry",
        "Pilgrimage notes",
        "Group booking support"
      ],
      "policy": "Group size and companion rules are editable. Free entry is not applicable.",
      "featured": true,
      "badge": "Group focused"
    },
    {
      "id": "university-ticket",
      "name": "University Institutes Ticket",
      "typeLabel": "University",
      "category": "University institutes",
      "basePrice": 10,
      "skipFee": 5,
      "description": "Reserved for university student groups with documentation on university letterhead.",
      "audience": "University groups",
      "includes": [
        "Museum entry",
        "Institutional eligibility notes",
        "Group support"
      ],
      "policy": "Maximum group size and documentation requirements are editable in the CMS.",
      "featured": false,
      "badge": "Institutional"
    },
    {
      "id": "seminary-ticket",
      "name": "Seminaries and Religious Colleges Ticket",
      "typeLabel": "Religious",
      "category": "Seminaries / religious colleges",
      "basePrice": 8,
      "skipFee": 0,
      "description": "A dedicated category for seminarians and religious colleges, clearly labeled for transparency.",
      "audience": "Seminaries and religious colleges",
      "includes": [
        "Museum entry",
        "Religious group pricing",
        "Eligibility notes"
      ],
      "policy": "Teacher and accompanying visitor rules are editable and shown clearly before checkout.",
      "featured": false,
      "badge": "Special category"
    },
    {
      "id": "family-audio",
      "name": "Family / Audio Guide Option",
      "typeLabel": "Bundle",
      "category": "Family-friendly bundle",
      "basePrice": 20,
      "skipFee": 0,
      "description": "A curated family bundle with optional audio guide planning built in for easier self-paced visits.",
      "audience": "Families and self-guided visitors",
      "includes": [
        "Museum entry",
        "Audio guide option",
        "Family planning tips"
      ],
      "policy": "A premium platform bundle. Audio guide pricing and availability remain editable.",
      "featured": true,
      "badge": "Best for families"
    },
    {
      "id": "accessibility-free",
      "name": "Accessibility / Free Entry Category",
      "typeLabel": "Accessibility",
      "category": "Free entry",
      "basePrice": 0,
      "skipFee": 0,
      "description": "Free entry for eligible visitors with certified invalidity and, where applicable, a companion.",
      "audience": "Accessible visits",
      "includes": [
        "Free entry note",
        "Companion note",
        "Reservation guidance"
      ],
      "policy": "This category is not bookable online in the official system. Documentation is required at the desk.",
      "featured": true,
      "badge": "Free entry"
    },
    {
      "id": "guided-tour-addon",
      "name": "Optional Guided Tour Add-on",
      "typeLabel": "Add-on",
      "category": "Enhancement",
      "basePrice": 25,
      "skipFee": 0,
      "description": "Add a guided tour for a more curated museum experience with clear route planning.",
      "audience": "Visitors who want expert guidance",
      "includes": [
        "Guided commentary",
        "Route planning",
        "Priority support"
      ],
      "policy": "Add-on pricing, duration, and languages are CMS-editable.",
      "featured": false,
      "badge": "Add-on"
    },
    {
      "id": "audio-guide-addon",
      "name": "Optional Audio Guide Add-on",
      "typeLabel": "Add-on",
      "category": "Enhancement",
      "basePrice": 8,
      "skipFee": 0,
      "description": "A smooth self-guided layer for travelers who prefer elegant pacing and commentary.",
      "audience": "Independent visitors",
      "includes": [
        "Audio guide",
        "Language options",
        "Hygiene notes"
      ],
      "policy": "Audio guide details may be hired on site or through the official portal depending on configuration.",
      "featured": false,
      "badge": "Audio guide"
    }
  ],
  "slots": [
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00"
  ],
  "languages": [
    "English",
    "Italian",
    "Spanish",
    "French",
    "German",
    "Portuguese",
    "Japanese",
    "Arabic"
  ],
  "coupons": [
    {
      "code": "MUSEUM10",
      "discount": 10,
      "type": "percent",
      "note": "Seasonal premium traveler offer"
    },
    {
      "code": "TRAVEL5",
      "discount": 5,
      "type": "fixed",
      "note": "Small discount for returning visitors"
    }
  ],
  "contacts": [
    {
      "label": "General information",
      "value": "+39 06 69883145"
    },
    {
      "label": "Email",
      "value": "info.musei@scv.va"
    },
    {
      "label": "Directorate",
      "value": "+39 06 69883332"
    },
    {
      "label": "Visitor support",
      "value": "accoglienza.musei@scv.va"
    }
  ],
  "socials": [
    {
      "label": "Instagram",
      "href": "#"
    },
    {
      "label": "WhatsApp",
      "href": "#"
    },
    {
      "label": "YouTube",
      "href": "#"
    }
  ],
  "inventory": {
    "overrides": {}
  },
  "bookings": [],
  "leads": []
};
const STORAGE_KEY = 'aurelia_vatican_cms_v1';
const BOOKING_KEY = 'aurelia_vatican_booking_v1';
const DRAFT_KEY = 'aurelia_vatican_booking_draft_v1';
const LEADS_KEY = 'aurelia_vatican_leads_v1';

const META = {
  home: ["Aurelia Vatican Travel — Luxury Vatican Museums Tickets", "Book premium Vatican Museums tickets, compare options, and plan a refined visit with transparent policies and elegant design."],
  tickets: ["Tickets — Aurelia Vatican Travel", "Compare Vatican Museums ticket types, eligibility, and editable pricing in a luxury booking experience."],
  'ticket-detail': ["Ticket Detail — Aurelia Vatican Travel", "Explore a detailed Vatican Museums ticket page with inclusions, policies, and booking guidance."],
  booking: ["Booking — Aurelia Vatican Travel", "Choose your date, time slot, ticket type, language, and extras with real-time availability."],
  checkout: ["Checkout — Aurelia Vatican Travel", "Review your booking, apply a promo code, and complete secure checkout with clear policy notices."],
  confirmation: ["Confirmation — Aurelia Vatican Travel", "Your booking confirmation, reference number, and next steps for a premium Vatican Museums visit."],
  about: ["About Vatican Museums — Aurelia Vatican Travel", "A refined guide to the Vatican Museums, its heritage, and what to expect from your visit."],
  visit: ["Visitor Guide — Aurelia Vatican Travel", "Opening hours, visitor rules, clothing notes, cloakroom guidance, accessibility, and planning tips."],
  accessibility: ["Accessibility — Aurelia Vatican Travel", "Accessible visit guidance, free-entry notes, family support, and practical planning details."],
  faq: ["FAQ — Aurelia Vatican Travel", "Answers to common Vatican Museums ticket, booking, and visitor questions."],
  contact: ["Contact — Aurelia Vatican Travel", "Contact the concierge team for booking help, partnership inquiries, and visitor support."],
  blog: ["Travel Tips — Aurelia Vatican Travel", "Elegant Vatican Museums travel tips, planning articles, and booking guidance."],
  policies: ["Policies — Aurelia Vatican Travel", "Terms, refund policy, privacy policy, and cookie policy for the booking platform."],
  admin: ["Admin Dashboard — Aurelia Vatican Travel", "Manage ticket types, inventory, blog posts, FAQs, bookings, leads, and homepage content."]
};

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function state(){ try { return merge(clone(DEFAULT_DATA), JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); } catch { return clone(DEFAULT_DATA); } }
function save(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
function merge(base, incoming){
  if (Array.isArray(base) || Array.isArray(incoming)) return Array.isArray(incoming) ? incoming : base;
  if (!base || typeof base !== 'object') return incoming ?? base;
  const out = { ...base };
  for (const k of Object.keys(incoming || {})) out[k] = (incoming[k] && typeof incoming[k] === 'object' && !Array.isArray(incoming[k])) ? merge(base[k] || {}, incoming[k]) : incoming[k];
  return out;
}
function page(){ return document.body.dataset.page || 'home'; }
function ticketById(s, id){ return s.tickets.find(t => t.id === id) || s.tickets[0]; }
function money(n){ return new Intl.NumberFormat('en-US', { style:'currency', currency:'EUR', maximumFractionDigits:0 }).format(Number(n || 0)); }
function qs(name){ return new URLSearchParams(location.search).get(name); }
function slug(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function fileFor(pageName){
  return ({home:'index.html',tickets:'tickets.html','ticket-detail':'ticket-detail.html',booking:'booking.html',checkout:'checkout.html',confirmation:'confirmation.html',about:'about.html',visit:'visit.html',accessibility:'accessibility.html',faq:'faq.html',contact:'contact.html',blog:'blog.html',policies:'policies.html',admin:'admin.html'})[pageName] || 'index.html';
}
function icon(name){
  const map = {
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l7 3v5c0 5-3.5 8.7-7 10-3.5-1.3-7-5-7-10V6l7-3z"/></svg>',
    spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2l1.9 5.8H20l-4.5 3.3L17.4 17 12 13.8 6.6 17l1.9-5.9L4 7.8h6.1L12 2z"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="10" width="16" height="10" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 18l-6 2V6l6-2 6 2 6-2v14l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 6L9 17l-5-5"/></svg>',
    star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.95 6.16 6.78.99-4.89 4.77 1.15 6.75L12 17.9 5.01 20.67l1.15-6.75L1.27 9.15l6.78-.99L12 2z"/></svg>'
  };
  return map[name] || map.spark;
}
function header(s){
  const links = [['home','Home'],['tickets','Tickets'],['visit','Plan your visit'],['faq','FAQ'],['blog','Travel tips'],['contact','Contact'],['admin','Admin']]
    .map(([p,l]) => `<a class="${page()===p?'active':''}" href="${fileFor(p)}">${l}</a>`).join('');
  return `
    <div class="topbar">
      <div class="wrap">
        <div class="badge-line">
          <span class="badge">${icon('shield')} Independent platform</span>
          <span class="badge">Official portal: <strong>tickets.museivaticani.va</strong></span>
        </div>
        <div class="badge-line"><span>Premium support</span><span>·</span><span>${s.site.supportPhone}</span></div>
      </div>
    </div>
    <header class="header">
      <div class="wrap" style="position:relative">
        <a class="brand" href="index.html">
          <span class="brand-mark">${icon('spark')}</span>
          <span><span class="brand-name">${s.site.shortName}</span><br><span class="brand-tag">${s.site.tagline}</span></span>
        </a>
        <button class="menu-btn" id="menuBtn" aria-label="Menu">☰</button>
        <nav class="nav" id="navMenu">${links}<a class="nav-cta" href="booking.html">${icon('calendar')} Book now</a></nav>
      </div>
    </header>
  `;
}
function footer(s){
  return `
    <footer class="footer">
      <div class="wrap">
        <div class="disclaimer"><strong>Disclaimer:</strong> ${s.site.disclaimer} This website is an independent booking and planning experience. Ticket prices, availability, and visitor policies are editable in the admin dashboard.</div>
        <div class="footer-grid">
          <div>
            <h4>${s.site.name}</h4>
            <p>A calm, elegant, conversion-focused travel experience for visitors planning the Vatican Museums with confidence.</p>
            <div class="pill-row">${s.socials.map(x => `<a class="pill" href="${x.href}">${x.label}</a>`).join('')}</div>
          </div>
          <div>
            <h4>Contact</h4>
            ${s.contacts.map(c => `<p><strong>${c.label}:</strong><br>${c.value}</p>`).join('')}
          </div>
          <div>
            <h4>Policies</h4>
            <p><a href="policies.html#terms">Terms</a></p>
            <p><a href="policies.html#refund">Refund policy</a></p>
            <p><a href="policies.html#privacy">Privacy policy</a></p>
            <p><a href="policies.html#cookies">Cookie policy</a></p>
          </div>
          <div>
            <h4>Visitor notes</h4>
            <p>Opening hours, cloakroom guidance, photography rules, accessibility details, and route planning are all available on the visitor guide page.</p>
            <p><a href="visit.html">Read visitor guide</a></p>
            <p><a href="accessibility.html">Accessibility</a></p>
            <p><a href="faq.html">FAQ</a></p>
          </div>
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${s.site.shortName}.</span><span>Built for fast publishing, CMS editing, and premium international booking.</span></div>
      </div>
    </footer>
  `;
}
function shell(content, s){ return `<div class="site-shell">${header(s)}<main class="page">${content}</main>${footer(s)}</div>`; }
function renderTrust(s){ return `<div class="pill-row">${s.trustBadges.map(t => `<span class="pill"><span style="width:8px;height:8px;border-radius:50%;background:var(--gold);display:inline-block"></span>${t}</span>`).join('')}</div>`; }
function featuredTickets(s){ return s.tickets.filter(t => t.featured).slice(0,4); }
function ticketCard(t){
  return `<article class="ticket-card" data-ticket="${t.id}">
    <div class="ticket-top"><div><span class="ticket-badge">${t.badge}</span><h3 style="margin:14px 0 8px;font-size:1.45rem">${t.name}</h3><div class="small">${t.category}</div></div><div style="text-align:right"><div class="ticket-price">${money(t.basePrice + t.skipFee)}</div><div class="small">${t.skipFee ? '+ service fee' : 'Editable pricing'}</div></div></div>
    <p class="muted" style="line-height:1.75;margin:0">${t.description}</p>
    <ul class="card-list">${t.includes.map(x => `<li>${x}</li>`).join('')}</ul>
    <div class="ticket-note">${t.policy}</div>
    <div class="ticket-actions"><a class="btn btn-ghost" href="ticket-detail.html?ticket=${encodeURIComponent(t.id)}">View details</a><a class="btn btn-primary" href="booking.html?ticket=${encodeURIComponent(t.id)}">Book now</a></div>
  </article>`;
}
function hero(s){
  const opts = s.tickets.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
  return `<section class="hero"><div class="page-wrap"><div class="hero-card">
    <div class="hero-grid">
      <div>
        <div class="kicker">${icon('spark')} Luxury travel concierge for Vatican Museums</div>
        <h1>${s.hero.headline}</h1>
        <p class="lead">${s.hero.subheadline}</p>
        ${renderTrust(s)}
        <div class="hero-actions"><a class="btn btn-primary" href="tickets.html">${icon('arrow')} ${s.hero.primaryCta}</a><a class="btn btn-secondary" href="visit.html">${icon('map')} ${s.hero.secondaryCta}</a></div>
        <div class="badge-line" style="color:rgba(255,255,255,.82);font-size:.93rem"><span>Transparent independent platform</span><span>·</span><span>Editable ticket catalog and policies</span><span>·</span><span>Luxury interface, mobile-first</span></div>
      </div>
      <div class="museum-visual">
        <div class="visual-card">
          <span class="tag gold">Cinematic booking studio</span>
          <h3 style="margin:14px 0 8px;font-size:1.6rem">Plan your date in seconds</h3>
          <p style="margin:0;color:rgba(255,255,255,.78);line-height:1.7">Choose a ticket type, check availability, and move into checkout with elegant clarity.</p>
          <div class="search-card" style="margin-top:18px;background:rgba(255,255,255,.11);border-color:rgba(255,255,255,.14);color:#fff">
            <h3 style="margin-top:0;color:#fff">${s.hero.searchLabel}</h3>
            <div class="grid grid-2">
              <div><label for="heroDate">Visit date</label><input class="input" id="heroDate" type="date"></div>
              <div><label for="heroTicket">Ticket type</label><select id="heroTicket">${opts}</select></div>
            </div>
            <div class="hero-actions" style="margin-bottom:0"><button class="btn btn-primary" id="heroSearchBtn" type="button">${icon('calendar')} Check availability</button><a class="btn btn-secondary" href="booking.html">Open booking</a></div>
          </div>
          <div class="visual-stats"><div class="visual-stat"><div class="value">01</div><div class="label">Trusted flow</div></div><div class="visual-stat"><div class="value">∞</div><div class="label">Editable content</div></div><div class="visual-stat"><div class="value">24/7</div><div class="label">Online booking</div></div></div>
        </div>
      </div>
    </div>
  </div></div></section>`;
}
function homePage(s){
  const highlight = s.highlights.map(h=>`<div class="info-card"><span class="tag">${h.title}</span><p style="margin:14px 0 0;line-height:1.75;color:var(--muted)">${h.text}</p></div>`).join('');
  const itinerary = s.itinerary.map((x,i)=>`<div class="timeline-item"><div class="timeline-time">${x.time}</div><div><h4>${i+1}. ${x.title}</h4><p class="muted">${x.text}</p></div></div>`).join('');
  const reviews = s.reviews.map(r=>`<div class="info-card"><div class="tag gold">${icon('star')} Verified traveler</div><p style="font-size:1.02rem;line-height:1.8;margin:16px 0">${r.text}</p><strong>${r.name}</strong></div>`).join('');
  const blog = s.blog.map(p=>`<article class="info-card"><span class="tag">${p.tag}</span><h3 style="margin:14px 0 10px">${p.title}</h3><p class="muted" style="line-height:1.75">${p.excerpt}</p><a class="btn btn-ghost" href="blog.html">Read more</a></article>`).join('');
  const faqs = s.faq.slice(0,3).map(x=>`<div class="faq-item"><h3 style="margin:0 0 10px">${x.q}</h3><p class="muted" style="margin:0;line-height:1.75">${x.a}</p></div>`).join('');
  const tickets = featuredTickets(s).map(ticketCard).join('');
  return shell(`
    ${hero(s)}
    <section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Luxury trust, before checkout.</h2><p>Every touchpoint is designed to feel calm, elegant, and international—without hiding the fact that this platform is independent.</p></div></div><div class="grid grid-4">${highlight}</div></div></section>
    <section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Featured tickets</h2><p>Popular default options are showcased here, with all prices and policies editable in the admin dashboard.</p></div><a class="btn btn-ghost" href="tickets.html">View all ticket types</a></div><div class="grid grid-2">${tickets}</div></div></section>
    <section class="section"><div class="page-wrap split"><div class="panel"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Plan your visit</h2><p>Match your pace to the museum: early entry, smooth routing, and a clear arrival plan.</p></div></div><div class="timeline">${itinerary}</div></div><div class="panel"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">What guests value</h2><p>Conversion-focused reassurance with premium editorial presentation.</p></div></div><div class="notice"><strong>Real-time availability display</strong><p class="small">Select your date, choose a time slot, and see live inventory states in the booking flow.</p></div><div style="height:14px"></div><div class="notice"><strong>Transparency first</strong><p class="small">The official Vatican Museums online ticketing portal is clearly disclosed in the header, footer, and checkout.</p></div><div style="height:14px"></div><div class="notice"><strong>Editable content model</strong><p class="small">Tickets, policies, FAQs, blog posts, homepage content, and promotions can all be managed from the admin dashboard.</p></div></div></div></section>
    <section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Museum highlights and inclusions</h2><p>Elegant detail cards for travelers who want to understand what is included before they book.</p></div></div><div class="grid grid-3"><div class="info-card"><span class="tag gold">Core inclusion</span><h3>Ticket-based access</h3><p class="muted">Date-based admission with a simple route to booking and clear policy messaging.</p></div><div class="info-card"><span class="tag gold">Optional extras</span><h3>Guided tour and audio guide</h3><p class="muted">Add a more curated or self-guided layer depending on how you like to travel.</p></div><div class="info-card"><span class="tag gold">Travel support</span><h3>Concierge-grade guidance</h3><p class="muted">Visitor rules, clothing notes, cloakroom guidance, and accessibility information are visible early.</p></div></div></div></section>
    <section class="section"><div class="page-wrap split"><div class="panel"><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Accessibility highlight</h2><div class="notice"><strong>Free entry for eligible visitors</strong><p class="small">The default model includes the accessibility / free-entry category and companion rules. Policy copy remains editable so the experience can stay aligned with official guidance.</p></div><div style="height:14px"></div><a class="btn btn-ghost" href="accessibility.html">View accessibility page</a></div><div class="panel"><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Reviews and social proof</h2><div class="grid" style="gap:14px">${reviews}</div></div></div></section>
    <section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Travel tips and museum guide</h2><p>Short editorial cards that feel premium on home and blog pages.</p></div><a class="btn btn-ghost" href="blog.html">Explore travel tips</a></div><div class="grid grid-3">${blog}</div></div></section>
    <section class="section"><div class="page-wrap"><div class="grid grid-2"><div class="faq-item"><div class="tag red">Trust note</div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem);margin-top:12px">Clear, elegant disclaimer in the booking journey.</h2><p class="muted" style="line-height:1.8">The independent nature of this platform is disclosed without friction. The checkout step and footer repeat the official-portal notice so users remain fully informed.</p></div><div><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">FAQ preview</h2><p>Fast answers to the questions most likely to affect conversion.</p></div></div><div class="grid" style="gap:12px">${faqs}</div></div></div></div></section>
    <section class="section"><div class="page-wrap"><div class="hero-card" style="padding:28px"><div class="split-hero"><div><span class="kicker" style="margin-bottom:14px">${icon('shield')} Ready to publish</span><h2 class="headline" style="font-size:clamp(2rem,4vw,3.8rem);margin-bottom:10px">A refined booking experience from first glance to confirmation.</h2><p class="lead" style="margin:0;color:rgba(255,255,255,.82)">Premium copy, responsive layouts, polished states, and a transparent trust layer make this a strong foundation for a high-end travel conversion site.</p><div class="hero-actions"><a class="btn btn-primary" href="booking.html">Start booking</a><a class="btn btn-secondary" href="policies.html">View policies</a></div></div><div class="search-card" style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.14);color:#fff"><h3 style="color:#fff">Editorial summary</h3><p style="line-height:1.8;color:rgba(255,255,255,.8)">Luxury glassmorphism, marble-inspired neutrals, gold accents, and calm motion create a museum-worthy digital feel without sacrificing speed or clarity.</p><div class="pill-row"><span class="pill" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:#fff">Mobile first</span><span class="pill" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:#fff">SEO ready</span><span class="pill" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:#fff">Admin editable</span></div></div></div></div></div></section>
  `, s);
}
function ticketListPage(s){
  const cards = s.tickets.map(ticketCard).join('');
  const rows = s.tickets.slice(0,6).map(t=>`<tr><td><strong>${t.name}</strong><br><span class="small">${t.typeLabel}</span></td><td>${money(t.basePrice + t.skipFee)}</td><td>${t.audience}</td><td>${t.policy}</td></tr>`).join('');
  return shell(`<section class="section hero" style="padding-top:30px"><div class="page-wrap split-hero"><div class="panel" style="background:rgba(255,255,255,.84)"><span class="kicker" style="color:var(--navy);background:rgba(18,32,58,.06);border-color:rgba(18,32,58,.08)">${icon('calendar')} Ticket catalog</span><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.5rem);color:var(--navy);margin:0 0 12px">Compare premium Vatican Museums tickets.</h1><p class="muted" style="line-height:1.8">Every ticket type is clearly labeled and fully editable. Reduced, student, school, pilgrimage, university, seminary, accessibility, and bundle options are all structured for transparent booking.</p><div class="pill-row" style="margin-top:18px">${['All','Standard','Reduced','Student','School','Pilgrimage','University','Religious','Accessibility','Add-on'].map(f=>`<span class="pill">${f}</span>`).join('')}</div></div><div class="panel"><div class="tag gold">Last updated</div><h2 style="margin:12px 0 8px">Editorial notice</h2><p class="muted" style="line-height:1.75">Ticket prices, eligibility rules, inventory, and official notices can all be updated without code from the admin dashboard.</p><div class="notice"><strong>Official-site reminder</strong><p class="small">For official online ticketing, Vatican Museums directs visitors to the official portal. This independent platform keeps that notice visible and respectful.</p></div></div></div></section><section class="section"><div class="page-wrap"><div class="grid grid-2">${cards}</div></div></section><section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Quick compare</h2><p>Useful for visitors deciding between standard and special categories.</p></div></div><div style="overflow:auto;border-radius:24px;border:1px solid rgba(20,32,52,.08)"><table class="compare-table"><thead><tr><th>Ticket</th><th>Price</th><th>Audience</th><th>Notes</th></tr></thead><tbody>${rows}</tbody></table></div></div></section>`, s);
}
function ticketDetailPage(s){
  const t = ticketById(s, qs('ticket') || s.tickets[0].id);
  const related = s.tickets.filter(x=>x.id !== t.id).slice(0,4).map(x=>`<a class="info-card" href="ticket-detail.html?ticket=${encodeURIComponent(x.id)}"><div class="tag">${x.typeLabel}</div><h3 style="margin:12px 0 6px">${x.name}</h3><p class="muted" style="line-height:1.7;margin:0">${x.description}</p></a>`).join('');
  return shell(`<section class="section"><div class="page-wrap split"><div class="panel"><span class="tag gold">${t.typeLabel}</span><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.6rem);margin:14px 0 12px">${t.name}</h1><p class="muted" style="font-size:1.02rem;line-height:1.8">${t.description}</p><div class="pill-row" style="margin:18px 0"><span class="pill"><strong>Audience:</strong> ${t.audience}</span><span class="pill"><strong>Category:</strong> ${t.category}</span><span class="pill"><strong>Last updated:</strong> ${new Date().toLocaleDateString('en-GB')}</span></div><div class="grid grid-2"><div class="info-card"><h3>What is included</h3><ul class="card-list">${t.includes.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="info-card"><h3>Visitor policy</h3><p class="muted" style="line-height:1.75">${t.policy}</p></div></div></div><div class="panel"><div class="ticket-price" style="font-size:3rem">${money(t.basePrice + t.skipFee)}</div><p class="small">${t.skipFee ? `Includes service fee of ${money(t.skipFee)} where applicable.` : 'Pricing remains editable in the CMS.'}</p><div class="notice"><strong>Transparent booking</strong><p class="small">Date-based availability, eligibility labels, refund rules, and add-ons all remain visible before checkout.</p></div><div style="height:14px"></div><div class="ticket-actions"><a class="btn btn-primary" href="booking.html?ticket=${encodeURIComponent(t.id)}">Continue to booking</a><a class="btn btn-ghost" href="tickets.html">Back to tickets</a></div><div style="height:16px"></div><div class="info-card"><h3>Best suited for</h3><p class="muted" style="line-height:1.75">${t.audience}</p></div></div></div></section><section class="section"><div class="page-wrap"><div class="section-title"><div><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Related options</h2><p>Compare nearby choices quickly.</p></div></div><div class="grid grid-4">${related}</div></div></section>`, s);
}
function avail(s,date,time,ticketId){
  const key = `${date}|${time}|${ticketId}`;
  if (s.inventory && s.inventory.overrides && s.inventory.overrides[key]) return s.inventory.overrides[key];
  const n = [...key].reduce((a,c)=>a+c.charCodeAt(0),0) % 55;
  return { stock: 5 + n, soldOut: false };
}
function availLabel(stock){ if (stock<=0) return ['Sold out','red']; if (stock<=8) return ['Low availability','gold']; return ['Available','green']; }
function draft(){ try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || '{}'); } catch { return {}; } }
function saveDraft(x){ localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...draft(), ...x })); }
function discount(amount, code, s){
  const c = s.coupons.find(x => x.code.toLowerCase() === String(code || '').trim().toLowerCase());
  if (!c) return 0;
  return c.type === 'percent' ? Math.round(amount * (c.discount / 100)) : Math.min(amount, c.discount);
}
function bookingPage(s){
  const d = draft();
  const selected = d.ticketId || qs('ticket') || s.tickets.find(t=>t.featured)?.id || s.tickets[0].id;
  return shell(`<section class="section"><div class="page-wrap split"><div><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Book your Vatican Museums visit.</h1><p>Choose the date, time slot, language, and add-ons. Availability and pricing update as you change the form.</p></div></div><div class="panel"><div class="stepper"><div class="step"><span class="num">1</span> Visit details</div><div class="step"><span class="num">2</span> Guest details</div><div class="step"><span class="num">3</span> Checkout</div></div><div style="height:18px"></div><form id="bookingForm" class="grid" style="gap:18px"><div class="grid grid-2"><div><label for="bookingDate">Visit date</label><input class="input" id="bookingDate" type="date" required></div><div><label for="bookingTime">Time slot</label><select id="bookingTime" required>${s.slots.map(x=>`<option>${x}</option>`).join('')}</select></div></div><div class="grid grid-2"><div><label for="bookingTicket">Ticket type</label><select id="bookingTicket" required>${s.tickets.map(t=>`<option value="${t.id}" ${t.id===selected?'selected':''}>${t.name}</option>`).join('')}</select></div><div><label for="bookingQty">Quantity</label><input class="input" id="bookingQty" type="number" min="1" max="20" value="${d.qty || 1}" required></div></div><div class="grid grid-2"><div><label for="bookingLang">Language</label><select id="bookingLang" required>${s.languages.map(l=>`<option ${l===(d.language||'English')?'selected':''}>${l}</option>`).join('')}</select></div><div><label for="bookingAddOn">Add-on</label><select id="bookingAddOn"><option value="">No add-on</option><option value="guided-tour-addon">Optional Guided Tour Add-on</option><option value="audio-guide-addon">Optional Audio Guide Add-on</option></select></div></div><div class="grid grid-2"><div><label for="bookingPromo">Promo code</label><input class="input" id="bookingPromo" value="${d.promoCode || ''}" placeholder="Enter code"></div><div><label>Need traveler names / passport fields?</label><select id="needsPassport"><option value="no">No</option><option value="yes">Yes, include traveler details</option></select></div></div><div id="travelerFields" class="${d.needsPassport==='yes'?'':'hidden'} grid" style="gap:12px"><div class="grid grid-2"><div><label for="travelerName">Primary traveler name</label><input class="input" id="travelerName" placeholder="Full name" value="${d.travelerName || ''}"></div><div><label for="passportNumber">Passport / ID number</label><input class="input" id="passportNumber" placeholder="Passport number" value="${d.passportNumber || ''}"></div></div></div><div class="notice" id="availabilityBox"><strong>Availability</strong><p class="small" id="availabilityText">Select your date to view live availability.</p></div><div class="ticket-actions"><button class="btn btn-primary" type="submit">${icon('lock')} Continue to checkout</button><a class="btn btn-ghost" href="tickets.html">Compare tickets again</a></div></form></div></div><div class="panel"><div class="ticket-price" id="bookingPrice">${money((ticketById(s, selected).basePrice + ticketById(s, selected).skipFee) * Number(d.qty || 1))}</div><p class="small">Dynamic pricing summary, based on your selections.</p><div class="info-card"><h3>Selected ticket</h3><p id="selectedTicketName" style="margin:0 0 8px" class="muted">${ticketById(s, selected).name}</p><p id="selectedTicketSummary" class="muted" style="margin:0;line-height:1.75">${ticketById(s, selected).description}</p></div><div style="height:14px"></div><div class="notice"><strong>Important policy reminder</strong><p class="small">Reduced, student, pilgrimage, university, seminary, and accessibility categories are eligibility-based. The page keeps these rules visible before you proceed.</p></div><div style="height:14px"></div><div class="info-card"><h3>Checkout trust</h3><ul class="card-list"><li>Secure payment UI</li><li>Anti-fraud notice</li><li>Clear non-refundable policy display</li><li>Confirmation by email and WhatsApp UI</li></ul></div></div></div></section>`, s);
}
function checkoutPage(s){
  const d = draft();
  const t = ticketById(s, d.ticketId || s.tickets[0].id);
  const add = d.addOn ? ticketById(s, d.addOn) : null;
  const qty = Number(d.qty || 1);
  const subtotal = (t.basePrice + t.skipFee) * qty + (add ? add.basePrice * qty : 0);
  const disc = discount(subtotal, d.promoCode, s);
  const total = Math.max(0, subtotal - disc);
  return shell(`<section class="section"><div class="page-wrap split"><div><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Checkout with calm confidence.</h1><p>Transparent pricing, policy reminders, and a premium review panel before payment.</p></div></div><div class="panel"><div class="notice"><strong>Independent platform notice</strong><p class="small">This checkout belongs to an independent booking site. The official Vatican Museums online ticketing portal is clearly disclosed here and in the footer.</p></div><div style="height:18px"></div><form id="checkoutForm" class="grid" style="gap:16px"><div class="grid grid-2"><div><label for="customerName">Full name</label><input class="input" id="customerName" required placeholder="Your full name"></div><div><label for="customerEmail">Email</label><input class="input" id="customerEmail" type="email" required placeholder="name@email.com"></div></div><div class="grid grid-2"><div><label for="customerPhone">Phone</label><input class="input" id="customerPhone" required placeholder="+39 ..."></div><div><label for="customerWhatsapp">WhatsApp</label><input class="input" id="customerWhatsapp" placeholder="+39 ..."></div></div><div class="grid grid-2"><div><label for="cardName">Cardholder name</label><input class="input" id="cardName" required placeholder="Name on card"></div><div><label for="cardNumber">Card number</label><input class="input" id="cardNumber" inputmode="numeric" pattern="[0-9 ]{12,19}" required placeholder="4242 4242 4242 4242"></div></div><div class="grid grid-3"><div><label for="cardExp">Expiry</label><input class="input" id="cardExp" required placeholder="MM/YY"></div><div><label for="cardCvv">CVV</label><input class="input" id="cardCvv" inputmode="numeric" maxlength="4" required placeholder="123"></div><div><label for="billingZip">Postal code</label><input class="input" id="billingZip" required placeholder="00165"></div></div><label><input type="checkbox" id="acceptPolicy" required> I understand the cancellation and refund policy displayed on this page.</label><div class="ticket-actions"><button class="btn btn-primary" type="submit">${icon('lock')} Pay securely</button><a class="btn btn-ghost" href="booking.html">Edit booking</a></div></form></div></div><div class="panel"><div class="tag gold">Order summary</div><h2 style="margin:12px 0 10px">${t.name}</h2><p class="muted" style="line-height:1.75">Your selected booking is stored in a draft and can be reviewed before final payment.</p><div class="info-card"><p><strong>Date:</strong> ${d.date || 'Not selected'}</p><p><strong>Time:</strong> ${d.time || 'Not selected'}</p><p><strong>Quantity:</strong> ${qty}</p><p><strong>Language:</strong> ${d.language || 'English'}</p><p style="margin:0"><strong>Add-on:</strong> ${add ? add.name : 'None'}</p></div><div style="height:14px"></div><div class="info-card"><h3>Pricing</h3><p class="small" style="display:flex;justify-content:space-between"><span>Tickets</span><span>${money((t.basePrice + t.skipFee) * qty)}</span></p><p class="small" style="display:flex;justify-content:space-between"><span>Add-ons</span><span>${money(add ? add.basePrice * qty : 0)}</span></p><p class="small" style="display:flex;justify-content:space-between"><span>Promo discount</span><span>- ${money(disc)}</span></p><hr style="border:none;border-top:1px solid rgba(20,32,52,.08);margin:12px 0"><p style="display:flex;justify-content:space-between;font-size:1.18rem;font-weight:800;color:var(--navy)"><span>Total</span><span>${money(total)}</span></p></div><div style="height:14px"></div><div class="notice"><strong>Non-refundable reminder</strong><p class="small">Refund and cancellation rules are shown clearly and remain editable in the admin dashboard. Anti-fraud warnings help protect the checkout flow.</p></div></div></div></section>`, s);
}
function confirmationPage(s){
  const b = (()=>{ try { return JSON.parse(localStorage.getItem(BOOKING_KEY) || 'null'); } catch { return null; } })();
  const ref = b?.reference || 'AW-VM-' + Math.random().toString(36).slice(2,8).toUpperCase();
  const t = ticketById(s, b?.ticketId || s.tickets[0].id);
  return shell(`<section class="section"><div class="page-wrap split"><div class="panel"><span class="tag green">${icon('check')} Payment confirmed</span><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem);margin:14px 0 10px">Thank you. Your booking is confirmed.</h1><p class="muted" style="line-height:1.8">Your premium Vatican Museums booking is ready. Keep the reference number below for support and arrival.</p><div class="info-card"><p><strong>Reference:</strong> ${ref}</p><p><strong>Ticket:</strong> ${t.name}</p><p><strong>Date:</strong> ${b?.date || 'N/A'}</p><p><strong>Time:</strong> ${b?.time || 'N/A'}</p><p><strong>Language:</strong> ${b?.language || 'English'}</p></div><div style="height:14px"></div><div class="ticket-actions"><a class="btn btn-primary" href="#">Email confirmation</a><a class="btn btn-secondary" href="#">WhatsApp confirmation</a></div></div><div class="panel"><div class="notice"><strong>What happens next</strong><p class="small">A confirmation email UI and WhatsApp confirmation UI are shown here for clarity. You can also add your own backend or email service later.</p></div><div style="height:14px"></div><div class="info-card"><h3>Arrival checklist</h3><ul class="card-list"><li>Bring your booking reference</li><li>Follow the cloakroom rules</li><li>Keep your phone on silent</li><li>Respect the Sistine Chapel silence policy</li></ul></div><div style="height:14px"></div><div class="info-card"><h3>Support</h3><p class="muted">Need a change request or a booking question? Use the contact page and include your reference number.</p><a class="btn btn-ghost" href="contact.html">Contact support</a></div></div></div></section>`, s);
}
function infoPage(title, sections, s){
  return shell(`<section class="section"><div class="page-wrap"><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">${title}</h1><p>Elegant, readable, and policy-friendly content for international visitors.</p></div></div><div class="grid grid-2">${sections.map(sec=>`<div class="panel"><span class="tag gold">${sec.kicker}</span><h2 style="margin:12px 0 10px">${sec.title}</h2><p class="muted" style="line-height:1.8">${sec.text}</p></div>`).join('')}</div></div></section>`, s);
}
function aboutPage(s){ return infoPage('About Vatican Museums', [
  {kicker:'Heritage', title:'A museum of extraordinary scale', text:'The Vatican Museums combine art, history, and spiritual heritage in a single destination designed for deliberate, respectful exploration.'},
  {kicker:'Travel style', title:'A premium way to plan a visit', text:'This platform is built for calm comparison, premium visual hierarchy, and clear information architecture for international travelers.'},
  {kicker:'Transparency', title:'Independent by design', text:'We keep the official ticketing notice visible while offering an elegant alternative interface for planning and conversion.'},
  {kicker:'Editing', title:'Built for changing rules', text:'Policies, prices, and visitor guidance can be updated from the admin dashboard as museum conditions evolve.'}
], s); }
function visitPage(s){
  const grid = s.visitorGuide.map(x=>`<div class="info-card"><span class="tag">${x.label}</span><p style="margin:12px 0 0;line-height:1.8;color:var(--muted)">${x.value}</p></div>`).join('');
  return shell(`<section class="section"><div class="page-wrap"><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Visitor Guide</h1><p>Practical planning notes for a smooth museum day.</p></div><a class="btn btn-ghost" href="booking.html">Book a date</a></div><div class="grid grid-2">${grid}</div></div></section><section class="section"><div class="page-wrap split"><div class="panel"><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Nearby attractions in Rome</h2><p class="muted" style="line-height:1.8">The Vatican area pairs well with St. Peter’s Square, Castel Sant’Angelo, the Tiber waterfront, and a relaxed walk through central Rome.</p><div class="notice"><strong>Map and directions</strong><p class="small">Add map embeds or a directions widget here. The layout already supports a premium location block.</p></div></div><div class="panel"><h2 class="headline" style="font-size:clamp(1.7rem,3vw,2.7rem)">Behavior reminders</h2><ul class="card-list"><li>Maintain quiet, respectful conduct in sacred spaces</li><li>Keep mobile phones on silent</li><li>Follow cloakroom instructions promptly</li><li>Respect photography and no-flash rules</li><li>Keep the visit comfortable by wearing appropriate attire</li></ul></div></div></section>`, s);
}
function accessibilityPage(s){ return infoPage('Accessibility', [
  {kicker:'Free entry', title:'Accessible admission', text:'Free entry is offered to visitors with certified invalidity of at least 67%, and to a companion when the visitor is not self-sufficient.'},
  {kicker:'Support', title:'Family and companion support', text:'The visitor guide highlights elevators, baby-changing facilities, and gentle routing support for families and visitors with reduced mobility.'},
  {kicker:'Clarify online booking', title:'Not always bookable online', text:'The accessibility category is clearly labeled as a special category; official desk procedures can be reflected in the CMS.'},
  {kicker:'Inclusive UX', title:'Designed with readability in mind', text:'Large contrast, calm typography, and structured information help make the website easier to use for everyone.'}
], s); }
function faqPage(s){ return shell(`<section class="section"><div class="page-wrap"><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">FAQ</h1><p>Common questions answered with clear, premium language.</p></div></div><div class="grid grid-2">${s.faq.map(x=>`<div class="faq-item"><h3 style="margin:0 0 10px">${x.q}</h3><p class="muted" style="line-height:1.8;margin:0">${x.a}</p></div>`).join('')}</div></div></section>`, s); }
function contactPage(s){ return shell(`<section class="section"><div class="page-wrap split"><div class="panel"><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Contact</h1><p class="muted" style="line-height:1.8">Reach the concierge team for booking support, partnership inquiries, group requests, or policy questions.</p><form id="contactForm" class="grid" style="gap:14px;margin-top:18px"><div class="grid grid-2"><div><label for="name">Name</label><input class="input" id="name" required></div><div><label for="email">Email</label><input class="input" id="email" type="email" required></div></div><div><label for="message">Message</label><textarea id="message" required placeholder="Tell us about your trip or booking question"></textarea></div><button class="btn btn-primary" type="submit">${icon('arrow')} Send message</button></form></div><div class="panel"><div class="info-card"><h3>Direct details</h3>${s.contacts.map(c=>`<p><strong>${c.label}:</strong><br>${c.value}</p>`).join('')}</div><div style="height:14px"></div><div class="notice"><strong>Response promise</strong><p class="small">The page is styled for trust and clarity. Connect it to your CRM, helpdesk, or WhatsApp business API later.</p></div></div></div></section>`, s); }
function blogPage(s){ return shell(`<section class="section"><div class="page-wrap"><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Travel tips</h1><p>Concierge-style articles for elegant trip planning.</p></div></div><div class="grid grid-3">${s.blog.map(p=>`<article class="info-card"><span class="tag gold">${p.tag}</span><h2 style="margin:12px 0 8px">${p.title}</h2><p class="muted" style="line-height:1.8">${p.excerpt}</p><a class="btn btn-ghost" href="blog.html">Open article</a></article>`).join('')}</div></div></section>`, s); }
function policiesPage(s){ return infoPage('Terms, Refund, Privacy, Cookie Policy', [
  {kicker:'Terms', title:'Booking terms', text:'Bookings are date-based and governed by the policy settings configured in the dashboard. Ticket availability, category eligibility, and service options can be updated without code.'},
  {kicker:'Refund', title:'Refund policy', text:'Refundability is clearly displayed before payment. Some reduced or special tickets may be non-refundable, and the exact rules remain CMS-editable.'},
  {kicker:'Privacy', title:'Privacy policy', text:'Customer data captured in forms is intended for booking operations, support, and communication. Connect this build to your production privacy notice and processor setup before launch.'},
  {kicker:'Cookies', title:'Cookie policy', text:'This front-end build may use localStorage for the demo CMS and booking draft. Replace or expand this with your production cookie banner and consent management as needed.'}
], s); }
function getBooking(){ try { return JSON.parse(localStorage.getItem(BOOKING_KEY) || 'null'); } catch { return null; } }
function getDraft(){ try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || '{}'); } catch { return {}; } }
function setDraft(x){ localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...getDraft(), ...x })); }
function addDiscount(amount, code, s){ const c=s.coupons.find(x=>x.code.toLowerCase()===String(code||'').trim().toLowerCase()); if(!c) return 0; return c.type==='percent' ? Math.round(amount*(c.discount/100)) : Math.min(amount, c.discount); }
function bookingPage(s){
  const d = getDraft();
  const selected = d.ticketId || qs('ticket') || s.tickets.find(t=>t.featured)?.id || s.tickets[0].id;
  return shell(`<section class="section"><div class="page-wrap split"><div><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Book your Vatican Museums visit.</h1><p>Choose the date, time slot, language, and add-ons. Availability and pricing update as you change the form.</p></div></div><div class="panel"><div class="stepper"><div class="step"><span class="num">1</span> Visit details</div><div class="step"><span class="num">2</span> Guest details</div><div class="step"><span class="num">3</span> Checkout</div></div><div style="height:18px"></div><form id="bookingForm" class="grid" style="gap:18px"><div class="grid grid-2"><div><label for="bookingDate">Visit date</label><input class="input" id="bookingDate" type="date" required value="${d.date || ''}"></div><div><label for="bookingTime">Time slot</label><select id="bookingTime" required>${s.slots.map(x=>`<option ${x===d.time?'selected':''}>${x}</option>`).join('')}</select></div></div><div class="grid grid-2"><div><label for="bookingTicket">Ticket type</label><select id="bookingTicket" required>${s.tickets.map(t=>`<option value="${t.id}" ${t.id===selected?'selected':''}>${t.name}</option>`).join('')}</select></div><div><label for="bookingQty">Quantity</label><input class="input" id="bookingQty" type="number" min="1" max="20" value="${d.qty || 1}" required></div></div><div class="grid grid-2"><div><label for="bookingLang">Language</label><select id="bookingLang" required>${s.languages.map(l=>`<option ${l===(d.language||'English')?'selected':''}>${l}</option>`).join('')}</select></div><div><label for="bookingAddOn">Add-on</label><select id="bookingAddOn"><option value="">No add-on</option><option value="guided-tour-addon" ${d.addOn==='guided-tour-addon'?'selected':''}>Optional Guided Tour Add-on</option><option value="audio-guide-addon" ${d.addOn==='audio-guide-addon'?'selected':''}>Optional Audio Guide Add-on</option></select></div></div><div class="grid grid-2"><div><label for="bookingPromo">Promo code</label><input class="input" id="bookingPromo" value="${d.promoCode || ''}" placeholder="Enter code"></div><div><label>Need traveler names / passport fields?</label><select id="needsPassport"><option value="no" ${d.needsPassport==='yes'?'':'selected'}>No</option><option value="yes" ${d.needsPassport==='yes'?'selected':''}>Yes, include traveler details</option></select></div></div><div id="travelerFields" class="${d.needsPassport==='yes'?'':'hidden'} grid" style="gap:12px"><div class="grid grid-2"><div><label for="travelerName">Primary traveler name</label><input class="input" id="travelerName" placeholder="Full name" value="${d.travelerName || ''}"></div><div><label for="passportNumber">Passport / ID number</label><input class="input" id="passportNumber" placeholder="Passport number" value="${d.passportNumber || ''}"></div></div></div><div class="notice" id="availabilityBox"><strong>Availability</strong><p class="small" id="availabilityText">Select your date to view live availability.</p></div><div class="ticket-actions"><button class="btn btn-primary" type="submit">${icon('lock')} Continue to checkout</button><a class="btn btn-ghost" href="tickets.html">Compare tickets again</a></div></form></div></div><div class="panel"><div class="ticket-price" id="bookingPrice">${money((ticketById(s, selected).basePrice + ticketById(s, selected).skipFee) * Number(d.qty || 1))}</div><p class="small">Dynamic pricing summary, based on your selections.</p><div class="info-card"><h3>Selected ticket</h3><p id="selectedTicketName" style="margin:0 0 8px" class="muted">${ticketById(s, selected).name}</p><p id="selectedTicketSummary" class="muted" style="margin:0;line-height:1.75">${ticketById(s, selected).description}</p></div><div style="height:14px"></div><div class="notice"><strong>Important policy reminder</strong><p class="small">Reduced, student, pilgrimage, university, seminary, and accessibility categories are eligibility-based. The page keeps these rules visible before you proceed.</p></div><div style="height:14px"></div><div class="info-card"><h3>Checkout trust</h3><ul class="card-list"><li>Secure payment UI</li><li>Anti-fraud notice</li><li>Clear non-refundable policy display</li><li>Confirmation by email and WhatsApp UI</li></ul></div></div></div></section>`, s);
}
function checkoutPage(s){
  const d = getDraft(), t = ticketById(s, d.ticketId || s.tickets[0].id), add = d.addOn ? ticketById(s, d.addOn) : null, qty = Number(d.qty || 1);
  const subtotal = (t.basePrice + t.skipFee) * qty + (add ? add.basePrice * qty : 0), disc = addDiscount(subtotal, d.promoCode, s), total = Math.max(0, subtotal - disc);
  return shell(`<section class="section"><div class="page-wrap split"><div><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Checkout with calm confidence.</h1><p>Transparent pricing, policy reminders, and a premium review panel before payment.</p></div></div><div class="panel"><div class="notice"><strong>Independent platform notice</strong><p class="small">This checkout belongs to an independent booking site. The official Vatican Museums online ticketing portal is clearly disclosed here and in the footer.</p></div><div style="height:18px"></div><form id="checkoutForm" class="grid" style="gap:16px"><div class="grid grid-2"><div><label for="customerName">Full name</label><input class="input" id="customerName" required placeholder="Your full name"></div><div><label for="customerEmail">Email</label><input class="input" id="customerEmail" type="email" required placeholder="name@email.com"></div></div><div class="grid grid-2"><div><label for="customerPhone">Phone</label><input class="input" id="customerPhone" required placeholder="+39 ..."></div><div><label for="customerWhatsapp">WhatsApp</label><input class="input" id="customerWhatsapp" placeholder="+39 ..."></div></div><div class="grid grid-2"><div><label for="cardName">Cardholder name</label><input class="input" id="cardName" required placeholder="Name on card"></div><div><label for="cardNumber">Card number</label><input class="input" id="cardNumber" inputmode="numeric" pattern="[0-9 ]{12,19}" required placeholder="4242 4242 4242 4242"></div></div><div class="grid grid-3"><div><label for="cardExp">Expiry</label><input class="input" id="cardExp" required placeholder="MM/YY"></div><div><label for="cardCvv">CVV</label><input class="input" id="cardCvv" inputmode="numeric" maxlength="4" required placeholder="123"></div><div><label for="billingZip">Postal code</label><input class="input" id="billingZip" required placeholder="00165"></div></div><label><input type="checkbox" id="acceptPolicy" required> I understand the cancellation and refund policy displayed on this page.</label><div class="ticket-actions"><button class="btn btn-primary" type="submit">${icon('lock')} Pay securely</button><a class="btn btn-ghost" href="booking.html">Edit booking</a></div></form></div></div><div class="panel"><div class="tag gold">Order summary</div><h2 style="margin:12px 0 10px">${t.name}</h2><p class="muted" style="line-height:1.75">Your selected booking is stored in a draft and can be reviewed before final payment.</p><div class="info-card"><p><strong>Date:</strong> ${d.date || 'Not selected'}</p><p><strong>Time:</strong> ${d.time || 'Not selected'}</p><p><strong>Quantity:</strong> ${qty}</p><p><strong>Language:</strong> ${d.language || 'English'}</p><p style="margin:0"><strong>Add-on:</strong> ${add ? add.name : 'None'}</p></div><div style="height:14px"></div><div class="info-card"><h3>Pricing</h3><p class="small" style="display:flex;justify-content:space-between"><span>Tickets</span><span>${money((t.basePrice + t.skipFee) * qty)}</span></p><p class="small" style="display:flex;justify-content:space-between"><span>Add-ons</span><span>${money(add ? add.basePrice * qty : 0)}</span></p><p class="small" style="display:flex;justify-content:space-between"><span>Promo discount</span><span>- ${money(disc)}</span></p><hr style="border:none;border-top:1px solid rgba(20,32,52,.08);margin:12px 0"><p style="display:flex;justify-content:space-between;font-size:1.18rem;font-weight:800;color:var(--navy)"><span>Total</span><span>${money(total)}</span></p></div><div style="height:14px"></div><div class="notice"><strong>Non-refundable reminder</strong><p class="small">Refund and cancellation rules are shown clearly and remain editable in the admin dashboard. Anti-fraud warnings help protect the checkout flow.</p></div></div></div></section>`, s);
}
function confirmationPage(s){
  const b = getBooking(), ref = b?.reference || 'AW-VM-' + Math.random().toString(36).slice(2,8).toUpperCase(), t = ticketById(s, b?.ticketId || s.tickets[0].id);
  return shell(`<section class="section"><div class="page-wrap split"><div class="panel"><span class="tag green">${icon('check')} Payment confirmed</span><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem);margin:14px 0 10px">Thank you. Your booking is confirmed.</h1><p class="muted" style="line-height:1.8">Your premium Vatican Museums booking is ready. Keep the reference number below for support and arrival.</p><div class="info-card"><p><strong>Reference:</strong> ${ref}</p><p><strong>Ticket:</strong> ${t.name}</p><p><strong>Date:</strong> ${b?.date || 'N/A'}</p><p><strong>Time:</strong> ${b?.time || 'N/A'}</p><p><strong>Language:</strong> ${b?.language || 'English'}</p></div><div style="height:14px"></div><div class="ticket-actions"><a class="btn btn-primary" href="#">Email confirmation</a><a class="btn btn-secondary" href="#">WhatsApp confirmation</a></div></div><div class="panel"><div class="notice"><strong>What happens next</strong><p class="small">A confirmation email UI and WhatsApp confirmation UI are shown here for clarity. You can also add your own backend or email service later.</p></div><div style="height:14px"></div><div class="info-card"><h3>Arrival checklist</h3><ul class="card-list"><li>Bring your booking reference</li><li>Follow the cloakroom rules</li><li>Keep your phone on silent</li><li>Respect the Sistine Chapel silence policy</li></ul></div><div style="height:14px"></div><div class="info-card"><h3>Support</h3><p class="muted">Need a change request or a booking question? Use the contact page and include your reference number.</p><a class="btn btn-ghost" href="contact.html">Contact support</a></div></div></div></section>`, s);
}
function renderAdmin(s){
  const ticketRows = s.tickets.map(t=>`<tr><td>${t.name}</td><td><input class="input" data-ticket-field="basePrice" data-id="${t.id}" type="number" value="${t.basePrice}"></td><td><input class="input" data-ticket-field="skipFee" data-id="${t.id}" type="number" value="${t.skipFee}"></td><td><input class="input" data-ticket-field="badge" data-id="${t.id}" type="text" value="${t.badge}"></td><td><input data-ticket-field="featured" data-id="${t.id}" type="checkbox" ${t.featured?'checked':''}></td></tr>`).join('');
  const couponRows = s.coupons.map((c,i)=>`<tr><td><input class="input" data-coupon-field="code" data-index="${i}" type="text" value="${c.code}"></td><td><input class="input" data-coupon-field="type" data-index="${i}" type="text" value="${c.type}"></td><td><input class="input" data-coupon-field="discount" data-index="${i}" type="number" value="${c.discount}"></td><td><input class="input" data-coupon-field="note" data-index="${i}" type="text" value="${c.note}"></td></tr>`).join('');
  const faqRows = s.faq.map((f,i)=>`<tr><td><input class="input" data-faq-field="q" data-index="${i}" type="text" value="${f.q}"></td><td><textarea data-faq-field="a" data-index="${i}">${f.a}</textarea></td></tr>`).join('');
  const bookingRows = (s.bookings || []).slice().reverse().map(b=>`<tr><td>${b.reference}</td><td>${b.name}</td><td>${ticketById(s,b.ticketId).name}</td><td>${b.date} ${b.time}</td><td>${money(b.total || 0)}</td></tr>`).join('') || '<tr><td colspan="5">No bookings yet.</td></tr>';
  return shell(`<section class="section"><div class="page-wrap"><div class="section-title"><div><h1 class="headline" style="font-size:clamp(2.2rem,4vw,4.8rem)">Admin Dashboard</h1><p>Manage ticket types, inventory, promotions, content, bookings, leads, and homepage copy without code.</p></div><div class="ticket-actions"><button class="btn btn-primary" id="saveAdminBtn" type="button">Save changes</button><button class="btn btn-ghost" id="exportCsvBtn" type="button">Export CSV</button></div></div><div class="analytics"><div class="kpi"><div class="label">Tickets</div><div class="value">${s.tickets.length}</div><div class="spark"></div></div><div class="kpi"><div class="label">Coupons</div><div class="value">${s.coupons.length}</div><div class="spark"></div></div><div class="kpi"><div class="label">Bookings</div><div class="value">${(s.bookings || []).length}</div><div class="spark"></div></div><div class="kpi"><div class="label">Leads</div><div class="value">${(s.leads || []).length}</div><div class="spark"></div></div></div><div style="height:18px"></div><div class="grid grid-2"><div class="admin-card"><h2>Homepage content</h2><div><label>Headline</label><input class="input" id="heroHeadline" value="${s.hero.headline}"></div><div style="height:12px"></div><div><label>Subheadline</label><textarea id="heroSubheadline">${s.hero.subheadline}</textarea></div></div><div class="admin-card"><h2>Visitor notice</h2><div><label>Independent disclaimer</label><textarea id="disclaimer">${s.site.disclaimer}</textarea></div><p class="small">This notice is repeated in the header, footer, and checkout flow.</p></div></div><div style="height:18px"></div><div class="admin-card"><h2>Ticket types</h2><div style="overflow:auto;border-radius:24px;border:1px solid rgba(20,32,52,.08)"><table class="compare-table"><thead><tr><th>Ticket</th><th>Base price</th><th>Skip fee</th><th>Badge</th><th>Featured</th></tr></thead><tbody>${ticketRows}</tbody></table></div></div><div style="height:18px"></div><div class="grid grid-2"><div class="admin-card"><h2>Inventory / sold-out statuses</h2><p class="small">This static build uses editable slot rules. Add a production inventory API later if needed.</p><div><label>Date</label><input class="input" id="invDate" type="date"></div><div class="grid grid-2" style="margin-top:12px"><div><label>Time</label><select id="invTime">${s.slots.map(x=>`<option>${x}</option>`).join('')}</select></div><div><label>Ticket</label><select id="invTicket">${s.tickets.map(t=>`<option value="${t.id}">${t.name}</option>`).join('')}</select></div></div><div class="grid grid-2" style="margin-top:12px"><div><label>Stock</label><input class="input" id="invStock" type="number" value="20"></div><div><label>Sold out?</label><select id="invSoldOut"><option value="no">No</option><option value="yes">Yes</option></select></div></div><button class="btn btn-primary" type="button" id="addInventoryBtn" style="margin-top:14px">Add / update slot</button></div><div class="admin-card"><h2>Coupons</h2><div style="overflow:auto;border-radius:24px;border:1px solid rgba(20,32,52,.08)"><table class="compare-table"><thead><tr><th>Code</th><th>Type</th><th>Discount</th><th>Note</th></tr></thead><tbody>${couponRows}</tbody></table></div></div></div><div style="height:18px"></div><div class="grid grid-2"><div class="admin-card"><h2>FAQs</h2><div style="overflow:auto;border-radius:24px;border:1px solid rgba(20,32,52,.08)"><table class="compare-table"><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>${faqRows}</tbody></table></div></div><div class="admin-card"><h2>Bookings</h2><div style="overflow:auto;border-radius:24px;border:1px solid rgba(20,32,52,.08)"><table class="compare-table"><thead><tr><th>Reference</th><th>Name</th><th>Ticket</th><th>Date/time</th><th>Total</th></tr></thead><tbody>${bookingRows}</tbody></table></div></div></div><div style="height:18px"></div><div class="admin-card"><h2>Homepage copy editor</h2><p class="small">Add a simple CMS layer later by replacing localStorage with your preferred backend.</p><button class="btn btn-ghost" type="button" id="resetDemoBtn">Reset demo data</button></div></div></section>`, s);
}
function injectSeo(s){
  const m = META[page()] || META.home;
  document.title = m[0];
  const d = document.querySelector('meta[name="description"]'); if (d) d.setAttribute('content', m[1]);
  const o1 = document.querySelector('meta[property="og:title"]'); if (o1) o1.setAttribute('content', m[0]);
  const o2 = document.querySelector('meta[property="og:description"]'); if (o2) o2.setAttribute('content', m[1]);
  const t1 = document.querySelector('meta[name="twitter:title"]'); if (t1) t1.setAttribute('content', m[0]);
  const t2 = document.querySelector('meta[name="twitter:description"]'); if (t2) t2.setAttribute('content', m[1]);
}
function injectSchema(s){
  const p = page();
  const base = location.origin + location.pathname.replace(/[^/]*$/, '');
  const schemas = [
    {"@context":"https://schema.org","@type":"TravelAgency","name":s.site.name,"description":s.site.description,"telephone":s.site.supportPhone,"email":s.site.supportEmail,"areaServed":"International"},
    {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":base + 'index.html'},{"@type":"ListItem","position":2,"name":p}]}
  ];
  if (p === 'faq') schemas.push({"@context":"https://schema.org","@type":"FAQPage","mainEntity":s.faq.map(x=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))});
  if (p === 'tickets' || p === 'ticket-detail') schemas.push({"@context":"https://schema.org","@type":"Product","name":"Vatican Museums ticketing experience","brand":s.site.name,"offers":s.tickets.map(t=>({"@type":"Offer","price":String(t.basePrice + t.skipFee),"priceCurrency":"EUR","availability":"https://schema.org/InStock"}))});
  let el = document.getElementById('schema-json'); if (!el){ el = document.createElement('script'); el.type = 'application/ld+json'; el.id = 'schema-json'; document.head.appendChild(el); }
  el.textContent = JSON.stringify(schemas.length===1 ? schemas[0] : schemas, null, 2);
}
function attach(s){
  const btn = document.getElementById('menuBtn'), nav = document.getElementById('navMenu');
  if (btn && nav){ btn.addEventListener('click', ()=>nav.classList.toggle('open')); document.addEventListener('click', e=>{ if (!nav.contains(e.target) && !btn.contains(e.target)) nav.classList.remove('open'); }); }
  const heroBtn = document.getElementById('heroSearchBtn');
  if (heroBtn){
    heroBtn.addEventListener('click', ()=>{
      setDraft({ ticketId: document.getElementById('heroTicket').value, date: document.getElementById('heroDate').value });
      location.href = `booking.html?ticket=${encodeURIComponent(document.getElementById('heroTicket').value)}`;
    });
  }
  const contactForm = document.getElementById('contactForm');
  if (contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      const leads = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
      leads.push({ name: document.getElementById('name').value, email: document.getElementById('email').value, message: document.getElementById('message').value, createdAt: new Date().toISOString() });
      localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
      alert('Message saved. Connect this form to email, CRM, or WhatsApp in production.');
      contactForm.reset();
    });
  }
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm){
    const d = getDraft();
    const dateEl = document.getElementById('bookingDate'), timeEl = document.getElementById('bookingTime'), ticketEl = document.getElementById('bookingTicket'), qtyEl = document.getElementById('bookingQty'), langEl = document.getElementById('bookingLang'), promoEl = document.getElementById('bookingPromo'), addOnEl = document.getElementById('bookingAddOn'), passportEl = document.getElementById('needsPassport'), travelerFields = document.getElementById('travelerFields'), availText = document.getElementById('availabilityText'), priceEl = document.getElementById('bookingPrice'), ticketName = document.getElementById('selectedTicketName'), ticketSummary = document.getElementById('selectedTicketSummary');
    if (d.date) dateEl.value = d.date;
    if (d.time) timeEl.value = d.time;
    if (d.addOn) addOnEl.value = d.addOn;
    function update(){
      const t = ticketById(s, ticketEl.value), dtt = dateEl.value || '2026-01-01', av = avail(s, dtt, timeEl.value, t.id), label = availLabel(av.soldOut ? 0 : av.stock);
      availText.innerHTML = `<strong class="tag ${label[1]}">${label[0]}</strong> · ${av.stock} seats estimated for this slot`;
      const add = addOnEl.value ? ticketById(s, addOnEl.value) : null;
      const subtotal = (t.basePrice + t.skipFee) * Math.max(1, Number(qtyEl.value || 1)) + (add ? add.basePrice * Math.max(1, Number(qtyEl.value || 1)) : 0);
      const disc = addDiscount(subtotal, promoEl.value, s);
      priceEl.textContent = money(Math.max(0, subtotal - disc));
      ticketName.textContent = t.name; ticketSummary.textContent = t.description;
      setDraft({ date: dateEl.value, time: timeEl.value, ticketId: t.id, qty: Number(qtyEl.value || 1), language: langEl.value, promoCode: promoEl.value, addOn: addOnEl.value, needsPassport: passportEl.value, travelerName: document.getElementById('travelerName')?.value || '', passportNumber: document.getElementById('passportNumber')?.value || '' });
    }
    [dateEl,timeEl,ticketEl,qtyEl,langEl,promoEl,addOnEl,passportEl].forEach(el => el.addEventListener('input', ()=>{ travelerFields.classList.toggle('hidden', passportEl.value !== 'yes'); update(); }));
    update();
    bookingForm.addEventListener('submit', e=>{ e.preventDefault(); if (!dateEl.value || !timeEl.value) return alert('Please select a date and time slot.'); location.href = 'checkout.html'; });
  }
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm){
    checkoutForm.addEventListener('submit', e=>{
      e.preventDefault();
      if (!document.getElementById('acceptPolicy').checked) return alert('Please accept the policy acknowledgement.');
      const d = getDraft(), t = ticketById(s, d.ticketId || s.tickets[0].id), add = d.addOn ? ticketById(s, d.addOn) : null, qty = Number(d.qty || 1), subtotal = (t.basePrice + t.skipFee) * qty + (add ? add.basePrice * qty : 0), disc = addDiscount(subtotal, d.promoCode, s), total = Math.max(0, subtotal - disc);
      const booking = { reference: 'AW-VM-' + Math.random().toString(36).slice(2,8).toUpperCase(), name: document.getElementById('customerName').value, email: document.getElementById('customerEmail').value, phone: document.getElementById('customerPhone').value, whatsapp: document.getElementById('customerWhatsapp').value, ticketId: t.id, date: d.date, time: d.time, language: d.language || 'English', qty, total, createdAt: new Date().toISOString() };
      localStorage.setItem(BOOKING_KEY, JSON.stringify(booking));
      const st = state(); st.bookings = st.bookings || []; st.bookings.push(booking); save(st);
      location.href = 'confirmation.html';
    });
  }
  if (page() === 'admin'){
    document.getElementById('saveAdminBtn')?.addEventListener('click', ()=>{
      const st = state();
      st.hero.headline = document.getElementById('heroHeadline').value;
      st.hero.subheadline = document.getElementById('heroSubheadline').value;
      st.site.disclaimer = document.getElementById('disclaimer').value;
      document.querySelectorAll('[data-ticket-field]').forEach(el=>{ const item = st.tickets.find(t=>t.id===el.dataset.id); if (!item) return; item[el.dataset.ticketField] = el.type === 'checkbox' ? el.checked : (el.value === '' || Number.isNaN(Number(el.value))) ? el.value : Number(el.value); });
      document.querySelectorAll('[data-coupon-field]').forEach(el=>{ const i = Number(el.dataset.index); if (st.coupons[i]) st.coupons[i][el.dataset.couponField] = el.dataset.couponField === 'discount' ? Number(el.value) : el.value; });
      document.querySelectorAll('[data-faq-field]').forEach(el=>{ const i = Number(el.dataset.index); if (st.faq[i]) st.faq[i][el.dataset.faqField] = el.value; });
      save(st); alert('Changes saved to localStorage CMS.'); location.reload();
    });
    document.getElementById('addInventoryBtn')?.addEventListener('click', ()=>{
      const st = state(); st.inventory = st.inventory || { overrides:{} };
      const key = `${document.getElementById('invDate').value}|${document.getElementById('invTime').value}|${document.getElementById('invTicket').value}`;
      st.inventory.overrides[key] = { stock: Number(document.getElementById('invStock').value || 0), soldOut: document.getElementById('invSoldOut').value === 'yes' };
      save(st); alert('Inventory slot saved.');
    });
    document.getElementById('exportCsvBtn')?.addEventListener('click', ()=>{
      const st = state();
      const rows = [['type','name','value'], ...st.tickets.map(t=>['ticket', t.name, String(t.basePrice + t.skipFee)]), ...((st.bookings || []).map(b=>['booking', b.reference, String(b.total)])), ...((st.leads || []).map(l=>['lead', l.name, l.email]))];
      const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'aurelia-vatican-export.csv'; a.click(); URL.revokeObjectURL(url);
    });
    document.getElementById('resetDemoBtn')?.addEventListener('click', ()=>{ localStorage.removeItem(STORAGE_KEY); localStorage.removeItem(BOOKING_KEY); localStorage.removeItem(DRAFT_KEY); localStorage.removeItem(LEADS_KEY); location.reload(); });
  }
}
function render(){
  const s = state();
  injectSeo(s); injectSchema(s);
  const p = page();
  const content = ({home:homePage,tickets:ticketListPage,'ticket-detail':ticketDetailPage,booking:bookingPage,checkout:checkoutPage,confirmation:confirmationPage,about:aboutPage,visit:visitPage,accessibility:accessibilityPage,faq:faqPage,contact:contactPage,blog:blogPage,policies:policiesPage,admin:renderAdmin}[p] || homePage)(s);
  document.getElementById('app').innerHTML = content;
  attach(s);
}
document.addEventListener('DOMContentLoaded', render);
