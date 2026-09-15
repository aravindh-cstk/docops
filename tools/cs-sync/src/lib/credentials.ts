/**
 * One place that knows which environment variable holds which stack's credentials.
 *
 * Four vocabularies grew up for the same four stacks, and two of them name the
 * same Prod CS-Docs stack: nav-tree.ts and the backfills read
 * CONTENTSTACK_DOCS_STACK_*, while cms-pull-prod.ts and the promotion scripts
 * read PROD_CSDOCS_STACK_*. master-design.md settles it on the former.
 *
 * Renaming by search would have missed the hot paths. Several callers build the
 * variable name at runtime:
 *
 *     process.env[`${stackType.toUpperCase()}_SANDBOX_STACK_API_KEY`]
 *
 * so the literal string never appears in the file, and those callers serve the
 * two most active workflows. Routing every caller through here means there is
 * no string to miss.
 *
 * Legacy names stay readable for one release. A workflow still passing an old
 * secret keeps working and says so, rather than resolving to nothing and failing
 * somewhere further along as an unexplained 401.
 */

export type StackType = "csdocs" | "apidocs";

export interface StackCredentials {
  apiKey: string;
  managementToken: string;
  /** Which env var names actually supplied these, for logging. */
  source: { apiKey: string; managementToken: string };
  /** True when either value came from a legacy name. */
  usedLegacyName: boolean;
}

/**
 * Candidate names per stack, canonical first.
 *
 * Only csdocs has a canonical pair today. apidocs and the sdk pipeline keep
 * their existing names, because unifying those is a separate decision about
 * separate stacks, and pretending otherwise would point apidocs at the CS-Docs
 * stack.
 */
const PROD_NAMES: Record<StackType, { apiKey: string[]; managementToken: string[] }> = {
  csdocs: {
    apiKey: ["CONTENTSTACK_DOCS_STACK_API_KEY", "PROD_CSDOCS_STACK_API_KEY"],
    managementToken: [
      "CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN",
      "PROD_CSDOCS_STACK_MANAGEMENT_TOKEN",
    ],
  },
  apidocs: {
    apiKey: ["PROD_APIDOCS_STACK_API_KEY"],
    managementToken: ["PROD_APIDOCS_STACK_MANAGEMENT_TOKEN"],
  },
};

const SANDBOX_NAMES: Record<StackType, { apiKey: string[]; managementToken: string[] }> = {
  csdocs: {
    apiKey: ["SANDBOX_CONTENTSTACK_DOCS_STACK_API_KEY", "CSDOCS_SANDBOX_STACK_API_KEY"],
    managementToken: [
      "SANDBOX_CONTENTSTACK_DOCS_STACK_MANAGEMENT_TOKEN",
      "CSDOCS_SANDBOX_MANAGEMENT_TOKEN",
      // A third spelling that only ever appeared in exact-mirror-migration.yml.
      // No code has ever read it, so a run using that workflow silently had no
      // sandbox token at all.
      "CSDOCS_SANDBOX_STACK_MANAGEMENT_TOKEN",
    ],
  },
  apidocs: {
    apiKey: ["APIDOCS_SANDBOX_STACK_API_KEY"],
    managementToken: ["APIDOCS_SANDBOX_MANAGEMENT_TOKEN", "APIDOCS_SANDBOX_STACK_MANAGEMENT_TOKEN"],
  },
};

function firstSet(names: string[]): { value: string; name: string } | null {
  for (const name of names) {
    const value = process.env[name];
    if (value) return { value, name };
  }
  return null;
}

function resolve(
  names: { apiKey: string[]; managementToken: string[] },
  label: string,
): StackCredentials | null {
  const apiKey = firstSet(names.apiKey);
  const managementToken = firstSet(names.managementToken);
  if (!apiKey || !managementToken) return null;

  const usedLegacyName = apiKey.name !== names.apiKey[0] || managementToken.name !== names.managementToken[0];
  if (usedLegacyName) {
    console.warn(
      `  ⚠️  ${label}: using legacy credential name(s) ${[apiKey.name, managementToken.name]
        .filter((n, i) => n !== [names.apiKey[0], names.managementToken[0]][i])
        .join(", ")}. Prefer ${names.apiKey[0]} / ${names.managementToken[0]}.`,
    );
  }

  return {
    apiKey: apiKey.value,
    managementToken: managementToken.value,
    source: { apiKey: apiKey.name, managementToken: managementToken.name },
    usedLegacyName,
  };
}

/** Production credentials, or null when neither the canonical nor legacy pair is set. */
export function prodCredentials(stackType: StackType): StackCredentials | null {
  return resolve(PROD_NAMES[stackType], `${stackType} prod`);
}

/** Sandbox credentials, or null when neither the canonical nor legacy pair is set. */
export function sandboxCredentials(stackType: StackType): StackCredentials | null {
  return resolve(SANDBOX_NAMES[stackType], `${stackType} sandbox`);
}

/** Every name this module will read for a stack, for error messages. */
export function credentialNamesFor(stackType: StackType, which: "prod" | "sandbox"): string[] {
  const names = which === "prod" ? PROD_NAMES[stackType] : SANDBOX_NAMES[stackType];
  return [...names.apiKey, ...names.managementToken];
}
