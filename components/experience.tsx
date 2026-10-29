"use client";

import { useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  /** First month of the role, as YYYY-MM. */
  start: string;
  /** Last month of the role, as YYYY-MM. Omit for a current role. */
  end?: string;
  description: string;
  technologies: string[];
}

// Newest first.
const experiences: ExperienceItem[] = [
  {
    company: "V.Two",
    role: "Senior Software Engineer",
    start: "2026-11",
    description:
      "Building Go and Kubernetes backend services to migrate a healthcare platform off Apache Camel",
    technologies: ["Go", "Kubernetes"],
  },
  {
    company: "Schweitzer Engineering Labs",
    role: "Software Engineer",
    start: "2025-01",
    end: "2026-10",
    description:
      "Built full-stack features for critical power grid management systems",
    technologies: [
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Tennessee Valley Authority",
    role: "Software Engineer",
    start: "2021-10",
    end: "2024-12",
    description:
      "Developed real-time applications for monitoring 1,000+ power generation assets",
    technologies: ["React", "C#", "MSSQL"],
  },
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Months since year 0 for a YYYY-MM string, so spans can be subtracted. */
function toMonths(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

function formatMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** Months a role has lasted so far. */
function tenureMonths(exp: ExperienceItem, nowMonths: number) {
  const start = toMonths(exp.start);
  const end = exp.end ? toMonths(exp.end) + 1 : nowMonths;
  return Math.max(0, end - start);
}

function formatTenure(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y > 0 && `${y} yr`, m > 0 && `${m} mo`].filter(Boolean).join(" ");
}

/** Newest role gets the full accent; each older one mixes further toward muted. */
function segmentColor(index: number) {
  const mix = Math.min(index * 30, 75);
  return `color-mix(in oklch, var(--accent), var(--muted) ${mix}%)`;
}

/** Brighter and more saturated than the accent, for the hovered segment. */
const HIGHLIGHT = "oklch(from var(--accent) calc(l + 0.14) calc(c + 0.05) h)";
/** What the other segments recede to while one is hovered. */
const RECEDED = "color-mix(in oklch, var(--accent), var(--muted) 80%)";

function barColor(index: number, active: number | null) {
  if (active === null) return segmentColor(index);
  return active === index ? HIGHLIGHT : RECEDED;
}

export function Experience() {
  const [active, setActive] = useState<number | null>(null);

  const now = new Date();
  const nowMonths = now.getFullYear() * 12 + now.getMonth();
  const tenures = experiences.map((exp) => tenureMonths(exp, nowMonths));

  // The bar reads oldest to newest, left to right. A current role gets at
  // least six months of width so it never collapses to a sliver.
  const segments = experiences
    .map((exp, i) => ({ exp, i, months: exp.end ? tenures[i] : Math.max(tenures[i], 6) }))
    .reverse();
  const columns = segments.map((s) => `minmax(2.5rem, ${s.months}fr)`).join(" ");

  return (
    <section className="mb-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight">Experience</h2>

      <div aria-hidden="true" className="mb-9">
        <div className="grid h-2 gap-[3px]" style={{ gridTemplateColumns: columns }}>
          {segments.map(({ exp, i }) => (
            <div
              key={exp.company}
              className="rounded-[2px] transition-colors duration-200"
              style={{
                backgroundColor: barColor(i, active),
                // Hatch the open-ended role.
                backgroundImage: exp.end
                  ? undefined
                  : "repeating-linear-gradient(90deg, transparent 0 4px, var(--background) 4px 7px)",
              }}
            />
          ))}
        </div>
        <div
          className="mt-2.5 grid font-mono text-xs text-muted-foreground/70"
          style={{ gridTemplateColumns: columns }}
        >
          {segments.map(({ exp, months }, k) => (
            <span key={exp.company} className="flex justify-between">
              {/* Hide a year label when its segment is too short to hold one. */}
              <span className={months < 18 && k > 0 ? "invisible" : ""}>
                {exp.start.slice(0, 4)}
              </span>
              {k === segments.length - 1 && <span>now</span>}
            </span>
          ))}
        </div>
      </div>

      <div onMouseLeave={() => setActive(null)}>
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            onMouseEnter={() => setActive(i)}
            className={`relative -mx-5 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-border px-5 py-7 last:border-b md:grid-cols-[184px_1fr] before:absolute before:inset-x-0 before:inset-y-1 before:-z-10 before:rounded-md before:bg-muted/45 before:opacity-0 before:transition-opacity before:duration-200 ${
              active === i ? "before:opacity-100" : ""
            }`}
          >
            <div className="text-[15px] leading-normal text-muted-foreground md:pt-0.5">
              {formatMonth(exp.start)} – {exp.end ? formatMonth(exp.end) : "Present"}
              {tenures[i] > 0 && (
                <span className="block text-[13px] text-muted-foreground/70 md:mt-1">
                  {formatTenure(tenures[i])}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-tight tracking-tight">
                {exp.role}
              </h3>
              <div className="mt-1 text-accent">{exp.company}</div>
              <p className="mt-3 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-3.5 font-mono text-xs text-muted-foreground/70">
                {exp.technologies.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
