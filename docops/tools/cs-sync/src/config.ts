import { z } from "zod";

const envSchema = z.object({
  CS_API_KEY: z.string().min(1),
  CS_MANAGEMENT_TOKEN: z.string().min(1),
  CS_REGION: z.enum(["us", "eu", "azure-na", "azure-eu", "gcp-na"]).default("us"),
  CS_CONTENT_TYPE: z.string().default("docs_article"),
  CS_ENVIRONMENT: z.string().default("production"),
  CS_LOCALE: z.string().default("en-us"),
  CS_DOCS_ROOT: z.string().default("cs-docs"),
});

export type AppConfig = z.infer<typeof envSchema> & {
  baseUrl: string;
  repoRoot: string;
};

const REGION_BASE_URL: Record<string, string> = {
  us: "https://api.contentstack.io/v3",
  eu: "https://eu-api.contentstack.com/v3",
  "azure-na": "https://azure-na-api.contentstack.com/v3",
  "azure-eu": "https://azure-eu-api.contentstack.com/v3",
  "gcp-na": "https://gcp-na-api.contentstack.com/v3",
};

function readEnv(): z.infer<typeof envSchema> {
  const apiKey =
    process.env.CS_API_KEY ?? process.env.CONTENTSTACK_API_KEY ?? "";
  const token =
    process.env.CS_MANAGEMENT_TOKEN ??
    process.env.CONTENTSTACK_MANAGEMENT_TOKEN ??
    "";

  return envSchema.parse({
    CS_API_KEY: apiKey,
    CS_MANAGEMENT_TOKEN: token,
    CS_REGION: process.env.CS_REGION ?? process.env.CONTENTSTACK_REGION ?? "us",
    CS_CONTENT_TYPE:
      process.env.CS_CONTENT_TYPE ??
      process.env.CONTENTSTACK_CONTENT_TYPE ??
      "docs_article",
    CS_ENVIRONMENT:
      process.env.CS_ENVIRONMENT ??
      process.env.CONTENTSTACK_ENVIRONMENT ??
      "production",
    CS_LOCALE: process.env.CS_LOCALE ?? "en-us",
    CS_DOCS_ROOT: process.env.CS_DOCS_ROOT ?? "cs-docs",
  });
}

export function loadConfig(repoRoot: string): AppConfig {
  const env = readEnv();
  return {
    ...env,
    baseUrl: REGION_BASE_URL[env.CS_REGION] ?? REGION_BASE_URL.us,
    repoRoot,
  };
}

// ── Delivery-token (CDA) config ─────────────────────────────────────────────
// The image restore + stub rebuild tooling reads content via the Content
// Delivery API using a delivery token. That path must NOT require a management
// token, so it uses its own schema and its own region→CDA-host map (the CDA
// hosts differ from the CMA hosts in REGION_BASE_URL above).

const deliveryEnvSchema = z.object({
  CS_API_KEY: z.string().min(1),
  CS_DELIVERY_TOKEN: z.string().min(1),
  CS_REGION: z.enum(["us", "eu", "azure-na", "azure-eu", "gcp-na"]).default("us"),
  CS_CONTENT_TYPE: z.string().default("docs_article"),
  CS_ENVIRONMENT: z.string().default("production"),
  CS_LOCALE: z.string().default("en-us"),
  CS_DOCS_ROOT: z.string().default("cs-docs"),
});

export type DeliveryConfig = z.infer<typeof deliveryEnvSchema> & {
  cdaBaseUrl: string;
  repoRoot: string;
};

const REGION_CDA_URL: Record<string, string> = {
  us: "https://cdn.contentstack.io/v3",
  eu: "https://eu-cdn.contentstack.com/v3",
  "azure-na": "https://azure-na-cdn.contentstack.com/v3",
  "azure-eu": "https://azure-eu-cdn.contentstack.com/v3",
  "gcp-na": "https://gcp-na-cdn.contentstack.com/v3",
};

export function loadDeliveryConfig(repoRoot: string): DeliveryConfig {
  const env = deliveryEnvSchema.parse({
    CS_API_KEY: process.env.CS_API_KEY ?? process.env.CONTENTSTACK_API_KEY ?? "",
    CS_DELIVERY_TOKEN:
      process.env.CS_DELIVERY_TOKEN ??
      process.env.CONTENTSTACK_DELIVERY_TOKEN ??
      "",
    CS_REGION: process.env.CS_REGION ?? process.env.CONTENTSTACK_REGION ?? "us",
    CS_CONTENT_TYPE:
      process.env.CS_CONTENT_TYPE ??
      process.env.CONTENTSTACK_CONTENT_TYPE ??
      "docs_article",
    CS_ENVIRONMENT:
      process.env.CS_ENVIRONMENT ??
      process.env.CONTENTSTACK_ENVIRONMENT ??
      process.env.CONTENTSTACK_ENV ??
      "production",
    CS_LOCALE: process.env.CS_LOCALE ?? "en-us",
    CS_DOCS_ROOT: process.env.CS_DOCS_ROOT ?? "cs-docs",
  });

  // Allow an explicit host override (e.g. a custom CDN domain) via env.
  const hostOverride =
    process.env.CONTENTSTACK_API_HOST ?? process.env.CS_CDA_HOST ?? "";
  const cdaBaseUrl = hostOverride
    ? `${hostOverride.replace(/\/+$/, "")}/v3`
    : REGION_CDA_URL[env.CS_REGION] ?? REGION_CDA_URL.us;

  return { ...env, cdaBaseUrl, repoRoot };
}
