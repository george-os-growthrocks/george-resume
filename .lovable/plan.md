# George Kasiotis CV — Full Rebuild

Replace all Katerina Zotova hospitality content with George's SEO/Growth career, swap the photo, and re-theme the design to fit a tech/SEO professional aesthetic.

## 1. Assets & meta

- Copy uploaded photo → `src/assets/george-photo.png` (replaces `/katerina-photo.png`).
- Update `index.html` title/description/OG to: "George Kasiotis — Organic Growth Strategist & SEO Consultant".
- Update favicon alt + JSON-LD Person schema (name, jobTitle, email, telephone, address, sameAs LinkedIn).

## 2. Design re-theme (Index.tsx + index.css)

Move away from hospitality gold/cream toward a confident growth/analytics palette:

- **Palette:** Midnight Indigo base (`#0a0a1a` / `#141432` / `#1e1e5a`) with electric indigo `#4f46e5` and a mint-green growth accent `#34d399` (signals "growth/SEO"). All as HSL tokens in `index.css`.
- **Typography:** Headings in **Space Grotesk**, body in **Inter** (load via Google Fonts in `index.html`). Replace Outfit references.
- **Sidebar:** dark indigo with subtle grid/dot pattern; photo with soft duotone overlay so the bright-blue background of the upload blends in.
- **Accent treatments:** small "growth arrow" / sparkline-like dividers, metric chips (e.g. "3× impressions", "+32% organic"), keep the timeline rail but recolor.
- Keep print styles working (single Download PDF button, A4 pagination).

## 3. Sidebar content

- **Name area on main:** "George Kasiotis" / accent line "Organic Growth Strategist · SEO Consultant".
- **Contact:** Kamares, Sifnos 84003 · +30 6955 885 718 · kasiotisg@gmail.com · 05/05/1990 · linkedin.com/in/kasiotisa.
- **Core skills (chips):** Technical SEO, On-Page SEO, Content Strategy, Internal Linking, Site Migrations, Keyword Research, Analytics (GA4/GSC), CRO, Team Leadership, Full-Stack Dev.
- **Tools:** Ahrefs, Screaming Frog, Perplexity, Claude Code, Gemini, SEOTesting.com, Custom in-house SEO tools, Semrush, GA4, GSC, Figma.
- **Stack:** WordPress, WooCommerce, Next.js, HTML/CSS/JS, PHP, MySQL, Umbraco.
- **Languages:** Greek (Native 100), English (Advanced 90), Spanish (Basic 50).
- **Certifications:** SEO Fundamentals — Semrush (2021), Google SEO Fundamentals — UC Davis (2021), Google Ads (2018), Cisco Networking (2016).

## 4. Profile blurb (top of main)

One short paragraph: Organic Growth Strategist with 8+ years scaling SEO for enterprise and SMB across GR, CY, ES, and global. Combines technical SEO, content systems, and full-stack engineering. Built 150+ sites; currently Head of Growth at Growthrocks and founder of Touristas AI.

## 5. Experience timeline (newest → oldest)

Each entry: period · role · company (link where relevant) · location · 3–6 bullet wins with metrics.

1. **May 2024 – Present — Founder, Touristas AI / Discovercyclades.gr** *(remote, Sifnos GR)*
   - Solo-built AI travel platform combining full-stack engineering with applied SEO.
   - Custom LLM skill/training pipeline orchestrating Claude, Gemini, Perplexity.
   - Launched Cyclades vertical Dec 2025 as proof market before global expansion.
   - Recovered from successive Google Core + War-related demand shocks; restored growth trajectory (see GSC: 4.71K clicks / 451K impressions on 16-mo curve).
   - Currently in beta, expanding niche coverage and itinerary generation.

2. **May 2024 – Present — Head of Growth / SEO Consultant, Growthrocks** *(growthrocks.com)*
   - Lead SEO across ~60 active clients spanning SaaS, e-commerce, publishing, travel, fintech.
   - **Mindvalley.com:** 3× impressions and 2× clicks (147M impressions / 673K clicks over the period — GSC compare attached).
   - Built a repeatable recovery playbook for Core/Spam/Helpful-Content updates; reverse-engineered with tested patterns that consistently restore rankings.
   - Own strategy, prioritization, and delivery; partner with content + dev teams per client.

