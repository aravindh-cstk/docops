import TurndownService from "turndown";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error — turndown-plugin-gfm ships no bundled types
import { gfm } from "turndown-plugin-gfm";

const td = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  fence: "```",
});

td.use(gfm);

// Contentstack <pre> blocks lack an inner <code> element, so Turndown's default
// code-block rule doesn't fire. Emit a fenced block explicitly.
td.addRule("pre-fenced", {
  filter: "pre",
  replacement: (content) => {
    const code = content.replace(/\\(.)/g, "$1").trim();
    return `\n\n\`\`\`\n${code}\n\`\`\`\n\n`;
  },
});

// <p class="note|tip|warning|add-resource"> → **Note:** ... on its own line.
// Callouts are preserved as callouts, never flattened into the preceding block.
// Emits the bare `**Label:**` paragraph form (no blockquote marker) that
// transform.ts round-trips back into <p class="..."> on the push side.
const CALLOUT_LABEL: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  "add-resource": "Additional Resource",
};

// Must run before the default paragraph rule.
td.addRule("callout", {
  filter: (node) => {
    if (node.nodeName !== "P") return false;
    const cls = (node as Element).getAttribute("class") ?? "";
    return cls in CALLOUT_LABEL;
  },
  replacement: (content, node) => {
    const cls = (node as Element).getAttribute("class") ?? "";
    const label = CALLOUT_LABEL[cls] ?? cls.charAt(0).toUpperCase() + cls.slice(1);
    // Strip whatever bold label prefix turndown already produced (handles both
    // "**Note:**" and "**Note**:") so we re-emit it cleanly and uniformly.
    const inner = content.replace(/^\s*\*\*[^*]+?\*\*:?\s*/, "").trim();
    return `\n\n**${label}:** ${inner}\n\n`;
  },
});

// <img> → ![alt](url). Turndown's default only reads `src`; Contentstack lazy-
// loads with `data-src` (and sometimes `srcset`), which the default silently
// drops (the s61 gap). Resolve src → data-src → first srcset URL, and keep the
// URL as-is so either CDN host format survives.
function firstSrcset(srcset: string | null): string {
  if (!srcset) return "";
  const first = srcset.split(",")[0]?.trim() ?? "";
  return first.split(/\s+/)[0] ?? "";
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

td.addRule("cs-img", {
  filter: "img",
  replacement: (_content, node) => {
    const el = node as Element;
    const src =
      el.getAttribute("src") ||
      el.getAttribute("data-src") ||
      firstSrcset(el.getAttribute("srcset")) ||
      "";
    if (!src) return "";
    const alt = (el.getAttribute("alt") ?? "").trim() || basenameFromUrl(src);
    return `![${escapeAlt(alt)}](${src})`;
  },
});

// Contentstack's rich text editor emits <br code="[object Object]"/> inside
// <pre> blocks as a line separator. Replace with a real newline before Turndown
// sees it, otherwise the <br> breaks code block detection.
function preprocessHtml(html: string): string {
  return html.replace(/(<pre[^>]*>)([\s\S]*?)(<\/pre>)/g, (_, open, content, close) =>
    open + content.replace(/<br[^>]*>/gi, "\n") + close,
  );
}

export function htmlToMarkdown(html: string): string {
  return td
    .turndown(preprocessHtml(html))
    .trim()
    // Turndown escapes [ and ] everywhere to avoid accidental link syntax.
    // In heading lines they are always literal text, so unescape them.
    .replace(/^(#{1,6} .+)$/gm, (line) => line.replace(/\\\[/g, "[").replace(/\\\]/g, "]"))
    // The GFM plugin escapes leading - in any content to prevent list rendering,
    // but inside table cells - is always literal. Unescape \- in table rows only.
    .replace(/^\|.+\|$/gm, (row) => row.replace(/\\\-/g, "-"))
    // Turndown escapes * in plain text nodes to prevent accidental emphasis.
    // CMS authors sometimes type **bold** directly in the rich-text editor as raw
    // text rather than using the bold button, which produces <strong>. Restore
    // balanced \*\*...\*\* pairs so they render as bold in the final markdown.
    .replace(/\\\*\\\*(.+?)\\\*\\\*/g, "**$1**");
}
