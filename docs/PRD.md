# Product Requirements Document (PRD)
## FrameAxis — Premium Video Editing Agency Website

---

> **Version:** 1.1  
> **Date:** July 14, 2026  
> **Status:** Approved for Development  
> **Author:** Antigravity (AI Design Strategist)  
> **Stakeholder:** Project Owner  
> **Changelog:** v1.1 — Integrations deferred from Phase 1 to Phase 2/3 per owner decision.

---

## 1. Executive Summary

**FrameAxis** is a premium video editing and motion design agency. The name evokes precision ("frame") and momentum ("axis"): two pillars of outstanding video production. This document defines the complete product requirements for the FrameAxis public website — a high-converting, visually cinematic digital presence designed to attract and close B2B clients across YouTube creators, e-commerce brands, SaaS companies, and performance marketers.

The website will serve as the agency's **primary sales engine**, replacing cold outreach as the #1 acquisition channel within 6 months of launch.

---

## 2. Brand Identity

### 2.1 Agency Name
**FrameAxis**

### 2.2 Tagline
> *"Where Every Frame Drives Results."*

### 2.3 Brand Personality
| Attribute | Description |
|---|---|
| **Voice** | Confident, sharp, modern — not corporate. |
| **Tone** | Expert-but-approachable. We know our craft. |
| **Feel** | Premium dark studio aesthetic. Like a Hollywood post-production house. |
| **Not** | Cheap, loud, generic, overdesigned. |

### 2.4 Color Palette
| Role | Color | Hex |
|---|---|---|
| **Brand Primary** | Electric Indigo | `#5B4AFF` |
| **Brand Accent** | Neon Lime / Volt | `#C8FF00` |
| **Background (Dark)** | Deep Obsidian | `#080810` |
| **Surface** | Carbon | `#111118` |
| **Surface Elevated** | Slate | `#1A1A26` |
| **Text Primary** | Off-White | `#F0F0F5` |
| **Text Secondary** | Muted Silver | `#9090A8` |
| **Success / Positive Metric** | Neon Green | `#00E87A` |

### 2.5 Typography
| Role | Font | Source |
|---|---|---|
| **Display / Hero** | *Bebas Neue* | Google Fonts |
| **Headings** | *Inter* (700, 800) | Google Fonts |
| **Body Text** | *Inter* (400, 500) | Google Fonts |
| **Monospace / Tags** | *JetBrains Mono* | Google Fonts |

### 2.6 Logo Concept
- Wordmark: "FrameAxis" in a custom bold sans-serif
- Symbol: A stylized film frame (`[ ]`) with an X-axis line cutting through it diagonally — evoking both cinematic frames and motion vectors
- Available in: Full color (dark BG), monochrome white, and favicon variant

---

## 3. Business Goals & KPIs

### 3.1 Primary Goals
1. **Lead Generation** — Drive qualified discovery calls from the website (target: 20+ calls/month within 90 days)
2. **Brand Authority** — Position FrameAxis as a top-tier agency, not a freelancer
3. **Portfolio Showcase** — Demonstrate video quality and measurable client results
4. **Conversion Optimization** — Turn visitors into clients with minimal friction

### 3.2 Key Performance Indicators
| Metric | Target (Month 3) |
|---|---|
| Monthly Unique Visitors | 2,000+ |
| Bounce Rate | < 45% |
| Discovery Call Bookings (via Calendly) | 20+/month |
| Portfolio Page Avg Session Duration | > 2 min |
| Google Lighthouse Performance Score | ≥ 90 |
| Core Web Vitals Pass Rate | 100% |
| Conversion Rate (visit → contact) | ≥ 3.5% |

---

## 4. Target Audience

### 4.1 Primary Personas

#### Persona 1 — "The YouTube Grower"
- **Who:** YouTuber or Podcast Host, 10K–500K subscribers
- **Pain:** Editing takes 8–20 hrs/video, kills the content pipeline
- **Desire:** Consistent, polished edits that grow view duration
- **Budget:** $500–$2,000/month
- **Trigger:** Wants to scale without hiring full-time

#### Persona 2 — "The E-Commerce Brand"
- **Who:** DTC brand / Shopify store, $100K–$5M annual revenue
- **Pain:** Generic product videos aren't converting ad spend
- **Desire:** High-retention UGC and ad creatives that cut through
- **Budget:** $1,500–$8,000/project or monthly retainer
- **Trigger:** Scaling paid media and needs fresh ad creative

#### Persona 3 — "The SaaS Marketer"
- **Who:** B2B SaaS company marketing team (5–50 employees)
- **Pain:** Product demo videos are outdated, customer testimonials look amateurish
- **Desire:** Professional case study videos, product explainers, and event recaps
- **Budget:** Project-based, $3,000–$20,000
- **Trigger:** Funding round, product launch, or conference/event

