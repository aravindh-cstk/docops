import { parse, type HTMLElement, type Node } from "node-html-parser";
import { collectAssetUids, extractCsAssetUid } from "./assets.js";

// ─────────────────────────────────────────────────────────────────────────────
// Image backfill (Workstream A).
//
// The rich `.md` bodies were rendered from the HTML `article_content[].
// article_section.content` field, and that rendering dropped every <img> tag and
// flattened Note/Tip/Warning/Additional-Resource callouts into the preceding
// step. This module restores both, surgically:
//
//   1. Parse the HTML into an ordered list of blocks (paragraph, heading, list
//      item, table cell). The markdown body has the same blocks in the same
//      order, framed by generated scaffolding (H1, intro, section heading,
//      "Common questions") that has no HTML counterpart.
//   2. Align the two block sequences with an LCS diff so the HTML slice locks
//      onto the correct middle blocks regardless of the surrounding scaffolding.
//   3. For each aligned block that has an image or a flattened callout, edit the
//      EXISTING markdown block in place: insert `![alt](url)` at the image's real
//      position, and move a flattened callout onto its own line. Existing text
//      and already-relativized links are preserved (no re-render).
//
// Idempotent: an asset already present (matched by asset UID, not full URL) is
// never inserted again.
// ─────────────────────────────────────────────────────────────────────────────

const CALLOUT_CLASS_LABEL: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  "add-resource": "Additional Resource",
};

const NODE_TEXT = 3;
const NODE_ELEMENT = 1;

interface ImagePart {
  kind: "image";
  url: string;
  alt: string;
  assetUid: string | null;
}
interface CalloutPart {
  kind: "callout";
  label: string;
  text: string;
}
type Part =
  | { kind: "text"; text: string }
  | ImagePart
  | CalloutPart
  | { kind: "br" };

interface HtmlBlock {
  tag: string; // p | h1..h6 | li | td | th
  parts: Part[];
  text: string; // normalized text for alignment (excludes nested lists)
  hasImage: boolean;
  hasCallout: boolean;
}

interface MdBlock {
  kind: "heading" | "listitem" | "para";
  startLine: number;
  endLine: number; // exclusive
  raw: string; // raw source lines joined with \n
  norm: string; // normalized text for alignment
  indent: string; // continuation indent (for callout/br placement)
}

export type InjectAction =
  | "injected"
  | "unflattened"
  | "skipped-present"
  | "skipped-review";

export interface ImageReport {
  assetUid: string | null;
  url: string;
  filename: string;
  blockKind: string;
  action: InjectAction;
  confidence: "high" | "medium" | "low";
  reason: string;
}

export interface InjectionResult {
  changed: boolean;
  newContent: string;
  reports: ImageReport[];
  imagesInHtml: number;
  imagesInjected: number;
  // Alignment quality — how much of the entry's textual content is present in
  // this file. Used to pick the right entry for a file and reject wrong ones.
  htmlBlocksTotal: number; // html blocks with non-empty text
  htmlBlocksMatched: number; // of those, how many aligned to a markdown block
}

// ── Text helpers ────────────────────────────────────────────────────────────

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&rsquo;|&lsquo;|&#8217;|&#8216;/gi, "'")
    .replace(/&rdquo;|&ldquo;|&#8220;|&#8221;/gi, '"')
    .replace(/&hellip;|&#8230;/gi, "...")
    .replace(/&mdash;|&ndash;|&#8212;|&#8211;/gi, "-");
}

// Fold typographic variants so the two converters' output compares equal:
// smart quotes -> straight, dashes -> hyphen, ellipsis -> ..., nbsp/zero-width -> space.
function foldTypography(s: string): string {
  return s
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—―]/g, "-")
    .replace(/…/g, "...")
    .replace(/[   ]/g, " ")
    .replace(/[​﻿]/g, "");
}

