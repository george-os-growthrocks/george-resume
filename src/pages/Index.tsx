import { Download, MapPin, Phone, Mail, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Front Office Supervisor / Shift Leader",
    hotel: "Zeus Essence Athens Central",
    stars: 5,
    brand: "Trademark by Wyndham Hotels",
    location: "Athens, Gr",
    period: "Jun 2025 – Present",
    duties: [
      "Check In/Check Outs (Individual, Group)",
      "Complaint Management",
      "Front Office Tasks",
      "Individual Reservations (Email, Telephone, Online)",
      "Allocation / Room Plan",
      "Individual/Travel Agent Invoicing",
      "Accounts Receivable / Deposits / Payments",
      "Channel Handling (Booking, Expedia, Webhotelier etc.)",
      "Exclusivi Panel Handling",
    ],
  },
  {
    role: "Reservations Executive",
    hotel: "F Zeen Retreats",
    stars: 5,
    location: "Kefalonia / Athens, Gr",
    period: "Feb 2025 – May 2025",
    duties: [
      "Individual/Travel Agent Reservations (Email, Telephone, Online)",
      "Yield/Revenue Handling",
      "Allocation / Room Plan",
      "Invoicing",
      "Deposits / Payments",
      "Channel Handling (Booking, Expedia, Webhotelier etc.)",
      "Week/Year Forecast / Revenue Reporting",
    ],
  },
  {
    role: "Reservations Manager",
    hotel: "Domotel Agios Nikolaos",
    stars: 5,
    location: "Sivota, Epirus",
    period: "Oct 2022 – Oct 2024",
    duties: [
      "Individual/Group Reservations (Email, Telephone, Online)",
      "Guarantee/Allotment Contract Management",
      "Allocation / Room Plan / Stop Sales",
      "Individual/Tour Operator Invoicing",
      "Accounts Receivable / Deposits / Payments",
      "Channel Management (Booking, Expedia, Webhotelier etc.)",
      "Complaint Management / Overbooking Handling",
      "Year Forecast / Revenue Reporting",
      "+Protel PMS System",
      "+Pylon PMS System",
      "+Excellent Use of Microsoft Excel/Word",
    ],
  },
  {
    role: "Front Office Supervisor / Reservations Assistant",
    hotel: "Domotel Agios Nikolaos",
    stars: 5,
    location: "Sivota, Epirus",
    period: "May 2022 – Oct 2022",
    duties: [
      "Check In/Check Outs (Individual, Group)",
      "Complaint Management",
      "Front Office Tasks",
      "Individual Reservations (Email, Telephone, Online)",
      "Allocation / Room Plan",
      "Invoicing, Deposits, Payments",
      "Channels (Booking, Expedia, Webhotelier etc.)",
    ],
  },
  {
    role: "Front Office Supervisor – Shift Leader",
    hotel: "Domotel Agios Nikolaos",
    stars: 5,
    location: "Sivota, Epirus",
    period: "Mar 2021 – Oct 2021",
    duties: [
      "Check In/Check Outs (Individual, Group)",
      "Complaint Management",
      "Front Office Tasks",
      "Individual Reservations (Email, Telephone, Online)",
    ],
  },
  {
    role: "Front Office Agent – Shift Leader",
    hotel: "Aqua Oliva Resort",
    stars: 4,
    location: "Sivota, Epirus",
    period: "May 2020 – Sep 2020",
    duties: [
      "Check In/Check Outs",
      "Front Office Tasks",
      "Individual Reservations (Email, Telephone)",
    ],
  },
  {
    role: "Front Office Agent",
    hotel: "Panorama Sivota Hotel",
    stars: 4,
    location: "Sivota, Epirus",
    period: "May 2018 – Oct 2019",
    duties: [
      "Check In/Check Outs (Individual, Group)",
      "Front Office Tasks",
      "Individual Reservations (Email, Telephone, Online)",
    ],
  },
  {
    role: "Front Office Trainee",
    hotel: "Domotel Agios Nikolaos",
    stars: 5,
    location: "Sivota, Epirus",
    period: "May 2017 – Oct 2017",
    duties: ["Front Office Tasks"],
  },
];

const skills = [
  "Teamwork",
  "Problem-Solving",
  "Customer Service",
  "Sales",
  "Leadership",
  "Office Administration",
  "Social Media",
];

