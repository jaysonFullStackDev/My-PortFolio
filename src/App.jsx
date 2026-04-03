import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
  {
    name: "React",
    cat: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    cat: "Frontend",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Bootstrap",
    cat: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "HTML",
    cat: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "JavaScript",
    cat: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "CSS",
    cat: "Frontend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    cat: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    cat: "Backend",
    image: "/img/logo/expressjs.png",
  },
  {
    name: "MongoDB",
    cat: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Nodemon",
    cat: "Backend",
    image: "https://www.vectorlogo.zone/logos/nodemonio/nodemonio-icon.svg",
  },
  { name: "AWS IAM", cat: "DevOps", image: "/img/logo/iam.png" },
  { name: "AWS S3 Bucket", cat: "DevOps", image: "/img/logo/s3bucket.png" },
  {
    name: "C#",
    cat: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Python",
    cat: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    cat: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    cat: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    cat: "Version Control",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    cat: "Version Control",
    image:
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  },
];

const timeline = [
  {
    year: "2025",
    role: "On-The-Job Training",
    co: "Department of Information and Communications Technology (DICT)",
    desc: [
      "Provided technical support and resolved hardware and software issues to maintain system functionality",
      "Assisted in deploying DICT Free Wi-Fi services across Benguet, contributing to improved connectivity in multiple locations",
      "Maintained and updated ICT inventory records, ensuring accurate tracking and organization of equipment",
      "Collaborated with team members and field personnel to support ICT project implementation",
      "Conducted field research and coordinated with local contacts to gather site information for deployment",
      "Identified and documented locations using GPS tools to support accurate planning and execution",
    ],
  },
  {
    year: "2021-2025",
    role: "Bachelor of Science in Information Technology",
    co: "STI College Baguio",
    desc: "Graduated with honours. Specialisation in distributed systems and algorithms.",
  },
];