#### Persona 4 — "The Performance Marketer"
- **Who:** Media buyer / growth agency running Meta/TikTok ads
- **Pain:** Creative fatigue kills ROAS; need 10+ ad variants per week
- **Desire:** Fast-turnaround, platform-native video edits at volume
- **Budget:** Subscription-based, $1,000–$5,000/month
- **Trigger:** ROAS decline, creative testing campaign launch

---

## 5. Website Pages & Feature Requirements

### 5.1 Website Sitemap

```
FrameAxis.com/
├── Home (/)
├── Work (/work)
│   └── Case Study Detail (/work/[slug])
├── Services (/services)
├── Pricing (/pricing)
├── About (/about)
├── Blog (/blog)               ← Phase 2
│   └── Blog Post (/blog/[slug])
├── Careers (/careers)         ← Phase 2
├── Contact (/contact)
└── Legal
    ├── Privacy Policy (/privacy)
    └── Terms of Service (/terms)
```

---

### 5.2 Page-by-Page Requirements

---

#### 5.2.1 Homepage (`/`)

**Purpose:** Capture attention, communicate elite positioning, drive scroll-through to CTA.

**Sections (in order):**

| # | Section | Description |
|---|---|---|
| 1 | **Sticky Navigation** | Logo left, Nav links center, "Start a Project" CTA button right. Glassmorphism style on scroll. |
| 2 | **Hero** | Full-screen dark background. Animated particle/mesh animation. Bold headline + subheadline. Two CTAs: "See Our Work" + "Book a Free Call". Social proof strip below (client count, videos edited, years). |
| 3 | **Marquee / Client Logos** | Infinite horizontal scroll of client/brand logos. Greyscale, on hover color. |
| 4 | **The Problem → Solution** | Two-column section. Left: Pain points (creative fatigue, slow turnaround, amateur edits). Right: Solution cards (our process). Animated counter metrics. |
| 5 | **Services Overview** | Bento-grid card layout. 6 service cards with icon, title, and one-liner. Hover reveals detail. Cards link to `/services`. |
| 6 | **Featured Work / Showreel** | Autoplay muted video showreel or interactive video gallery. 3 featured case study cards below. |
| 7 | **Why FrameAxis** | 4 differentiators in an asymmetric layout: 48-hr Turnaround, Dedicated Editor, Brand-Voice Trained System, NDA & IP Protected. |
| 8 | **Pricing Teaser** | 3-tier pricing cards (Starter, Growth, Studio). "Most Popular" badge on Growth. Each with key features list and CTA. |
| 9 | **Testimonials** | Horizontal scroll or 3-column testimonial grid. Each card: client photo, name, company, quote, and a result metric (e.g., "40% increase in engagement"). Star ratings optional. |
| 10 | **CTA Banner** | Full-width dark section. Bold copy: "Ready to Scale Your Content?" with "Book Discovery Call" button. Calendly-integrated. |
| 11 | **Footer** | Logo, tagline, nav links, social icons (Instagram, YouTube, LinkedIn, Twitter/X), legal links, copyright. |

**Functional Requirements:**
- FR-H-01: Hero particle animation must not degrade performance below Lighthouse score 85
- FR-H-02: All CTAs link to Calendly embed (modal) or `/contact` page
- FR-H-03: Navigation becomes sticky/glassmorphism after 80px scroll
- FR-H-04: Animated counter for metrics (videos edited, clients served, etc.) triggered on viewport entry
- FR-H-05: Showreel video is lazy-loaded, muted, and has a "Play Showreel" button
- FR-H-06: Pricing teaser cards animate in with stagger on viewport entry

---

#### 5.2.2 Work / Portfolio (`/work`)

**Purpose:** Demonstrate capability and drive trust through real project outcomes.

**Layout:**
- Filterable grid of case study cards
- Filter tabs: All | YouTube | Social Ads | Brand Films | Product Launch | SaaS

**Each Card Contains:**
- Thumbnail (video thumbnail or still)
- Client name (or anonymized "E-Commerce Brand" if NDA)
- Category badge
- One headline result (e.g., "32% CTR Increase")
- "View Case Study" hover effect

**Case Study Detail Page (`/work/[slug]`):**
| Section | Content |
|---|---|
| Hero | Project title, client name, category tags, featured video |
| The Brief | Client background + challenge |
| Our Approach | Creative direction, tools used, editing process |
| The Result | Key metrics (view count, engagement %, revenue impact) |
| Assets Delivered | Types of videos created (count, formats) |
| Next: Related Work | 2-3 related case study cards |

