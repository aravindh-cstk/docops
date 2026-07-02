const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');

const td = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '```',
});

td.use(gfm);

// Contentstack <pre> blocks lack an inner <code> element, so Turndown's default
// code-block rule doesn't fire. Emit a fenced block explicitly.
td.addRule('pre-fenced', {
  filter: 'pre',
  replacement: (content) => {
    const code = content.replace(/\\(.)/g, '$1').trim();
    return `\n\n\`\`\`\n${code}\n\`\`\`\n\n`;
  },
});

// <p class="note|tip|warning"> → > **Note:** ...
// Must run before the default paragraph rule.
td.addRule('callout', {
  filter: (node) => {
    if (node.nodeName !== 'P') return false;
    const cls = node.getAttribute('class') || '';
    return ['note', 'tip', 'warning'].includes(cls);
  },
  replacement: (content, node) => {
    const cls = node.getAttribute('class') || '';
    const kind = cls.charAt(0).toUpperCase() + cls.slice(1);
    // Strip the bold prefix that turndown already converted so we re-emit it cleanly.
    const inner = content.replace(/^\*\*\w+:\*\*\s*/, '').trim();
    return `\n\n> **${kind}:** ${inner}\n\n`;
  },
});

// Contentstack's rich text editor emits <br code="[object Object]"/> inside
// <pre> blocks as a line separator. Replace with a real newline before Turndown
// sees it, otherwise the <br> breaks code block detection.
function preprocessHtml(html) {
  return html.replace(/(<pre[^>]*>)([\s\S]*?)(<\/pre>)/g, (_, open, content, close) =>
    open + content.replace(/<br[^>]*>/gi, '\n') + close
  );
}

function htmlToMarkdown(html) {
  if (!html || !html.trim()) return '';
  return td
    .turndown(preprocessHtml(html))
    .trim()
    // Turndown escapes [ and ] everywhere to avoid accidental link syntax.
    // In heading lines they are always literal text, so unescape them.
    .replace(/^(#{1,6} .+)$/gm, (line) => line.replace(/\\\[/g, '[').replace(/\\\]/g, ']'))
    // The GFM plugin escapes leading - in any content to prevent list rendering,
    // but inside table cells - is always literal. Unescape \- in table rows only.
    .replace(/^\|.+\|$/gm, (row) => row.replace(/\\\-/g, '-'))
    // Turndown escapes * in plain text nodes to prevent accidental emphasis.
    // CMS authors sometimes type **bold** directly in the rich-text editor as raw
    // text rather than using the bold button, which produces <strong>. Restore
    // balanced \*\*...\*\* pairs so they render as bold in the final markdown.
    .replace(/\\\*\\\*(.+?)\\\*\\\*/g, '**$1**');
}

module.exports = { htmlToMarkdown };
