/**
 * Resolves a Contentstack user UID to a display name via a locally-maintained
 * index (tools/cs-sync/cms-user-index.json).
 *
 * The CMA has no endpoint to resolve an arbitrary user UID with a stack
 * management token — only an org-level authtoken can, which this integration
 * doesn't have — so unknown UIDs fall back to a clearly-labeled raw UID
 * rather than silently displaying "Unknown".
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const userIndex: Record<string, string> = JSON.parse(
  fs.readFileSync(path.join(scriptDir, "../../cms-user-index.json"), "utf8"),
);

export function getUserName(userUid: string | undefined | null): string {
  if (!userUid) return "Unknown";
  return userIndex[userUid] || `Contentstack user ${userUid}`;
}
