import { extractHeading, type DocFrontMatter } from "./parser.js";

export interface ArticleSectionBlock {
  article_section: {
    heading: string;
    content: string;
    _metadata?: { uid: string };
  };
}

export interface SyncEntryPayload {
  title: string;
  url?: string; // optional for CMS types that have no url field (e.g. openapi, main_section_api_references)
  description?: string;
  article_content?: ArticleSectionBlock[];
  [key: string]: unknown;
}

export function buildEntryPayload(
  frontMatter: DocFrontMatter,
  htmlContent: string,
  existingArticleContent?: unknown,
): SyncEntryPayload {
  const section: ArticleSectionBlock["article_section"] = {
    heading: extractHeading(frontMatter.title),
    content: htmlContent,
  };

  const preservedUid = extractBlockMetadataUid(existingArticleContent);
  if (preservedUid) {
    section._metadata = { uid: preservedUid };
  }

  const payload: SyncEntryPayload = {
    title: frontMatter.title,
    url: frontMatter.url,
    article_content: [{ article_section: section }],
  };

  if (frontMatter.description) {
    payload.description = frontMatter.description;
  }

  return payload;
}

function extractBlockMetadataUid(articleContent: unknown): string | undefined {
  if (!Array.isArray(articleContent) || articleContent.length === 0) {
    return undefined;
  }
  const first = articleContent[0] as Record<string, unknown>;
  const block = first?.article_section as Record<string, unknown> | undefined;
  const meta = block?._metadata as { uid?: string } | undefined;
  return typeof meta?.uid === "string" ? meta.uid : undefined;
}
