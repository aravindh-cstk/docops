import type { Page } from "@playwright/test";

// Folder-name tokens that read oddly under plain title-casing — expand only
// as real mismatches turn up; this is a hint for a human to read, not a
// strict lookup, so it doesn't need to (and per Gladys shouldn't try to)
// cover every product name up front.
const ACRONYM_OVERRIDES: Record<string, string> = {
  cms: "CMS",
  api: "API",
};

/**
 * Best-effort, human-readable guess at which App Switcher product a doc's
 * top-level folder corresponds to (e.g. "headless-cms" -> "Headless CMS") —
 * a hint for the pause message below, not a fixed lookup table. Org names,
 * stack names, and exact product tile labels all vary project to project,
 * so this only needs to get a person pointed in the right direction, not
 * drive any automated click.
 */
export function productHint(docPath: string): string {
  const normalized = docPath.replace(/^\.?\/+/, "");
  const folder = normalized.split("/")[1]; // segment after cs-docs/ or api-docs/
  if (!folder) return "the relevant product";

  return folder
    .split("-")
    .map((word) => ACRONYM_OVERRIDES[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * dev11 is the real priority target for real-time verification (Sandbox is
 * only a fallback — see resolve-stack-url.ts), but org names and testing
 * stack names both vary project to project, so there's no fixed URL or
 * selector to automate here. Always pause — same as a first-time login —
 * and let a human handle SAML, org selection, and stack navigation; the
 * walkthrough picks back up once they click Resume, exactly as it does
 * today for the Sandbox path.
 */
export async function pauseForDev11Setup(page: Page, docPath: string): Promise<void> {
  console.log(
    "\nDev11 real-time verification run — this needs a person for the parts that vary by project:\n" +
      "  1. Complete SAML login if prompted.\n" +
      "  2. Click your profile icon -> Switch Organization -> select this project's org.\n" +
      `  3. Use the App Switcher (next to the profile icon) to open the right product — ` +
      `this doc lives under "${docPath}", likely ${productHint(docPath)}.\n` +
      "  4. Navigate to the correct testing stack for the feature/PR being verified.\n" +
      "Then click ▶ Resume in the Playwright Inspector.\n",
  );
  await page.pause();
}
