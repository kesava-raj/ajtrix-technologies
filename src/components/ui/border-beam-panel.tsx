"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* Border Beam Panel — from Motiq (https://motiq.dev/components/border-beam-panel).
   MIT licensed. Zero runtime dependencies. */

/* -------------------------------------------------------------------------- */
/* Ajtrix design tokens                                                        */
/* -------------------------------------------------------------------------- */
const AJTRIX_TOKENS = "@layer ajtrix{:root{--motiq-accent:#4f46e5;--motiq-accent-text:#4338ca;--motiq-bg:#f8fafc;--motiq-border:rgba(226,232,240,0.5);--motiq-border-strong:#cbd5e1;--motiq-fg:#0f172a;--motiq-fg-secondary:#334155;--motiq-muted:#64748b;--motiq-secondary-accent:#a855f7;--motiq-signature:#8b5cf6;--motiq-surface:rgba(255,255,255,0.5);--motiq-surface-2:#f1f5f9}}@layer ajtrix{.dark,[data-theme=\"dark\"]{--motiq-accent:#4f46e5;--motiq-accent-text:#818cf8;--motiq-bg:#080c14;--motiq-border:rgba(255,255,255,0.1);--motiq-border-strong:#334155;--motiq-fg:#f8fafc;--motiq-fg-secondary:#cbd5e1;--motiq-muted:#9caabd;--motiq-secondary-accent:#a855f7;--motiq-signature:#c084fc;--motiq-surface:rgba(17,19,48,0.5);--motiq-surface-2:#1e293b}}";

/** Merge Tailwind class names; later/consumer classes win on conflict. */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/* ---- motion primitives (inlined from @motiq/primitives) ---- */

