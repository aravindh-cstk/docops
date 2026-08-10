/**
 * Converts Contentstack's JSON RTE tree (the shape returned for "advanced
 * JSON" rich text fields, e.g. product_faqs_2026.faqs[].answer) to HTML, so
 * the existing HTML-to-Markdown pipeline (html-to-md.ts) can be reused
 * unchanged for the final Markdown conversion.
 *
 * Node shapes covered here were catalogued by walking all 946 real FAQ
 * answers across the 4 product_faqs_2026 entries linked from Headless CMS's
 * Support & Troubleshooting section: doc/docs (root wrappers), p, code
 * (block), ul/ol/li, a, fragment/span (inline wrappers), plain text nodes
 * with optional bold/inlineCode marks. No images, tables, or headings
 * appeared anywhere in that survey. An unrecognized node type is rendered
 * as its inline text content and logged, not silently dropped or thrown on,
 * new FAQs added after this was written could introduce a shape not seen
 * in the original survey.
 */

export interface RteNode {
  type?: string;
  text?: string;
  bold?: boolean;
  inlineCode?: boolean;
  attrs?: Record<string, unknown>;
  children?: RteNode[];
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderInline(node: RteNode): string {
  if (typeof node.text === "string") {
    let text = escapeHtml(node.text);
    if (node.inlineCode) text = `<code>${text}</code>`;
    if (node.bold) text = `<strong>${text}</strong>`;
    return text;
  }

  const children = renderInlineChildren(node);

  switch (node.type) {
    case "a": {
      const url = typeof node.attrs?.url === "string" ? node.attrs.url : "";
      return url ? `<a href="${escapeHtml(url)}">${children}</a>` : children;
    }
    case "fragment":
    case "span":
      return children;
    default:
      console.warn(`json-rte-to-html: unrecognized inline node type "${node.type}", rendering its text content only`);
      return children;
  }
}

function renderInlineChildren(node: RteNode): string {
  return (node.children ?? []).map(renderInline).join("");
}

function renderListItem(node: RteNode): string {
  const parts = (node.children ?? []).map((child) => {
    if (child.type === "ul" || child.type === "ol") return renderBlock(child);
    // A <p> directly inside <li> is redundant in HTML output, unwrap it
    // rather than nesting a block element inside the list item's own text.
    if (child.type === "p") return renderInlineChildren(child);
    return renderInline(child);
  });
  return `<li>${parts.join("")}</li>`;
}

function renderBlock(node: RteNode): string {
  switch (node.type) {
    case "doc":
    case "docs":
      return (node.children ?? []).map(renderBlock).join("");
    case "p":
      return `<p>${renderInlineChildren(node)}</p>`;
    case "code": {
      const text = (node.children ?? []).map((c) => c.text ?? "").join("");
      return `<pre><code>${escapeHtml(text)}</code></pre>`;
    }
    case "ul":
      return `<ul>${(node.children ?? []).map(renderBlock).join("")}</ul>`;
    case "ol":
      return `<ol>${(node.children ?? []).map(renderBlock).join("")}</ol>`;
    case "li":
      return renderListItem(node);
    case "fragment":
    case "span":
      // Known inline-wrapper types, occasionally appear directly under
      // doc/docs rather than nested inside a <p>, wrap in one so this still
      // reads as its own paragraph.
      return `<p>${renderInlineChildren(node)}</p>`;
    default:
      console.warn(`json-rte-to-html: unrecognized block node type "${node.type}", rendering its inline content only`);
      return `<p>${renderInlineChildren(node)}</p>`;
  }
}

/** Converts a full JSON RTE tree (the {type: "doc", children: [...]} root) to an HTML string. */
export function jsonRteToHtml(root: RteNode | null | undefined): string {
  if (!root) return "";
  return renderBlock(root);
}