3. **May 2023 – Apr 2024 — SEO Lead, Cosmos Sport Group** *(Athens, GR)*
   - Portfolio: JDSports GR, JDSports CY, Cosmos Sport GR, Cosmos Sport CY, Sneaker10.gr, Rundome24.gr, Slamdunk.gr.
   - Owned cross-market organic strategy for GR + CY; aligned on-page, content, and UX/UI as one motion.
   - Introduced visible internal-link buttons to category pages — fixed crawl depth + flow and improved navigation UX simultaneously.
   - Led a team of 1 SEO specialist, 1 content writer, and 7 content/context editors in parallel.
   - Delivered **+32% organic** in <1 year **without any backlink building or new blog content** — pure technical + on-page + UX work.
   - Per-brand call-outs (1 line each) for JDSports GR/CY, Cosmos Sport GR/CY, Sneaker10, Rundome24, Slamdunk highlighting the angle that moved the needle.

4. **Apr 2023 – May 2023 — SEO Specialist, GIM Agency** *(Athens, GR)*
   - 13 concurrent client projects across diverse niches and industries.
   - Departed after agency declined to invest in (or buy out) the proper tooling stack required to deliver at scale.

5. **Feb 2019 – Feb 2023 — WordPress Developer / Senior SEO Specialist, Villarreal CF / Envidea** *(Vila-real / Almassora, ES)*
   - Co-led Joomla → WordPress migration of villarrealcf.es.
   - Integrated external APIs for standings, fixtures, player data.
   - Rebuilt SEO from scratch: 301/404 cleanup, sitemap rework via Screaming Frog + Ahrefs.
   - **+600%** growth on commercial keywords like "tienda villarreal", "camiseta villarreal".

6. **Sep 2020 – Sep 2022 — Project Manager / WP Dev / SEO, Eugenides Foundation** *(Athens, GR)*
   - Managed migration of eef.edu.gr from Joomla to custom Umbraco; structured schema for events/tickets/movies.
   - Built auto meta-description system; trained content team on SEO writing.
   - Delivered 10+ WordPress projects + WooCommerce eshop integrated with Eduard ERP.
   - +50 keywords ranked in 6 months; ran email marketing program.

7. **Apr 2020 – Oct 2022 — WP Developer / SEO Consultant, Attica Group × BVLGARI** *(Athens, GR)*
   - Designed/dev'd perfume-collection landing page from BVLGARI XD spec, embedded via iframe into atticadps.gr.
   - Applied full on-page SEO despite iframe constraints; ongoing maintenance.

8. **Feb 2020 – Feb 2023 — Web Developer / SEO Expert, Allazwdiatrofi.gr** *(Athens, GR)*
   - Redesigned + migrated from legacy custom .NET stack.
   - Toxic-link cleanup via Semrush; 5-keyword annual strategy.
   - Optimized 250 blog posts (URLs, alt, on-page).
   - **+2500% traffic**, 400+ keywords in top 7 (Ahrefs).

9. **Feb 2017 – Sep 2022 — SEO Specialist, Antiparos Rent a Car** *(Antiparos, GR)*
   - Designed & built rentacarantiparos.com, antiparosrooms.com, antiparostransfer.gr.
   - Minimal UX, keyword/meta/alt optimization, GA + GSC setup, mobile + speed.

10. **Apr 2019 – Oct 2022 — Web Dev / SEO Analyst, Activesport.gr** *(Athens, GR)*
    - WordPress + WooCommerce front-end; mockup-to-code with HTML/JS/AJAX/JSON.
    - 25+ keywords on page 1 over 5 years (GSC + Ahrefs, audits via Screaming Frog).

11. **Jan 2016 – Apr 2022 — Web Developer / SEO Expert, Petsville.gr** *(Athens, GR)*
    - Magento 1 → WooCommerce migration; payment integrations (Skroutz).
    - Full SEO-led build + client requirement workshops.

## 6. Education

- BSc Computer & Information Science — Hellenic Open University, Athens (2013–2018).
- BSc Computer Science — Aegean Omiros College, Athens (2008–2012).

## 7. Selected portfolio (new section, compact grid)

Two-column list of notable builds/migrations: villarrealcf.es, eef.edu.gr, imomagreece.com, meropirooms.gr, morpheas.gr, box2box.gr, petsville.gr, zouridakis.gr, optikamargaritis.gr, kavoshouse.com, hotelssantorini.gr, cycladesrentacar.com, villaoliviaclara.com, navos.ai, santorini-rentme.com, discovercyclades.gr — with a "150+ WordPress / custom / Next.js sites delivered" tagline.

## 8. Technical notes

- All edits in `src/pages/Index.tsx`, `src/index.css`, `tailwind.config.ts` (token additions), `index.html` (fonts + meta + JSON-LD), and `src/assets/george-photo.png`.
- Keep existing print pagination logic; re-evaluate `print-page-break-before` index now that there are 11 roles (likely break before role 6).
- Remove `/katerina-photo.png` reference; old file in `public/` can stay untouched (no delete needed unless requested).
- No backend changes, no new dependencies.

Confirm and I'll implement.