/**
 * Lightweight, Playwright-specific step parser.
 *
 * This deliberately doesn't reuse src/exec-parser.ts: that parser strips
 * markdown bold (`**Create Brand Kit**` -> `Create Brand Kit`) because the API
 * exec-test only needs plain step text to classify intent. This parser keeps
 * the bold spans intact — they're the UI element labels ("click **+ New
 * Brand Kit**") the walkthrough uses to build a Playwright locator.
 */

export interface UiStep {
  index: number;
  raw: string;
  targets: string[];
  sectionHeading: string;
  fillValue?: string;
}

export interface ParsedUiSteps {
  hasProcedure: boolean;
  steps: UiStep[];
}

const BOLD_RE = /\*\*(.+?)\*\*/g;
// Confirmed across multiple real docs (create-a-folder.md, reopen-a-discussion.md,
// test-edit-or-delete-a-comment.md): Step 1's "go to X" navigation target is
// commonly quoted rather than bolded ('click the "Assets" icon'), even though
// later steps in the same doc do bold their targets. Without this, Step 1
// always comes back with zero targets and the walkthrough never navigates
// anywhere, silently searching later steps' targets on the wrong page.
// Restricted to a quoted phrase immediately followed by a UI noun so this
// doesn't also match quoted example values or literal strings elsewhere in
// a step (e.g. the shortcut key "E" in 'use the shortcut key "E"').
const QUOTED_UI_RE =
  /["“]([^"”]+)["”]\s+(?:icon|button|tab|link|menu(?:\s+item)?|option|panel|field|section)\b/gi;
// Confirmed against create-a-folder.md: "enter a name for your folder (e.g.,
// Project) and click **Create**" — a required field the doc's own example
// value can fill, so the walkthrough can actually submit the form instead of
// clicking a button that's disabled with nothing entered. Restricted to
// "enter"/"type" so a step's own worked example ("e.g., ...") elsewhere for
// illustration, not data entry, doesn't get typed somewhere unrelated.
const EXAMPLE_VALUE_RE = /\b(?:enter|type)\b[^.]*\(e\.g\.,?\s*([^)]+)\)/i;
const ORDERED_RE = /^(\d+)\.\s+(.+)/;
const HEADING_RE = /^#{1,2}\s+(.+)/;

export function parseUiSteps(body: string): ParsedUiSteps {
  const lines = body.split("\n");
  const steps: UiStep[] = [];
  let stepIndex = 0;
  let currentHeading = "";
  let insideCode = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      insideCode = !insideCode;
      continue;
    }
    if (insideCode) continue;

    const heading = trimmed.match(HEADING_RE);
    if (heading) {
      currentHeading = heading[1].trim();
      continue;
    }

    const ordered = trimmed.match(ORDERED_RE);
    if (ordered) {
      const raw = ordered[2].trim();
      const targets = [
        ...[...raw.matchAll(BOLD_RE)].map((m) => m[1].trim()),
        ...[...raw.matchAll(QUOTED_UI_RE)].map((m) => m[1].trim()),
      ];
      const fillValue = raw.match(EXAMPLE_VALUE_RE)?.[1]?.trim();
      steps.push({ index: ++stepIndex, raw, targets, sectionHeading: currentHeading, fillValue });
    }
  }

  return { hasProcedure: steps.length > 0, steps };
}

export function stripFrontMatter(raw: string): string {
  return raw.replace(/^---[\s\S]*?---\s*/, "").trim();
}

const ALT_TEXT_MAX_LENGTH = 150;

/**
 * Concise, descriptive alt text per the docs image standard — explains what
 * the screenshot shows, never "image of" / "picture of" framing. Reuses the
 * step's own instruction text (already describes the on-screen action/state)
 * rather than the filename, and trims to a sentence boundary under ~150
 * chars so it stays "concise" rather than pasting the whole step verbatim.
 */
export function buildAltText(step: UiStep): string {
  const cleaned = step.raw
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length <= ALT_TEXT_MAX_LENGTH) return cleaned;

  const truncated = cleaned.slice(0, ALT_TEXT_MAX_LENGTH);
  const lastSentenceEnd = Math.max(truncated.lastIndexOf(". "), truncated.lastIndexOf(", "));
  return (lastSentenceEnd > 40 ? truncated.slice(0, lastSentenceEnd) : truncated).trim();
}
