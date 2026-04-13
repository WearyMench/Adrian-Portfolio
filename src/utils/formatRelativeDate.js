/**
 * @param {string} isoDate
 * @param {string} locale BCP 47 language tag (e.g. en, es)
 */
export function formatRelativeUpdated(isoDate, locale = "en") {
  try {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "—";
    const diffMs = Date.now() - date.getTime();
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);
    if (diffDays < 1) {
      if (diffHr >= 1) return rtf.format(-diffHr, "hour");
      if (diffMin >= 1) return rtf.format(-diffMin, "minute");
      return rtf.format(0, "second");
    }
    if (diffDays < 7) return rtf.format(-diffDays, "day");
    const weeks = Math.floor(diffDays / 7);
    if (weeks < 5) return rtf.format(-weeks, "week");
    const months = Math.floor(diffDays / 30);
    if (months < 12) return rtf.format(-months, "month");
    const years = Math.floor(diffDays / 365);
    return rtf.format(-Math.max(years, 1), "year");
  } catch {
    return "—";
  }
}