**Functional Requirements:**
- FR-W-01: Category filter must work without page reload (client-side JS)
- FR-W-02: Case study video player supports YouTube embed + native HTML5 video
- FR-W-03: Transition animation between list and detail page

---

#### 5.2.3 Services (`/services`)

**Purpose:** Explain what we do, how we do it, and for whom.

**Services Offered:**
1. **YouTube & Long-Form Editing** — Chapters, motion graphics, L-cuts, color grading, thumbnail strategy
2. **Social Media Reels & Shorts** — TikTok, Instagram Reels, YouTube Shorts — platform-native editing
3. **Ad Creative Production** — Meta, TikTok, and YouTube direct-response ads; multi-variant batches
4. **Brand Film & Corporate Video** — Hero brand films, company culture videos, investor decks
5. **Product Demo & SaaS Explainers** — Screen recording edits, animated UI overlays, voiceover sync
6. **Podcast Video Production** — Multi-cam sync, lower thirds, audiogram generation, short-clip extraction
7. *(Phase 2)* **Web Design & Development** — Landing pages, agency websites, portfolio sites (future expansion)

**Layout:**
- Each service gets its own section with: icon, section heading, description, what's included, ideal for persona, CTA
- Alternating left/right image-text layout
- "How We Work" process section: 4-step visual flow (Brief → Assign Editor → Review → Deliver)

---

#### 5.2.4 Pricing (`/pricing`)

**Purpose:** Reduce sales friction by publishing transparent, productized pricing.

**Pricing Tiers:**

| Tier | Name | Price | Best For |
|---|---|---|---|
| Starter | **Creator** | $799/month | YouTubers, podcasters, individual creators |
| Mid | **Growth** | $1,999/month | Brands, e-commerce, agencies — most popular |
| Premium | **Studio** | $4,499/month | Enterprise, performance marketing teams |
| Custom | **Enterprise** | Custom Quote | Large teams, multi-brand, dedicated editor |

**What Each Tier Includes (example for Growth):**
- Up to 20 edits/month (≤10 min each)
- 48-hour turnaround
- 1 active request queue
- Unlimited revisions
- Brand kit onboarding
- Dedicated Slack channel
- Monthly strategy call

**Page Sections:**
- Hero: "Transparent. Scalable. Predictable." pricing headline
- Toggle: Monthly / Annual (Annual = 2 months free)
- Pricing cards (3 visible + "Enterprise" row below)
- Feature comparison table (full breakdown by tier)
- FAQ accordion (8–10 pricing-specific questions)
- CTA: "Not sure which plan? Book a free 15-min call"

---

#### 5.2.5 About (`/about`)

**Purpose:** Build trust, humanize the agency, communicate mission and values.

**Sections:**
- **Hero Statement:** "We're not just video editors. We're your growth engine."
- **Our Story:** Founding narrative — the problem we saw in the market, why we started
- **Mission & Values:** 4 core values with icons (Speed, Quality, Partnership, Impact)
- **The Team:** Editor cards (photo, name, role, specialty, fun fact)
- **Stats Wall:** Videos edited all-time, client countries, avg turnaround time, client retention rate
- **Our Tools & Stack:** Logos of software: Adobe Premiere, After Effects, DaVinci Resolve, CapCut, Frame.io, Slack
- **CTA:** "Join 150+ brands growing with FrameAxis" + "Start a Project" button

---

#### 5.2.6 Contact (`/contact`)

**Purpose:** Convert interested prospects into booked calls with minimum friction.

**Sections:**
- Left: Copy ("Let's talk. We'll listen first."), contact info (email, response time promise), social links
- Right: 5-field form — Name, Company, Email, Service Type (dropdown), "Tell us about your project" (textarea)
- Below: Embedded Calendly widget for direct call booking
- "Typical response time: < 4 hours on business days" trust badge

**Form Submission:**
- On submit: Thank-you page or success modal with "Check your inbox + add us to contacts" CTA
- Backend: Form data emailed via SMTP / stored in database

---

## 6. Non-Functional Requirements

### 6.1 Performance
| Requirement | Target |
|---|---|
| Google Lighthouse Performance | ≥ 90 (mobile) |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Total Page Weight (Homepage) | ≤ 3MB compressed |

### 6.2 SEO
- Semantic HTML5 structure (header, main, section, article, footer)
- One `<h1>` per page
- Descriptive title tags (`FrameAxis | [Page Name]`)
- Unique meta descriptions per page (140–160 chars)
- Open Graph / Twitter Card meta tags for social sharing
- JSON-LD structured data (Organization, WebSite, LocalBusiness schema)
- Canonical URLs
- XML sitemap (`/sitemap.xml`)
- Robots.txt

