import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findRepoRoot, listChangedDocs, parseArgs } from "./diff.js";
import { fixStyle } from "./style-fix.js";

async function main(): Promise<void> {
  const { base } = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = findRepoRoot(path.join(scriptDir, "../../.."));
  const docsRoot = process.env.CS_DOCS_ROOT ?? "docs";

  const { mdFiles } = listChangedDocs(repoRoot, docsRoot, base);

  if (mdFiles.length === 0) {
    console.log("No doc files to fix.");
    return;
  }

  let totalFixes = 0;
  let filesChanged = 0;

  for (const file of mdFiles) {
    const absPath = path.join(repoRoot, file);
    let content: string;
    try {
      content = fs.readFileSync(absPath, "utf8");
    } catch {
      console.error(`  Could not read ${file} — skipping`);
      continue;
    }

    const { content: fixed, fixes } = fixStyle(content);

    if (fixes.length > 0 && fixed !== content) {
      fs.writeFileSync(absPath, fixed, "utf8");
      console.log(`\n${file} — ${fixes.length} fix(es) applied:`);
      for (const fix of fixes) console.log(`  - ${fix}`);
      totalFixes += fixes.length;
      filesChanged++;
    }
  }

  if (totalFixes === 0) {
    console.log("No auto-fixable issues found.");
  } else {
    console.log(
      `\nAuto-fixed ${totalFixes} issue(s) across ${filesChanged} file(s).`,
    );
    console.log(
      "Run 'npm run lint' to check for remaining issues that need manual attention.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
