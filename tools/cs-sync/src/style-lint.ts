import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Config loading
// ---------------------------------------------------------------------------

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

interface StyleLintConfig {
  allowedAcronyms: string[];
  bannedPhrases: string[];
}

function loadConfig(): StyleLintConfig {
  const configPath = path.join(scriptDir, "style-lint.config.json");
  try {
    return JSON.parse(fs.readFileSync(configPath, "utf8")) as StyleLintConfig;
  } catch {
    return { allowedAcronyms: [], bannedPhrases: [] };
  }
}

function loadBulletList(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content
      .split("\n")
      .map((l) => l.match(/^-\s+(.+)/)?.[1]?.trim() ?? "")
      .filter(Boolean);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Code-block stripping
// Replaces fenced code, inline code, <pre>/<code> HTML, link URLs, and
// frontmatter with spaces so all other checks see clean prose but line
// numbers remain accurate.
// ---------------------------------------------------------------------------

export function stripCodeRegions(body: string): string {
  let result = body;

  // Strip YAML frontmatter
  result = result.replace(/^---[\s\S]*?^---\s*\n/m, (m) =>
    m.replace(/[^\n]/g, " "),
  );

  // Strip fenced code blocks (``` or ~~~)
  result = result.replace(/^(`{3,}|~{3,})[\s\S]*?\1\s*$/gm, (m) =>
    m.replace(/[^\n]/g, " "),
  );

  // Strip <pre> and <code> HTML blocks
  result = result.replace(/<(pre|code)[\s\S]*?<\/\1>/gi, (m) =>
    m.replace(/[^\n]/g, " "),
  );

  // Strip inline code (`...`)
  result = result.replace(/`[^`\n]+`/g, (m) => " ".repeat(m.length));

  // Strip markdown link URLs — keep the [text] part, blank the (url) part
  result = result.replace(/\]\(([^)]+)\)/g, (_m, url: string) =>
    "](" + " ".repeat(url.length) + ")",
  );

  return result;
}

// ---------------------------------------------------------------------------
// Error formatting helpers
// ---------------------------------------------------------------------------

function err(
  file: string,
  line: number,
  message: string,
  hint?: string,
): string {
  const base = `You have ${message} on line ${line}. Resolve it and try merging again.`;
  return hint ? `${base} ${hint}` : base;
}

function lineNumber(body: string, index: number): number {
  return body.slice(0, index).split("\n").length;
}

// ---------------------------------------------------------------------------
// Tier 1 — Simple regex checks
// ---------------------------------------------------------------------------

function checkEmDash(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/—/g)) {
    errors.push(err(file, lineNumber(stripped, m.index!), "an em dash (—)"));
  }
  return errors;
}

function checkEnDash(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/–/g)) {
    errors.push(err(file, lineNumber(stripped, m.index!), "an en dash (–)"));
  }
  return errors;
}

function checkSemicolon(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/;/g)) {
    errors.push(err(file, lineNumber(stripped, m.index!), "a semicolon (;)"));
  }
  return errors;
}

function checkDoubleSpaces(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/ {2,}/g)) {
    errors.push(
      err(file, lineNumber(stripped, m.index!), "double spaces"),
    );
  }
  return errors;
}

function checkPlease(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\bplease\b/gi)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        'the word "please" in instructions',
      ),
    );
  }
  return errors;
}

function checkPlusSymbol(stripped: string, file: string): string[] {
  const errors: string[] = [];
  // Flag "+" used in prose (not inside math/code — already stripped)
  for (const m of stripped.matchAll(/(?<![a-zA-Z0-9])\+(?![=\d])/g)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        'the "+" symbol in prose (use "and" or "more than" instead)',
      ),
    );
  }
  return errors;
}

function checkNxForTimes(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\b(\d+)[xX]\b/g)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        `"${m[0]}" (use "${m[1]} times" instead)`,
      ),
    );
  }
  return errors;
}

function checkEtc(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\betc\./gi)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        '"etc." in formal writing (list all items explicitly, or use "and so on" sparingly)',
      ),
    );
  }
  return errors;
}

function checkThreeDots(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\bthree\s+dots\b/gi)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        '"three dots" (use "horizontal ellipsis" or "vertical ellipsis" instead)',
      ),
    );
  }
  return errors;
}

function checkIeComma(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\bi\.e\.(?!\s*,)/g)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        '"i.e." not followed by a comma (AP Style requires a comma after "i.e.")',
      ),
    );
  }
  return errors;
}

