---
title: "Build and Deploy a Website with Contentstack and Launch"
description: "Learn how to build, fetch, and deploy a website using Contentstack and Launch with a step-by-step implementation guide."
url: /headless-cms/build-and-deploy-website-contentstack-launch
---

# Build and Deploy a Website with Contentstack and Launch

## Build and Deploy a Website with Contentstack and Launch

Building a production website with a headless CMS requires a clear, repeatable workflow. This guide walks you through every step, from creating your first stack to deploying a live site on Launch, without relying on AI-assisted tools. Every command, API call, and configuration setting is shown explicitly so you can follow along, reproduce results, and understand how each layer connects to the next.

**Note:** If you prefer AI-assisted development, refer to our [Build a Website with Contentstack and AI](/docs/get-started/build-websites-with-contentstack-and-ai) guide.

Use this guide when you need:

-   A deterministic, step-by-step workflow with no ambiguity
-   A setup suitable for QA reproduction, security reviews, or regulated environments
-   A clear understanding of how each layer of the stack works before adding automation

## What You Will Accomplish

By the end of this guide, you will be able to:

1.  Create a stack and configure environments
2.  Model structured content using Content Types and fields
3.  Create and publish entries to an environment
4.  Fetch published content using the Content Delivery API
5.  Integrate that content into a Next.js application
6.  Deploy the site using Contentstack Launch

## Architecture Overview

This workflow consists of four layers. Each layer must work correctly and independently before you move to the next.

```
Contentstack (content + publish)
    ↓
Content Delivery API (CDN)
    ↓
Application (fetch + render)
    ↓
Launch (build + host)
```

Treat this architecture as a series of gates: validate each layer before building on top of it. A working curl call confirms the API layer before you write a single line of application code. A successful local build confirms the application layer before you configure Launch.

## Prerequisites

Before you begin, ensure you have:

