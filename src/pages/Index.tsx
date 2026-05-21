import { Download, MapPin, Phone, Mail, Calendar, Linkedin, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import georgePhoto from "@/assets/george-photo.png";

type Experience = {
  role: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  highlight?: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
};

const experiences: Experience[] = [
  {
    role: "Founder",
    company: "Touristas AI — Discovercyclades.gr",
    url: "https://discovercyclades.gr",
    location: "Sifnos, GR · Remote",
    period: "May 2024 — Present",
    highlight: "AI-native travel platform built solo, combining full-stack engineering with applied SEO.",
    bullets: [
      "Designed a custom LLM skill & training pipeline orchestrating Claude, Gemini and Perplexity for itinerary generation and content production.",
      "Launched the Cyclades vertical in December 2025 as a proof market before global expansion.",
      "Recovered from successive Google Core updates and war-driven demand shocks; restored growth instantly using a tested counter-playbook.",
      "Currently in beta; expanding niche coverage, multilingual content and itinerary generation.",
    ],
    metrics: [
      { label: "Clicks (16mo)", value: "4.71K" },
      { label: "Impressions", value: "451K" },
      { label: "Avg. position", value: "18.2" },
    ],
  },
  {
    role: "Head of Growth / SEO Consultant",
    company: "Growthrocks",
    url: "https://growthrocks.com",
    location: "Athens, GR · Remote",
    period: "May 2024 — Present",
    highlight: "Lead SEO across ~60 active clients spanning SaaS, e-commerce, publishing, travel and fintech.",
    bullets: [
      "Mindvalley.com — 3× impressions and 2× clicks across the engagement through a merged technical + content + internal-linking strategy.",
      "Built a repeatable recovery playbook for Core, Spam, Helpful Content and Thin Content updates — a reverse-engineered approach proven across markets.",
      "Own strategy, prioritization and delivery; partner with content and dev teams on a per-client basis.",
      "Operate the full toolchain: Ahrefs, Screaming Frog, GA4, GSC, SEOTesting.com, plus in-house SEO tooling.",
    ],
    metrics: [
      { label: "Mindvalley clicks", value: "673K" },
      { label: "Mindvalley impressions", value: "147M" },
      { label: "Active clients", value: "~60" },
    ],
  },
  {
    role: "SEO Lead",
    company: "Cosmos Sport Group",
    location: "Athens, GR",
    period: "May 2023 — Apr 2024",
    highlight:
      "Cross-market organic strategy for JD Sports GR, JD Sports CY, Cosmos Sport GR, Cosmos Sport CY, Sneaker10.gr, Rundome24.gr and Slamdunk.gr.",
    bullets: [
      "Aligned on-page, content and UX/UI as one motion across 7 brands and 2 markets.",
      "Introduced visible internal-link buttons on category pages — simultaneously fixing crawl depth and improving navigation UX.",
      "Led a team of 1 SEO specialist, 1 content writer and 7 content/context editors in parallel.",
      "JD Sports GR / CY — category architecture and faceted-URL cleanup to consolidate signals.",
      "Cosmos Sport GR / CY — brand & collection hub pages with internal-link distribution.",
      "Sneaker10.gr — product-page on-page optimisation and structured data for sneaker queries.",
      "Rundome24.gr & Slamdunk.gr — niche category targeting and seasonal interlinking.",
      "Delivered +32% organic growth in under a year — without backlink building or new blog content.",
    ],
    metrics: [
      { label: "Organic growth", value: "+32%" },
      { label: "Brands", value: "7" },
      { label: "Team", value: "9" },
    ],
  },
  {
    role: "SEO Specialist",
    company: "GIM Agency",
    location: "Athens, GR",
    period: "Apr 2023 — May 2023",
    bullets: [
      "Ran 13 concurrent client projects across diverse niches and industries.",
      "Departed after the agency declined to invest in (or buy out) the proper tooling stack required to deliver at scale.",
    ],
  },
  {
    role: "WordPress Developer / Senior SEO Specialist",
    company: "Villarreal CF — Envidea",
    location: "Vila-real / Almassora, ES",
    period: "Aug 2022 — Apr 2023",
    bullets: [
      "Co-led the Joomla → WordPress migration of villarrealcf.es with a backend developer.",
      "Integrated external API calls for standings, fixtures and player information.",
      "Rebuilt SEO from scratch: 301/404 cleanup, sitemap rework via Screaming Frog + Ahrefs, full on-page foundation.",
      "Delivered +600% growth on commercial keywords like “tienda villarreal” and “camiseta villarreal”.",
    ],
    metrics: [{ label: "Commercial keywords", value: "+600%" }],
  },
  {
    role: "Project Manager / WP Developer / SEO Specialist",
    company: "Eugenides Foundation — Planetarium of Greece",
    location: "Athens, GR",
    period: "Sep 2015 — May 2022",
    bullets: [
      "Managed migration of eef.edu.gr from Joomla to custom Umbraco, including schema for events, tickets and movies.",
      "Built an auto meta-description system; trained content writers on SEO writing.",
      "Delivered 10+ WordPress projects and a new WooCommerce eshop integrated with the Eduard ERP.",
      "Ranked 50+ new keywords in 6 months; ran the email marketing program for a year.",
    ],
  },
  {
    role: "WordPress Developer / SEO Consultant",
    company: "Attica Group × BVLGARI",
    location: "Athens, GR",
    period: "Apr 2020 — Oct 2022",
    bullets: [
      "Designed and developed a perfume-collection landing page from the BVLGARI XD spec.",
      "Embedded via iframe into atticadps.gr — one of the largest e-commerce sites in Greece.",
      "Applied full on-page SEO despite iframe constraints; ongoing maintenance.",
    ],
  },
  {
    role: "Web Developer / SEO Expert",
    company: "Allazwdiatrofi.gr",
    location: "Athens, GR",
    period: "Feb 2020 — Feb 2023",
    bullets: [
      "Redesigned and migrated from a legacy custom .NET stack.",
      "Toxic-link cleanup via Semrush; 5-keyword annual strategy.",
      "Optimised 250 blog posts (URLs, alt text, on-page).",
      "Delivered +2500% total traffic and 400+ keywords in top 7 (Ahrefs).",
    ],
    metrics: [
      { label: "Traffic", value: "+2500%" },
      { label: "Top-7 keywords", value: "400+" },
    ],
  },
  {
    role: "SEO Specialist",
    company: "Antiparos Rent a Car",
    location: "Antiparos, GR",
    period: "Feb 2017 — Sep 2022",
    bullets: [
      "Designed and built rentacarantiparos.com, antiparosrooms.com and antiparostransfer.gr.",
      "Minimal UX, keyword/meta/alt optimisation, GA + GSC setup, mobile + speed.",
      "Ongoing maintenance and rank monitoring.",
    ],
  },
  {
    role: "Web Developer / SEO Analyst",
    company: "Activesport.gr",
    location: "Athens, GR",
    period: "Apr 2019 — Oct 2022",
    bullets: [
      "WordPress + WooCommerce front-end; mockup-to-code with HTML, JS, AJAX and JSON.",
      "25+ keywords on page 1 over 5 years (GSC + Ahrefs, audits via Screaming Frog).",
    ],
  },
  {
    role: "Web Developer / SEO Expert",
    company: "Petsville.gr",
    location: "Athens, GR",
    period: "Jan 2016 — Apr 2022",
    bullets: [
      "Magento 1 → WooCommerce migration with payment integrations (Skroutz).",
      "Full SEO-led build, requirements workshops and ongoing optimisation.",
    ],
  },
];

const coreSkills = [
  "Technical SEO",
  "On-Page SEO",
  "Content Strategy",
  "Internal Linking",
  "Site Migrations",
  "Keyword Research",
  "Analytics (GA4/GSC)",
  "CRO",
  "Team Leadership",
  "Full-Stack Dev",
];

const tools = [
  "Ahrefs",
  "Screaming Frog",
  "Semrush",
  "GA4",
  "GSC",
  "SEOTesting.com",
  "Perplexity",
  "Claude Code",
  "Gemini",
  "Custom in-house SEO tools",
  "Figma",
];

const stack = ["WordPress", "WooCommerce", "Next.js", "HTML / CSS / JS", "PHP", "MySQL", "Umbraco"];

const languages = [
  { name: "Greek", level: "Native", percent: 100 },
  { name: "English", level: "Advanced", percent: 90 },
  { name: "Spanish", level: "Advanced", percent: 85 },
];

const certifications = [
  "SEO Fundamentals — Semrush (2021)",
  "Google SEO Fundamentals — UC Davis (2021)",
  "Google Ads (2018)",
  "Cisco Networking (2016)",
];

const portfolio = [
  "villarrealcf.es",
  "eef.edu.gr",
  "imomagreece.com",
  "discovercyclades.gr",
  "navos.ai",
  "hotelssantorini.gr",
  "cycladesrentacar.com",
  "santorini-rentme.com",
  "villaoliviaclara.com",
  "meropirooms.gr",
  "morpheas.gr",
  "box2box.gr",
  "petsville.gr",
  "zouridakis.gr",
  "optikamargaritis.gr",
  "kavoshouse.com",
];

const Index = () => {
  return (
    <div className="cv-page min-h-screen bg-muted/50 flex items-start justify-center py-10 px-4 print:py-0 print:px-0 print:bg-background print:items-stretch">
      {/* Download button */}
      <div className="no-print fixed top-5 right-5 z-50">
        <Button
          onClick={() => window.print()}
          className="gap-2 rounded-full bg-accent text-accent-foreground shadow-xl hover:bg-accent/90"
        >
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div className="cv-grid w-full max-w-[1100px] grid grid-cols-[360px_1fr] shadow-2xl print:shadow-none print:max-w-full print:grid-cols-[35%_1fr]">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="bg-primary text-primary-foreground flex flex-col bg-dot-grid relative">
          {/* PHOTO */}
          <div className="relative bg-gradient-to-br from-brand/30 via-primary to-primary">
            <img
              src={georgePhoto}
              alt="George Kasiotis — Organic Growth Strategist"
              className="w-full h-[380px] object-contain object-bottom print:h-[280px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary to-transparent" />
          </div>

          <div className="px-8 pb-10 pt-5 flex flex-col gap-7 print:px-5 print:pb-4 print:pt-2 print:gap-4 relative z-10">
            {/* Contact */}
            <div>
              <SidebarHeading>Contact</SidebarHeading>
              <div className="mt-3 space-y-2.5 text-sm">
                <ContactRow icon={<MapPin className="h-3.5 w-3.5" />}>
                  Kamares, Sifnos 84003, GR
                </ContactRow>
                <ContactRow icon={<Phone className="h-3.5 w-3.5" />}>
                  +30 6955 885 718
                </ContactRow>
                <ContactRow icon={<Mail className="h-3.5 w-3.5" />}>
                  <a href="mailto:kasiotisg@gmail.com" className="hover:text-accent">
                    kasiotisg@gmail.com
                  </a>
                </ContactRow>
                <ContactRow icon={<Linkedin className="h-3.5 w-3.5" />}>
                  <a
                    href="https://www.linkedin.com/in/kasiotisa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    linkedin.com/in/kasiotisa
                  </a>
                </ContactRow>
                <ContactRow icon={<Calendar className="h-3.5 w-3.5" />}>
                  05 / 05 / 1990
                </ContactRow>
              </div>
            </div>

            {/* Core Skills */}
            <div>
              <SidebarHeading>Core Skills</SidebarHeading>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {coreSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-accent/30 bg-accent/5 px-2 py-1 text-[10px] font-medium tracking-wide uppercase text-primary-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <SidebarHeading>Tools</SidebarHeading>
              <p className="mt-3 text-[12px] leading-relaxed text-primary-foreground/75">
                {tools.join(" · ")}
              </p>
            </div>

            {/* Stack */}
            <div>
              <SidebarHeading>Stack</SidebarHeading>
              <p className="mt-3 text-[12px] leading-relaxed text-primary-foreground/75">
                {stack.join(" · ")}
              </p>
            </div>

            {/* Languages */}
            <div>
              <SidebarHeading>Languages</SidebarHeading>
              <div className="mt-3 space-y-3">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-primary-foreground/50 text-xs">{l.level}</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-primary-foreground/15">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${l.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SidebarHeading>Certifications</SidebarHeading>
              <ul className="mt-3 space-y-1.5 text-[12px] text-primary-foreground/75">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* ===== RIGHT MAIN ===== */}
        <main className="bg-card px-10 py-12 print:px-6 print:py-5">
          {/* Name */}
          <div className="mb-8 print:mb-4">
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent">
              Curriculum Vitae
            </p>
            <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight text-foreground">
              George
            </h1>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-brand">
              Kasiotis
            </h1>
            <p className="mt-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Organic Growth Strategist · SEO Consultant
            </p>

            {/* Profile blurb */}
            <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground max-w-2xl">
              Organic Growth Strategist with 8+ years scaling SEO for enterprise and SMB across
              Greece, Cyprus, Spain and global markets. I combine technical SEO, content systems
              and full-stack engineering — built 150+ sites end-to-end. Currently Head of Growth at{" "}
              <a
                href="https://growthrocks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-medium hover:underline"
              >
                Growthrocks
              </a>{" "}
              and founder of{" "}
              <a
                href="https://discovercyclades.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-medium hover:underline"
              >
                Touristas AI
              </a>
              .
            </p>
          </div>

          {/* Experience */}
          <section>
            <MainHeading>Experience</MainHeading>
            <div className="mt-6 space-y-5 print:mt-3 print:space-y-4">
              {experiences.map((exp, i) => (
                <article
                  key={i}
                  className={`print-break-inside-avoid relative pl-5 border-l-2 border-accent/30 ${
                    i === 4 ? "print-page-break-before" : ""
                  }`}
                >
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-accent">
                    {exp.period}
                  </p>
                  <h3 className="mt-0.5 text-[15px] font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:underline inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="text-muted-foreground/60"> · {exp.location}</span>
                  </p>

                  {exp.highlight && (
                    <p className="mt-1.5 text-[12px] italic text-foreground/80">{exp.highlight}</p>
                  )}

                  {exp.metrics && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {exp.metrics.map((m) => (
                        <span
                          key={m.label}
                          className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground/90"
                        >
                          <TrendingUp className="h-3 w-3 text-accent" />
                          <span className="text-foreground">{m.value}</span>
                          <span className="text-muted-foreground">{m.label}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-2 space-y-1">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-2 text-[11.5px] leading-snug text-muted-foreground"
                      >
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-brand/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-10 print:mt-8 print-break-inside-avoid">
            <MainHeading>Education</MainHeading>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-accent">
                  2013 — 2018
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  BSc Computer & Information Science
                </h3>
                <p className="text-sm text-muted-foreground">Hellenic Open University — Athens</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-accent">
                  2008 — 2012
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  BSc Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">Aegean Omiros College — Athens</p>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="mt-10 print:mt-6 print-break-inside-avoid">
            <MainHeading>Selected Portfolio</MainHeading>
            <p className="mt-3 text-[12px] text-muted-foreground">
              150+ WordPress, custom HTML and Next.js sites delivered. A selection of notable builds
              and migrations:
            </p>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 print:grid-cols-3">
              {portfolio.map((p) => (
                <a
                  key={p}
                  href={`https://${p}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-muted-foreground hover:text-brand inline-flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {p}
                  <ExternalLink className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/* ---- Sidebar sub-components ---- */

const SidebarHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[10px] font-semibold tracking-[0.35em] uppercase text-accent">
    {children}
  </h2>
);

const ContactRow = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-2.5 text-primary-foreground/80">
    <span className="mt-0.5 text-accent">{icon}</span>
    <span className="break-all">{children}</span>
  </div>
);

/* ---- Main sub-components ---- */

const MainHeading = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl font-bold tracking-tight text-foreground">{children}</h2>
    <div className="mt-1 h-[3px] w-12 rounded-full bg-accent" />
  </div>
);

export default Index;
