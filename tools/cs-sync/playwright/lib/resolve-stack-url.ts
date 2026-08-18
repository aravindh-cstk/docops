/**
 * Picks which stack URL a doc-walkthrough run should open, in priority order:
 * an explicit Dev/staging URL for the feature (DEV_STACK_URL), else whichever
 * Sandbox dashboard matches the doc's top-level folder — CS-Docs Sandbox for
 * cs-docs/..., API-Docs Sandbox for api-docs/.... Neither configured (or the
 * doc is outside both folders) resolves to undefined, which the caller treats
 * as "skip this run" rather than guessing a stack.
 */
export function resolveDevStackUrl(docPath: string): string | undefined {
  if (process.env.DEV_STACK_URL) return process.env.DEV_STACK_URL;

  const normalized = docPath.replace(/^\.?\/+/, "");
  if (normalized.startsWith("api-docs/")) return process.env.APIDOCS_SANDBOX_DASHBOARD_URL;
  if (normalized.startsWith("cs-docs/")) return process.env.CSDOCS_SANDBOX_DASHBOARD_URL;
  return undefined;
}
