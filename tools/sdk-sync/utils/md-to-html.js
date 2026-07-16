const MarkdownIt = require('markdown-it');
const sanitizeHtml = require('sanitize-html');

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
});

const SANITIZE_OPTIONS = {
  allowedTags: [
    'p', 'br',
    'h1', 'h2', 'h3', 'h4',
    'strong', 'em', 'b', 'i',
    'ul', 'ol', 'li',
    'a',
    'code', 'pre',
    'blockquote',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'hr', 'span',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'title', 'rel'],
    p: ['class'],
    blockquote: ['class'],
    code: ['class'],
    th: ['colspan', 'rowspan'],
    td: ['colspan', 'rowspan'],
  },
  allowedClasses: {
    p: ['note', 'tip', 'warning'],
    blockquote: ['note', 'tip', 'warning'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowProtocolRelative: false,
};

function markdownToHtml(markdown) {
  if (!markdown || !markdown.trim()) return '';

  // Convert GitHub blockquotes: > **Note:** text → <p class="note">
  const withCallouts = markdown.replace(
    /^>\s*\*\*(Note|Tip|Warning):\*\*\s*(.*)$/gim,
    (_, kind, rest) => {
      const cls = kind.toLowerCase();
      return `<p class="${cls}"><strong>${kind}:</strong> ${rest.trim()}</p>\n\n`;
    }
  );

  const rendered = md.render(withCallouts);
  return sanitizeHtml(rendered, SANITIZE_OPTIONS).trim();
}

module.exports = { markdownToHtml };