function checkEgComma(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\be\.g\.(?!\s*,)/g)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        '"e.g." not followed by a comma (AP Style requires a comma after "e.g.")',
      ),
    );
  }
  return errors;
}

function checkNavigationPanel(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\bon the (left|right) navigation panel\b/gi)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        `"on the ${m[1]} navigation panel" (use "in the ${m[1]} navigation panel" instead)`,
      ),
    );
  }
  return errors;
}

function checkSpelling(stripped: string, file: string): string[] {
  const spellingMap: Array<[RegExp, string]> = [
    [/\be-mail\b/gi, '"e-mail" (use "email")'],
    [/\bplug-in\b/gi, '"plug-in" (use "plugin")'],
    [/\bCMSes\b/g, '"CMSes" (use "CMSs")'],
    [/\bfront-end\b/gi, '"front-end" (use "frontend")'],
    [/\bback-end\b/gi, '"back-end" (use "backend")'],
    [/(?<!\.\s|\n)(?<![A-Z])\bInternet\b(?!\s+of\s+Things)/g, '"Internet" capitalised (use lowercase "internet" unless at sentence start)'],
    [/\bWeb\b(?!\s+(API|Service|Socket|Component|Worker|Assembly|hook|pack|font))/gi, '"Web" capitalised (use lowercase "web" in prose)'],
  ];

  const errors: string[] = [];
  for (const [re, message] of spellingMap) {
    for (const m of stripped.matchAll(re)) {
      errors.push(err(file, lineNumber(stripped, m.index!), message));
    }
  }
  return errors;
}

function checkNakedUrls(body: string, file: string): string[] {
  // Match URLs not already inside a markdown link: [text](url)
  // We look for http(s):// that is NOT preceded by "]("
  const errors: string[] = [];
  for (const m of body.matchAll(/(?<!\()\bhttps?:\/\/[^\s)>\]"]+/g)) {
    errors.push(
      err(
        file,
        lineNumber(body, m.index!),
        `a naked URL "${m[0]}" (wrap it in a markdown link: [descriptive text](${m[0]}))`,
      ),
    );
  }
  return errors;
}

function checkGenericLinkText(body: string, file: string): string[] {
  const errors: string[] = [];
  const banned = /\[(?:click here|learn more|read this|here|this link|read more|click this|see here)\]\(/gi;
  for (const m of body.matchAll(banned)) {
    errors.push(
      err(
        file,
        lineNumber(body, m.index!),
        `generic link text "${m[0].slice(1, m[0].indexOf("]"))}" (use descriptive, contextual link text instead)`,
      ),
    );
  }
  return errors;
}

function checkOxfordComma(stripped: string, file: string): string[] {
  // Detect "word, word and word" (missing Oxford comma before "and")
  const errors: string[] = [];
  const re = /\b\w+,\s+\w+\s+and\s+\w+/g;
  for (const m of stripped.matchAll(re)) {
    // Only flag if there's no comma before "and"
    if (!/,\s+and\s+/.test(m[0])) {
      errors.push(
        err(
          file,
          lineNumber(stripped, m.index!),
          `a missing Oxford comma in "${m[0]}" (add a comma before "and")`,
        ),
      );
    }
  }
  return errors;
}

function checkAllCaps(
  stripped: string,
  file: string,
  allowedAcronyms: Set<string>,
): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\b[A-Z]{3,}\b/g)) {
    if (!allowedAcronyms.has(m[0])) {
      errors.push(
        err(
          file,
          lineNumber(stripped, m.index!),
          `ALL CAPS "${m[0]}" (not a known acronym)`,
          "To add it to the allowed acronyms list, edit tools/cs-sync/src/style-lint.config.json.",
        ),
      );
    }
  }
  return errors;
}

