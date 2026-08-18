/**
 * Picks which stack URL a doc-walkthrough run should open, in priority order:
 *
 * 1. An explicit Dev/staging URL for the feature (DEV_STACK_URL) — the most
 *    specific override, e.g. a PR's own preview stack.
 * 2. The dev11 real-time environment (see isDev11Url below) — the actual
 *    priority target for verifying a feature as it's really being built.
 *    Org names and testing-stack names vary project to project, so there's
 *    no fixed URL to jump straight to here — the walkthrough always pauses
 *    for a human to pick the right org/stack (see the dev11 branch in
 *    doc-walkthrough.spec.ts), same as it would for a first-time login.
 * 3. Whichever Sandbox dashboard matches the doc's top-level folder — CS-Docs
 *    Sandbox for cs-docs/..., API-Docs Sandbox for api-docs/.... This is a
 *    fallback, not the default: reach it by pasting its URL into DEV_STACK_URL
 *    explicitly (tier 1), e.g. when dev11 isn't reachable or isn't relevant.
 *
 * Nothing configured (or the doc is outside both cs-docs/ and api-docs/)
 * resolves to undefined, which the caller treats as "skip this run" rather
 * than guessing a stack.
 */
const DEV11_STACKS_URL = process.env.DEV11_STACKS_URL ?? "https://dev11-app.csnonprod.com/#!/stacks";

export function isDev11Url(url: string): boolean {
  return url === DEV11_STACKS_URL;
}

export function resolveDevStackUrl(docPath: string): string | undefined {
  if (process.env.DEV_STACK_URL) return process.env.DEV_STACK_URL;
  if (DEV11_STACKS_URL) return DEV11_STACKS_URL;

  const normalized = docPath.replace(/^\.?\/+/, "");
  if (normalized.startsWith("api-docs/")) return process.env.APIDOCS_SANDBOX_DASHBOARD_URL;
  if (normalized.startsWith("cs-docs/")) return process.env.CSDOCS_SANDBOX_DASHBOARD_URL;
  return undefined;
}