function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useVisibilityPause<T extends Element>(
  ref: React.RefObject<T | null>,
  { threshold = 0.1 }: { threshold?: number } = {},
): boolean {
  const [onScreen, setOnScreen] = React.useState(true);
  const [tabVisible, setTabVisible] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setOnScreen(entries.some((e) => e.isIntersecting)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  React.useEffect(() => {
    const onVis = () => setTabVisible(document.visibilityState !== "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return onScreen && tabVisible;
}

export interface BorderBeamPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  beams?: 1 | 2;
  colors?: [string, string?];
  thickness?: number;
  idleSpeed?: number;
  hoverSpeed?: number;
  glow?: boolean;
  radius?: number;
  spring?: { stiffness?: number; damping?: number };
  seed?: number;
  pauseWhenHidden?: boolean;
  reducedMotion?: boolean;
}

class Spring {
  x: number;
  v = 0;
  target: number;
  k: number;
  d: number;
  constructor(value: number, k: number, d: number) {
    this.x = value;
    this.target = value;
    this.k = k;
    this.d = d;
  }
  step(dt: number): number {
    const a = this.k * (this.target - this.x) - this.d * this.v;
    this.v += a * dt;
    this.x += this.v * dt;
    return this.x;
  }
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

const PARKED_ANGLE = 40;

function comet(tail: string, head: string, tip: string, midAlpha: number, start: number): string {
  return [
    `color-mix(in srgb, ${tail} 4%, transparent) ${start + 18}deg`,
    `color-mix(in srgb, ${tail} ${midAlpha}%, transparent) ${start + 46}deg`,
    `${head} ${start + 56}deg`,
    `${tip} ${start + 60}deg`,
    `transparent ${start + 63}deg`,
  ].join(", ");
}

function ringGradient(beams: 1 | 2, colors: [string, string?] | undefined): string {
  const tail0 = colors?.[0] ?? "var(--motiq-accent, #4f46e5)";
  const head0 = colors?.[0] ?? "var(--motiq-secondary-accent, #a855f7)";
  const stops = [
    "transparent 0deg",
    comet(tail0, head0, `color-mix(in srgb, ${head0} 22%, #ffffff)`, 55, 0),
  ];
  if (beams === 2) {
    const c1 = colors?.[1] ?? "var(--motiq-signature, #8b5cf6)";
    stops.push("transparent 198deg", comet(c1, c1, `color-mix(in srgb, ${c1} 26%, #ffffff)`, 50, 198));
  }
  stops.push("transparent 360deg");
  return `conic-gradient(from var(--mk-beam-a, 0deg), ${stops.join(", ")})`;
}

function BorderBeamPanelBase({
  children,
  beams = 2,
  colors,
  thickness = 2,
  idleSpeed = 42,
  hoverSpeed = 240,
  glow = true,
  radius = 16,
  spring,
  seed = 1,
  pauseWhenHidden = true,
  reducedMotion,
  className,
  style,
  ...props
}: BorderBeamPanelProps) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const cls = `mk-beam-${uid}`;
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const systemReduced = useReducedMotion();
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  const staticMode = reducedMotion === true || (hydrated && systemReduced);
  const onScreen = useVisibilityPause(rootRef, { threshold: 0.05 });
  const paused = pauseWhenHidden && !onScreen;
  const animate = !staticMode && !paused;

  const stiffness = spring?.stiffness ?? 30;
  const damping = spring?.damping ?? 11;

  const startAngle = React.useMemo(() => ((seed * 137.508) % 360 + 360) % 360, [seed]);

  const speedRef = React.useRef(new Spring(idleSpeed, stiffness, damping));
  const angleRef = React.useRef(startAngle);
  const liveRef = React.useRef({ idleSpeed, hoverSpeed });
  liveRef.current = { idleSpeed, hoverSpeed };

  React.useEffect(() => {
    speedRef.current.k = stiffness;
    speedRef.current.d = damping;
  }, [stiffness, damping]);

  const paint = React.useCallback((angle: number) => {
    rootRef.current?.style.setProperty("--mk-beam-a", `${(((angle % 360) + 360) % 360).toFixed(2)}deg`);
  }, []);

  React.useEffect(() => {
    if (!animate) return;
    let raf = 0;
    let last = 0;
    const frame = (now: number) => {
      if (!last) last = now;
      const dt = clamp((now - last) / 1000, 0, 0.05);
      last = now;
      angleRef.current += speedRef.current.step(dt) * dt;
      paint(angleRef.current);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [animate, paint]);

  React.useEffect(() => {
    if (!staticMode) return;
    angleRef.current = PARKED_ANGLE;
    speedRef.current.x = speedRef.current.target = liveRef.current.idleSpeed;
    speedRef.current.v = 0;
    paint(PARKED_ANGLE);
  }, [staticMode, paint]);

  const surge = React.useCallback(() => {
    speedRef.current.target = liveRef.current.hoverSpeed;
  }, []);
  const settle = React.useCallback(() => {
    speedRef.current.target = liveRef.current.idleSpeed;
  }, []);

  const gradient = React.useMemo(() => ringGradient(beams, colors), [beams, colors]);

  const css = `
.${cls} .mk-beam-ring, .${cls} .mk-beam-glow {
  position: absolute;
  inset: -1px;
  border-radius: ${radius}px;
  pointer-events: none;
  background: ${gradient};
}
.${cls} .mk-beam-ring {
  padding: ${Math.max(1, thickness)}px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.${cls} .mk-beam-glow { filter: blur(14px); opacity: 0.35; z-index: -1; }
@media (forced-colors: active) {
  .${cls} .mk-beam-ring, .${cls} .mk-beam-glow { display: none; }
  .${cls} { border-color: CanvasText; }
}`.trim();

  return (
    <div
      ref={rootRef}
      data-motion={staticMode ? "static" : "animated"}
      data-paused={paused ? "true" : "false"}
      onPointerEnter={surge}
      onPointerLeave={settle}
      onFocus={surge}
      onBlur={settle}
      className={cn(
        "relative w-full border border-[var(--motiq-border)] bg-[var(--motiq-surface)] backdrop-blur-xl",
        cls,
        className,
      )}
      style={{
        borderRadius: `${radius}px`,
        isolation: "isolate",
        ["--mk-beam-a" as string]: `${startAngle.toFixed(2)}deg`,
        ...style,
      }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {glow ? <div aria-hidden="true" className="mk-beam-glow" /> : null}
      <div aria-hidden="true" className="mk-beam-ring" />
      {children}
    </div>
  );
}

export function BorderBeamPanel(props: BorderBeamPanelProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: AJTRIX_TOKENS }} />
      <BorderBeamPanelBase {...props} />
    </>
  );
}

export default BorderBeamPanel;
