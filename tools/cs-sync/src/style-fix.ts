import { TITLE_CASE_ALWAYS_LOWER, isTitleCase } from "./style-lint.js";

// ---------------------------------------------------------------------------
// Segment-based text isolation
// Fixes are applied only to prose regions — never inside frontmatter, fenced
// code blocks, or inline code.
// ---------------------------------------------------------------------------

type Segment = { type: "protected" | "text"; content: string };

function parseSegments(content: string): Segment[] {
  const regions: Array<{ start: number; end: number }> = [];

  // YAML frontmatter at document start
  const fmMatch = content.match(/^---[\s\S]*?^---[ \t]*\n/m);
  if (fmMatch?.index === 0) {
    regions.push({ start: 0, end: fmMatch[0].length });
  }

  // Fenced code blocks (``` or ~~~)
  for (const m of content.matchAll(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?\1[ \t]*$/gm)) {
    regions.push({ start: m.index!, end: m.index! + m[0].length });
  }

  // Inline code (`...`)
  for (const m of content.matchAll(/`[^`\n]+`/g)) {
    regions.push({ start: m.index!, end: m.index! + m[0].length });
  }

  // Sort and merge overlapping/nested regions
  regions.sort((a, b) => a.start - b.start);
  const merged: Array<{ start: number; end: number }> = [];
  for (const r of regions) {
    const prev = merged[merged.length - 1];
    if (prev && r.start < prev.end) {
      prev.end = Math.max(prev.end, r.end);
    } else {
      merged.push({ ...r });
    }
  }

  // Build alternating protected / text segment list
  const segments: Segment[] = [];
  let pos = 0;
  for (const r of merged) {
    if (r.start > pos) {
      segments.push({ type: "text", content: content.slice(pos, r.start) });
    }
    segments.push({ type: "protected", content: content.slice(r.start, r.end) });
    pos = r.end;
  }
  if (pos < content.length) {
    segments.push({ type: "text", content: content.slice(pos) });
  }
  return segments;
}

interface FixResult {
  content: string;
  fixes: string[];
}

function applyToTextSegments(
  content: string,
  fn: (text: string) => FixResult,
): FixResult {
  const segments = parseSegments(content);
  const allFixes: string[] = [];
  const result = segments
    .map((seg) => {
      if (seg.type === "protected") return seg.content;
      const { content: fixed, fixes } = fn(seg.content);
      allFixes.push(...fixes);
      return fixed;
    })
    .join("");
  return { content: result, fixes: allFixes };
}

// ---------------------------------------------------------------------------
// Fix: em dashes and en dashes → hyphens (style guide: use hyphens, not dashes)
// ---------------------------------------------------------------------------

function fixDashes(content: string): FixResult {
  return applyToTextSegments(content, (text) => {
    const fixes: string[] = [];
    let result = text;

    result = result.replace(/ ?— ?/g, () => {
      fixes.push("em dash (—) → hyphen");
      return " - ";
    });

    result = result.replace(/ ?– ?/g, () => {
      fixes.push("en dash (–) → hyphen");
      return " - ";
    });

    return { content: result, fixes };
  });
}

// ---------------------------------------------------------------------------
// Fix: double spaces, blank-line trailing whitespace, Markdown hard line breaks
// ---------------------------------------------------------------------------

function fixDoubleSpaces(content: string): FixResult {
  return applyToTextSegments(content, (text) => {
    const fixes: string[] = [];
    let result = text;

    // Strip invisible spaces/tabs from otherwise-blank lines
    result = result.replace(/^[ \t]+$/gm, () => {
      fixes.push("stripped trailing whitespace from blank line");
      return "";
    });

    // Convert trailing-double-space Markdown hard line breaks (  \n) to
    // a blank-line paragraph break, which is the preferred form.
    result = result.replace(/[ \t]{2,}\n/g, () => {
      fixes.push("converted trailing double-space line break to paragraph break");
      return "\n\n";
    });

    // Collapse any remaining consecutive spaces in prose
    result = result.replace(/ {2,}/g, () => {
      fixes.push("collapsed multiple spaces to single space");
      return " ";
    });

    return { content: result, fixes };
  });
}

// ---------------------------------------------------------------------------
// Fix: spelling variants
// ---------------------------------------------------------------------------

function isSentenceInitial(text: string, offset: number): boolean {
  if (offset === 0) return true;
  // Sentence-initial: immediately after a newline or after sentence-ending
  // punctuation followed by whitespace.
  return /(?:[.!?]\s+|\n)\s*$/.test(text.slice(0, offset));
}

function fixSpelling(content: string): FixResult {
  return applyToTextSegments(content, (text) => {
    const fixes: string[] = [];
    let result = text;

    // Simple one-to-one replacements (case-preserving on first letter)
    const simpleReplacements: Array<[RegExp, string, string]> = [
      [/\be-mail\b/gi, "email", "e-mail → email"],
      [/\bplug-in\b/gi, "plugin", "plug-in → plugin"],
      [/\bfront-end\b/gi, "frontend", "front-end → frontend"],
      [/\bback-end\b/gi, "backend", "back-end → backend"],
      [/\bCMSes\b/g, "CMSs", "CMSes → CMSs"],
    ];

    for (const [re, replacement, label] of simpleReplacements) {
      result = result.replace(re, (m) => {
        fixes.push(label);
        // If the original starts with an uppercase letter, capitalise the replacement
        const firstChar = m[0] ?? "";
        if (firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase()) {
          return replacement[0]!.toUpperCase() + replacement.slice(1);
        }
        return replacement;
      });
    }

    // "Internet" → "internet": only when mid-sentence and not "Internet of Things"
    result = result.replace(
      /\bInternet\b(?!\s+of\s+Things)/g,
      (m, offset, fullString: string) => {
        if (isSentenceInitial(fullString, offset)) return m;
        fixes.push("Internet → internet");
        return "internet";
      },
    );

    // "Web" → "web": case-sensitive, mid-sentence only, skip known proper compounds
    result = result.replace(
      /\bWeb\b(?!\s+(?:API|Service|Socket|Component|Worker|Assembly|hook|pack|font))/g,
      (m, offset, fullString: string) => {
        if (isSentenceInitial(fullString, offset)) return m;
        fixes.push("Web → web");
        return "web";
      },
    );

    return { content: result, fixes };
  });
}

// ---------------------------------------------------------------------------
// Fix: phrasal verbs
// ---------------------------------------------------------------------------

function preserveCase(original: string, replacement: string): string {
  const first = original[0] ?? "";
  if (first === first.toUpperCase() && first !== first.toLowerCase()) {
    return replacement[0]!.toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function fixPhrasalVerbs(content: string): FixResult {
  return applyToTextSegments(content, (text) => {
    const fixes: string[] = [];
    let result = text;

    const replacements: Array<[RegExp, string, string]> = [
      [/\bset up\b/gi, "configure", "set up → configure"],
      [/\blog in\b/gi, "sign in", "log in → sign in"],
      [/\bbring up\b/gi, "display", "bring up → display"],
      [/\bpull up\b/gi, "open", "pull up → open"],
    ];

    for (const [re, replacement, label] of replacements) {
      result = result.replace(re, (m) => {
        fixes.push(label);
        return preserveCase(m, replacement);
      });
    }

    return { content: result, fixes };
  });
}

// ---------------------------------------------------------------------------
// Fix: i.e. and e.g. missing commas
// ---------------------------------------------------------------------------

function fixAbbreviationCommas(content: string): FixResult {
  return applyToTextSegments(content, (text) => {
    const fixes: string[] = [];
    let result = text;

    result = result.replace(/\bi\.e\.(?!\s*,)/g, () => {
      fixes.push('i.e. → i.e., (missing comma)');
      return "i.e.,";
    });

    result = result.replace(/\be\.g\.(?!\s*,)/g, () => {
      fixes.push('e.g. → e.g., (missing comma)');
      return "e.g.,";
    });

    return { content: result, fixes };
  });
}

// ---------------------------------------------------------------------------
// Fix: H2 headings not in Title Case
// ---------------------------------------------------------------------------

function toTitleCase(text: string): string {
  const words = text.split(" ");
  return words
    .map((word, i) => {
      // Strip markdown formatting to determine the semantic word
      const clean = word.replace(/[*_`[\]()]/g, "").replace(/[^a-zA-Z'-]/g, "");
      if (!clean) return word;
      const lower = clean.toLowerCase();
      const isFirst = i === 0;
      const isLast = i === words.length - 1;
      if (!isFirst && !isLast && TITLE_CASE_ALWAYS_LOWER.has(lower)) {
        return word.toLowerCase();
      }
      // Capitalise the first character of the word token
      return word[0]!.toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function fixH2TitleCase(content: string): FixResult {
  const fixes: string[] = [];
  const result = content.replace(/^(## )(.+)$/gm, (_match, prefix, heading) => {
    const trimmed = (heading as string).trim();
    if (!isTitleCase(trimmed)) {
      const fixed = toTitleCase(trimmed);
      if (fixed !== trimmed) {
        fixes.push(`H2 heading "${trimmed}" → "${fixed}"`);
        return `${prefix}${fixed}`;
      }
    }
    return `${prefix}${trimmed}`;
  });
  return { content: result, fixes };
}

// ---------------------------------------------------------------------------
// Main export — orchestrates all fix passes in dependency order
// ---------------------------------------------------------------------------

export function fixStyle(content: string): FixResult {
  const allFixes: string[] = [];
  let current = content;

  const passes: Array<(c: string) => FixResult> = [
    fixDashes,              // Must run before fixDoubleSpaces — dash replacement can introduce double spaces
    fixDoubleSpaces,        // Must run before other passes (whitespace affects offsets)
    fixSpelling,
    fixPhrasalVerbs,
    fixAbbreviationCommas,
    fixH2TitleCase,
  ];

  for (const pass of passes) {
    const { content: next, fixes } = pass(current);
    current = next;
    allFixes.push(...fixes);
  }

  return { content: current, fixes: allFixes };
}