-   A [Contentstack account](https://www.contentstack.com/login) with permission to create a stack
-   Permission to create [environments](/docs/headless-cms/about-environments) and [delivery tokens](/docs/headless-cms/about-delivery-tokens)
-   A Git repository connected to your project
-   [Node.js](https://nodejs.org/en/download) (LTS recommended) installed on your machine
-   Basic familiarity with environment variables and terminal commands

## Step 1: Choose a Content Fetching Strategy

The first decision is how your application will retrieve content from Contentstack. The three options differ in where the fetch runs, whether tokens are exposed to end users, and how fresh the content will be.

| Mode | When to Use | Fetch Location | Token Exposure |
| --- | --- | --- | --- |
| Client-side | Public content, quick demos | Browser | Exposed |
| Server runtime (SSR / API route) | Fresh content per request | Server | Hidden |
| Build-time (static export) | Static hosting, high performance | CI / build step | Hidden |

**Note:** This guide uses build-time fetching with static export. This approach keeps tokens off the client, works well with Launch's static hosting, and produces the best performance. Do not mix modes accidentally, prefixing a secret with NEXT\_PUBLIC\_ will expose it in the browser bundle.

## Step 2: Set Up Contentstack

Complete all of the following steps in the Contentstack dashboard before writing any application code.

### 2.1 Create a Stack

A [Stack](/docs/headless-cms/about-stack) is your project's container. All content types, entries, assets, environments, and tokens live inside a single stack.

To create a stack, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Navigate to the organization where you want to create the stack and click **Headless CMS**.
2.  Click **\+ New Stack** and select **Create New**.
3.  In the **Create New Stack** modal, enter the following details:
    -   **Name** (required): Enter a name for your stack, for example, My Company Website.
    -   **Description** (optional): Provide a short description.
4.  Click **Create**.
5.  Go to **Settings → Stack** and record your **Stack API Key**. You will need it in later steps.

**Note:** Your region determines which CDN hostname you use for all Content Delivery API calls. You cannot use a hostname from a different region and expect consistent results. See [Step 4](#step-4-confirm-your-cdn-endpoint) for the correct host per region.

### 2.2 Create Environments

**Environments** are publishing targets, typically staging and production, that control where published content is available. Your **Delivery Token** is scoped to a specific environment, so the environment name you use when publishing an entry must match the environment your token covers.

To create environments, perform the following steps:

1.  Click the **Settings** icon, or press **S**.
2.  Navigate to **Environments**.
3.  Click **\+ New Environment**.
4.  Enter a **Name**, for example, staging.
5.  Click **Create**.
6.  Repeat for any additional environments, for example, production.

**Note:** Environment names are case-sensitive. Copy them exactly as created, staging and Staging are treated as different environments.

### 2.3 Design Your Content Model

Plan your [content model](/docs/headless-cms/about-content-modeling) before creating any fields in Contentstack. [Fields](/docs/headless-cms/about-fields) should reflect how content appears in your UI, designing them the other way around leads to empty API responses and significant rework later.

**Tip:** Open your UI design (Figma, wireframe, or mockup) and, for each page, list the sections and SEO metadata you need before touching the dashboard.

A typical marketing site content model looks like this:

| Content Type UID | Purpose |
| --- | --- |
| homepage | Single homepage entry |
| page | Generic pages, fetched by slug |
| blog\_post | Article entries (optional for this guide) |

Reusable sections such as a hero, feature grid, testimonials, and call-to-action are best implemented as **Modular Blocks** or **Group** fields, depending on your editorial workflow.

### 2.4 Create the Homepage Content Type

To create the homepage Content Type, perform the following steps:

1.  Click the **Content Models** icon in the navigation panel.
2.  Click **\+ New Content Type** and select **Create New**.
3.  Enter the following details:
    -   **Name**: Homepage
    -   **UID**: homepage — the UID is permanent. Choose it carefully, because renaming it after integration breaks all API responses and frontend mappings.
    -   **Type**: Select **Single** for a one-off page entry.
4.  Click **Save and proceed**.
5.  In the Content Type Builder, add the following fields:

**Title**

-   **Type**: Single Line Text
-   **UID**: title
-   **Required**: Yes

**SEO (Group field)**

-   **Type**: Group
-   **UID**: seo
-   **Fields inside the group**: meta\_title (Single Line Text), meta\_description (Multi Line Text), og\_title (Single Line Text), og\_description (Multi Line Text), og\_image (File / Asset)

**Sections (Modular Blocks)**

-   **Type**: Modular Blocks
-   **UID**: sections
-   **Example blocks**:
    -   **Hero** — fields: headline, description, primary\_cta\_text, primary\_cta\_url
    -   **Features** — repeatable Group field features with title, description, icon

1.  Click **Save** when done.

**Note:** Save your Content Type UIDs and field UIDs in a reference file as you go. You will need the exact UIDs, not the display labels, when making API calls and writing application code.

**Warning:** Do not rename UIDs after you begin integrating with your application. UID changes break API responses and all frontend field mappings immediately.

**How Modular Blocks appear in the API response:** Each block includes a \_content\_type\_uid discriminator field that identifies the block type. Your application code should switch on block.\_content\_type\_uid to render the correct component for each block.

**How Asset fields appear in the API response:** Image and file fields return an asset object with a url property, not a plain string. Always handle the case where the asset is missing so a build does not crash on an empty field.

### 2.5 Create and Publish an Entry

Creating an entry and saving it is not enough, only **published** entries are returned by the Content Delivery API. An entry must be explicitly published to the environment that your Delivery Token is scoped to.

To create and publish an entry, perform the following steps:

1.  Click the **Entries** icon in the navigation panel, or press **E**.
2.  Click **\+ New Entry** and select the **Homepage** content type.
3.  Fill in all required fields.
4.  Click **Save**, then click **Publish**.
5.  In the Publish modal, select your target environment, for example, staging, and the appropriate locale.
6.  Click **Send**. Confirm the entry status shows **Published**.

Refer to the [Create an Entry](/docs/headless-cms/create-an-entry) documentation for full details.

## Step 3: Create a Delivery Token

A Delivery Token is a read-only, environment-scoped token that your application uses to authenticate [Content Delivery API](/docs/developers/apis/content-delivery-api) requests. You must use a Delivery Token for the CDA — Management Tokens and Auth Tokens are for the [Content Management API](/docs/developers/apis/content-management-api) and will not work here.

To create a Delivery Token, perform the following steps:

1.  Click the **Settings** icon in the navigation panel, or press **S**.
2.  Click **Tokens** in the settings panel.
3.  Click **\+ Delivery Token**.
4.  Enter a **Name** and optional **Description**.
5.  In the **Scope** section, select the **publishing environment** this token will cover, for example, staging. Select the **branch**.
6.  Click **Generate Token**.
7.  Copy the token value immediately using the **Click to copy** icon.

**Warning:** Never commit your Stack API Key or Delivery Token to a public repository. Always store credentials in environment variables. Do not pass api\_key or delivery\_token as URL query parameters — pass them only as HTTP request headers.

Before moving to the next step, confirm you have all of the following values:

| Value | Where to Find It |
| --- | --- |
| Stack API Key | Settings → Stack |
| Delivery Token | Settings → Tokens → Delivery Tokens |
| Environment name | Settings → Environments (copy exactly) |
| Content Type UID | Content Models → open the content type |
| Entry UID | Content → open the entry → entry details sidebar |

## Step 4: Confirm Your CDN Endpoint

The Content Delivery API uses a different hostname from the management API. Use the CDN host that matches your stack's region. Do not use api.contentstack.io for content delivery — that endpoint is for the Content Management API.

| Region | CDN Base URL |
| --- | --- |
| AWS North America | https://cdn.contentstack.io |
| AWS Europe | https://eu-cdn.contentstack.com |
| AWS Australia | https://au-cdn.contentstack.com |
| Azure North America | https://azure-na-cdn.contentstack.com |
| Azure Europe | https://azure-eu-cdn.contentstack.com |
| GCP North America | https://gcp-na-cdn.contentstack.com |
| GCP Europe | https://gcp-eu-cdn.contentstack.com |

Refer to the [API Endpoints by Region](/docs/administration/api-endpoints) documentation for the full list.

When storing the host as an environment variable, include only the hostname without the https:// prefix. Your application code should prepend it when constructing the request URL:

```
CONTENTSTACK_CDN_HOST=cdn.contentstack.io
```

## Step 5: Validate API Access with curl

Test your credentials and confirm the API returns content before writing any application code. Debugging a failed API call is much simpler at this stage than inside a build pipeline.

Replace the placeholder values and run the following command:

```
CDN_HOST="cdn.contentstack.io"
API_KEY="<STACK_API_KEY>"
DELIVERY_TOKEN="<DELIVERY_TOKEN>"
ENVIRONMENT="staging"
CONTENT_TYPE_UID="homepage"
ENTRY_UID="<ENTRY_UID>"

curl -sS -o /tmp/cs-entry.json -w "HTTP %{http_code}\n" \
  "https://${CDN_HOST}/v3/content_types/${CONTENT_TYPE_UID}/entries/${ENTRY_UID}?environment=${ENVIRONMENT}" \
  -H "api_key: ${API_KEY}" \
  -H "access_token: ${DELIVERY_TOKEN}"
```

**Expected result:** The terminal prints only HTTP 200. The response body is written to the file. View it with: cat /tmp/cs-entry.json.

If your stack is configured for multiple locales, append &locale=en-us (or your target locale code) to the URL.

**Note:** Do not proceed to the application code steps until this command returns HTTP 200. A failed curl call here will surface as a cryptic build error later. See the [Troubleshooting](#troubleshooting) section for common error codes and their causes.

## Step 6: Integrate with Your Application

This guide uses Next.js with the App Router and static export. The same pattern applies to any framework, the only requirements are that you issue an HTTP GET request to the Delivery API, pass the correct headers, and parse the JSON response.

### 6.1 Create the Next.js App

If you do not already have a Next.js project, run the following commands in your terminal:

```
npx create-next-app@latest my-site --typescript --eslint --app --src-dir=false --import-alias="@/*"
cd my-site
```

### 6.2 Enable Static Export

Open next.config.ts (or next.config.js) and add the output setting:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default nextConfig;
```

If you use next.config.js instead, use module.exports = nextConfig;.

Run npm run build locally and confirm that an out/ directory is generated before configuring Launch.

### 6.3 Configure Environment Variables

Create a .env.local file in the root of your project and add your Contentstack credentials. Add .env.local to your .gitignore file if it is not already excluded.

```
CONTENTSTACK_API_KEY="<STACK_API_KEY>"
CONTENTSTACK_DELIVERY_TOKEN="<DELIVERY_TOKEN>"
CONTENTSTACK_ENVIRONMENT="staging"
CONTENTSTACK_CDN_HOST="cdn.contentstack.io"
CONTENTSTACK_CONTENT_TYPE_UID="homepage"
CONTENTSTACK_ENTRY_UID="<ENTRY_UID>"

# Optional — add only if your stack requires an explicit locale:
# CONTENTSTACK_LOCALE="en-us"
```

**Warning:** Never prefix secret variables with NEXT\_PUBLIC\_. Variables with that prefix are embedded in the browser bundle and are visible to anyone who inspects your site's JavaScript.

### 6.4 Create a Fetch Helper

Create a lib/contentstack.ts file to centralize all Contentstack API calls. This helper runs only at build time and never in the browser.

```
type EntryResponse<T> = { entry: T };

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function fetchHomepage<T>(): Promise<T> {
  const host        = requiredEnv("CONTENTSTACK_CDN_HOST");
  const apiKey      = requiredEnv("CONTENTSTACK_API_KEY");
  const token       = requiredEnv("CONTENTSTACK_DELIVERY_TOKEN");
  const environment = requiredEnv("CONTENTSTACK_ENVIRONMENT");
  const contentType = requiredEnv("CONTENTSTACK_CONTENT_TYPE_UID");
  const entryUid    = requiredEnv("CONTENTSTACK_ENTRY_UID");
  const locale      = process.env.CONTENTSTACK_LOCALE;

  const params = new URLSearchParams({ environment });
  if (locale) params.set("locale", locale);

  const url = `https://${host}/v3/content_types/${contentType}/entries/${entryUid}?${params}`;

  const res = await fetch(url, {
    headers: { api_key: apiKey, access_token: token },
    cache: "force-cache",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Contentstack fetch failed (${res.status}): ${body}`);
  }

  const json = (await res.json()) as EntryResponse<T>;
  return json.entry;
}
```

### 6.5 Create the Homepage Page Component

Open app/page.tsx and add the following:

```
import { fetchHomepage } from "@/lib/contentstack";

export default async function HomePage() {
  const entry = await fetchHomepage<{ title?: string }>();

  return (
    <main>
      <h1>{entry?.title ?? "Homepage"}</h1>
    </main>
  );
}
```

If you are rendering Modular Blocks from the sections field, map over the array and switch on block.\_content\_type\_uid to render the appropriate component for each block type.

### 6.6 Understand Rebuild Behavior

With build-time fetching, publishing new or updated content in Contentstack does not automatically update the live site. A new Launch build is required to pull in the latest published content. You can automate this later by configuring a Contentstack webhook to trigger a Launch rebuild whenever an entry is published.

## Step 7: Deploy with Launch

[Contentstack Launch](/docs/launch/about-launch) is a front-end hosting and deployment platform built for Contentstack-powered websites. It connects directly to your Git repository and builds your site on every push.

**Note:** Only the Organization Admin or Owner can create new projects in Launch. Learn more about [Administration Roles](/docs/administration/about-administration-roles).

### 7.1 Create a Launch Project

**Tip:** If Launch offers a **Connect and Import Variables** option when creating your project, use it. It pulls your Contentstack credentials directly from the linked stack and eliminates manual entry.

To deploy your site, perform the following steps:

1.  From the Contentstack CMS homepage, click **Launch**.
2.  On the Launch Projects screen, click **\+ New Project**.
3.  In the **Create New Project** modal, click **Import from a Git Repository**.
4.  Click **GitHub** and sign in with your GitHub credentials.
5.  In the **Repository Access** section, select **All repositories** or choose specific ones, then click **Save**. If this is your first time connecting, click **Install & Authorize**.
6.  Back in the **Create New Project** modal, fill in the following details:
    -   **Repository** (required): Select your Git repository.
    -   **Git Branch** (required): Select the branch to deploy from, for example, main.
    -   **Project Name** (required): This is auto-populated from your repository name.
    -   **Environment Name** (required): Enter a name, for example, production.
    -   **Build Command**: npm run build
    -   **Publish Directory**: out

**Note:** This is Launch's deployment environment label and does not need to match your Contentstack environment. Which content is fetched is controlled by the CONTENTSTACK\_ENVIRONMENT variable and it must **match the environment your Delivery Token covers**.

1.  Click **\+ Add Environment Variable** and add every CONTENTSTACK\_\* variable from your .env.local file. These must be present for both the build step and runtime, or the build will fail.
2.  Click **Deploy**.

The screen shows a **Deploying** status while the build runs. When the deployment completes, your site is live at a unique URL shown in the **Domains** section.

**Tip:** Auto-deploy is enabled by default. Any push to the connected Git branch triggers a new deployment automatically.

### 7.2 Verify the Deployment

After deployment completes, open the Launch URL and confirm that content from Contentstack is rendering correctly. If the page appears blank or returns a 404, check the following:

-   The publish directory is set to out, not dist or .next
-   The output: "export" setting is present in next.config.ts
-   All CONTENTSTACK\_\* environment variables are set in Launch — check the build logs for any Missing env var errors thrown by the fetch helper

## Troubleshooting

| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| 401 / 403 | Wrong token, incorrect environment scope, or credentials passed as query parameters | Recreate the Delivery Token scoped to the correct environment. Pass api\_key and delivery\_token as request headers, not query parameters. |
| 404 | Incorrect Content Type UID, Entry UID, or entry not published to the target environment | Re-copy UIDs from the Contentstack UI. Confirm the entry status shows **Published** for the environment your token covers. |
| 422 | Malformed query string or unpublished content | Simplify the query and confirm publish status. Compare your URL to the [Content Delivery API](/docs/developers/apis/content-delivery-api) documentation. |
| 200 but wrong or missing fields | Field UIDs in your code do not match the API response, or a locale is required but not specified | Inspect the raw JSON response. Align your code's field keys with the actual payload. Add the locale query parameter if your stack requires it. |
| 414 | URL query string exceeds the API's size limit (approximately 8 KB) | Shorten the query or split it into multiple requests. |
| Site not updating after publish | Build-time fetching is in use | Trigger a new Launch build manually. Configure a Contentstack webhook to automate rebuilds on publish. |
| Launch 404 or blank page | Wrong publish directory, missing output: "export", or build-time fetch failed | Confirm the publish directory is out. Check Launch build logs for thrown errors, a missing environment variable or a failed API call at build time are the most common causes. |
| Launch build stops at _Creating an optimized production build…_ with no error | output: "export" ignored because next.config.ts uses module.exports | Use export default nextConfig; in .ts config. Confirm an out/ directory is generated by npm run build locally. |
| Local build succeeds but Launch build fails | Node version mismatch between local and Launch | Pin the Node version (e.g. add an engines.node field in package.json or set it in Launch) so both environments match. |

## Using Other Frameworks

The workflow described in this guide applies to any front-end framework, not just Next.js. Once your curl call succeeds, the application integration follows the same four steps regardless of the framework you use:

1.  Send an HTTP GET request to the Content Delivery API
2.  Include api\_key and delivery\_token as request headers, never as query parameters
3.  Parse the JSON response
4.  Deploy the build output folder to Launch

## Next Steps

Now that your site is live, you can extend it with the following:

-   **Dynamic routing:** Add routes that fetch pages by slug, for example \[slug\]/page.tsx, to support multi-page sites without hardcoding Entry UIDs.
-   [**Live Preview**](/docs/headless-cms/about-live-preview)**:** Enable editors to preview draft content before publishing.
-   [**Webhooks**](/docs/headless-cms/about-webhooks)**:** Configure Contentstack to send a webhook to Launch whenever an entry is published, so the site rebuilds automatically with the latest content.
-   **Separate environments:** Use distinct Delivery Tokens and environments for staging and production to keep unpublished content off your live site.

## Related Documentation

-   [Launch Quick Start Guide with Next.js](/docs/launch/quick-start-nextjs)
-   [Build a Website with Contentstack and AI](/docs/headless-cms/build-websites-with-contentstack-and-ai)

## Glossary

| Term | Definition |
| --- | --- |
| [Stack](/docs/headless-cms/about-stack) | Your Contentstack project container. All content types, entries, assets, environments, and tokens live inside a single stack. |
| [Content Type](/docs/headless-cms/create-a-content-type) | A template that defines the structure of a piece of content, similar to a database schema. |
| [Entry](/docs/headless-cms/about-entries) | A single piece of content created from a Content Type. |
| [Asset](/docs/headless-cms/about-assets) | An uploaded file, image, PDF, or video, stored on Contentstack's CDN and referenced in entries. |
| [Environment](/docs/headless-cms/about-environments) | A publishing target such as development, staging, or production. Environment names are case-sensitive. |
| API Key | Identifies your stack in all API requests. Found in **Settings** → **Stack**. |
| [Delivery Token](/docs/headless-cms/about-delivery-tokens) | A read-only, environment-scoped token for fetching published content via the CDA. |
| [CDA](/docs/developers/apis/content-delivery-api) | Content Delivery API, the read-only API your front-end uses to fetch published content. |
| UID | The unique identifier for a content type, entry, or field. Auto-generated in snake\_case and permanent after creation. |
| [Launch](/docs/launch/about-launch) | Contentstack's front-end hosting and deployment platform. |
