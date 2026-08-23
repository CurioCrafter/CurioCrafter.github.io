import test from "node:test";
import assert from "node:assert/strict";
import {
  formatExperienceTimeframe,
  getInclusiveMonthCount,
} from "../src/utils/experience.js";

test("counts the starting calendar month inclusively", () => {
  assert.equal(getInclusiveMonthCount("2026-07", new Date(2026, 6, 1)), 1);
  assert.equal(getInclusiveMonthCount("2026-07", new Date(2026, 7, 23)), 2);
  assert.equal(getInclusiveMonthCount("2026-07", new Date(2027, 6, 1)), 13);
});

test("formats current tenure and preserves static experience labels", () => {
  assert.equal(
    formatExperienceTimeframe(
      { timeframe: "July 2026 - Present", tenureStart: "2026-07" },
      new Date(2026, 7, 23),
    ),
    "July 2026 - Present · 2 months",
  );
  assert.equal(
    formatExperienceTimeframe({ timeframe: "2021 - 2023" }, new Date(2026, 7, 23)),
    "2021 - 2023",
  );
});