const languages = [
  { name: "Greek", level: "Native", percent: 100 },
  { name: "Russian", level: "Advanced", percent: 85 },
  { name: "English", level: "Advanced", percent: 85 },
  { name: "Italian", level: "Elementary", percent: 30 },
];

const certifications = [
  "HiT – Protel System",
  "PYLON",
  "Web Booking Systems (Expedia, Booking, Webhotelier)",
  "Microsoft Office 365",
];

const Index = () => {
  return (
    <div className="cv-page min-h-screen bg-muted/50 flex items-start justify-center py-10 px-4 print:py-0 print:px-0 print:bg-background print:items-stretch">
      {/* Download button */}
      <div className="no-print fixed top-5 right-5 z-50">
        <Button
          onClick={() => window.print()}
          className="gap-2 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90"
        >
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div className="cv-grid w-full max-w-[1100px] grid grid-cols-[360px_1fr] shadow-2xl print:shadow-none print:max-w-full print:grid-cols-[35%_1fr]">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="bg-primary text-primary-foreground flex flex-col">
          {/* PHOTO */}
          <div className="relative">
            <img
              src="/katerina-photo.png"
              alt="Katerina Zotova"
              className="w-full h-[420px] object-cover object-top print:h-[300px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary to-transparent" />
          </div>

          <div className="px-8 pb-10 pt-5 flex flex-col gap-8 print:px-5 print:pb-4 print:pt-2 print:gap-4">
            {/* Contact */}
            <div>
              <SidebarHeading>Contact</SidebarHeading>
              <div className="mt-3 space-y-2.5 text-sm">
                <ContactRow icon={<MapPin className="h-3.5 w-3.5" />}>
                  Achaion 8, Ano Petralona, Attiki
                </ContactRow>
                <ContactRow icon={<Phone className="h-3.5 w-3.5" />}>
                  698 392 6614
                </ContactRow>
                <ContactRow icon={<Mail className="h-3.5 w-3.5" />}>
                  caterina.ztv@gmail.com
                </ContactRow>
                <ContactRow icon={<Calendar className="h-3.5 w-3.5" />}>
                  15 / 04 / 1991
                </ContactRow>
              </div>
            </div>

            {/* Skills */}
            <div>
              <SidebarHeading>Skills</SidebarHeading>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-primary-foreground/25 px-3 py-1 text-[11px] font-medium tracking-wide uppercase text-primary-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
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
              <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/75">
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
          <div className="mb-10 print:mb-5">
            <h1 className="text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              Katerina
            </h1>
            <h1 className="text-6xl font-bold leading-[1.1] tracking-tight text-accent">
              Zotova
            </h1>
            <p className="mt-3 text-base font-light tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Hospitality Professional
            </p>
          </div>

          {/* Experience */}
          <section>
            <MainHeading>Experience</MainHeading>
            <div className="mt-6 space-y-5 print:mt-3 print:space-y-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`print-break-inside-avoid relative pl-5 border-l-2 border-accent/30 ${i === 4 ? 'print-page-break-before' : ''}`}
                >
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-accent" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {exp.period}
                  </p>
                  <h3
                    className="mt-0.5 text-[15px] font-semibold text-foreground"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                    {exp.hotel}
                    <span className="inline-flex ml-0.5">
                      {Array.from({ length: exp.stars }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-2.5 w-2.5 fill-accent/70 text-accent/70"
                        />
                      ))}
                    </span>
                    {exp.brand && (
                      <span className="text-xs italic text-muted-foreground/60">
                        ({exp.brand})
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground/60">{exp.location}</p>
                  {/* Duties */}
                  {exp.duties.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5">
                      {exp.duties.map((duty, di) => (
                        <li key={di} className="flex items-start gap-1.5 text-[11px] text-muted-foreground/80 leading-tight">
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-10 print:mt-8">
            <MainHeading>Education</MainHeading>
            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Hospitality Management
                </h3>
                <p className="text-sm text-muted-foreground">IIEK ETOILE — Athens</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  IT Qualification
                </h3>
                <p className="text-sm text-muted-foreground">
                  1st Professional College of Athens
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/* ---- Sidebar sub-components ---- */

const SidebarHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-accent" style={{ fontFamily: 'Outfit, sans-serif' }}>
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
  <div className="flex items-start gap-2.5 text-primary-foreground/75">
    <span className="mt-0.5 text-accent">{icon}</span>
    <span>{children}</span>
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