export function normalizeText(s: string): string {
  return foldTypography(decodeEntities(s))
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ") // markdown images
    .replace(/\[([^\]]*)]\([^)]*\)/g, "$1") // markdown links -> text
    .replace(/<[^>]+>/g, " ") // stray html tags
    .replace(/[*_`~]/g, "") // emphasis / code markers
    .replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1") // unescape
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[.,:;!?"')\]]+$/, ""); // trailing punctuation
}

function basenameFromUrl(url: string): string {
  const noQuery = url.split(/[?#]/)[0] ?? url;
  const seg = noQuery.split("/").filter(Boolean).pop() ?? "";
  try {
    return decodeURIComponent(seg);
  } catch {
    return seg;
  }
}

function escapeAlt(alt: string): string {
  return alt.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function renderImage(img: ImagePart): string {
  const alt = img.alt.trim() || basenameFromUrl(img.url);
  return `![${escapeAlt(alt)}](${img.url})`;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── HTML parsing into ordered blocks ────────────────────────────────────────

function tagOf(node: Node): string {
  return (node as HTMLElement).rawTagName?.toLowerCase() ?? "";
}

function firstSrcset(srcset: string | null): string {
  if (!srcset) return "";
  const first = srcset.split(",")[0]?.trim() ?? "";
  return first.split(/\s+/)[0] ?? "";
}

function imagePart(el: HTMLElement): ImagePart {
  const url =
    el.getAttribute("src") ||
    el.getAttribute("data-src") ||
    firstSrcset(el.getAttribute("srcset") ?? null) ||
    "";
  const attrUid = el.getAttribute("asset_uid") || null;
  const alt = (el.getAttribute("alt") ?? "").trim();
  return {
    kind: "image",
    url,
    alt,
    assetUid: attrUid ?? (url ? extractCsAssetUid(url) : null),
  };
}

function isCalloutP(el: HTMLElement): boolean {
  return tagOf(el) === "p" && (el.getAttribute("class") ?? "") in CALLOUT_CLASS_LABEL;
}

// Flatten inline descendants into text, but surface <img>, <br> and nested
// callout <p> as their own parts. Nested lists are skipped (walked separately).
function extractParts(el: HTMLElement): Part[] {
  const parts: Part[] = [];
  const pushText = (t: string) => {
    if (!t) return;
    const last = parts[parts.length - 1];
    if (last && last.kind === "text") last.text += t;
    else parts.push({ kind: "text", text: t });
  };

  for (const child of el.childNodes) {
    if (child.nodeType === NODE_TEXT) {
      pushText(decodeEntities((child as unknown as { rawText: string }).rawText));
      continue;
    }
    if (child.nodeType !== NODE_ELEMENT) continue;
    const c = child as HTMLElement;
    const tag = tagOf(c);
    if (tag === "img") {
      parts.push(imagePart(c));
    } else if (tag === "br") {
      parts.push({ kind: "br" });
    } else if (isCalloutP(c)) {
      const cls = c.getAttribute("class") ?? "";
      parts.push({
        kind: "callout",
        label: CALLOUT_CLASS_LABEL[cls] ?? cls,
        text: decodeEntities(c.text),
      });
    } else if (tag === "ul" || tag === "ol") {
      // nested list — separate blocks, handled by the block walker
      continue;
    } else {
      // inline element (strong/em/a/span/code/...) — recurse for nested imgs
      for (const p of extractParts(c)) {
        if (p.kind === "text") pushText(p.text);
        else parts.push(p);
      }
    }
  }
  return parts;
}

function partsToText(parts: Part[]): string {
  // A callout's own text already includes its bold label (e.g. "Note: ..."),
  // and in a flattened list item it abuts the preceding text with no space, so
  // callouts join directly. A <br> became a line break (whitespace) in the
  // markdown, so it contributes a space. Images contribute nothing (dropped).
  return parts
    .map((p) =>
      p.kind === "text" ? p.text : p.kind === "callout" ? p.text : p.kind === "br" ? " " : "",
    )
    .join("");
}

function makeBlock(el: HTMLElement): HtmlBlock {
  const parts = extractParts(el);
  return {
    tag: tagOf(el),
    parts,
    text: normalizeText(partsToText(parts)),
    hasImage: parts.some((p) => p.kind === "image"),
    hasCallout: parts.some((p) => p.kind === "callout"),
  };
}

const BLOCK_TAGS = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "td", "th"]);

function collectHtmlBlocks(node: Node, out: HtmlBlock[]): void {
  for (const child of node.childNodes) {
    if (child.nodeType !== NODE_ELEMENT) continue;
    const el = child as HTMLElement;
    const tag = tagOf(el);
    if (BLOCK_TAGS.has(tag)) {
      // Callout <p> at top level is still a block (rarely holds an image).
      out.push(makeBlock(el));
      // A list item / cell may contain nested lists — emit those as blocks too.
      for (const sub of el.querySelectorAll("ul, ol")) {
        // Only direct-descendant lists (querySelectorAll is deep; guard by parent)
        if (sub.parentNode === el) collectHtmlBlocks(sub, out);
      }
      // list items inside the nested lists are reached above; also handle the
      // case where the block element itself is a container we should descend
    } else if (tag === "table" || tag === "thead" || tag === "tbody" || tag === "tr" || tag === "ul" || tag === "ol" || tag === "div" || tag === "section" || tag === "figure") {
      collectHtmlBlocks(el, out);
    }
  }
}

export function parseHtmlBlocks(html: string): HtmlBlock[] {
  const root = parse(html, { comment: false });
  const out: HtmlBlock[] = [];
  collectHtmlBlocks(root, out);
  return out;
}

// ── Markdown body split into ordered blocks ─────────────────────────────────

const HEADING_RE = /^#{1,6}\s/;
const MARKER_RE = /^(\s*)([-*+]|\d+\.)(\s+)/;

function contentIndent(line: string): string {
  const m = line.match(MARKER_RE);
  if (m) return " ".repeat(m[1].length + m[2].length + m[3].length);
  const lead = line.match(/^\s*/)?.[0] ?? "";
  return lead;
}

function stripMarker(raw: string): string {
  return raw.replace(MARKER_RE, "").replace(HEADING_RE, "");
}

export function splitMarkdownBlocks(body: string): MdBlock[] {
  const lines = body.split("\n");
  const blocks: MdBlock[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (HEADING_RE.test(line)) {
      blocks.push(mkMdBlock("heading", lines, i, i + 1));
      i++;
      continue;
    }
    if (MARKER_RE.test(line)) {
      const start = i;
      i++;
      // gather continuation lines (indented, not a new marker/heading/blank)
      while (
        i < lines.length &&
        lines[i]!.trim() !== "" &&
        !HEADING_RE.test(lines[i]!) &&
        !MARKER_RE.test(lines[i]!)
      ) {
        i++;
      }
      blocks.push(mkMdBlock("listitem", lines, start, i));
      continue;
    }
    // paragraph
    const start = i;
    i++;
    while (
      i < lines.length &&
      lines[i]!.trim() !== "" &&
      !HEADING_RE.test(lines[i]!) &&
      !MARKER_RE.test(lines[i]!)
    ) {
      i++;
    }
    blocks.push(mkMdBlock("para", lines, start, i));
  }
  return blocks;
}

function mkMdBlock(
  kind: MdBlock["kind"],
  lines: string[],
  start: number,
  end: number,
): MdBlock {
  const raw = lines.slice(start, end).join("\n");
  return {
    kind,
    startLine: start,
    endLine: end,
    raw,
    norm: normalizeText(stripMarker(raw)),
    indent: contentIndent(lines[start]!),
  };
}

// ── Alignment (LCS over normalized block text) ──────────────────────────────

// Alignment uses EXACT normalized-text equality. normalizeText already strips
// markup, links, emphasis, and entities, so the two converters' output matches
// exactly for the same content. Fuzzy matching was tried but derailed the LCS on
// large, duplicate-heavy docs (e.g. "click proceed" repeated 17x), dropping the
// match rate by half. Exact-only is both safer (no wrong placements) and more
// accurate; blocks that genuinely drifted are skipped to the review report.
function blocksMatch(a: string, b: string): { ok: boolean; exact: boolean } {
  const ok = !!a && !!b && a === b;
  return { ok, exact: ok };
}

// Returns a map htmlBlockIndex -> { mdIndex, exact } for aligned blocks.
function alignBlocks(
  html: HtmlBlock[],
  md: MdBlock[],
): Map<number, { mdIndex: number; exact: boolean }> {
  const n = html.length;
  const m = md.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  const matchAt: (boolean | null)[][] = Array.from({ length: n + 1 }, () =>
    new Array(m + 1).fill(null),
  );
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const res = blocksMatch(html[i]!.text, md[j]!.norm);
      if (res.ok) {
        dp[i]![j] = dp[i + 1]![j + 1]! + 1;
        matchAt[i]![j] = res.exact;
      } else {
        if (dp[i + 1]![j]! >= dp[i]![j + 1]!) dp[i]![j] = dp[i + 1]![j]!;
        else dp[i]![j] = dp[i]![j + 1]!;
      }
    }
  }
  const out = new Map<number, { mdIndex: number; exact: boolean }>();
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const res = blocksMatch(html[i]!.text, md[j]!.norm);
    if (res.ok && dp[i]![j] === dp[i + 1]![j + 1]! + 1) {
      out.set(i, { mdIndex: j, exact: matchAt[i]![j] ?? res.exact });
      i++;
      j++;
    } else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) {
      i++;
    } else {
      j++;
    }
  }
  return out;
}

// ── Per-block reconciliation (surgical edits on existing md text) ────────────

interface Edit {
  pos: number;
  text: string;
}

function followingKind(parts: Part[], imgIndex: number): {
  kind: "end" | "callout" | "br" | "text";
  label?: string;
  text?: string;
} {
  for (let k = imgIndex + 1; k < parts.length; k++) {
    const p = parts[k]!;
    if (p.kind === "text") {
      if (p.text.trim() === "") continue;
      return { kind: "text", text: p.text };
    }
    if (p.kind === "callout") return { kind: "callout", label: p.label };
    if (p.kind === "br") return { kind: "br" };
    if (p.kind === "image") return { kind: "text", text: "" }; // consecutive image
  }
  return { kind: "end" };
}

function calloutMarkerIndex(raw: string, label: string): number {
  const re = new RegExp(
    `\\*\\*\\s*${escapeRegex(label)}\\s*:?\\s*\\*\\*:?`,
    "i",
  );
  const m = raw.match(re);
  return m?.index ?? -1;
}

// Reconcile one aligned block. Returns the new raw text or null if unchanged.
function reconcileBlock(
  htmlBlock: HtmlBlock,
  mdBlock: MdBlock,
  present: Set<string>,
  reports: ImageReport[],
): { raw: string | null; injected: number } {
  const raw = mdBlock.raw;
  const edits: Edit[] = [];
  const indent = mdBlock.indent;
  let injected = 0;
  const handledCallouts = new Set<string>();
  let endAppend = "";

  for (let idx = 0; idx < htmlBlock.parts.length; idx++) {
    const part = htmlBlock.parts[idx]!;
    if (part.kind !== "image") continue;
    const img = part;
    const filename = img.alt.trim() || basenameFromUrl(img.url);

    if (!img.url) {
      reports.push(report(img, filename, mdBlock.kind, "skipped-review", "low", "image has no resolvable src"));
      continue;
    }
    if (img.assetUid && present.has(img.assetUid)) {
      reports.push(report(img, filename, mdBlock.kind, "skipped-present", "high", "asset already present"));
      continue;
    }

    const md = renderImage(img);
    const follow = followingKind(htmlBlock.parts, idx);

    if (follow.kind === "callout" && follow.label) {
      const mi = calloutMarkerIndex(raw, follow.label);
      if (mi >= 0) {
        // is the callout already on its own line?
        const before = raw.slice(0, mi).replace(/[ \t]*$/, "");
        const onOwnLine = before.endsWith("\n") || before === "";
        if (onOwnLine) {
          edits.push({ pos: before.length, text: md });
        } else {
          edits.push({ pos: mi, text: `${md}\n\n${indent}` });
        }
        handledCallouts.add(follow.label.toLowerCase());
        markPresent(img, present);
        injected++;
        reports.push(report(img, filename, mdBlock.kind, "injected", "high", "placed before callout"));
        continue;
      }
      // marker not found — fall through to end append
    }

    if (follow.kind === "br") {
      const nl = raw.indexOf("\n");
      if (nl >= 0) {
        let pos = nl;
        while (pos > 0 && (raw[pos - 1] === " " || raw[pos - 1] === "\t")) pos--;
        edits.push({ pos, text: md });
        markPresent(img, present);
        injected++;
        reports.push(report(img, filename, mdBlock.kind, "injected", "high", "placed before line break"));
        continue;
      }
    }

    if (follow.kind === "text" && follow.text && follow.text.trim() !== "") {
      const target = normalizeText(follow.text).slice(0, 30);
      const pos = findNormalized(raw, target);
      if (pos >= 0) {
        edits.push({ pos, text: md });
        markPresent(img, present);
        injected++;
        reports.push(report(img, filename, mdBlock.kind, "injected", "medium", "placed before following text"));
        continue;
      }
      reports.push(report(img, filename, mdBlock.kind, "skipped-review", "low", "following text not found in markdown block"));
      continue;
    }

    // end of block (or consecutive image)
    endAppend += md;
    markPresent(img, present);
    injected++;
    reports.push(report(img, filename, mdBlock.kind, "injected", "high", "appended at end of block"));
  }

  // Un-flatten any remaining callouts (no image adjacent) that sit inline.
  for (const part of htmlBlock.parts) {
    if (part.kind !== "callout") continue;
    if (handledCallouts.has(part.label.toLowerCase())) continue;
    const mi = calloutMarkerIndex(raw, part.label);
    if (mi < 0) continue;
    const before = raw.slice(0, mi).replace(/[ \t]*$/, "");
    if (before.endsWith("\n") || before === "") continue; // already own line
    edits.push({ pos: mi, text: `\n\n${indent}` });
    reports.push({
      assetUid: null,
      url: "",
      filename: "",
      blockKind: mdBlock.kind,
      action: "unflattened",
      confidence: "high",
      reason: `un-flattened ${part.label} callout`,
    });
  }

  if (edits.length === 0 && endAppend === "") return { raw: null, injected: 0 };

  let result = raw;
  edits.sort((a, b) => b.pos - a.pos);
  for (const e of edits) {
    result = result.slice(0, e.pos) + e.text + result.slice(e.pos);
  }
  if (endAppend) result = result.replace(/\s*$/, "") + endAppend;

  return { raw: result, injected };
}

function findNormalized(raw: string, targetNorm: string): number {
  if (!targetNorm) return -1;
  // Scan candidate offsets, comparing normalized windows.
  const firstToken = targetNorm.split(" ")[0] ?? "";
  if (!firstToken) return -1;
  const re = new RegExp(escapeRegex(firstToken), "gi");
  for (const m of raw.matchAll(re)) {
    const start = m.index ?? 0;
    const window = normalizeText(raw.slice(start, start + targetNorm.length + 20));
    if (window.startsWith(targetNorm.slice(0, Math.min(20, targetNorm.length)))) {
      return start;
    }
  }
  return -1;
}

function markPresent(img: ImagePart, present: Set<string>): void {
  if (img.assetUid) present.add(img.assetUid);
}

function report(
  img: ImagePart,
  filename: string,
  blockKind: string,
  action: InjectAction,
  confidence: "high" | "medium" | "low",
  reason: string,
): ImageReport {
  return { assetUid: img.assetUid, url: img.url, filename, blockKind, action, confidence, reason };
}

// ── Top-level: split frontmatter, process body, reassemble ──────────────────

const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---\r?\n?)([\s\S]*)$/;

function splitFrontmatter(content: string): { fm: string; body: string } {
  const m = content.match(FRONTMATTER_RE);
  if (!m) return { fm: "", body: content };
  return { fm: m[1]!, body: m[2]! };
}

/**
 * Inject image references (and un-flatten callouts) into one markdown file's
 * body, driven by the entry's HTML. Frontmatter is preserved byte-for-byte.
 */
export function injectImagesIntoDoc(fileContent: string, html: string): InjectionResult {
  const htmlBlocks = parseHtmlBlocks(html);
  const imagesInHtml = htmlBlocks.reduce(
    (n, b) => n + b.parts.filter((p) => p.kind === "image").length,
    0,
  );
  const reports: ImageReport[] = [];

  const { fm, body } = splitFrontmatter(fileContent);
  const mdBlocks = splitMarkdownBlocks(body);
  const alignment = alignBlocks(htmlBlocks, mdBlocks);
  const present = collectAssetUids(fileContent);

  // Alignment quality: of the entry's text-bearing blocks, how many matched a
  // markdown block. A high ratio means this entry really is this file's source.
  const textBlocks = htmlBlocks.filter((b) => b.text !== "");
  const htmlBlocksTotal = textBlocks.length;
  let htmlBlocksMatched = 0;
  for (let hi = 0; hi < htmlBlocks.length; hi++) {
    if (htmlBlocks[hi]!.text !== "" && alignment.has(hi)) htmlBlocksMatched++;
  }

  // Compute new raw text per affected md block.
  const replacements = new Map<number, string>(); // mdBlockIndex -> new raw
  let injected = 0;

  for (let hi = 0; hi < htmlBlocks.length; hi++) {
    const hb = htmlBlocks[hi]!;
    if (!hb.hasImage && !hb.hasCallout) continue;
    const aligned = alignment.get(hi);
    if (!aligned) {
      for (const p of hb.parts) {
        if (p.kind !== "image") continue;
        const filename = p.alt.trim() || basenameFromUrl(p.url);
        if (p.assetUid && present.has(p.assetUid)) {
          reports.push(report(p, filename, "?", "skipped-present", "high", "asset already present"));
        } else {
          reports.push(report(p, filename, "?", "skipped-review", "low", "block did not align to any markdown block"));
        }
      }
      continue;
    }
    const mb = mdBlocks[aligned.mdIndex]!;
    const { raw, injected: n } = reconcileBlock(hb, mb, present, reports);
    if (raw !== null) {
      replacements.set(aligned.mdIndex, raw);
      injected += n;
    }
  }

  if (replacements.size === 0) {
    return { changed: false, newContent: fileContent, reports, imagesInHtml, imagesInjected: 0, htmlBlocksTotal, htmlBlocksMatched };
  }

  // Rebuild the body: walk lines, swapping replaced blocks in by line range.
  const lines = body.split("\n");
  const out: string[] = [];
  let li = 0;
  const byStart = new Map<number, MdBlock>();
  for (let bi = 0; bi < mdBlocks.length; bi++) {
    if (replacements.has(bi)) byStart.set(mdBlocks[bi]!.startLine, mdBlocks[bi]!);
  }
  while (li < lines.length) {
    const blk = byStart.get(li);
    if (blk) {
      const idx = mdBlocks.indexOf(blk);
      out.push(replacements.get(idx)!);
      li = blk.endLine;
    } else {
      out.push(lines[li]!);
      li++;
    }
  }

  const newBody = out.join("\n");
  return {
    changed: true,
    newContent: fm + newBody,
    reports,
    imagesInHtml,
    imagesInjected: injected,
    htmlBlocksTotal,
    htmlBlocksMatched,
  };
}
