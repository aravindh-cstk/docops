/**
 * The reverse of json-rte-to-html.ts: converts an HTML string (as produced
 * by transform.ts's markdownToHtml, the same converter docs-article.ts
 * already uses) into Contentstack's JSON RTE tree shape, for writing back
 * into product_faqs_2026's faqs[].answer field.
 *
 * Verified live this session that this field rejects a plain HTML string
 * outright ("The field type must be an object") and requires the real tree
 * structure, Contentstack fills in uid/_version on the nodes itself.
 *
 * Covers the node shapes confirmed live in the 946 real FAQ answers this
 * was built against (p, code, ul/ol/li, a, bold, inlineCode text marks),
 * see json-rte-to-html.ts for the read-direction survey this mirrors.
 * Heading tags are mapped best-effort (Contentstack's typical convention is
 * a type matching the tag name) since none of the source data used them,
 * unverified against a live write.
 */

import { parse, type HTMLElement, type Node } from "node-html-parser";

const NODE_ELEMENT = 1;
const NODE_TEXT = 3;

export interface RteOutNode {
  type?: string;
  text?: string;
  bold?: boolean;
  inlineCode?: boolean;
  attrs?: Record<string, unknown>;
  children?: RteOutNode[];
}

function tagOf(node: Node): string {
  return (node as HTMLElement).rawTagName?.toLowerCase() ?? "";
}

function textOf(node: Node): string {
  return (node as unknown as { rawText: string }).rawText ?? "";
}

/** Renders an element's children as inline nodes, applying bold/inlineCode marks from wrapping tags. */
function renderInlineChildren(el: Node, marks: { bold?: boolean; inlineCode?: boolean } = {}): RteOutNode[] {
  const out: RteOutNode[] = [];
  for (const child of el.childNodes) {
    if (child.nodeType === NODE_TEXT) {
      const text = textOf(child);
      if (text === "") continue;
      out.push({ text, ...marks });
      continue;
    }
    if (child.nodeType !== NODE_ELEMENT) continue;
    const tag = tagOf(child);
    switch (tag) {
      case "strong":
      case "b":
        out.push(...renderInlineChildren(child, { ...marks, bold: true }));
        break;
      case "code":
        out.push(...renderInlineChildren(child, { ...marks, inlineCode: true }));
        break;
      case "span": {
        // markdownToHtml renders inline code as <span class="code">, not
        // <code>, per this repo's own house format (transform.ts). A plain
        // span without that class is just a transparent wrapper.
        const isCode = ((child as HTMLElement).getAttribute("class") ?? "") === "code";
        out.push(...renderInlineChildren(child, isCode ? { ...marks, inlineCode: true } : marks));
        break;
      }
      case "a": {
        const href = (child as HTMLElement).getAttribute("href") ?? "";
        out.push({ type: "a", attrs: { url: href }, children: renderInlineChildren(child, marks) });
        break;
      }
      default:
        // Unknown inline tag: keep its text, drop the wrapping semantics
        // rather than dropping the content entirely.
        out.push(...renderInlineChildren(child, marks));
    }
  }
  return out;
}

function renderList(el: HTMLElement, type: "ul" | "ol"): RteOutNode {
  const children: RteOutNode[] = [];
  for (const child of el.childNodes) {
    if (child.nodeType !== NODE_ELEMENT || tagOf(child) !== "li") continue;
    children.push(renderListItem(child as HTMLElement));
  }
  return { type, attrs: {}, children };
}

function renderListItem(el: HTMLElement): RteOutNode {
  const children: RteOutNode[] = [];
  let inlineRun: Node[] = [];

  const flushInline = () => {
    if (inlineRun.length === 0) return;
    // A synthetic container so renderInlineChildren's per-tag switch (bold,
    // inlineCode, a, ...) applies correctly, calling it directly on an <a>
    // or <code> child would recurse into that tag's own children and drop
    // the tag itself, exactly the bug this fixes.
    children.push(...renderInlineChildren({ childNodes: inlineRun } as unknown as HTMLElement));
    inlineRun = [];
  };

  for (const child of el.childNodes) {
    if (child.nodeType === NODE_ELEMENT && (tagOf(child) === "ul" || tagOf(child) === "ol")) {
      flushInline();
      children.push(renderList(child as HTMLElement, tagOf(child) as "ul" | "ol"));
    } else {
      inlineRun.push(child);
    }
  }
  flushInline();

  return { type: "li", attrs: {}, children };
}

const HEADING_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function renderBlockChildren(root: Node): RteOutNode[] {
  const out: RteOutNode[] = [];
  for (const child of root.childNodes) {
    if (child.nodeType !== NODE_ELEMENT) {
      if (child.nodeType === NODE_TEXT && textOf(child).trim() !== "") {
        out.push({ type: "p", attrs: {}, children: [{ text: textOf(child) }] });
      }
      continue;
    }
    const el = child as HTMLElement;
    const tag = tagOf(el);
    if (tag === "p") {
      out.push({ type: "p", attrs: {}, children: renderInlineChildren(el) });
    } else if (tag === "pre") {
      const codeEl = el.childNodes.find((c) => c.nodeType === NODE_ELEMENT && tagOf(c) === "code") as
        | HTMLElement
        | undefined;
      const codeText = codeEl ? textOf(codeEl) : textOf(el);
      const className = codeEl?.getAttribute("class") ?? "";
      const languageMatch = className.match(/language-(\S+)/);
      out.push({
        type: "code",
        attrs: languageMatch ? { language: languageMatch[1] } : {},
        children: [{ text: codeText }],
      });
    } else if (tag === "ul" || tag === "ol") {
      out.push(renderList(el, tag));
    } else if (HEADING_TAGS.has(tag)) {
      out.push({ type: tag, attrs: {}, children: renderInlineChildren(el) });
    } else if (tag === "div" || tag === "section") {
      out.push(...renderBlockChildren(el));
    } else {
      // Unknown block-level tag: preserve its text as a paragraph rather
      // than silently dropping the content.
      const children = renderInlineChildren(el);
      if (children.length > 0) out.push({ type: "p", attrs: {}, children });
    }
  }
  return out;
}

/** Converts an HTML string into a full JSON RTE tree ({type: "doc", children: [...]}). */
export function htmlToJsonRte(html: string): RteOutNode {
  const root = parse(html, { comment: false });
  return { type: "doc", attrs: {}, children: renderBlockChildren(root) };
}
