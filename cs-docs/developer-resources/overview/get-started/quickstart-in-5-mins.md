---
title: "Quickstart in 5 mins"
description: "Fetch live content from Contentstack in under a minute. Pick the CLI fast path or follow the full walkthrough."
url: /headless-cms/quickstart-in-5-mins
---

# Quickstart in 5 mins

## Quickstart in 5 Minutes

This quickstart takes you from zero to a working Content Delivery API response. Choose how you want to start: run the CLI to scaffold a real project with sample content in a few minutes, or follow the full walkthrough to wire your own stack.

**When to use this:** Use this page on your first evaluation of Contentstack, when you want real content flowing into your own environment before you read anything deeper.

## Choose Your Starting Path

Pick the path that matches how you want to start. The CLI path provisions sample content for you; the walkthrough uses a stack you set up yourself.

| Path | Setup | Needs | What you get |
| --- | --- | --- | --- |
| **CLI fast path** | A few minutes | A Contentstack account | Scaffolds a starter app and seeds a stack on your machine. |
| **Full walkthrough** | 5 minutes | A stack with a published entry | Step-by-step setup with three runnable examples. |

## Prerequisites

You need the following before you start:

-   Node.js version 18 or later. Check your version with the node -v command.
-   A Contentstack account. The free trial covers the CLI fast path.
-   For the curl and SDK examples only: a stack with at least one published entry, its stack API key, and a delivery token. The CLI fast path creates and seeds this for you.

## CLI Fast Path

Scaffold a starter app on your machine with the Contentstack CLI. Install it once, log in, then bootstrap a project that seeds a stack with sample content.

```
# 1. Install the CLI (once).
npm install -g @contentstack/cli

# 2. Log in. Opens a browser to authenticate.
csdx auth:login

# 3. Scaffold a starter app, seed a stack with content, and start the dev server.
# Prompts you to choose or create an organization and stack.
csdx cm:bootstrap --app-name kickstart-next --project-dir ./my-app --run-dev-server
```

The bootstrap command prompts you to choose or create an organization and stack, imports sample content, then starts the dev server. When it finishes, open http://localhost:3000 to see a running app that pulls live content from Contentstack.

**Tip:** To wire your own existing stack instead of a starter, follow the [full walkthrough](#full-walkthrough).

## Choose Your Framework

Contentstack provides a dedicated kickstart for each major framework. Each link opens that framework's kickstart guide, with setup and rendering patterns specific to it.

| Framework | Kickstart guide |
| --- | --- |
| Next.js | [Next.js kickstart](/docs/headless-cms/next) |
| Nuxt | [Nuxt kickstart](/docs/headless-cms/nuxt) |
| Astro | [Astro kickstart](/docs/headless-cms/astro) |
| React | [React kickstart](/docs/headless-cms/react) |
| SvelteKit | [SvelteKit kickstart](/docs/headless-cms/sveltekit) |

## Full Walkthrough

This section configures your credentials once, then shows three equivalent ways to fetch the same content: raw HTTP with curl, the Node.js SDK, and the CLI. Each example runs with a single copy and paste after its prerequisite is in place.

### Configure your API key and delivery token

A Content Delivery API request needs two values: your stack API key, which identifies the stack, and a delivery token, which is a read-only credential scoped to one environment.

To find both values, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Go to your stack and navigate to **Settings** > **Tokens** > **Delivery Tokens**.
2.  Open the delivery token for your target environment, for example production. The token value and the stack API key both appear on this screen.
3.  Copy both values into the environment file.

Store credentials in environment variables, never as hard-coded values in source. Create a .env.local file at your project root and add your real values:

```
# .env.local — add this file to .gitignore so it is never committed.
CONTENTSTACK_API_KEY=blt0123456789abcdef
CONTENTSTACK_DELIVERY_TOKEN=cs0123456789abcdef
CONTENTSTACK_ENVIRONMENT=production
```

Load the file into your current shell before you run the curl or Node.js examples:

```
# Exports the variables into the current shell session.
set -a && source .env.local && set +a
```

**Warning:** A delivery token is a read-only credential. Mask it in screenshots and keep it out of version control.

**Note:** The curl and SDK examples below read from an existing content type with a published entry. If you started from the CLI fast path, you already have this. If you're using your own empty stack, publish an entry first, or run the CLI fast path to seed one.

### Option A: curl

Use curl for a raw HTTP request with no SDK or project. The Content Delivery API requires two headers: api\_key identifies the stack, and access\_token carries your delivery token. Both values read from the environment variables you loaded in the previous step.

```
# The region is the host. North America: cdn.contentstack.io. EU: eu-cdn.contentstack.com.
# For Australia, Azure, and GCP hosts, see About Regions.
CS_HOST="cdn.contentstack.io"

curl --fail --show-error --silent \
  --retry 2 --retry-delay 1 --retry-all-errors \
  -H "api_key: $CONTENTSTACK_API_KEY" \
  -H "access_token: $CONTENTSTACK_DELIVERY_TOKEN" \
  "https://$CS_HOST/v3/content_types/blog_post/entries?environment=$CONTENTSTACK_ENVIRONMENT"
```

**Note:** cdn.contentstack.io serves stacks in the North America region. Set CS\_HOST to your region's Content Delivery host for EU, Australia, Azure, or GCP stacks. Refer to [About Regions](/docs/administration/about-regions).

**Expected output:** A JSON payload of blog\_post entries confirms the request works.

```
{
  "entries": [
    {
      "uid": "blt1a2b3c4d5e6f7890",
      "title": "How to Use Contentstack",
      "url": "/how-to-use-contentstack"
    }
  ]
}
```

A 401 response means the credentials are wrong. Recheck the token under **Settings** > **Tokens**.

### Option B: Node.js SDK (TypeScript)

This example is production-ready: it is typed, retried, error-handled, and logged. It compiles under tsc --strict. First, install the SDK.

```
# Prerequisite: Node.js 18 or later.
npm install @contentstack/delivery-sdk
```

The script below reads your credentials from the environment, fetches entries with a retry on transient failures, and logs the result. Each block carries a short comment explaining why it exists.

```
// hello-content.ts — run with: npx tsx hello-content.ts
import contentstack, { BaseEntry, Region } from "@contentstack/delivery-sdk";

// Response shape: extend BaseEntry, which supplies uid, title, and system fields.
interface BlogPost extends BaseEntry {
  url: string;
}

// Reads a required env var, or fails with a clear, actionable message.
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. See "Configure your API key" above.`);
  }
  return value;
}

