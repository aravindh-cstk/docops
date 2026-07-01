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
