import { useState, useEffect, useRef } from "react";

/* ── data ── */
const projects = [
  {
    title: "CloudFlow Dashboard",
    desc: "Real-time SaaS analytics platform with multi-tenant architecture, WebSocket data streams, and role-based access control.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    color: "#00ff87",
    icon: "▶",
    stat: "50k+ users",
  },
  {
    title: "DevOps Autopilot",
    desc: "CI/CD pipeline automation tool integrating GitHub Actions, Docker, and Kubernetes with one-click deploy workflows.",
    tags: ["TypeScript", "Docker", "K8s", "Go"],
    color: "#60efff",
    icon: "◈",
    stat: "300+ repos",
  },
  {
    title: "Neural Commerce",
    desc: "AI-powered e-commerce engine with personalized recommendations, dynamic pricing, and A/B testing infrastructure.",
    tags: ["Next.js", "Python", "TensorFlow", "MongoDB"],
    color: "#bf97ff",
    icon: "◉",
    stat: "$2M+ GMV",
  },
  {
    title: "Sync Protocol",
    desc: "End-to-end encrypted real-time collaboration SDK for embedded chat, cursors, and CRDT-based document sync.",
    tags: ["WebSockets", "Rust", "CRDT", "React"],
    color: "#ff9f5a",
    icon: "◎",
    stat: "< 40ms latency",
  },
];

const skills = [
  { name: "React / Next.js", level: 95, cat: "Frontend" },
  { name: "TypeScript", level: 92, cat: "Frontend" },
  { name: "Tailwind CSS", level: 90, cat: "Frontend" },
  { name: "Node.js / Express", level: 93, cat: "Backend" },
  { name: "PostgreSQL / Redis", level: 87, cat: "Backend" },
  { name: "Python / FastAPI", level: 82, cat: "Backend" },
  { name: "Docker / Kubernetes", level: 85, cat: "DevOps" },
  { name: "AWS / GCP", level: 80, cat: "DevOps" },
];

const timeline = [
  {
    year: "2025",
    role: "On-The-Job Training",
    co: "Department of Information and Communications Technology (DICT)",
    desc: "Led a team of 6 engineers building a multi-cloud SaaS platform serving 50k+ users.",
  },
  {
    year: "2022",
    role: "Full-Stack Developer",
    co: "StartupXYZ",
    desc: "Architected the core API layer and real-time data pipeline from 0 to launch.",
  },
  {
    year: "2020",
    role: "Frontend Developer",
    co: "Digital Agency",
    desc: "Delivered 20+ client projects with a focus on performance and accessibility.",
  },
  {
    year: "2018",
    role: "B.Sc. Computer Science",
    co: "State University",
    desc: "Graduated with honours. Specialisation in distributed systems and algorithms.",
  },
];

