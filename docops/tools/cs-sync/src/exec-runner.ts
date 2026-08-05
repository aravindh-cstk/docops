import type { ClassifiedStep, ClassifiedSteps, StepIntent } from "./exec-classifier.js";

export interface StepResult {
  step: number;
  rawText: string;
  intent: string;
  phase?: string;
  status: "pass" | "fail" | "skip";
  toolCalled?: string;
  errorMessage?: string;
}

export interface ExecutionReport {
  docPath: string;
  prNumber: number;
  sandboxStackUid: string;
  steps: StepResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
  };
  overallStatus: "pass" | "fail";
}

interface SandboxContext {
  apiKey: string;
  managementToken: string;
  stackUid: string;
  region: string;
  baseUrl: string;
}

// --- Sandbox lifecycle ---

async function createSandboxStack(
  orgManagementToken: string,
  orgUid: string,
  prNumber: number,
  region: string,
): Promise<SandboxContext> {
  const baseUrl =
    region === "eu" ? "https://eu-api.contentstack.com" : "https://api.contentstack.io";
  const stackName = `doc-exec-test-pr${prNumber}-${Date.now()}`;

  const res = await fetchJson<{ stack: { api_key: string; uid: string } }>(
    `${baseUrl}/v3/stacks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: orgManagementToken,
        organization_uid: orgUid,
      },
      body: JSON.stringify({
        stack: {
          name: stackName,
          description: "Automated doc execution test — auto-deleted after run",
          master_locale: "en-us",
        },
      }),
    },
    "create sandbox stack",
  );

  const { api_key: apiKey, uid: stackUid } = res.stack;

  const tokenRes = await fetchJson<{ token: { token: string } }>(
    `${baseUrl}/v3/stacks/management_tokens`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: apiKey,
        authtoken: orgManagementToken,
      },
      body: JSON.stringify({
        token: {
          name: "exec-test-token",
          description: "Auto-generated for doc execution test",
          scope: [
            { module: "content_type", acl: { read: true, write: true } },
            { module: "entry", acl: { read: true, write: true } },
            { module: "environment", acl: { read: true, write: true } },
            { module: "asset", acl: { read: true, write: true } },
          ],
        },
      }),
    },
    "create management token",
  );

  return {
    apiKey,
    managementToken: tokenRes.token.token,
    stackUid,
    region,
    baseUrl,
  };
}

async function deleteSandboxStack(
  orgManagementToken: string,
  sandbox: SandboxContext,
): Promise<void> {
  await fetch(`${sandbox.baseUrl}/v3/stacks`, {
    method: "DELETE",
    headers: { api_key: sandbox.apiKey, authtoken: orgManagementToken },
  }).catch(() => {});
}

// --- Parameter extraction from step text ---

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 40);
}

interface ExtractedParams {
  uid?: string;
  title?: string;
  name?: string;
  fieldUid?: string;
  fieldType?: string;
  environmentName?: string;
  releaseName?: string;
  webhookUrl?: string;
  tokenName?: string;
}

const QUOTED_WORD_RE = /[`"']([^`"']+)[`"']/g;
const FIELD_TYPES: Record<string, string> = {
  text: "text",
  number: "number",
  boolean: "boolean",
  date: "isodate",
  file: "file",
  link: "link",
  json: "json",
  rte: "rte",
  reference: "reference",
  global: "global_field",
  url: "text",
  select: "select",
};

function extractParams(rawText: string): ExtractedParams {
  const quoted: string[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(QUOTED_WORD_RE.source, "g");
  while ((m = re.exec(rawText)) !== null) {
    quoted.push(m[1]);
  }

  const params: ExtractedParams = {};
  if (quoted[0]) {
    params.uid = slugify(quoted[0]);
    params.title = quoted[0];
    params.name = quoted[0];
  }
  if (quoted[1]) {
    params.fieldUid = slugify(quoted[1]);
  }

  for (const [keyword, csType] of Object.entries(FIELD_TYPES)) {
    if (new RegExp(`\\b${keyword}\\b`, "i").test(rawText)) {
      params.fieldType = csType;
      break;
    }
  }

  if (/webhook/i.test(rawText)) {
    params.webhookUrl = "https://example.com/webhook-test";
  }

  return params;
}

// --- CMA helpers ---

function stackHeaders(sandbox: SandboxContext): Record<string, string> {
  return {
    "Content-Type": "application/json",
    api_key: sandbox.apiKey,
    authorization: sandbox.managementToken,
  };
}

async function fetchJson<T>(url: string, opts: RequestInit, context: string): Promise<T> {
  const res = await fetch(url, opts);
  const text = await res.text();
  if (!res.ok) {
    let msg = text;
    try {
      const parsed = JSON.parse(text) as { error_message?: string; errors?: unknown };
      msg = parsed.error_message ?? JSON.stringify(parsed.errors ?? text);
    } catch {}
    throw new Error(`${context} failed (${res.status}): ${msg}`);
  }
  return JSON.parse(text) as T;
}

// --- Intent handlers ---

type IntentHandler = (
  step: ClassifiedStep,
  sandbox: SandboxContext,
  state: ExecutionState,
) => Promise<string>;

interface ExecutionState {
  contentTypeUid?: string;
  entryUid?: string;
  environmentUid?: string;
  releaseUid?: string;
  webhookUid?: string;
}

const intentHandlers: Partial<Record<StepIntent, IntentHandler>> = {
  async "create-stack"(_step, sandbox) {
    // Stack already exists (created during sandbox setup)
    return `Stack ${sandbox.stackUid} already provisioned`;
  },

  async "create-content-type"(step, sandbox, state) {
    const p = extractParams(step.rawText);
    const uid = p.uid ?? "test_ct";
    const title = p.title ?? "Test Content Type";
    await fetchJson(
      `${sandbox.baseUrl}/v3/content_types`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({
          content_type: {
            title,
            uid,
            schema: [{ display_name: "Title", uid: "title", data_type: "text", mandatory: true }],
          },
        }),
      },
      `create content type '${uid}'`,
    );
    state.contentTypeUid = uid;
    return `Created content type '${uid}'`;
  },

  async "add-field"(step, sandbox, state) {
    const ctUid = state.contentTypeUid ?? "test_ct";
    const p = extractParams(step.rawText);
    const fieldUid = p.fieldUid ?? p.uid ?? "test_field";
    const dataType = p.fieldType ?? "text";
    // Fetch existing schema first
    const existing = await fetchJson<{ content_type: { schema: unknown[]; _version: number } }>(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}`,
      { method: "GET", headers: stackHeaders(sandbox) },
      `fetch content type '${ctUid}'`,
    );
    const schema = [
      ...existing.content_type.schema,
      { display_name: fieldUid.replace(/_/g, " "), uid: fieldUid, data_type: dataType },
    ];
    await fetchJson(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}`,
      {
        method: "PUT",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ content_type: { schema } }),
      },
      `add field '${fieldUid}' to '${ctUid}'`,
    );
    return `Added field '${fieldUid}' (${dataType}) to '${ctUid}'`;
  },

  async "create-entry"(step, sandbox, state) {
    const ctUid = state.contentTypeUid ?? "test_ct";
    const p = extractParams(step.rawText);
    const res = await fetchJson<{ entry: { uid: string } }>(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}/entries`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ entry: { title: p.title ?? "Test Entry" } }),
      },
      `create entry in '${ctUid}'`,
    );
    state.entryUid = res.entry.uid;
    return `Created entry '${res.entry.uid}' in '${ctUid}'`;
  },

  async "create-entry-invalid"(step, sandbox, state) {
    // Deliberately create an entry missing required fields to reproduce an error
    const ctUid = state.contentTypeUid ?? "test_ct";
    const res = await fetchJson<{ entry: { uid: string } }>(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}/entries`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ entry: {} }),
      },
      `create invalid entry in '${ctUid}'`,
    );
    state.entryUid = res.entry.uid;
    return `Created entry with missing fields (reproducing error condition)`;
  },

  async "publish-entry"(_step, sandbox, state) {
    const ctUid = state.contentTypeUid ?? "test_ct";
    const entryUid = state.entryUid;
    const envName = state.environmentUid ?? "development";
    if (!entryUid) throw new Error("No entry to publish — ensure 'create entry' step ran first");
    await fetchJson(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}/entries/${entryUid}/publish`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({
          entry: { environments: [envName], locales: ["en-us"] },
        }),
      },
      `publish entry '${entryUid}'`,
    );
    return `Published entry '${entryUid}' to '${envName}'`;
  },

  async "unpublish-entry"(_step, sandbox, state) {
    const ctUid = state.contentTypeUid ?? "test_ct";
    const entryUid = state.entryUid;
    const envName = state.environmentUid ?? "development";
    if (!entryUid) throw new Error("No entry to unpublish — ensure 'create entry' step ran first");
    await fetchJson(
      `${sandbox.baseUrl}/v3/content_types/${ctUid}/entries/${entryUid}/unpublish`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({
          entry: { environments: [envName], locales: ["en-us"] },
        }),
      },
      `unpublish entry '${entryUid}'`,
    );
    return `Unpublished entry '${entryUid}' from '${envName}'`;
  },

  async "create-environment"(step, sandbox, state) {
    const p = extractParams(step.rawText);
    const name = p.name ?? "staging";
    const res = await fetchJson<{ environment: { uid: string } }>(
      `${sandbox.baseUrl}/v3/environments`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ environment: { name, urls: [{ url: "https://example.com", locale: "en-us" }] } }),
      },
      `create environment '${name}'`,
    );
    state.environmentUid = name;
    return `Created environment '${name}' (${res.environment.uid})`;
  },

  async "create-release"(step, sandbox, state) {
    const p = extractParams(step.rawText);
    const name = p.name ?? "Test Release";
    const res = await fetchJson<{ release: { uid: string } }>(
      `${sandbox.baseUrl}/v3/releases`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ release: { name, description: "Doc execution test release" } }),
      },
      `create release '${name}'`,
    );
    state.releaseUid = res.release.uid;
    return `Created release '${name}' (${res.release.uid})`;
  },

  async "deploy-release"(_step, sandbox, state) {
    const releaseUid = state.releaseUid;
    const env = state.environmentUid ?? "development";
    if (!releaseUid) throw new Error("No release to deploy — ensure 'create release' step ran first");
    await fetchJson(
      `${sandbox.baseUrl}/v3/releases/${releaseUid}/deploy`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ release: { environments: [env], locales: ["en-us"], action: "publish" } }),
      },
      `deploy release '${releaseUid}'`,
    );
    return `Deployed release '${releaseUid}' to '${env}'`;
  },

  async "create-webhook"(step, sandbox, state) {
    const p = extractParams(step.rawText);
    const name = p.name ?? "Test Webhook";
    const res = await fetchJson<{ webhook: { uid: string } }>(
      `${sandbox.baseUrl}/v3/webhooks`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({
          webhook: {
            name,
            destinations: [{ target_url: p.webhookUrl ?? "https://example.com/webhook", http_basic_auth: "", http_basic_password: "", custom_header: [] }],
            channels: ["assets.create"],
            retry_policy: "manual",
            disabled: false,
          },
        }),
      },
      `create webhook '${name}'`,
    );
    state.webhookUid = res.webhook.uid;
    return `Created webhook '${name}' (${res.webhook.uid})`;
  },

  async "create-token"(step, sandbox) {
    const p = extractParams(step.rawText);
    const name = p.name ?? "Test Token";
    const isDelivery = /delivery/i.test(step.rawText);
    if (isDelivery) {
      await fetchJson(
        `${sandbox.baseUrl}/v3/stacks/delivery_tokens`,
        {
          method: "POST",
          headers: stackHeaders(sandbox),
          body: JSON.stringify({
            token: { name, description: "Doc execution test token", scope: [{ module: "environment", acl: { read: true }, environments: [{ name: "development", uid: "" }] }] },
          }),
        },
        `create delivery token '${name}'`,
      );
    } else {
      await fetchJson(
        `${sandbox.baseUrl}/v3/stacks/management_tokens`,
        {
          method: "POST",
          headers: stackHeaders(sandbox),
          body: JSON.stringify({
            token: { name, description: "Doc execution test token", scope: [{ module: "content_type", acl: { read: true, write: true } }] },
          }),
        },
        `create management token '${name}'`,
      );
    }
    return `Created ${isDelivery ? "delivery" : "management"} token '${name}'`;
  },

  async "create-taxonomy"(step, sandbox) {
    const p = extractParams(step.rawText);
    const uid = p.uid ?? "test_taxonomy";
    const name = p.name ?? "Test Taxonomy";
    await fetchJson(
      `${sandbox.baseUrl}/v3/taxonomies`,
      {
        method: "POST",
        headers: stackHeaders(sandbox),
        body: JSON.stringify({ taxonomy: { uid, name, description: "" } }),
      },
      `create taxonomy '${uid}'`,
    );
    return `Created taxonomy '${uid}'`;
  },

  async "navigate-ui"() {
    return "SKIP: UI navigation — not testable via API";
  },

  async "unknown"() {
    return "SKIP: unknown intent";
  },
};

// --- Main runner ---

export async function runExecution(
  classified: ClassifiedSteps,
  prNumber: number,
): Promise<ExecutionReport> {
  const orgManagementToken = process.env.CS_SANDBOX_MANAGEMENT_TOKEN;
  const orgUid = process.env.CS_SANDBOX_ORG_UID;
  const region = process.env.CS_REGION ?? "us";

  if (!orgManagementToken) throw new Error("CS_SANDBOX_MANAGEMENT_TOKEN is required");
  if (!orgUid) throw new Error("CS_SANDBOX_ORG_UID is required");

  const sandbox = await withRetry(
    () => createSandboxStack(orgManagementToken, orgUid, prNumber, region),
    3,
    5000,
  );

  const results: StepResult[] = [];
  const state: ExecutionState = {};

  try {
    for (const step of classified.steps) {
      if (step.classification === "SKIP") {
        results.push({
          step: step.index,
          rawText: step.rawText,
          intent: step.intent,
          phase: step.phase,
          status: "skip",
          errorMessage: step.skipReason,
        });
        continue;
      }

      const handler = intentHandlers[step.intent];
      if (!handler) {
        results.push({
          step: step.index,
          rawText: step.rawText,
          intent: step.intent,
          phase: step.phase,
          status: "skip",
          errorMessage: `No handler for intent '${step.intent}'`,
        });
        continue;
      }

      try {
        const detail = await handler(step, sandbox, state);
        const isSkipResult = detail.startsWith("SKIP:");
        results.push({
          step: step.index,
          rawText: step.rawText,
          intent: step.intent,
          phase: step.phase,
          status: isSkipResult ? "skip" : "pass",
          toolCalled: `cma:${step.intent}`,
          errorMessage: isSkipResult ? detail.slice(6).trim() : undefined,
        });
      } catch (err) {
        const error = String(err instanceof Error ? err.message : err);
        // For reproduce-phase steps that expect failure, a CMA error is actually a PASS
        if (step.phase === "reproduce" && step.expectFailure) {
          results.push({
            step: step.index,
            rawText: step.rawText,
            intent: step.intent,
            phase: step.phase,
            status: "pass",
            toolCalled: `cma:${step.intent}`,
            errorMessage: `Expected error confirmed: ${error}`,
          });
        } else {
          results.push({
            step: step.index,
            rawText: step.rawText,
            intent: step.intent,
            phase: step.phase,
            status: "fail",
            toolCalled: `cma:${step.intent}`,
            errorMessage: error,
          });
        }
      }
    }
  } finally {
    await deleteSandboxStack(orgManagementToken, sandbox);
  }

  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const skipped = results.filter((r) => r.status === "skip").length;

  return {
    docPath: classified.docPath,
    prNumber,
    sandboxStackUid: sandbox.stackUid,
    steps: results,
    summary: { total: results.length, passed, failed, skipped },
    overallStatus: failed > 0 ? "fail" : "pass",
  };
}

async function withRetry<T>(fn: () => Promise<T>, attempts: number, delayMs: number): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw lastError;
}