function checkBannedPhrases(
  stripped: string,
  file: string,
  bannedPhrases: string[],
): string[] {
  const errors: string[] = [];
  // Sort by length descending so longer phrases match first
  const sorted = [...bannedPhrases].sort((a, b) => b.length - a.length);
  const seen = new Set<number>();
  for (const phrase of sorted) {
    const re = new RegExp(
      `\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi",
    );
    for (const m of stripped.matchAll(re)) {
      if (!seen.has(m.index!)) {
        seen.add(m.index!);
        errors.push(
          err(
            file,
            lineNumber(stripped, m.index!),
            `a banned phrase "${m[0]}"`,
            "To update the banned phrases list, edit tools/cs-sync/src/style-lint.config.json.",
          ),
        );
      }
    }
  }
  return errors;
}

function checkPhrasalVerbs(stripped: string, file: string): string[] {
  const replacements: Array<[RegExp, string]> = [
    [/\bset up\b/gi, '"set up" (use "configure" instead)'],
    [/\blog in\b/gi, '"log in" (use "sign in" instead)'],
    [/\bbrought up\b|\bbring up\b/gi, '"bring up" (use "display" instead)'],
    [/\bpull up\b/gi, '"pull up" (use "open" or "display" instead)'],
  ];
  const errors: string[] = [];
  for (const [re, message] of replacements) {
    for (const m of stripped.matchAll(re)) {
      errors.push(err(file, lineNumber(stripped, m.index!), message));
    }
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Tier 2 — Moderate checks
// ---------------------------------------------------------------------------

export const TITLE_CASE_ALWAYS_LOWER = new Set([
  "a", "an", "the", "and", "or", "nor", "but", "for", "yet", "so",
  "in", "on", "at", "to", "by", "of", "up", "as",
]);

export function isTitleCase(text: string): boolean {
  const words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i]!;
    // Strip markdown formatting and punctuation from edges
    const clean = word.replace(/[*_`[\]()]/g, "").replace(/[^a-zA-Z'-]/g, "");
    if (!clean) continue;
    const lower = clean.toLowerCase();
    const isFirst = i === 0;
    const isLast = i === words.length - 1;
    if ((isFirst || isLast) && clean[0] !== clean[0].toUpperCase()) return false;
    if (!isFirst && !isLast && TITLE_CASE_ALWAYS_LOWER.has(lower)) continue;
    if (clean[0] !== clean[0].toUpperCase()) return false;
  }
  return true;
}

function checkHeadings(body: string, file: string): string[] {
  const errors: string[] = [];
  const lines = body.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const lineNum = i + 1;

    const h1h2 = line.match(/^(#{1,2})\s+(.+)/);
    if (h1h2) {
      const text = h1h2[2]!.trim();

      // Title length ≤ 60 chars
      if (text.length > 60) {
        errors.push(
          err(
            file,
            lineNum,
            `a heading that exceeds 60 characters (${text.length} chars): "${text.slice(0, 40)}…"`,
          ),
        );
      }

      // Title Case check for H1/H2
      if (!isTitleCase(text)) {
        errors.push(
          err(
            file,
            lineNum,
            `an H${h1h2[1]!.length} heading not in Title Case: "${text}"`,
          ),
        );
      }

      // Vague heading openers
      const vague = /^(Understanding|Guide to|Overview of|Introduction to|About)\b/i;
      if (vague.test(text)) {
        errors.push(
          err(
            file,
            lineNum,
            `a vague heading opener in "${text}" (use a direct, action-oriented phrase instead)`,
          ),
        );
      }
    }

    const h3plus = line.match(/^(#{3,})\s+(.+)/);
    if (h3plus) {
      const text = h3plus[2]!.trim();
      const firstChar = text.replace(/[*_`[\]]/g, "")[0];
      if (firstChar && firstChar !== firstChar.toUpperCase()) {
        errors.push(
          err(
            file,
            lineNum,
            `an H${h3plus[1]!.length} heading not in Sentence case: "${text}" (only the first word should be capitalised)`,
          ),
        );
      }
    }
  }
  return errors;
}

function checkListPunctuation(body: string, file: string): string[] {
  const errors: string[] = [];
  // Find contiguous list blocks (lines starting with - or * or 1.)
  const lines = body.split("\n");
  let blockStart = -1;
  let blockItems: Array<{ text: string; lineNum: number }> = [];

  function flushBlock() {
    if (blockItems.length < 2) return;
    const withPeriod = blockItems.filter((b) => /\.\s*$/.test(b.text));
    const without = blockItems.filter((b) => !/\.\s*$/.test(b.text));
    if (withPeriod.length > 0 && without.length > 0) {
      errors.push(
        err(
          file,
          blockStart + 1,
          `broken list punctuation starting on line ${blockStart + 1} (mix of items with and without trailing periods — all items must be consistent)`,
        ),
      );
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const listItem = line.match(/^\s*(?:[-*+]|\d+\.)\s+(.+)/);
    if (listItem) {
      if (blockStart === -1) blockStart = i;
      blockItems.push({ text: listItem[1]!, lineNum: i + 1 });
    } else {
      if (blockItems.length > 0) {
        flushBlock();
        blockStart = -1;
        blockItems = [];
      }
    }
  }
  if (blockItems.length > 0) flushBlock();
  return errors;
}

function checkConsecutiveInfoPanels(body: string, file: string): string[] {
  const errors: string[] = [];
  // Detect two adjacent <p class="note/tip/warning/add-resource"> blocks
  const re = /(<p\s+class="(?:note|tip|warning|add-resource)"[\s\S]*?<\/p>)\s*(<p\s+class="(?:note|tip|warning|add-resource)")/gi;
  for (const m of body.matchAll(re)) {
    errors.push(
      err(
        file,
        lineNumber(body, m.index!),
        "consecutive info panels (note/tip/warning) with no content between them — separate them with at least one paragraph",
      ),
    );
  }
  return errors;
}

function checkInfoPanelClasses(body: string, file: string): string[] {
  const errors: string[] = [];
  const allowed = new Set(["note", "tip", "add-resource", "warning"]);
  // Find all <p class="..."> or <div class="..."> that look like info panels
  for (const m of body.matchAll(/<(?:p|div)\s+class="([^"]+)"/gi)) {
    const cls = m[1]!.trim();
    if (
      ["note", "tip", "warning", "add-resource", "info", "caution", "danger"].some(
        (k) => cls.includes(k),
      ) &&
      !allowed.has(cls)
    ) {
      errors.push(
        err(
          file,
          lineNumber(body, m.index!),
          `an info panel with invalid class "${cls}" (allowed classes: note, tip, add-resource, warning)`,
        ),
      );
    }
  }
  return errors;
}

function checkSentenceLength(stripped: string, file: string): string[] {
  const errors: string[] = [];
  const lines = stripped.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!.trim();
    if (!line || line.startsWith("#") || line.startsWith("|")) continue;
    // Split on sentence-ending punctuation
    const sentences = line.split(/(?<=[.!?])\s+/);
    for (const sentence of sentences) {
      const wordCount = sentence.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount > 40) {
        errors.push(
          err(
            file,
            i + 1,
            `a very long sentence (${wordCount} words) — aim for 15–20 words per sentence`,
          ),
        );
      }
    }
  }
  return errors;
}

function checkImages(body: string, file: string): string[] {
  const errors: string[] = [];
  // Find all image references: ![alt](src)
  for (const m of body.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
    const alt = m[1]!.trim();
    const src = m[2]!.trim();
    const lineNum = lineNumber(body, m.index!);

    // Empty alt text
    if (!alt) {
      errors.push(err(file, lineNum, "an image with empty alt text (provide a descriptive alt attribute)"));
    }

    // Generic alt/filename
    const genericNames = /^(image|screenshot|img\d*|untitled|figure|photo|image\s+[a-z]|first image|second image)$/i;
    if (genericNames.test(alt)) {
      errors.push(err(file, lineNum, `a generic image alt text "${alt}" (use a descriptive alt text)`));
    }
    const srcFilename = path.basename(src.split("?")[0] ?? src);
    if (genericNames.test(srcFilename.replace(/\.[^.]+$/, ""))) {
      errors.push(err(file, lineNum, `a generic image filename "${srcFilename}" (use a descriptive filename)`));
    }

    // Non-PNG extension
    const ext = path.extname(srcFilename).toLowerCase();
    if (ext && ext !== ".png" && ext !== ".gif") {
      errors.push(
        err(
          file,
          lineNum,
          `an image with extension "${ext}" (screenshots must be saved as .png)`,
        ),
      );
    }
  }
  return errors;
}

function checkDuplicateLinks(body: string, file: string): string[] {
  const errors: string[] = [];
  // Split into sections by H2
  const sections = body.split(/^##\s+/m);
  for (const section of sections) {
    const seen = new Map<string, number>();
    for (const m of section.matchAll(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g)) {
      const text = m[1]!.toLowerCase().trim();
      const lineNum = lineNumber(body, body.indexOf(section) + m.index!);
      const prev = seen.get(text);
      if (prev !== undefined) {
        errors.push(
          err(
            file,
            lineNum,
            `a duplicate hyperlink for "${m[1]}" (only hyperlink the first occurrence per section; first seen on line ${prev})`,
          ),
        );
      } else {
        seen.set(text, lineNum);
      }
    }
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Tier 3 — Warning-level checks
// ---------------------------------------------------------------------------

function checkVagueAdverbs(
  stripped: string,
  file: string,
  adverbs: string[],
): string[] {
  const errors: string[] = [];
  for (const adverb of adverbs) {
    const re = new RegExp(
      `\\b${adverb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi",
    );
    for (const m of stripped.matchAll(re)) {
      errors.push(
        err(
          file,
          lineNumber(stripped, m.index!),
          `a vague adverb "${m[0]}" (use specific, measurable language)`,
          "To update the restricted adverbs list, edit tools/cs-sync/src/restricted/vague-adverbs.md.",
        ),
      );
    }
  }
  return errors;
}

function checkFutureTense(
  stripped: string,
  file: string,
  futurePhrases: string[],
): string[] {
  const errors: string[] = [];
  // Sort by length desc so multi-word phrases match before single words
  const sorted = [...futurePhrases].sort((a, b) => b.length - a.length);
  const seen = new Set<number>();
  for (const phrase of sorted) {
    const re = new RegExp(
      `\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi",
    );
    for (const m of stripped.matchAll(re)) {
      if (!seen.has(m.index!)) {
        seen.add(m.index!);
        errors.push(
          err(
            file,
            lineNumber(stripped, m.index!),
            `a future tense word/phrase "${m[0]}" (use present tense instead)`,
            "To update the restricted future tense list, edit tools/cs-sync/src/restricted/future-tense-words.md.",
          ),
        );
      }
    }
  }
  return errors;
}

function checkGenderedPronouns(stripped: string, file: string): string[] {
  const errors: string[] = [];
  for (const m of stripped.matchAll(/\b(his|her|he|she)\b/gi)) {
    errors.push(
      err(
        file,
        lineNumber(stripped, m.index!),
        `a gendered pronoun "${m[0]}" (use singular "they/their/them" instead)`,
      ),
    );
  }
  return errors;
}

function checkRhetoricalQuestions(body: string, file: string): string[] {
  const errors: string[] = [];
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!.trim();
    // Skip headings and empty lines
    if (!line || line.startsWith("#")) continue;
    if (/\?\s*$/.test(line)) {
      errors.push(
        err(
          file,
          i + 1,
          "a rhetorical question (rephrase as a direct statement)",
        ),
      );
    }
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function lintStyle(body: string, filePath: string): string[] {
  const config = loadConfig();
  const allowedAcronyms = new Set(config.allowedAcronyms);

  const vagueAdverbsPath = path.join(scriptDir, "restricted", "vague-adverbs.md");
  const futureTensePath = path.join(scriptDir, "restricted", "future-tense-words.md");
  const vagueAdverbs = loadBulletList(vagueAdverbsPath);
  const futurePhrases = loadBulletList(futureTensePath);

  const stripped = stripCodeRegions(body);
  const errors: string[] = [];

  // Tier 1
  errors.push(...checkEmDash(stripped, filePath));
  errors.push(...checkEnDash(stripped, filePath));
  errors.push(...checkSemicolon(stripped, filePath));
  errors.push(...checkDoubleSpaces(stripped, filePath));
  errors.push(...checkPlease(stripped, filePath));
  errors.push(...checkPlusSymbol(stripped, filePath));
  errors.push(...checkNxForTimes(stripped, filePath));
  errors.push(...checkEtc(stripped, filePath));
  errors.push(...checkThreeDots(stripped, filePath));
  errors.push(...checkIeComma(stripped, filePath));
  errors.push(...checkEgComma(stripped, filePath));
  errors.push(...checkNavigationPanel(stripped, filePath));
  errors.push(...checkSpelling(stripped, filePath));
  errors.push(...checkNakedUrls(body, filePath));
  errors.push(...checkGenericLinkText(body, filePath));
  errors.push(...checkOxfordComma(stripped, filePath));
  errors.push(...checkAllCaps(stripped, filePath, allowedAcronyms));
  errors.push(...checkBannedPhrases(stripped, filePath, config.bannedPhrases));
  errors.push(...checkPhrasalVerbs(stripped, filePath));

  // Tier 2
  errors.push(...checkHeadings(body, filePath));
  errors.push(...checkListPunctuation(body, filePath));
  errors.push(...checkConsecutiveInfoPanels(body, filePath));
  errors.push(...checkInfoPanelClasses(body, filePath));
  errors.push(...checkSentenceLength(stripped, filePath));
  errors.push(...checkImages(body, filePath));
  errors.push(...checkDuplicateLinks(body, filePath));

  // Tier 3 (warnings — still surfaced as errors to block merges)
  errors.push(...checkVagueAdverbs(stripped, filePath, vagueAdverbs));
  errors.push(...checkFutureTense(stripped, filePath, futurePhrases));
  errors.push(...checkGenderedPronouns(stripped, filePath));
  errors.push(...checkRhetoricalQuestions(body, filePath));

  return errors;
}
