const FORBIDDEN_TYPES = new Set(["AggregateRating", "Review"]);

const FORBIDDEN_KEYS = new Set([
  "aggregateRating",
  "review",
  "reviews",
  "ratingValue",
  "reviewCount",
  "ratingCount",
  "bestRating",
  "worstRating",
]);

function typeIsForbidden(type: unknown): boolean {
  if (typeof type === "string") return FORBIDDEN_TYPES.has(type);
  if (Array.isArray(type)) {
    return type.some((t) => typeof t === "string" && FORBIDDEN_TYPES.has(t));
  }
  return false;
}

export function stripInventedRatings(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value
      .filter((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          return !typeIsForbidden((item as { "@type"?: unknown })["@type"]);
        }
        return true;
      })
      .map(stripInventedRatings);
  }

  if (value && typeof value === "object") {
    if (typeIsForbidden((value as { "@type"?: unknown })["@type"])) {
      return undefined;
    }
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (FORBIDDEN_KEYS.has(key)) continue;
      const next = stripInventedRatings(child);
      if (next !== undefined) out[key] = next;
    }
    return out;
  }

  return value;
}

export function jsonLdInnerHtml(data: unknown): string {
  return JSON.stringify(stripInventedRatings(data)).replace(/</g, "\\u003c");
}
