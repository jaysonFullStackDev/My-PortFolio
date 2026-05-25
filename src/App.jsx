import { useState, useEffect, useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

/* ── scroll reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── timeline item reveal hook ── */
function useTimelineReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── counter animation hook ── */
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

/* ── data ── */
const projects = [
  {
    title: "NutriGuidePH",
    desc: "A community-based nutrition monitoring system for schools — tracks student BMI, manages feeding programs, sends guardian email alerts, and generates DepEd-formatted reports.",
    tags: ["PHP", "MySQL", "Bootstrap", "Chart.js", "PHPMailer", "Apache"],
    color: "#00ff87",
    icon: "🥗",
    preview: "img/NutriGuidePH.PNG",
    stat: "Local XAMPP application",
    github: "https://github.com/jaysonFullStackDev/NutriGuidePH.git",
  },
  {
    title: "BrewPOS",
    desc: "A multi-tenant coffee shop POS system with real-time orders, automatic inventory deduction, expense tracking, and P&L reporting. Features Google OAuth signup, role-based access, and support for GCash, Maya, GoTyme, and bank transfers.",
    tags: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Next.js",
    ],
    color: "#60efff",
    icon: "◈",
    preview: "img/brewPOS landing page.PNG",
    stat: "Deployed using vercel, render, and supabase",
    live: "https://brewhq.vercel.app/",
    github: "https://github.com/jaysonFullStackDev/POS.git",
  },
  {
    title: "Equipment Inventory Management System",
    desc: "A local inventory management system for tracking rentals and managing equipment.",
    tags: [
      "C#",
      ".NET Windows Forms",
      "Microsoft SQL Server LocalDB",
      "Windows Forms",
      "Visual Studio 2022",
    ],
    color: "#bf97ff",
    icon: "◉",
    stat: "Local desktop application for Windows",
    github:
      "https://github.com/jaysonFullStackDev/Equipment-Inventory-System.git",
  },
  {
    title: "My Portfolio Website",
    desc: "A personal portfolio website to showcase my projects and skills.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "nodemailer",
      "CORS",
      "dotenv",
      "Nodemon",
    ],
    color: "#ff9f5a",
    icon: "◎",
    preview: "img/portfolio.PNG",
    stat: "Deployed using vercel and render",
    live: "https://jayson-quisquirin.vercel.app/",
    github: "https://github.com/jaysonFullStackDev/My-PortFolio.git",
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
    name: "JWT",
    cat: "Backend",
    image: "https://jwt.io/img/pic_logo.svg",
  },
  {
    name: "Nodemailer",
    cat: "Backend",
    image: "https://nodemailer.com/img/nm_logo_200x136.png",
  },
  {
    name: "CORS",
    cat: "Backend",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  },
  {
    name: "dotenv",
    cat: "Backend",
    image:
      "https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg",
  },
  {
    name: "MySQL",
    cat: "Backend",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  },
  {
    name: "Microsoft SQL Server",
    cat: "Backend",
    image: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  },
  {
    name: "AWS",
    cat: "DevOps",
    image: "https://logo.svgcdn.com/logos/aws.svg",
  },
  {
    name: "Vercel",
    cat: "DevOps",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    name: "Render",
    cat: "DevOps",
    image: "https://logo.svgcdn.com/simple-icons/render-dark.svg",
  },
  {
    name: "GitHub Action",
    cat: "DevOps",
    image:
      "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
  },
  {
    name: "Linux",
    cat: "DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Docker",
    cat: "DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "CI/CD Pipelines",
    cat: "DevOps",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "C#",
    cat: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Python",
    cat: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    cat: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    cat: "Programming Language",
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
    year: "March 2026 - Present",
    role: "BrewPOS — Multi-Tenant Coffee Shop POS System",
    co: "Solo Developer | Full-Stack Web Application",
    desc: [
      "Designed and developed a full-stack, multi-tenant Point of Sale and business management platform for small coffee shops. The system enables shop owners to sign up via Google OAuth, configure their business, and manage daily operations including order processing, inventory tracking, expense recording, and profit analysis — all within a fully isolated tenant environment.",
      "Frontend: Next.js, TypeScript, Tailwind CSS, Socket.IO Client, React Context, Recharts, Lucide React",
      "Backend: Node.js, Express.js, PostgreSQL, JWT, bcrypt, Socket.IO, Google OAuth 2.0, RESTful API design",
      "DevOps & Deployment: Vercel, Render, Supabase, GitHub Actions",
    ],
  },
  {
    year: "February 2025-Present",
    role: "Full-stack Web Developer (Bootcamp)",
    co: "By Hitesh Choudhari (Udemy)",
    desc: [
      "Front-End: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap",
      "Back-End: Node.js, Express.js, Next.js",
      "Database: MongoDB, PostgreSQL, Prisma ORM",
      "Deployment: Vercel, Render",
      "Version Control: Git, GitHub",
    ],
  },
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
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* track which section is in view */
  useEffect(() => {
    const sections = ["about", "projects", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <>
      <nav
        className={`nav-entrance fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
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
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`nav-link${activeSection === l.toLowerCase() ? " active" : ""}`}
              >
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
                  className={`mono text-sm px-3 py-2 rounded hover:bg-white/10${activeSection === l.toLowerCase() ? " text-green-400" : ""}`}
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
    setTimeout(() => setVis(true), 800);
  }, []);

  useEffect(() => {
    if (!vis) return;
    const textEl = document.getElementById('hero-text');
    const avatarEl = document.getElementById('hero-avatar');
    if (textEl) {
      textEl.animate(
        [{ opacity: 0, transform: 'translateX(-100px)' }, { opacity: 1, transform: 'translateX(0)' }],
        { duration: 1500, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
      );
    }
    if (avatarEl) {
      avatarEl.animate(
        [{ opacity: 0, transform: 'translateY(100px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 1500, delay: 400, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
      );
    }
  }, [vis]);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text - slides from left */}
          <div
            id="hero-text"
            className="flex-1 max-w-xl"
            style={{ opacity: 0 }}
          >
            <p
              className="section-label mb-2 text-xs sm:text-sm"
            >
              Hello, world
            </p>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2"
            >
              I'm{" "}
              <span className="name-shimmer">
                Jayson Quisquirin
              </span>
            </h1>
            <div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 mb-3"
              style={{ minHeight: "1.5rem" }}
            >
              <span className="cursor">{txt}</span>
            </div>

            {/* Gradient separator */}
            <div
              style={{
                width: 48,
                height: 3,
                background:
                  "linear-gradient(90deg,var(--accent),var(--accent2))",
                borderRadius: 2,
                margin: "12px 0 16px",
              }}
            />

            <p
              className="text-sm md:text-base text-gray-400 leading-relaxed mb-6"
            >
              Building scalable full-stack applications with modern
              technologies. Passionate about clean code, system optimization,
              and delivering impactful solutions.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#projects"
                className="glow-btn mono text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-md font-bold text-center"
                style={{ background: "var(--accent)", color: "#080c14" }}
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="mono text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-md font-bold text-center transition-all"
                style={{
                  border: "1px solid #00ff8740",
                  color: "var(--accent)",
                }}
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

          {/* Avatar - slides from bottom */}
          <div
            id="hero-avatar"
            className="relative shrink-0 hidden md:block"
            style={{
              width: "clamp(260px, 28vw, 360px)",
              height: "clamp(260px, 28vw, 360px)",
              opacity: 0,
            }}
          >
            <svg
              viewBox="0 0 340 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ring-spin w-full h-full opacity-20 absolute inset-0"
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
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_30px_#00ff8750]">
              <img
                src="img/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card-hover rounded-xl slide-card"
      style={{ "--card-delay": `${i * 0.2}s`, background: "#0d1420" }}
    >
      <div className="project-img h-44 flex items-center justify-center relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
          const img = e.currentTarget.querySelector('.project-img-parallax');
          if (img) img.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('.project-img-parallax');
          if (img) img.style.transform = 'translate(0, 0) scale(1)';
        }}
      >
        {p.preview ? (
          <img
            src={p.preview}
            alt={p.title}
            className="w-full h-full object-cover object-top project-img-parallax"
          />
        ) : (
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
        )}
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
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const headingRef = useReveal();
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div ref={headingRef} className="slide-in mb-10 sm:mb-14">
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
          Selected Work
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Projects
        </h2>
        <div
          className="section-bar"
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

// ── Timeline item with individual scroll reveal ──
function TimelineItem({ t, i }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the timeline line to this item's position
          const line = document.getElementById('timeline-line');
          if (line) {
            const parent = line.parentElement;
            const parentRect = parent.getBoundingClientRect();
            const itemRect = el.getBoundingClientRect();
            const targetHeight = (itemRect.bottom - parentRect.top) / parentRect.height * 100;
            line.animate(
              [{ height: line.style.height || '0%' }, { height: `${targetHeight}%` }],
              { duration: 600, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
            );
            line.style.height = `${targetHeight}%`;
          }
          // Animate the dot
          const dot = el.querySelector('.timeline-dot');
          if (dot) {
            dot.animate(
              [{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1.3)', opacity: 1 }, { transform: 'scale(1)', opacity: 1 }],
              { duration: 500, delay: i * 150, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
            );
          }
          // Animate the content
          el.animate(
            [{ opacity: 0, transform: 'translateX(-50px)' }, { opacity: 1, transform: 'translateX(0)' }],
            { duration: 800, delay: i * 200, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
          );
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [i]);

  return (
    <div
      ref={ref}
      className="mb-8 sm:mb-10 relative"
      style={{ opacity: 0 }}
    >
      <div className="timeline-dot absolute" style={{ left: -20, top: 4, transform: 'scale(0)' }} />
      <div className="mono text-xs mb-1" style={{ color: "var(--accent)" }}>
        {t.year}
      </div>
      <div className="font-bold text-xs sm:text-base">{t.role}</div>
      <div className="text-xs text-gray-500 mono mb-1 sm:mb-2">{t.co}</div>
      <ul className="text-gray-400 text-xs sm:text-sm leading-relaxed list-disc list-inside">
        {Array.isArray(t.desc) ? (
          t.desc.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>{t.desc}</li>
        )}
      </ul>
    </div>
  );
}

// ── Animated stat counter ──
function StatCounter({ target, label, suffix = "+" }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label mt-1">{label}</div>
    </div>
  );
}

function SkillsSection() {
  const skillsRef = useReveal();
  const cats = [...new Set(skills.map((s) => s.cat))];
  const [active, setActive] = useState("Frontend");
  const gridRef = useRef(null);

  const animateSkills = useCallback(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.skill-grid-item');
    items.forEach((item, i) => {
      item.animate(
        [
          { opacity: 0, transform: 'translateX(-40px)' },
          { opacity: 1, transform: 'translateX(0)' },
        ],
        {
          duration: 600,
          delay: i * 80,
          easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          fill: 'forwards',
        }
      );
    });
  }, []);

  const handleCatChange = (c) => {
    setActive(c);
    setTimeout(animateSkills, 10);
  };

  useEffect(() => {
    animateSkills();
  }, [animateSkills]);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="slide-in py-16 sm:py-20 md:py-28 grid-bg"
      style={{
        borderTop: "1px solid #ffffff08",
        borderBottom: "1px solid #ffffff08",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
            What I work with
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Skills
          </h2>
          <div
            className="section-bar"
            style={{
              width: 48,
              height: 3,
              background: "linear-gradient(90deg,var(--accent),var(--accent2))",
              borderRadius: 2,
              marginTop: 16,
            }}
          />
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12 sm:mb-16 py-6 rounded-xl"
          style={{ background: "#0d142080", border: "1px solid #ffffff08" }}
        >
          <StatCounter target={4} label="Projects Built" suffix="+" />
          <StatCounter target={1} label="Years Learning" suffix="+" />
          <StatCounter target={28} label="Technologies" suffix="+" />
          <StatCounter target={100} label="Commits" suffix="+" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div>
            <div className="flex gap-2 mb-6 sm:mb-8 flex-wrap">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCatChange(c)}
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
              ref={gridRef}
              className="skill-grid"
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
                    className="skill-grid-item flex items-center gap-3"
                    style={{ opacity: 0 }}
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
              style={{ position: 'relative' }}
            >
              {/* Animated timeline line */}
              <div
                id="timeline-line"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '1px',
                  height: '0%',
                  background: '#00ff8730',
                }}
              />
              {timeline.map((t, i) => (
                <TimelineItem key={i} t={t} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate left side from left
          const left = el.querySelector('#contact-left');
          if (left) {
            left.animate(
              [{ opacity: 0, transform: 'translateX(-80px)' }, { opacity: 1, transform: 'translateX(0)' }],
              { duration: 1000, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
            );
          }
          // Animate right side from right
          const right = el.querySelector('#contact-right');
          if (right) {
            right.animate(
              [{ opacity: 0, transform: 'translateX(80px)' }, { opacity: 1, transform: 'translateX(0)' }],
              { duration: 1000, delay: 200, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
            );
          }
          // Stagger form fields
          const formEl = el.querySelector('form');
          if (formEl) {
            const fields = formEl.children;
            Array.from(fields).forEach((field, i) => {
              field.animate(
                [{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'translateY(0)' }],
                { duration: 600, delay: 500 + i * 120, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
              );
            });
          }
          // Section heading
          const heading = el.querySelector('#contact-heading');
          if (heading) {
            heading.animate(
              [{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'translateY(0)' }],
              { duration: 800, easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', fill: 'forwards' }
            );
          }
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) return; // safety check

    setLoading(true);

    try {
      const res = await fetch(
        "https://my-portfolio-backend-j6vp.onrender.com/contact",
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
      ref={contactRef}
      id="contact"
      className="py-16 sm:py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div id="contact-heading" className="mb-10 sm:mb-14" style={{ opacity: 0 }}>
        <p className="section-label mb-2 sm:mb-3 text-xs sm:text-sm">
          Let's build together
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Contact
        </h2>
        <div
          className="section-bar"
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
        <div id="contact-left" style={{ opacity: 0 }}>
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
                className="social-bounce mono text-xs px-2.5 sm:px-4 py-2 rounded flex items-center gap-2 transition-all"
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
        <div id="contact-right" style={{ opacity: 0 }}>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 py-8 sm:py-12 relative">
              {/* Confetti particles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="confetti-particle"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 30}%`,
                    background: ['var(--accent)', 'var(--accent2)', '#bf97ff', '#ff9f5a'][i % 4],
                    animationDelay: `${i * 0.08}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
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
                Send me another.
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Your Name
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
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  className="input-field text-sm"
                  placeholder="youremail@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="mono text-xs text-gray-500 block mb-2">
                  Message Me
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
                className={`glow-btn magnetic-btn w-full mono text-xs sm:text-sm py-2 sm:py-3 rounded-md font-bold ${
                  !recaptchaToken || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onMouseMove={(e) => {
                  if (!recaptchaToken || loading) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                }}
                style={{ background: "var(--accent)", color: "#080c14" }}
              >
                {loading ? "Sending..." : "Send Me a message →"}
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
  const [loaded, setLoaded] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* loader: fade out after page is ready */
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  /* back-to-top visibility + scroll progress */
  useEffect(() => {
    const h = () => {
      setShowTop(window.scrollY > 400);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Loading screen */}
      <div className={`loader-screen${loaded ? " hidden" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
      </div>

      <Nav />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />

      {/* Back to top */}
      <button
        className={`back-to-top${showTop ? " in-view" : ""}`}
        onClick={() => {
          document.documentElement.style.scrollBehavior = 'auto';
          const scrollTop = window.scrollY;
          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            window.scrollTo(0, scrollTop * (1 - ease));
            if (progress < 1) requestAnimationFrame(step);
            else document.documentElement.style.scrollBehavior = '';
          };
          requestAnimationFrame(step);
        }}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