### 6.3 Accessibility
- WCAG 2.1 AA compliance
- Alt text on all images and icons
- Keyboard navigation support
- ARIA labels on interactive elements
- Minimum contrast ratio: 4.5:1 for body text
- `prefers-reduced-motion` media query respected for animations

### 6.4 Responsiveness
- Mobile-first design
- Breakpoints: 375px, 768px, 1024px, 1280px, 1440px, 1920px
- Tested on: iPhone 14, Samsung Galaxy S22, iPad Pro, MacBook 14, 4K monitor

### 6.5 Security
- HTTPS enforced
- Contact form: input sanitization, CSRF protection
- Rate limiting on form submission (5 req/min/IP)
- No sensitive data stored client-side

### 6.6 Browser Compatibility
- Chrome 110+, Firefox 110+, Safari 16+, Edge 110+
- Graceful degradation for animations on older browsers

---

## 7. Content Requirements

### 7.1 Copy
- All copy to be written in confident, direct, results-oriented tone
- No passive voice. No buzzword fluff ("synergy," "leverage," "holistic")
- Every headline should communicate a benefit, not just a feature
- Reading level: Grade 8–10 (clear, not dumbed down)

### 7.2 Media
- Hero showreel: 60–90 second curated highlights reel
- Portfolio videos: Hosted on YouTube (unlisted) or Vimeo; embedded
- Team photos: High-quality professional headshots or branded illustrations
- Stock imagery: None — only original or AI-generated branded visuals

### 7.3 Microcopy
- "Start a Project" (primary CTA — not "Contact Us")
- "Book Free Call" (secondary CTA)
- "View Case Study" (portfolio link)
- Error messages: Human, helpful ("Oops! Please enter a valid email.")

---

## 8. Integrations

> **Decision (v1.1):** All external integrations deferred to Phase 2 / Phase 3. During Phase 1 (build), placeholder UI is used. The contact form will show a success toast with no backend email. Video embeds will use static thumbnails or placeholder iframes.

| Integration | Purpose | Phase |
|---|---|---|
| **YouTube / Vimeo Embeds** | Portfolio video players | **Phase 1 (pre-launch)** |
| **SMTP (Brevo/Mailgun)** | Contact form email delivery | **Phase 2** |
| **Calendly** | Discovery call booking (modal) | **Phase 2** |
| **Google Analytics 4** | Traffic & conversion tracking | **Phase 3** |
| **Google Search Console** | SEO indexing & keyword data | **Phase 3** |
| **Microsoft Clarity** | Heatmaps & session recordings | **Phase 3** |
| **Cloudflare** | CDN, DDoS protection, SSL | **Phase 3 (pre-launch to production)** |

---

## 9. Phase Roadmap

### Phase 1 — Core Website (NOW)
- [ ] Homepage
- [ ] Portfolio / Work (Static case studies)
- [ ] Services page
- [ ] Pricing page
- [ ] About page
- [ ] Contact page
- [ ] Legal pages (Privacy, Terms)

### Phase 2 — Content & Growth (Month 2–3)
- [ ] Blog / Content Marketing (CMS-driven)
- [ ] Web Design & Development services section
- [ ] Careers page
- [ ] Client portal teaser page

### Phase 3 — Conversion Optimization + Integrations (Month 4+)
- [ ] **GA4** — Google Analytics 4 setup & event tracking
- [ ] **Google Search Console** — Sitemap submission, keyword monitoring
- [ ] **Microsoft Clarity** — Heatmaps & session recordings
- [ ] **Cloudflare** — CDN, DDoS protection, production DNS
- [ ] A/B test hero headlines
- [ ] Live chat widget (Crisp or Tidio)
- [ ] Referral program landing page
- [ ] Case study video production (7+ detailed case studies)
- [ ] Testimonial video wall
- [ ] Personalized landing pages per persona (Creators, E-com, SaaS)

---

## 10. Acceptance Criteria

The Phase 1 build is considered complete when:

1. ✅ All 7 pages are built, functional, and visually polished
2. ✅ Lighthouse score ≥ 90 on both mobile and desktop
3. ✅ Contact form shows success state (backend email deferred to Phase 2)
4. ✅ Portfolio page renders with video embeds (YouTube/Vimeo iframes or placeholders)
5. ✅ Website passes WCAG 2.1 AA basic audit
6. ✅ All images have alt text; all pages have unique metadata
7. ✅ `sitemap.xml` and `robots.txt` auto-generated and accessible
8. ✅ Mobile layout tested on iPhone and Android viewports
9. ✅ No console errors on any page
10. ✅ Responsive across all breakpoints (375px → 1920px)

---

*Document maintained by: FrameAxis Development Team*  
*PRD Version: 1.0 | Next Review: Phase 2 Kickoff*