/* ── components ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      style={{
        background: scrolled ? "rgba(8,12,20,.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ffffff0a" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="mono text-sm font-bold"
          style={{ color: "var(--accent)" }}
        >
          &lt;YN /&gt;
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="glow-btn mono text-xs px-4 py-2 rounded-md font-bold"
            style={{ background: "var(--accent)", color: "#080c14" }}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const roles = [
    "Full-Stack Engineer",
    "React Specialist",
    "Node.js Architect",
    "API Designer",
  ];
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    setTimeout(() => setVis(true), 100);
  }, []);

  useEffect(() => {
    const target = roles[ri];
    const speed = del ? 40 : 80;
    const timer = setTimeout(() => {
      if (!del) {
        if (txt.length < target.length) setTxt(target.slice(0, txt.length + 1));
        else {
          setTimeout(() => setDel(true), 1800);
        }
      } else {
        if (txt.length > 0) setTxt(txt.slice(0, -1));
        else {
          setDel(false);
          setRi((ri + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [txt, del, ri]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center grid-bg hero-gradient"
      style={{ paddingTop: "80px" }}
    >
      {/* decorative ring */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ width: 340, height: 340 }}
      >
        <svg
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ring-spin w-full h-full opacity-20"
        >
          <circle
            cx="170"
            cy="170"
            r="160"
            stroke="url(#rg)"
            strokeWidth=".8"
            strokeDasharray="6 4"
          />
          <circle
            cx="170"
            cy="170"
            r="120"
            stroke="url(#rg)"
            strokeWidth=".5"
            strokeDasharray="3 8"
          />
          <circle
            cx="170"
            cy="170"
            r="80"
            stroke="url(#rg)"
            strokeWidth=".6"
            strokeDasharray="10 5"
          />
          <defs>
            <linearGradient
              id="rg"
              x1="0"
              y1="0"
              x2="340"
              y2="340"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00ff87" />
              <stop offset="1" stopColor="#60efff" />
            </linearGradient>
          </defs>
        </svg>
        {/* avatar placeholder */}
        <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_30px_#00ff8750]">
          <img
            src="img/avatar.png"
            alt="Avatar"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <p className={`section-label mb-4 fade-up ${vis ? "" : "opacity-0"}`}>
            Hello, world
          </p>
          <h1
            className={`text-5xl md:text-7xl font-extrabold leading-none mb-2 fade-up delay-1 ${vis ? "" : "opacity-0"}`}
          >
            I'm{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,var(--accent),var(--accent2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jayson Quisquirin
            </span>
          </h1>
          <div
            className={`text-2xl md:text-4xl font-bold text-gray-300 mb-6 fade-up delay-2 ${vis ? "" : "opacity-0"}`}
            style={{ minHeight: "2.5rem" }}
          >
            <span className="cursor">{txt}</span>
          </div>
          <p
            className={`text-gray-400 text-lg leading-relaxed mb-10 max-w-lg fade-up delay-3 ${vis ? "" : "opacity-0"}`}
          >
            IT graduate with hands-on experience in technical support,
            troubleshooting, and ICT inventory management. Skilled in
            Java,JavaScript, and cloud computing (AWS). Seeking an entry-level
            IT support or junior developer role where I can apply
            problem-solving skills and contribute to efficient system
            operations.
          </p>

          <div
            className={`flex flex-wrap gap-4 fade-up delay-4 ${vis ? "" : "opacity-0"}`}
          >
            <a
              href="#projects"
              className="glow-btn mono text-sm px-7 py-3 rounded-md font-bold inline-block"
              style={{ background: "var(--accent)", color: "#080c14" }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="mono text-sm px-7 py-3 rounded-md font-bold inline-block transition-all"
              style={{ border: "1px solid #00ff8740", color: "var(--accent)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00ff8715";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* quick stats */}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  return (
    <div
      className="card-hover rounded-xl overflow-hidden fade-up"
      style={{ animationDelay: `${i * 0.1}s`, background: "#0d1420" }}
    >
      {/* mock screenshot area */}
      <div className="project-img h-44 flex items-center justify-center">
        <span
          style={{
            fontSize: 64,
            filter: "drop-shadow(0 0 20px " + p.color + "50)",
            animation: "float 3s ease-in-out infinite",
            animationDelay: i * 0.3 + "s",
          }}
        >
          {p.icon}
        </span>
        <div className="absolute top-3 right-3">
          <span
            className="mono text-xs px-2 py-1 rounded"
            style={{
              background: p.color + "20",
              color: p.color,
              border: "1px solid " + p.color + "30",
            }}
          >
            {p.stat}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{p.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            className="mono text-xs px-4 py-2 rounded transition-all"
            style={{
              background: p.color + "18",
              color: p.color,
              border: "1px solid " + p.color + "30",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = p.color + "30")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = p.color + "18")
            }
          >
            Live Demo ↗
          </button>
          <button
            className="mono text-xs px-4 py-2 rounded transition-all"
            style={{ border: "1px solid #ffffff15", color: "#9ca3af" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ffffff30";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#ffffff15";
              e.currentTarget.style.color = "#9ca3af";
            }}
          >
            GitHub →
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <div className="mb-14 fade-up">
        <p className="section-label mb-3">Selected Work</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">Projects</h2>
        <div
          style={{
            width: 48,
            height: 3,
            background: "linear-gradient(90deg,var(--accent),var(--accent2))",
            borderRadius: 2,
            marginTop: 16,
          }}
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const cats = [...new Set(skills.map((s) => s.cat))];
  const [active, setActive] = useState("Frontend");

  return (
    <section
      id="skills"
      className="py-28 grid-bg"
      style={{
        borderTop: "1px solid #ffffff08",
        borderBottom: "1px solid #ffffff08",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 fade-up">
          <p className="section-label mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Skills</h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "linear-gradient(90deg,var(--accent),var(--accent2))",
              borderRadius: 2,
              marginTop: 16,
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* left: skill bars */}
          <div>
            {/* tabs */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="mono text-xs px-4 py-2 rounded transition-all"
                  style={{
                    background: active === c ? "var(--accent)" : "#ffffff0a",
                    color: active === c ? "#080c14" : "#9ca3af",
                    border:
                      "1px solid " +
                      (active === c ? "var(--accent)" : "#ffffff15"),
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              {skills
                .filter((s) => s.cat === active)
                .map((s, i) => (
                  <div
                    key={s.name}
                    className="fade-up"
                    style={{ animationDelay: i * 0.08 + "s" }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">{s.name}</span>
                      <span
                        className="mono text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        {s.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: s.level + "%",
                          animationDelay: i * 0.1 + "s",
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* right: timeline */}
          <div>
            <p className="section-label mb-8">Experience & Education</p>
            <div
              className="relative pl-5"
              style={{ borderLeft: "1px solid #00ff8730" }}
            >
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="mb-10 relative fade-up"
                  style={{ animationDelay: i * 0.1 + "s" }}
                >
                  <div
                    className="timeline-dot absolute"
                    style={{ left: -20, top: 4 }}
                  />
                  <div
                    className="mono text-xs mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.year}
                  </div>
                  <div className="font-bold text-base">{t.role}</div>
                  <div className="text-xs text-gray-500 mono mb-2">{t.co}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const socials = [
    { label: "GitHub", href: "#", icon: "⌨" },
    { label: "LinkedIn", href: "#", icon: "◈" },
    { label: "Twitter", href: "#", icon: "◉" },
    { label: "Email", href: "mailto:you@example.com", icon: "✉" },
  ];

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6">
      <div className="mb-14 fade-up">
        <p className="section-label mb-3">Let's build together</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">Contact</h2>
        <div
          style={{
            width: 48,
            height: 3,
            background: "linear-gradient(90deg,var(--accent),var(--accent2))",
            borderRadius: 2,
            marginTop: 16,
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* left */}
        <div className="fade-up delay-1">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Available for full-time roles, freelance projects, or just a chat
            about interesting engineering problems. Response time: usually under
            24 hours.
          </p>

          <div className="space-y-4 mb-10">
            {[
              ["📍", "Location", "Philippines (Remote-friendly)"],
              ["🕒", "Timezone", "UTC+8 (PHT)"],
              ["💼", "Status", "Open to opportunities"],
            ].map(([ico, l, v]) => (
              <div key={l} className="flex items-center gap-4">
                <span className="text-xl">{ico}</span>
                <div>
                  <div className="mono text-xs text-gray-500">{l}</div>
                  <div className="text-sm font-semibold">{v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="mono text-xs px-4 py-2 rounded flex items-center gap-2 transition-all"
                style={{ border: "1px solid #ffffff15", color: "#9ca3af" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00ff8740";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "#00ff8710";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff15";
                  e.currentTarget.style.color = "#9ca3af";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* right: form */}
        <div className="fade-up delay-2">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
              <div
                className="text-5xl"
                style={{ animation: "float 2s ease-in-out infinite" }}
              >
                ✓
              </div>
              <div
                className="text-xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                Message sent!
              </div>
              <p className="text-gray-400 text-sm">
                I'll get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", msg: "" });
                }}
                className="mono text-xs px-5 py-2 rounded mt-2 transition-all"
                style={{
                  border: "1px solid #00ff8740",
                  color: "var(--accent)",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handle} className="space-y-4">
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Name
                </label>
                <input
                  required
                  className="input-field"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="input-field"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Message
                </label>
                <textarea
                  required
                  className="input-field"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                className="glow-btn w-full mono text-sm py-3 rounded-md font-bold"
                style={{ background: "var(--accent)", color: "#080c14" }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t py-8 text-center"
      style={{ borderColor: "#ffffff08" }}
    >
      <p className="mono text-xs text-gray-600">
        Designed & built by{" "}
        <span style={{ color: "var(--accent)" }}>Your Name</span> ·{" "}
        {new Date().getFullYear()} · React + Vite + Tailwind
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
