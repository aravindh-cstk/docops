import "./loadEnv.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConfig } from "./config.js";
import { findRepoRoot } from "./diff.js";
import { ContentstackClient } from "./contentstack.js";
import { runSync } from "./sync.js";
import { resolveApiDocsContentType, buildApiDocsPayload, resolveApiDocsEntryLookup } from "./api-docs-routing.js";

function parseArgs(argv: string[]): { before: string; after: string } {
  let before = "";
  let after = "";
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--before" && argv[i + 1]) before = argv[++i];
    if (argv[i] === "--after" && argv[i + 1]) after = argv[++i];
  }
  if (!before || !after) {
    console.error("Usage: npm run sync:api-docs -- --before <sha> --after <sha>");
    process.exit(1);
  }
  return { before, after };
}

async function main(): Promise<void> {
  const { before, after } = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const config = loadConfig(repoRoot);
  const client = new ContentstackClient(config);

  console.log(
    `Syncing api-docs/**/*.md (${before.slice(0, 7)}..${after.slice(0, 7)}) → APIDocs Sandbox`,
  );

  await runSync(config, client, before, after, {
    resolveContentType: (doc) => resolveApiDocsContentType(doc.relativePath, doc.frontMatter.doc_type),
    buildPayload: (doc, html) => buildApiDocsPayload(doc.frontMatter, html),
    resolveEntryLookup: (doc) => resolveApiDocsEntryLookup(doc),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
