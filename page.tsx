"use client";

import {
  Award,
  BarChart3,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  PieChart,
  Send,
  Sparkles,
  TrendingUp,
  X
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring
} from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const roles = [
  "Business Analyst",
  "Data Analyst",
  "Power BI Developer",
  "Dashboard Designer",
  "Data Storyteller"
];

const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const technicalSkills = [
  ["Business Requirements",92],
  ["Excel & KPI Reporting",93],
  ["SQL",88],
  ["Power BI",91],
  ["Tableau",84],
  ["Data Visualization",90],
  ["Dashboard Development",91],
  ["Stakeholder Communication",87]
] as const;

const softSkills = ["Problem Solving","Analytical Thinking","Communication","Critical Thinking"] as const;

const experiences = [
  {
    role: "Business Analyst Trainee",
    company: "Portfolio Experience",
    duration: "Sep 2025 - Mar 2026",
    accent: "cyan",
    points: [
      "Assisted in analyzing business data to generate actionable insights",
      "Supported requirement documentation and reporting",
      "Collaborated with teams to improve processes",
      "Performed data cleaning and analysis using Excel and SQL",
      "Built dashboards using Power BI and Tableau",
      "Improved analytical thinking and business process understanding"
    ]
  },
  {
    role: "Sales Analyst Intern",
    company: "TVS Motor Company",
    duration: "Nov 2024 - Dec 2024",
    accent: "violet",
    points: [
      "Conducted customer satisfaction analysis using survey data",
      "Analyzed service quality, pricing and customer experience",
      "Generated insights for business improvement",
      "Created reports and analytical findings",
      "Applied research methodology and statistical analysis"
    ]
  }
];

const projects = [
  {
    title: "Customer Insights & Revenue Analysis Dashboard - Power BI",
    tools: ["Power BI", "Excel", "KPI Reporting"],
    metric: "4.2B+",
    metricLabel: "Funding analyzed",
    image: "/projects/image(160).png",
    github: "https://github.com/karthick-JD25/customer-insights-revenue-analysis-powerbi",
    description:
      "Power BI dashboard built to analyze funding performance, backer behavior and category trends across large-scale crowdfunding data.",
    glow: "from-cyan/70 to-mint/60"
  },
  {
    title: "Zomato Analytics Dashboard - Excel",
    tools: ["Excel", "Pivot Tables", "Business KPIs"],
    metric: "9,551",
    metricLabel: "Restaurants",
    image: "/projects/image(155).png",
    github: "https://github.com/karthick-JD25/Zomato-business-analysis-Excel-dashboard",
    description:
      "Excel dashboard for tracking restaurant performance, ratings, delivery patterns and market coverage across countries and cities.",
    glow: "from-mint/70 to-sky/60"
  },
  {
    title: "Restaurant Cuisine Insights Dashboard - Tableau",
    tools: ["Tableau", "Excel", "Visualization"],
    metric: "1,825",
    metricLabel: "Cuisine records",
    image: "/projects/image(156).png",
    github: "https://github.com/karthick-JD25/restaurant-cuisine-analysis-tableau",
    description:
      "Tableau dashboard focused on cuisine demand, customer preferences and restaurant growth trends across international markets.",
    glow: "from-violet/80 to-cyan/60"
  },
  {
    title: "Restaurant Performance Dashboard - Power BI",
    tools: ["Power BI", "DAX", "Data Modeling"],
    metric: "25.66%",
    metricLabel: "Delivery rate",
    image: "/projects/image(157).png",
    github: "https://github.com/karthick-JD25/restaurant-performance-dashboard-powerbi",
    description:
      "Interactive Power BI dashboard built to analyze restaurant performance, pricing trends and customer ratings across multiple cities.",
    glow: "from-sky/70 to-violet/70"
  },
  {
    title: "Financial Performance Analysis - Excel",
    tools: ["Excel", "Financial Analytics", "Reporting"],
    metric: "51.90",
    metricLabel: "Avg success days",
    image: "/projects/image(158).png",
    github: "https://github.com/karthick-JD25/financial-performance-analysis-excel-dashboard",
    description:
      "Excel-based financial dashboard for reviewing crowdfunding outcomes, funding distribution and backer engagement patterns.",
    glow: "from-mint/70 to-violet/70"
  },
  {
    title: "Crowdfunding Campaign Success Analysis - Tableau",
    tools: ["Tableau", "Comparative Analysis"],
    metric: "Global",
    metricLabel: "Trend view",
    image: "/projects/image(159).png",
    github: "https://github.com/karthick-JD25/crowdfunding-campaign-analysis-tableau",
    description:
      "Tableau case study that compares campaign outcomes, successful categories and funding trends across global crowdfunding data.",
    glow: "from-cyan/70 to-violet/70"
  }
];