// Retries a transient failure up to twice with exponential back-off.
async function withRetry<T>(fn: () => Promise<T>, attempts = 3, baseMs = 300): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempts - 1) throw error; // retries exhausted
      const delayMs = baseMs * 2 ** i; // 300ms, then 600ms
      console.error(`Attempt ${i + 1} failed; retrying in ${delayMs}ms`, error);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
  throw new Error("Unreachable");
}

// Credentials come from environment variables, never hard-coded values.
// Default region is North America. For others, pass `region` or a custom `host`.
const stack = contentstack.stack({
  apiKey: requireEnv("CONTENTSTACK_API_KEY"),
  deliveryToken: requireEnv("CONTENTSTACK_DELIVERY_TOKEN"),
  environment: requireEnv("CONTENTSTACK_ENVIRONMENT"),
  region: Region.US, // e.g. Region.EU, Region.AZURE_NA, Region.GCP_NA
});

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const result = await withRetry(() =>
      stack.contentType("blog_post").entry().find<BlogPost>()
    );
    const entries: BlogPost[] = result.entries ?? [];
    console.info(`Fetched ${entries.length} blog post(s).`); // success log
    return entries;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to fetch blog posts: ${message}`); // failure log
    throw error;
  }
}

getBlogPosts()
  .then((posts) => console.info(posts))
  .catch(() => process.exit(1));
```

**Expected output:** The console logs the entry count, then the entries.

```
# Fetched 1 blog post(s).
# [ { uid: 'blt1a2b3c4d5e6f7890', title: 'How to Use Contentstack', url: '/how-to-use-contentstack' } ]
```

### Option C: CLI bootstrap

This is the same flow as the CLI fast path, repeated here so the walkthrough stands on its own.

```
# Prerequisite: Node.js 18 or later.
npm install -g @contentstack/cli
csdx auth:login
csdx cm:bootstrap --app-name nextjs-starter --project-dir ./my-app --run-dev-server
```

Open http://localhost:3000 to see the running app.

## Next Steps

You now have a working Content Delivery API response. Build on it with the resources below:

-   Open your [framework kickstart](/docs/headless-cms/nuxt) for routing, rendering, and caching patterns.
-   Add filters, pagination, and references with the [Get Started with TypeScript Delivery SDK](/docs/developers/sdks/content-delivery-sdk/typescript/get-started-with-typescript-delivery-sdk) guide.
-   Preview unpublished content through [Live Preview](/docs/headless-cms/how-live-preview-works).

**Additional Resource:** To automate content scheduling and publishing, refer to the Contentstack [Agent OS](/docs/agent-os/what-is-contentstack-agent-os) documentation.

In a few minutes, you moved from an empty terminal to live content, configured your credentials as environment variables, and ran a production-ready request with retries, types, and logging. From here, the framework kickstarts take you to a complete application.
