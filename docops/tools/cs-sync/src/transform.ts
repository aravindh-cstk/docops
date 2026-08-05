import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
});

// Contentstack RTE stores code blocks as bare <pre> with no nested <code> tag.
md.renderer.rules.fence = (tokens, idx) => `<pre>${md.utils.escapeHtml(tokens[idx].content)}</pre>\n`;
md.renderer.rules.code_block = (tokens, idx) => `<pre>${md.utils.escapeHtml(tokens[idx].content)}</pre>\n`;

// Inline code uses <span class="code">, not <code>, per the house doc format.
md.renderer.rules.code_inline = (tokens, idx) => `<span class="code">${md.utils.escapeHtml(tokens[idx].content)}</span>`;

// Links to contentstack.com are internal to the docs site, so they're relativized
// before deciding whether to open in a new tab — only truly external links do.
function relativizeHref(href: string): string {
  const match = href.match(/^https?:\/\/(?:www\.)?contentstack\.com(\/[^\s]*)$/i);
  return match ? match[1] : href;
}

const defaultLinkOpen =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const rawHref = tokens[idx].attrGet("href");
  if (rawHref) {
    const href = relativizeHref(rawHref);
    if (href !== rawHref) tokens[idx].attrSet("href", href);
    if (/^https?:\/\//i.test(href)) tokens[idx].attrSet("target", "_blank");
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

// Every h2/h3 gets an auto-slugged id so in-page anchor links resolve.
function slugifyHeading(text: string): string {
  return text
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/['’]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const defaultHeadingOpen =
  md.renderer.rules.heading_open ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));
md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const tag = tokens[idx].tag;
  if (tag === "h2" || tag === "h3") {
    const inline = tokens[idx + 1];
    tokens[idx].attrSet("id", slugifyHeading(inline.content));
  }
  return defaultHeadingOpen(tokens, idx, options, env, self);
};

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p",
    "br",
    "h2",
    "h3",
    "h4",
    "strong",
    "em",
    "b",
    "i",
    "span",
    "ul",
    "ol",
    "li",
    "a",
    "code",
    "pre",
    "blockquote",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "img",
    "div",
    "iframe",
    "hr",
  ],
  allowedAttributes: {
    a: ["href", "target", "title", "rel"],
    img: ["src", "alt", "title", "height", "width", "asset_uid"],
    div: ["class", "style"],
    p: ["class"],
    span: ["class"],
    h2: ["id"],
    h3: ["id"],
    blockquote: ["class"],
    iframe: [
      "src",
      "width",
      "height",
      "frameborder",
      "scrolling",
      "title",
      "style",
      "allowfullscreen",
    ],
    code: ["class"],
    th: ["colspan", "rowspan"],
    td: ["colspan", "rowspan"],
  },
  allowedClasses: {
    p: ["note", "tip", "warning", "add-resource"],
    div: ["note", "tip", "warning", "add-resource"],
    blockquote: ["note", "tip", "warning"],
    span: ["code"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowProtocolRelative: false,
};

const CALLOUT_CLASSES: Record<string, string> = {
  note: "note",
  notes: "note",
  tip: "tip",
  tips: "tip",
  warning: "warning",
  warnings: "warning",
  "additional resource": "add-resource",
  "additional resources": "add-resource",
};

function calloutClassFor(label: string): string | undefined {
  return CALLOUT_CLASSES[label.toLowerCase().trim()];
}

/**
 * Map blockquotes and bare paragraphs that start with a recognized bold label
 * (Note/Notes, Tip/Tips, Warning/Warnings, Additional Resource/Resources) into
 * callout markup matching the Contentstack doc HTML: an inline label becomes a
 * class-tagged <p>; a label standing alone immediately before a list becomes a
 * <div class="..."> wrapping the label paragraph and the list.
 *
 * Runs after markdown-it rendering (not on the raw markdown) so it works regardless
 * of blockquote indentation/nesting, and doesn't rely on passing raw HTML back through
 * markdown-it, which is configured with html:false and would otherwise escape it.
 */
function applyCallouts(html: string): string {
  // Blockquote form (> **Label:** ...) unwraps to a plain <p>, then falls through
  // to the same labeling pass below as any other callout paragraph.
  const unwrapped = html.replace(
    /<blockquote>\s*<p>\s*<strong>([^<]+):<\/strong>([\s\S]*?)<\/p>\s*<\/blockquote>/gi,
    (match, label: string, rest: string) => (calloutClassFor(label) ? `<p><strong>${label}:</strong>${rest}</p>` : match),
  );

  // Single pass: a bare label immediately followed by a list becomes a <div> wrapper
  // (list captured in the same match so it can't be re-processed by this same regex);
  // a label with inline text becomes a class-tagged <p>.
  return unwrapped.replace(
    /<p>\s*<strong>([^<]+):<\/strong>([\s\S]*?)<\/p>(\s*(<[uo]l>[\s\S]*?<\/[uo]l>))?/gi,
    (match, label: string, rest: string, _listBlock: string | undefined, list: string | undefined) => {
      const cls = calloutClassFor(label);
      if (!cls) return match;
      if (!rest.trim() && list) {
        return `<div class="${cls}"><p><strong>${label}:</strong></p>${list}</div>`;
      }
      return `<p class="${cls}"><strong>${label}:</strong>${rest}</p>${list ?? ""}`;
    },
  );
}

/**
 * The doc title/heading is stored in frontmatter and rendered separately by
 * Contentstack; a leading H1 in the body would duplicate it. Body content
 * should start at H2.
 */
function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+.*(\r?\n)+/, "");
}

export function markdownToHtml(markdown: string): string {
  const rendered = md.render(stripLeadingH1(markdown));
  const withCallouts = applyCallouts(rendered);
  return sanitizeHtml(withCallouts, SANITIZE_OPTIONS).trim();
}
