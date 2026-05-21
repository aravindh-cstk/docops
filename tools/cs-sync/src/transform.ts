import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
});

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p",
    "br",
    "h1",
    "h2",
    "h3",
    "h4",
    "strong",
    "em",
    "b",
    "i",
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
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowProtocolRelative: false,
};

/**
 * Map GitHub-style blockquotes that start with **Note:** / **Tip:** / **Warning:**
 * into callout paragraphs matching Contentstack doc HTML.
 */
export function markdownToHtml(markdown: string): string {
  const withCallouts = markdown.replace(
    /^>\s*\*\*(Note|Tip|Warning):\*\*\s*(.*)$/gim,
    (_, kind: string, rest: string) => {
      const cls = kind.toLowerCase();
      return `<p class="${cls}"><strong>${kind}:</strong> ${rest.trim()}</p>\n\n`;
    },
  );

  const rendered = md.render(withCallouts);
  return sanitizeHtml(rendered, SANITIZE_OPTIONS).trim();
}