const certifications = [
  ["Tata Data Visualization Job Simulation", "Forage", "2026", "Applied dashboard storytelling and visualization techniques to convert raw business data into executive-level insights."],
  ["Deloitte Australia Data Analytics Job Simulation", "Forage", "2026", "Performed business-focused analytics workflows involving data interpretation, reporting and strategic insight generation."],
  ["Tata GenAI Powered Data Analytics", "Forage", "2026", "Explored AI-powered analytics methodologies for modern business intelligence and decision support systems."],
  ["Business Analyst Program", "ExcelR", "2026", "Completed intensive practical training in business analysis, reporting, dashboard development and stakeholder-focused analytics."],
  ["NASSCOM FutureSkills Prime Business Analyst Certification", "Gold Category - 92%", "2026", "Achieved Gold Category certification with 92% score in business analysis, KPI evaluation and analytical problem solving."],
  ["Google Analytics Certification", "Google", "2026", "Developed expertise in audience analytics, web performance tracking and user acquisition analysis."],
  ["Microsoft Applied Skills","Microsoft","2026","Validated practical skills in analytics and business-focused technologies."]
] as const;

function Section({
  id,
  title,
  eyebrow,
  children
}: {
  id: string;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p className="mb-3 font-display text-xs uppercase tracking-[0.36em] text-cyan">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-night"
        >
          <div className="absolute inset-0 grid-fade opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.25, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-7 h-20 w-20 rounded-full border border-cyan/20 border-t-cyan shadow-neon"
            />
            <p className="font-display text-sm uppercase tracking-[0.5em] text-slate-300">Loading Portfolio</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-aurora">KARTHICK RAJ</h1>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 28 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed z-50 hidden h-72 w-72 rounded-full bg-cyan/[0.07] blur-3xl lg:block"
    />
  );
}

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        duration: 5 + (index % 8),
        delay: (index % 10) * 0.28
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-30" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan/45 shadow-[0_0_12px_rgba(0,245,255,0.55)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-12, 12, -12], opacity: [0.18, 0.55, 0.18], scale: [0.9, 1.18, 0.9] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-night/58 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.32em] text-white">
          KR<span className="text-cyan">.</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-cyan"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan/30 px-4 py-2 text-sm font-medium text-cyan shadow-neon transition hover:bg-cyan/10 lg:inline-flex"
        >
          Hire Analyst
        </a>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-200 hover:bg-white/8"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroVisual() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const metrics = [
    ["Revenue Growth", "+32%", TrendingUp],
    ["KPI Accuracy", "91%", BarChart3],
    ["Active Dashboards", "6", PieChart],
    ["Data Reports", "18", Database]
  ] as const;
  const bars = [52, 74, 62, 88, 69, 81, 58, 93];

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        rotateX.set(((event.clientY - rect.top) / rect.height - 0.5) * -14);
        rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 14);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass relative min-h-[420px] rounded-[2rem] border border-cyan/20 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Analytics Snapshot</p>
          <p className="mt-1 font-display text-2xl font-semibold">Business Performance Overview</p>
        </div>
        <div className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-sm text-mint">Live</div>
      </div>
      <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
        {metrics.map(([label, value, Icon]) => (
          <motion.div
            key={label as string}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <Icon className="text-cyan" size={20} />
              <span className="h-2 w-2 rounded-full bg-mint" />
            </div>
            <p className="font-display text-2xl font-bold">{value}</p>
            <p className="text-sm text-slate-400">{label}</p>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-6 rounded-3xl border border-white/10 bg-night/45 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-display text-lg font-semibold">Monthly KPI Trend</p>
            <p className="text-sm text-slate-400">Operational dashboard sample</p>
          </div>
          <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs text-cyan">Q1-Q4</span>
        </div>
        <div className="flex h-40 items-end gap-3">
          {bars.map((height, index) => (
            <motion.div
              key={height + index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 0.8 + index * 0.06, duration: 0.65 }}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-sky/75 to-cyan"
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs text-slate-500">
          {["Q1", "Q2", "Q3", "Q4"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TypingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 2100);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
        transition={{ duration: 0.42 }}
        className="inline-flex text-cyan"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
      </div>
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/8 px-4 py-2 text-sm text-cyan">
            <Sparkles size={16} />
            Data & Business Analytics Portfolio
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            KARTHICK <span className="text-aurora">RAJ</span>
          </h1>
          <div className="mt-6 h-12 font-display text-2xl font-semibold sm:text-4xl">
            <TypingRole />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Business Analyst focused on transforming raw business data into clear insights, interactive dashboards and strategic
            reporting using Excel, SQL, Power BI and Tableau.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="aurora inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold text-night shadow-neon sm:min-w-44">
              <span className="whitespace-nowrap">View Projects</span> <ChevronRight size={18} />
            </a>
            <a href="/Karthick-Raj-Resume.pdf" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-cyan/60 hover:bg-cyan/10 sm:min-w-56">
              <Download size={18} /> <span className="whitespace-nowrap">Download Resume</span>
            </a>
            <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-violet/50 px-7 py-3 font-semibold text-white transition hover:bg-violet/15 sm:min-w-44">
              <span className="whitespace-nowrap">Contact Me</span> <Send size={18} />
            </a>
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function SkillCard({ name, value }: { name: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-5 transition-shadow hover:shadow-[0_18px_55px_rgba(0,245,255,0.1)]"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
            <BarChart3 size={19} />
          </span>
          <h3 className="font-display font-semibold text-white">{name}</h3>
        </div>
        <span className="text-sm text-slate-400">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan via-sky to-violet"
        />
      </div>
    </motion.div>
  );
}

function ProjectImage({ project }: { project: (typeof projects)[number] }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink via-panel to-night p-6">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.035] p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.24em] text-cyan">Dashboard Preview</span>
            <BarChart3 className="text-cyan" size={20} />
          </div>
          <div className="mb-5 grid grid-cols-3 gap-3">
            {["KPI", "Trend", "Report"].map((item) => (
              <span key={item} className="rounded-xl bg-white/[0.055] px-3 py-2 text-center text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>
          <div className="flex h-24 items-end gap-2">
            {[48, 72, 58, 84, 66, 91].map((height, index) => (
              <span
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-sky/70 to-cyan"
              />
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400">{project.title}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} dashboard screenshot`}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      onError={() => setFailed(true)}
      className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
    />
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="glass gradient-border group flex h-full cursor-pointer flex-col rounded-3xl p-4 text-left transition-shadow hover:shadow-[0_24px_70px_rgba(0,245,255,0.11)] sm:p-5"
    >
      <div className={`rounded-[1.45rem] bg-gradient-to-br ${project.glow} p-[1px]`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem] bg-ink">
          <ProjectImage project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-night/88 via-night/12 to-transparent opacity-70 transition duration-500 group-hover:opacity-45" />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/12 bg-night/60 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200 backdrop-blur-md">
              Dashboard preview
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan/35 bg-cyan/12 text-cyan backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-neon">
              <ExternalLink size={18} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-cyan">{project.metricLabel}</p>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-display text-lg font-semibold text-mint">
            {project.metric}
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-cyan/20 bg-cyan/[0.07] px-3 py-1 text-xs text-cyan">
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-medium text-white transition group-hover:border-cyan/45 group-hover:bg-cyan/10">
            View Project <ExternalLink size={15} />
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/35 bg-violet/10 px-4 py-2 text-sm font-medium text-white transition group-hover:border-violet/65">
            <Github size={15} /> GitHub Repo
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28 });

  return (
    <main className="relative overflow-hidden">
      <LoadingScreen />
      <CursorGlow />
      <ParticleField />
      <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-cyan via-violet to-mint" />
      <Navbar />
      <Hero />

      <Section id="about" eyebrow="About" title="Turning Data Into Business Decisions">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass gradient-border rounded-3xl p-7"
          >
            <p className="text-lg leading-8 text-slate-300">
              I specialize in business analytics, dashboard reporting and data visualization with hands-on experience in Excel,
              SQL, Power BI and Tableau.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              My projects focus on solving real business problems through KPI analysis, operational reporting and insight-driven
              dashboards across domains like restaurant analytics, crowdfunding performance and customer analysis.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I enjoy converting complex datasets into clear business stories that support smarter decision-making.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Excel Reporting", "Dashboard & KPI Analytics"],
                ["6 Analytics Projects", "Business-focused dashboards"],
                ["92% Gold Score", "NASSCOM FutureSkills"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-display text-xl font-semibold text-cyan">{value}</p>
                  <p className="text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-4">
            {[
              "Requirement Analysis",
              "KPI Reporting",
              "Data Cleaning",
              "Dashboard Development",
              "Business Insights",
              "Data Visualization",
              "Stakeholder Reporting"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet/15 text-cyan">{index + 1}</span>
                <span className="text-slate-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="Core Capabilities">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {technicalSkills.map(([name, value]) => (
            <SkillCard key={name} name={name} value={value} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ y: -3 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Business Impact Timeline">
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-violet to-mint md:block" />
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass gradient-border ml-0 rounded-3xl p-6 md:ml-12"
              >
                <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{experience.role}</h3>
                    <p className="text-cyan">{experience.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{experience.duration}</span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {experience.points.map((point) => (
                    <div key={point} className="flex gap-3 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan shadow-neon" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Analytics Case Studies">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.title} className={index === 0 ? "lg:col-span-2" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications" title="Validated Analytics Credentials">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map(([title, issuer, date, skills]) => (
            <motion.div key={title} whileHover={{ y: -8 }} className="glass shine rounded-3xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/15 text-cyan">
                  <Award />
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">{date}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-cyan">{issuer}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{skills}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic Foundation">
        <motion.div whileHover={{ y: -8 }} className="glass gradient-border mx-auto max-w-4xl rounded-3xl p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-cyan/10 text-cyan shadow-neon">
                <GraduationCap size={30} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Hindustan College of Arts & Science</h3>
                <p className="mt-2 text-slate-300">Bachelor of Business Administration (BBA)</p>
                <p className="text-cyan">Specialization: Market Analysis</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 px-5 py-2 text-slate-300">2022 - 2025</span>
          </div>
        </motion.div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Connect With Karthick Raj">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {[
              [Linkedin, "LinkedIn", "linkedin.com/in/karthick-raj-analyst", "https://linkedin.com/in/karthick-raj-analyst"],
              [Github, "GitHub", "github.com", "https://github.com"],
              [Mail, "Email", "karthickrajts25@gmail.com", "mailto:karthickrajts25@gmail.com"],
              [Phone, "Phone", "8778635589", "tel:8778635589"]
            ].map(([Icon, label, value, href]) => (
              <motion.a
                key={label as string}
                href={href as string}
                whileHover={{ x: 8 }}
                className="glass flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 text-cyan">
                  <Icon size={21} />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">{label as string}</span>
                  <span className="text-slate-100">{value as string}</span>
                </span>
              </motion.a>
            ))}
          </div>
          <form className="glass gradient-border rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60" placeholder="Email" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60" placeholder="Subject" />
            <textarea className="mt-4 min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60" placeholder="Message" />
            <button type="button" className="aurora mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-night shadow-neon">
              Send Message <MessageSquare size={18} />
            </button>
          </form>
        </div>
      </Section>

      <footer className="relative border-t border-white/10 px-5 py-10 text-center text-slate-400">
        <div className="mb-5 flex justify-center gap-3">
          {[
            [Linkedin, "https://linkedin.com/in/karthick-raj-analyst"],
            [Github, "https://github.com"],
            [Mail, "mailto:karthickrajts25@gmail.com"]
          ].map(([Icon, href]) => (
            <a key={href as string} href={href as string} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-cyan transition hover:bg-cyan/10 hover:shadow-neon">
              <Icon size={19} />
            </a>
          ))}
        </div>
        <p>Karthick Raj © 2026 | Business Analyst Portfolio</p>
      </footer>
    </main>
  );
}

export default Portfolio;
