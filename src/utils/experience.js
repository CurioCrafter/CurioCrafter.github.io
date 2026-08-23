export function getInclusiveMonthCount(tenureStart, now = new Date()) {
  const match = /^(\d{4})-(\d{2})$/.exec(tenureStart || "");

  if (!match) return null;

  const startYear = Number(match[1]);
  const startMonthIndex = Number(match[2]) - 1;
  const elapsedMonths =
    (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonthIndex) + 1;

  return Math.max(1, elapsedMonths);
}

export function formatExperienceTimeframe(experience, now = new Date()) {
  const months = getInclusiveMonthCount(experience.tenureStart, now);

  if (!months) return experience.timeframe;

  return `${experience.timeframe} · ${months} ${months === 1 ? "month" : "months"}`;
}
