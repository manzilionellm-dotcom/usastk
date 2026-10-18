"use client";
/**
 * LiveStatus — renders ONLY what /api/status really measured.
 * - Fixed-height slot (no CLS). Nothing until the first event; then status + region (+ sessions when measured).
 * - Anonymous heartbeat: random id kept in memory only (no cookie / storage), sent while the tab is visible,
 *   and only after the server advertised a sessions source (so sites without a store make zero POSTs).
 * - Copy comes from props so each site passes its own language. No defaults in English baked in UI text.
 */
import { useEffect, useState } from "react";

export type LiveStatusLabels = {
  operational: string; // e.g. "Service en ligne"
  region: string; // e.g. "région"
  /** Template with `{n}` (a string, so a Server Component can pass it). */
  online: string; // e.g. "{n} personne(s) en ligne (2 min)"
  checked: string; // e.g. "vérifié à"
};

type Status = {
  ok: boolean;
  time: string;
  region: string | null;
  commit: string | null;
  activeSessions: number | null;
  windowSeconds: number;
  sessionsSource: "kv" | null;
};

let sessionId: string | null = null;
function getSessionId(): string {
  if (!sessionId) {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    sessionId = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  return sessionId;
}

export function LiveStatus({
  labels,
  className,
  href,
}: {
  labels: LiveStatusLabels;
  className?: string;
  /** Contextual WhatsApp URL; the measured status links to the real support channel. */
  href?: string;
}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    if (typeof EventSource === "undefined") return;
    const es = new EventSource("/api/status");
    const onStatus = (e: MessageEvent) => {
      try {
        setStatus(JSON.parse(e.data) as Status);
      } catch {
        /* ignore malformed frames */
      }
    };
    es.addEventListener("status", onStatus);
    es.onerror = () => {
      /* EventSource reconnects by itself using the server's retry hint */
    };
    return () => {
      es.removeEventListener("status", onStatus);
      es.close();
    };
  }, []);

  useEffect(() => {
    if (!status?.sessionsSource) return; // no store configured → never POST
    const beat = () => {
      if (document.visibilityState !== "visible") return;
      const body = JSON.stringify({ id: getSessionId() });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/status", new Blob([body], { type: "application/json" }));
      } else {
        fetch("/api/status", { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
      }
    };
    beat();
    const t = setInterval(beat, 60_000);
    document.addEventListener("visibilitychange", beat);
    return () => {
      clearInterval(t);
      document.removeEventListener("visibilitychange", beat);
    };
  }, [status?.sessionsSource]);

  const time = status ? new Date(status.time) : null;

  return (
    <div
      className={className}
      style={{ minHeight: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 13, lineHeight: "24px" }}
      aria-live="polite"
      role="status"
    >
      {status?.ok ? (
        <a
          href={href}
          target="_blank"
          rel="noopener"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}
        >
          <span
            aria-hidden="true"
            style={{ width: 8, height: 8, borderRadius: 9999, background: "#16a34a", display: "inline-block", flex: "0 0 auto" }}
          />
          <span>{labels.operational}</span>
          {status.region ? <span>· {labels.region} {status.region}</span> : null}
          {typeof status.activeSessions === "number" ? <span>· {labels.online.replace("{n}", String(status.activeSessions))}</span> : null}
          {time ? (
            <time dateTime={status.time} style={{ opacity: 0.7 }}>
              · {labels.checked} {time.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}
            </time>
          ) : null}
        </a>
      ) : null}
    </div>
  );
}