/* ── components ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        style={{
          background: scrolled ? "rgba(8,12,20,.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #ffffff0a" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#"
            className="mono text-sm font-bold"
            style={{ color: "var(--accent)" }}
          >
            &lt;Jayson Quisquirin/&gt;
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
                {l}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded border border-white/10"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#08141d] border-t border-white/10">
            <div className="flex flex-col px-4 py-3 gap-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="mono text-sm px-3 py-2 rounded hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function HeroSection() {
  const roles = ["Full-Stack Developer"];
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
      <div
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden sm:block"
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
        <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_30px_#00ff8750]">
          <img
            src="img/avatar.png"
            alt="Avatar"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          <p
            className={`section-label mb-2 sm:mb-4 fade-up text-xs sm:text-sm ${vis ? "" : "opacity-0"}`}
          >
            Hello, world
          </p>
          <h1
            className={`text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-snug mb-2 sm:mb-4 fade-up delay-1 ${vis ? "" : "opacity-0"}`}
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
            className={`text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-gray-300 mb-3 sm:mb-6 fade-up delay-2 ${vis ? "" : "opacity-0"}`}
            style={{ minHeight: "1.5rem" }}
          >
            <span className="cursor">{txt}</span>
          </div>
          <p
            className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-10 max-w-lg fade-up delay-3 ${vis ? "" : "opacity-0"}`}
          >
            IT graduate with hands-on experience in technical support,
            troubleshooting, and ICT inventory management. Skilled in Java,
            JavaScript, and cloud computing (AWS). Seeking an entry-level IT
            support or junior developer role where I can apply problem-solving
            skills and contribute to efficient system operations.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-2 sm:gap-4 fade-up delay-4 ${vis ? "" : "opacity-0"}`}
          >
            <a
              href="#projects"
              className="glow-btn mono text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-md font-bold text-center"
              style={{ background: "var(--accent)", color: "#080c14" }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="mono text-xs sm:text-sm px-4 sm:px-7 py-2 sm:py-3 rounded-md font-bold text-center transition-all"
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

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold mb-2">{p.title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <span key={t} className="tag text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <button
            className="mono text-xs px-3 sm:px-4 py-2 rounded transition-all"
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
            className="mono text-xs px-3 sm:px-4 py-2 rounded transition-all"
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
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="mb-10 sm:mb-14 fade-up">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
          Selected Work
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Projects
        </h2>
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

// ...existing code...
function SkillsSection() {
  const cats = [...new Set(skills.map((s) => s.cat))];
  const [active, setActive] = useState("Frontend");

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-28 grid-bg"
      style={{
        borderTop: "1px solid #ffffff08",
        borderBottom: "1px solid #ffffff08",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14 fade-up">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
            What I work with
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Skills
          </h2>
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

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div>
            <div className="flex gap-2 mb-6 sm:mb-8 flex-wrap">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="mono text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-all"
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

            <div
              className="space-y-4 sm:space-y-5"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "16px",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              {skills
                .filter((s) => s.cat === active)
                .map((s, i) => (
                  <div
                    key={s.name}
                    className="fade-up flex items-center gap-3"
                    style={{ animationDelay: i * 0.08 + "s" }}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                    <span className="text-xs sm:text-sm font-semibold">
                      {s.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-6 sm:mb-8 text-xs sm:text-sm">
              Experience & Education
            </p>
            <div
              className="relative pl-5"
              style={{ borderLeft: "1px solid #00ff8730" }}
            >
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="mb-8 sm:mb-10 relative fade-up"
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
                  <div className="font-bold text-xs sm:text-base">{t.role}</div>
                  <div className="text-xs text-gray-500 mono mb-1 sm:mb-2">
                    {t.co}
                  </div>
                  <ul className="text-gray-400 text-xs sm:text-sm leading-relaxed list-disc list-inside">
                    {Array.isArray(t.desc) ? (
                      t.desc.map((item, idx) => <li key={idx}>{item}</li>)
                    ) : (
                      <li>{t.desc}</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) return; // safety check

    setLoading(true);

    try {
      const res = await fetch(
        "https://my-portfolio-backend-j6vp.onrender.com/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, token: recaptchaToken }),
        },
      );

      const data = await res.json();
      if (res.ok) {
        setSent(true);
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/jaysonFullStackDev",
      icon: "⌨",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayson-quisquirin/",
      icon: "◈",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/jayson.quisquirin05/",
      icon: "◉",
    },
    { label: "Email", href: "jayson.a.quisquirin@gmail.com", icon: "✉" },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="mb-10 sm:mb-14 fade-up">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
          Let's build together
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Contact
        </h2>
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

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
        {/* Left info + socials */}
        <div className="fade-up delay-1">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Available for full-time roles, freelance projects, or just a chat
            about interesting engineering problems. Response time: usually under
            24 hours.
          </p>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {[
              ["📍", "Location", "Philippines (Remote-friendly)"],
              ["🕒", "Timezone", "UTC+8 (PHT)"],
              ["💼", "Status", "Open to opportunities"],
            ].map(([ico, l, v]) => (
              <div
                key={l}
                className="flex items-start sm:items-center gap-2 sm:gap-4"
              >
                <span className="text-base sm:text-xl shrink-0">{ico}</span>
                <div className="min-w-0">
                  <div className="mono text-xs text-gray-500">{l}</div>
                  <div className="text-xs sm:text-sm font-semibold wrap-break-words">
                    {v}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="mono text-xs px-2.5 sm:px-4 py-2 rounded flex items-center gap-2 transition-all"
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
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="fade-up delay-2">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-8 sm:py-12">
              <div
                className="text-3xl sm:text-4xl md:text-5xl"
                style={{ animation: "float 2s ease-in-out infinite" }}
              >
                ✓
              </div>
              <div
                className="text-base sm:text-lg md:text-xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                Message sent!
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                I'll get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", msg: "" });
                  setRecaptchaToken(null);
                }}
                className="mono text-xs px-3 sm:px-5 py-2 rounded mt-2 transition-all"
                style={{
                  border: "1px solid #00ff8740",
                  color: "var(--accent)",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Name
                </label>
                <input
                  required
                  className="input-field text-sm"
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
                  className="input-field text-sm"
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
                  className="input-field text-sm"
                  rows="4"
                  placeholder="Let's work together!"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* reCAPTCHA v2 */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // must be v2 key
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />
              </div>

              <button
                type="submit"
                disabled={!recaptchaToken || loading}
                className={`glow-btn w-full mono text-xs sm:text-sm py-2 sm:py-3 rounded-md font-bold ${
                  !recaptchaToken || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                style={{ background: "var(--accent)", color: "#080c14" }}
              >
                {loading ? "Sending..." : "Send Message →"}
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
      className="border-t py-6 sm:py-8 text-center px-4"
      style={{ borderColor: "#ffffff08" }}
    >
      <p className="mono text-xs text-gray-600">
        Designed & built by{" "}
        <span className="text-green-500">Jayson Quisquirin</span> ·{" "}
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
