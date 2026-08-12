---
title: "Building Websites with Contentstack and AI"
description: "Build AI-first websites with Contentstack Headless CMS and Next.js. Use AI coding assistants like Cursor to master CDA, SDK integration, and deployment on Launch."
url: /headless-cms/build-websites-with-contentstack-and-ai
---

# Building Websites with Contentstack and AI

## Build a Website with Contentstack and AI

Contentstack is a [headless CMS](https://www.contentstack.com/docs/headless-cms/what-is-headless-cms) that delivers content as JSON through its [Content Delivery API (CDA)](https://www.contentstack.com/docs/developers/apis/content-delivery-api). This guide connects a Next.js front-end to the CDA using AI coding assistants to generate the integration code, so content editors can publish entries in Contentstack and the website reflects those changes without code changes.

## Quick Decision Guide

Use this table to choose the AI coding assistant path before reading the setup requirements below.

| Tool | Key difference | When to choose it |
| --- | --- | --- |
| Claude Code | Plugin-based skills install. MCP via Claude Desktop | You want a chat-first workflow with full MCP support and terminal access |
| Cursor | Rules-file approach. MCP configured in Cursor settings | You prefer an AI-native code editor with full project file context |
| Codex / OpenAI agents | AGENTS.md entry point. No MCP | You are running OpenAI-based agents in a programmatic pipeline |
| Gemini CLI | Extension-based install. No MCP | You are working within Google IDEs or the Gemini CLI toolchain |

## AI Integrations in This Guide

This guide uses three Contentstack AI integrations alongside your AI coding assistant:

-   **Skills**: Gives your AI coding assistant Contentstack-specific knowledge making your prompts produce accurate, working code without boilerplate context.
-   [**MCP (Model Context Protocol)**](/docs/developers/contentstack-mcp-server): Connects your AI coding assistant directly to Contentstack APIs so it can create content types, entries, and trigger deployments without switching to the dashboard.
-   [**Polaris**](https://www.contentstack.com/docs/agent-os/what-is-polaris): Contentstack's in-CMS AI co-pilot. Content editors can create, edit, and publish content via natural language entirely inside the CMS, with no developer involvement.

## Prerequisites

**Mandatory**

-   A Contentstack account. Sign up at [contentstack.com/explorer](http://contentstack.com/explorer).
-   [Node.js v18 or later](https://nodejs.org/en/download). Versions below 18 cannot run the Contentstack MCP server via npx.

**Optional**

-   An AI coding assistant: Claude Code or Cursor with MCP support is recommended for the full AI-powered workflow.
-   Basic familiarity with HTML, JavaScript, and the terminal

## Part 1: Set Up AI Tools

Before writing any code, complete this one-time setup. It applies to every Contentstack project you build.

### Step 1: Install Contentstack Agent Skills

The Contentstack Agent Skills bundle supports multiple AI coding assistants. Install once for the tool you use.

**Claude Code**

In a Claude Code session, run:

```
/plugin marketplace add contentstack/contentstack-agent-skills
/plugin install contentstack-skills
```

**Note:** If you see an "unknown slash command" error, see the [Troubleshooting](#troubleshooting) section.

**Cursor**

Clone the repository and copy the generated rules into your project:

```
git clone https://github.com/contentstack/contentstack-agent-skills.git
cp contentstack-agent-skills/cursor/rules/*.mdc your-project/.cursor/rules/
```

**Codex / OpenAI agents**

Clone the repository and copy the codex/ directory into your project:

```
git clone https://github.com/contentstack/contentstack-agent-skills.git
cp -R contentstack-agent-skills/codex your-project/
```

Configure your agent's instructions entry point to codex/AGENTS.md. The router and all skills are resolved from there. For example, in an OpenAI Codex agent configuration:

```
{
  "instructions_file": "codex/AGENTS.md"
}
```

**Gemini CLI**

```
gemini extensions install contentstack/contentstack-agent-skills
```

**Note:** When you ask a Contentstack question, the agent reads a router, matches your intent to the relevant skill, and loads it automatically.

For a full list of available skills and their product areas, see [Reference: Available Skills](#reference-available-skills) section.

### Step 2: Configure the Contentstack MCP Server

The Contentstack MCP server exposes tools spanning the Content Management API, Content Delivery API, Launch, Brand Kit, Personalize, Analytics, and Developer Hub. With it configured, your AI coding assistant can create content types, fetch entries, trigger deployments, and perform other complex tasks, all with natural language. This removes the need to write API calls or manually switch to the dashboard.

**Note:** The Contentstack MCP server is currently available for internal experimentation and is not officially supported.

**Authenticate**

Before configuring any client, authenticate once:

1.  Run the following command in your terminal:
    
    ```
    npx @contentstack/mcp --auth -y
    ```
    
2.  Select **Authorization**, then **Login**.
3.  Choose your Contentstack region (for example, **North America AWS**).
4.  Complete [OAuth](https://www.contentstack.com/docs/developer-hub/contentstack-oauth) in the browser window that opens.
5.  Select your organization.
6.  Confirm the success message in the terminal before proceeding.
    
    Authentication is required for CMA, Analytics, Brand Kit, Launch, and Personalize tools. CDA tools require only the delivery token set in the config env block.
    

**Configure for Claude Desktop**

1.  Open Claude Desktop and go to **Settings > Developer > Edit Config**. This opens claude\_desktop\_config.json.
2.  Add the following to the file:
    
    ```
    {
       "mcpServers": {
         "contentstack": {
           "command": "npx",
           "args": ["-y", "@contentstack/mcp"],
           "env": {
             "CONTENTSTACK_API_KEY": "<your_api_key>",
             "CONTENTSTACK_DELIVERY_TOKEN": "<your_delivery_token>",
             "GROUPS": "cma,cda"
           }
         }
       }
     }
    ```
    
3.  Save the file and restart Claude Desktop. The MCP server starts in the background automatically.

**Configure for Cursor**

1.  Open Cursor and go to **Settings > MCP > Add Custom MCP**.
2.  Paste the same JSON block from the Claude Desktop configuration, changing the configuration file location.
3.  Save the file.

The server starts when Cursor launches.

**Understanding the GROUPS Variable**

The GROUPS environment variable is optional and controls which API tool groups the MCP server exposes. An unrecognised group name causes the MCP server to start without exposing any tools, with no error reported.

Default (not set): both CMA and CDA tools are exposed:

```
"env": {}
```

All the available tools:

```
"env": {
  "GROUPS": "all"
}
```

Specific groups (comma-separated, no spaces):

```
"env": {
  "GROUPS": "cma,cda"
}
```

Accepted group names:

| Value | Tools exposed | Authentication |
| --- | --- | --- |
| cma | Content Management API | OAuth (Stack API Key) |
| cda | Content Delivery API | Delivery Token + Stack API Key |
| analytics | Analytics API | OAuth (Stack API Key) |
| brandkit | Brand Kit API | OAuth (Stack API Key + Brand Kit ID) |
| launch | Launch deployment platform | OAuth (Stack API Key + Launch Project ID) |
| lytics | Data and Insights (Lytics) | Lytics Access Token |
| personalize | Personalize API | OAuth (Stack API Key + Personalize Project ID) |
| developer-hub | Developer Hub / Marketplace | OAuth (Stack API Key) |
| all | All available tools | All of the above |

Use the default value for this guide. You can expand to additional groups as you progress through later parts.

**Verify**

Prompt your AI coding assistant: "List my Contentstack stacks". It should respond via MCP without you writing any code. If it returns stack names from your organization, the MCP server is configured correctly.

**Note:** "List my stacks" is an org-level operation and requires a user authtoken (a session credential tied to your Contentstack login). For a full breakdown, refer to [Types of Tokens](https://www.contentstack.com/docs/headless-cms/types-of-tokens) documentation.

### Step 3: Verify Skills and MCP Setup

Prompt your AI coding assistant: "Which Contentstack skills do you have available?". It should list conversational skills across CMS, Developer Experience, Launch, Brand Kit, and Developer Hub.

**Note:** The Launch skills (launch-sync-environment-variables-from-env-example and launch-trigger-and-monitor-launch-deployments) are agentic skills that execute operations autonomously and are not listed as session-invocable skills. This is expected behavior.

If you receive a generic response or the AI coding assistant says it has no Contentstack skills, the router has not loaded. Re-check that the plugin, rules, or extension is enabled and restart your AI coding assistant session.

## Part 2: Setting Up Contentstack

Complete the following setup steps before writing any front-end code. Each step includes an **MCP Prompt** block — run it in your AI coding assistant via the Contentstack MCP server — and a **Manual** alternative for CMS dashboard users. MCP is the primary path; the manual alternative is provided where available.

### Step 4: Create Your Stack

A [stack](https://www.contentstack.com/docs/headless-cms/about-stack) is Contentstack's project container. It holds all your [content types](https://www.contentstack.com/docs/headless-cms/about-content-types), [entries](https://www.contentstack.com/docs/headless-cms/about-entries), [assets](https://www.contentstack.com/docs/headless-cms/about-assets), and [environments](https://www.contentstack.com/docs/headless-cms/about-environments).

**MCP Prompt:**

```
Create a new Contentstack stack named "My Company Website" in the <YOUR_REGION> region.
```

Replace <YOUR\_REGION> with your organization's region. For the list of available regions, see [Regions](https://www.contentstack.com/docs/administration/about-regions).

The AI coding assistant calls the CMA via MCP and the stack is created immediately. If you prefer to do this manually, see [Create a New Stack](https://www.contentstack.com/docs/headless-cms/create-a-new-stack) for full steps.

### Step 5: Design Your Content Model

You can describe a [content model](https://www.contentstack.com/docs/marketplace/about-content-models) to your AI coding assistant in natural language and it creates the content type via the CMA directly. The Content Type Builder — the schema editor in the Contentstack dashboard where you define fields, UIDs, and validation rules — is the manual equivalent.

**MCP Prompt:**

```
Create a content type called "Blog Post" with these fields:
- blog_post_title (Single Line Text, required)
- slug (Single Line Text, required, unique)
- cover_image (File)
- published_date (Date)
- body (Rich Text Editor)
- tags (Tags)
```

The cms-data-modeling-best-practices skill validates UID naming conventions automatically, so you can describe fields using plain English and the AI coding assistant applies the correct UID format.

### Step 6: Set Up an Environment

You need a publishing environment before your front-end can fetch content. An environment is a named deployment target (for example, development, staging, or production) that scopes which content your front-end receives.

**MCP Prompt:**

```
Create an environment named development with base URL http://localhost:3000
```

The AI coding assistant calls the CMA via MCP and the environment is created. If you prefer to do this manually, see [Add an Environment](https://www.contentstack.com/docs/headless-cms/add-an-environment) documentation for full steps.

### Step 7: Create Some Sample Content

Sample entries give you real data to render so you can verify the integration end-to-end before building the full front-end. Create two or three test entries before continuing.

**MCP Prompt:**

```
Create three sample blog_post entries in my Contentstack stack with these fields:
- blog_post_title: a realistic title
- slug: a URL-friendly version of the title
- published_date: today's date
- body: two paragraphs of placeholder content
Publish each entry to the development environment.
```

The AI coding assistant calls the CMA via MCP and the entries are created in your stack immediately.

**Manually using CMS**

You can also create entries manually in the Contentstack dashboard. See [Create an Entry](https://www.contentstack.com/docs/headless-cms/create-an-entry) for full steps.

**Using Polaris**

Polaris is a separately licensed AI co-pilot embedded within the Contentstack CMS. It accepts natural language prompts and executes them as CMA calls within the CMS interface and permission model. If your organization has access, contact [support@contentstack.com](mailto:support@contentstack.com) to request access. See the [Get Started with Polaris](https://www.contentstack.com/docs/agent-os/get-started-with-polaris) documentation for step-by-step instructions.

**Note:** Polaris requires a separate Polaris plan. Contact support to check access before following this path.

## Part 3: Building Your Website with AI

The following steps use an AI coding assistant to generate the front-end code. Provide accurate context in your prompts to get usable output.

### Step 8: Set Up Your Project

This guide uses Next.js as the front-end framework.

1.  Scaffold the project:
    
    ```
    npx create-next-app@latest my-contentstack-site
     cd my-contentstack-site
    ```
    
2.  When prompted, enable: **TypeScript**, **ESLint**, **Tailwind CSS**, and **App Router**. Disable the src/ directory and custom import alias. Accept defaults for any other prompts. The scaffolder installs all required framework dependencies automatically.
3.  Install the Contentstack Delivery SDK (Contentstack's TypeScript-first Delivery SDK):
    
    ```
    npm install @contentstack/delivery-sdk
    ```
    

**Get Your API Credentials**

Your front-end needs two credentials to fetch published content from Contentstack:

-   **Stack API Key**
-   **Delivery Token**.

Retrieve your API Key and create a Delivery Token scoped to the development environment. See [Create a Delivery Token](https://www.contentstack.com/docs/headless-cms/create-a-delivery-token) for complete steps.

**Warning:** Exposure of a Delivery Token or API Key allows anyone to read your published content. Never commit these credentials to a public repository. Unlike the authtoken, these credentials are long-lived and scoped to your stack. Store them in a .env.local file and add .env\*.local to your .gitignore.

Create a .env.local file in the root of your project and add your credentials:

```
CONTENTSTACK_API_KEY=<YOUR_API_KEY>
CONTENTSTACK_DELIVERY_TOKEN=<YOUR_DELIVERY_TOKEN>
CONTENTSTACK_ENVIRONMENT=<YOUR_ENVIRONMENT_NAME>
```

### Step 9: Setting Up the Contentstack SDK

Create lib/contentstack.ts, a reusable SDK client that reads your credentials from environment variables and exports a getEntries helper used throughout this guide.

With the dx-delivery-sdk skill active (see [Install Contentstack Agent Skills](#step-1-install-contentstack-agent-skills)), prompt your AI coding assistant:

```
Set up the Contentstack TypeScript Delivery SDK in lib/contentstack.ts. Initialize the deliveryClient with credentials from environment variables and export a getEntries helper function.
```

Verify your output matches this to ensure the correct import path and error handling are in place:

```
// lib/contentstack.ts
import { deliveryClient } from '@contentstack/delivery-sdk';

const Stack = deliveryClient({
  apiKey: process.env.CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
});

export async function getEntries(contentTypeUid: string) {
  try {
    const result = await Stack.contentType(contentTypeUid)
      .entry()
      .query()
      .find();
    return result.entries ?? [];
  } catch (error) {
    console.error('Failed to fetch entries for content type:', contentTypeUid, error);
    return [];
  }
}

export default Stack;
```

The dx-delivery-sdk skill provides the correct import path, initialization pattern, and query chain for @contentstack/delivery-sdk, so a short prompt produces a complete, working file.

Run npx tsc --noEmit to confirm no TypeScript errors. Then call getEntries('blog\_post') in a test page and verify it returns an array before continuing to Step 10.

### Step 10: Prompt Structure for Page Components

With the Contentstack Agent Skills bundle active, you can use a much shorter prompt. The dx-delivery-sdk skill contains the CDA URL, env variable names, and SDK initialization details:

```
Create a Next.js page at /services/[slug] that fetches a single landing_page entry by slug. Fields: page_title, hero_image, main_content, service_price, launch_date. Use SSR.
```

**Prompt Requirements**

-   **Tech stack:** State the framework and version, for example, 'Next.js 14 with the App Router.'
-   **Content type UID:** Use the exact UID from the dashboard, for example, blogpost, not BlogPost or blog-post
-   **Field UIDs:** List the fields the AI coding assistant needs to fetch and display
-   **Environment variables:** Specify the variable names where credentials are stored
-   **Expected output:** Describe the format, for example, 'a React component', 'an HTML page', or 'a JSON response.'

### Step 11: Build the Landing Page

```
Create a Next.js page at app/services/page.tsx that fetches all entries from the 'landing_page' content type.

1. Display them as a responsive grid of cards.
2. Each card should show the hero_image, page_title, and the service_price (formatted with a dollar sign).
3. Include a "View Details" link that points to /services/[slug].
4. Ensure the launch_date is formatted nicely (e.g., "Jan 2026").

Expected Output: Provide the solution as a Next.js Server Component (App Router). The output should include a clean Tailwind CSS or CSS Module styled grid that maps through the entries array. Include try-catch error handling around all async data-fetching calls.
```

### Step 12: Build the Blog Detail Page

```
Create a Next.js dynamic route at app/blog/[slug]/page.tsx. It should fetch a single 'blog_post' entry where the slug field matches the URL parameter.

  1. Display the blog_post_title field as an h1 (Note: the UID is blog_post_title).
  2. Display the cover_image as a full-width image.
  3. Display the published_date below the title.
  4. Render the body rich text field as HTML.
  5. Use generateStaticParams to pre-generate all blog post pages at build time using your getEntries helper.

Expected Output: Provide a Next.js Server Component that includes both the data fetching logic for a single entry and the generateStaticParams function for static site generation (SSG). Include try-catch error handling around all async data-fetching calls.
```

### Step 13: Build the Homepage

```
Create a Next.js page at app/page.tsx that fetches the single 'homepage' entry (fields: hero_title, hero_subtitle, hero_image, cta_text, cta_link) and renders a full-width hero section with the hero_image as a background, the hero_title and hero_subtitle overlaid, and a call-to-action button using cta_text and cta_link.

Expected Output: Provide the solution as a Next.js Server Component that fetches the single entry and renders a styled hero section with the background image and centered text overlay. Include try-catch error handling around all async data-fetching calls.
```

### Step 14: Use AI to Handle Rich Text

Contentstack's Rich Text Editor stores content as JSON. Use the following prompt to generate a renderer.

```
1. Install and configure @contentstack/utils (the modern replacement for the legacy serializer) to convert this JSON to HTML.
2. Create a React component called RichTextRenderer that accepts a JSON prop.
3. Use the jsonToHtml function from the SDK to convert the JSON and render it as sanitized HTML using dangerouslySetInnerHTML.

Expected Output: Provide a reusable React component in a file named components/RichTextRenderer.tsx. The output should include the necessary imports from the Contentstack Utility SDK and a clean implementation that handles empty or null JSON props gracefully.
```

For the full list of available JSON transforms, see the [@contentstack/utils documentation](https://www.npmjs.com/package/@contentstack/utils).

### Step 15: Handling Images from Contentstack

Images from Contentstack are returned as objects with a url property. See the [Image Delivery API](https://www.contentstack.com/docs/developers/apis/image-delivery-api) for the full list of supported query parameters. Use the following in your prompt:

```
Use this URL as the src for the Next.js Image component. Contentstack image URLs support query parameters for resizing. Add width=800 to optimize.

Expected Output: Provide a React component or code snippet that demonstrates how to implement the <Image /> component from next/image, ensuring the width, height, and src (with the optimization parameter) are handled correctly.
```

### Step 16: Preview and Debug Your Changes

Run your development server and check your site:

```
npm run dev
```

Open http://localhost:3000 in your browser. If the setup is correct, the page displays content fetched from Contentstack.

If the page does not display content, check the following in order:

1.  Confirm all environment variable values in .env.local are correct and the file is not committed to .gitignore\-excluded paths accidentally.
2.  Verify the content type UID in your fetch call matches the UID shown in the Contentstack dashboard Content Type Builder.
3.  Confirm the entries are published to the development environment.

To debug build errors, paste the error message and the relevant file into your AI coding assistant and ask it to identify the cause.

## Part 4: Deploying with Contentstack Launch

[Contentstack Launch](https://www.contentstack.com/docs/launch) is a front-end hosting and deployment platform built for Contentstack-powered websites. It connects your GitHub repository and triggers deployments from the Contentstack interface.

Only Organization [Admins](https://www.contentstack.com/docs/headless-cms/types-of-roles#admin) and [Owners](https://www.contentstack.com/docs/headless-cms/types-of-roles#owner) can create projects in Launch.

If the build fails because environment variables are not configured in Launch, see [Troubleshooting: Build fails during Collecting page data](#build-fails-on-contentstack-launch-during-collecting-page-data).

### Set Environment Variables in Launch

In the Launch project, add the following variables under **Environment Variables** before deploying. The SDK reads them at module load time. Set them for both build and runtime. You can use the **Import Variables** option to auto-populate them from a linked Contentstack stack.

**Warning:** Omitting CONTENTSTACK\_WEBHOOK\_SECRET when using the /api/revalidate route causes webhook requests to be accepted without signature verification, creating a security gap.

```
CONTENTSTACK_API_KEY=<your_api_key>
CONTENTSTACK_DELIVERY_TOKEN=<your_delivery_token>
CONTENTSTACK_ENVIRONMENT=<your_environment_name>
CONTENTSTACK_WEBHOOK_SECRET=<your_secret>   # required only if you use /api/revalidate
```

### Sync Environment Variables with Skills

The launch-sync-environment-variables-from-env-example skill compares your .env.example file to the Launch project environment variables and identifies what is missing. To use it, prompt your AI coding assistant:

```
Sync my .env.example with the Launch project environment variables and show me what is missing.
```

By default, the skill only reports gaps. It does not modify any variables.

### Deploy the Project

Follow the [Launch Quick Start Guide with NextJS](https://www.contentstack.com/docs/launch/quick-start-nextjs) for the complete step-by-step walkthrough, including connecting your GitHub repository, configuring build settings, and triggering your first deployment.

Auto-deploy is enabled by default. Any push to the connected Git branch triggers a new deployment.

To configure a custom domain for your Launch project, see [Setting Up Custom Domains](https://www.contentstack.com/academy/courses/launch-foundations/setting-up-custom-domains).

To generate the required files, refer to the following prompt:

```
Generate a next.config.js file for a Next.js app that fetches content from Contentstack. Configure image domains to allow Contentstack's CDN (images.contentstack.io and eu-images.contentstack.com). Also, generate a .env example file documenting all required environment variables, including CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_ENVIRONMENT, and CONTENTSTACK_WEBHOOK_SECRET.
```

### Trigger and Monitor Deployments with Skills

The launch-trigger-and-monitor-launch-deployments skill can trigger a Launch deployment, poll it to completion, and diagnose failures. After pushing to GitHub, prompt your AI coding assistant:

```
Trigger a Launch deployment for the main branch and monitor it to completion.
```

**Important:** The skill requires explicit confirmation before triggering a production deployment. It does not deploy without your approval.

### Keeping Content in Sync with Webhooks

Use a webhook to trigger a cache revalidation each time an entry is published in Contentstack.

```
Create a Next.js API route at app/api/revalidate/route.ts that listens for POST requests from Contentstack webhooks. When a blog_post entry is published, it should call Next.js's revalidatePath to purge the cached version of /blog and the specific post page. Verify the request using a secret token stored in CONTENTSTACK_WEBHOOK_SECRET.
```

## Part 5: Extending Your Website with Common Features

This section covers prompts for adding common features to your Contentstack and Next.js website. Features that need a new content type include an MCP prompt to create it first. Features that extend existing content reuse the blog\_post content type from Step 5.

### Adding a Team Members Page

**Create the content type with MCP**

```
Create a content type called "Team Member" with UID 'team_member' and these fields:
- name (Single Line Text, required)
- role (Single Line Text)
- photo (File)
- bio (Multi Line Textbox)
- linkedin_url (Single Line Text)
```

**Generate the front-end code**

```
Create a Next.js page at app/team/page.tsx that fetches all entries from the 'team_member' content type using the getEntries helper from lib/contentstack.ts.

1. Display them in a responsive 3-column grid.
2. Use the photo URL as the source for the Next.js Image component (optimized with width=400).
3. Display the name as a heading and the role as a sub-heading.
4. Show the bio text below the role.
5. Add a link or button for the linkedin_url.

Expected Output: Provide a Next.js Server Component that maps through the entries and renders the grid. Include try-catch error handling around all async data-fetching calls.
```

### Adding Search

This feature uses the existing blog\_post content type created in Step 5. No new content type is needed.

```
Create a search page at app/blog/search/page.tsx that accepts a 'q' query parameter.

1. Use the Contentstack Content Delivery API's query operators (such as .regex) to search the blog_post_title and body fields of the 'blog_post' content type.
2. The search should be case-insensitive.
3. Display matching results as a list of cards showing the blog_post_title, cover_image, and a link to the slug.
4. Use the Stack instance from lib/contentstack.ts to perform the fetch.

Expected Output: Provide a Next.js Server Component that extracts the search term from the URL, executes the Contentstack query, and renders the results (or a "No results found" message).
```

### Adding Pagination

This feature uses the existing blog\_post content type created in Step 5. No new content type is needed.

```
Update the blog list page at app/blog/page.tsx to add pagination using the existing 'blog_post' content type.

1. Show 9 posts per page using Contentstack's .limit() and .skip() query methods.
2. Display the blog_post_title, cover_image, and slug for each post in a grid.
3. Add Previous and Next buttons at the bottom that update the URL query parameters (e.g., ?page=2).

Expected Output: Provide an updated Next.js Server Component for app/blog/page.tsx that calculates the skip value based on the current page and renders the paginated navigation.
```

### Adding a Navigation Menu

**Create the content type with MCP**

```
Create a content type called "Navigation Item" with UID 'navigation_item' and these fields:
- label (Single Line Text, required)
- link (Single Line Text, required)
- order (Number)
```

**Generate the front-end code**

```
Create a Next.js Root Layout (app/layout.tsx) that:

1. Fetches all entries from the 'navigation_item' content type using the Stack instance from lib/contentstack.ts.
2. Sorts the items by the order field in ascending order.
3. Renders them as a horizontal navigation bar at the top of every page.
4. Wraps the {children} so the nav appears globally.

Expected Output: Provide the layout.tsx code as a TypeScript Server Component to fetch the data, with a clean Tailwind-styled <nav> element.
```

## Writing Effective Prompts

The following practices improve the accuracy of AI-generated code when working with Contentstack.

### Omit SDK Boilerplate When Skills Are Active

With the Contentstack Agent Skills bundle active (see [Install Contentstack Agent Skills](#step-1-install-contentstack-agent-skills)), you do not need to specify the CDA API URL, env variable names, or SDK initialization boilerplate in your prompts. The dx-delivery-sdk skill provides that context automatically. Focus your prompt on the query: which content type to fetch, which fields to display, and what output format you need.

### Include Field UIDs, Not Labels

Each field has a UID. The label 'Cover Image' might have a UID of coverimage or featuredimage, depending on what was set when the field was created. Always check the actual field UID in the Content Type Builder.

### Use Cursor's @ File References

In Cursor, prefix a filename with @ to include its contents in the prompt context. For example, typing @lib/contentstack.ts in Cursor includes that file's contents so you can then ask: "Using the stack instance from this file, create a new helper function getEntryBySlug(contentTypeUid, slug) that fetches a single entry."

### Request TypeScript Types

Include type generation in the prompt. For example:

```
Also generate TypeScript interfaces for the API response.
```

### Fix Output Incrementally

To correct AI output, paste the broken code back into the prompt and describe the problem. For example: 'This code has an issue: describe the problem. Fix it.'

## Troubleshooting

### Build fails on Contentstack Launch during "Collecting page data"

**Symptom:** Running the build on Contentstack Launch fails with a generic "Build failed" error during the "Collecting page data" step.

**Root cause:** The Contentstack SDK initialization at the top of lib/contentstack.ts throws an error as soon as the module loads when CONTENTSTACK\_API\_KEY, CONTENTSTACK\_DELIVERY\_TOKEN, or CONTENTSTACK\_ENVIRONMENT are not set. Contentstack Launch does not read from your local .env.local file during the build. Environment variables must be set directly in the Launch project settings. When they are absent, Next.js fails during static page generation.

**Resolution:** Because missing variables cause a module-load error that fails static generation, replace the standard top-level SDK initialization with a lazy getStack() function that returns null when any required environment variable is absent. Update getEntries() and any other data-fetching helpers to return an empty array or null when getStack() returns null, rather than calling the CDA.

Run the following prompt to let your AI coding assistant do the above fix:

```
Update lib/contentstack.ts to use a lazy getStack() function. It should return null if CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, or CONTENTSTACK_ENVIRONMENT are not set, instead of throwing on module load. Update getEntries() and any other data-fetching helpers to check for a null stack and return empty arrays or null instead of calling the CDA. This prevents the Next.js build from failing on Contentstack Launch when environment variables have not yet been configured.
```

The updated file should look like this:

```
// lib/contentstack.ts
import { deliveryClient } from '@contentstack/delivery-sdk';

function getStack() {
  const { CONTENTSTACK_API_KEY, CONTENTSTACK_DELIVERY_TOKEN, CONTENTSTACK_ENVIRONMENT } = process.env;
  if (!CONTENTSTACK_API_KEY || !CONTENTSTACK_DELIVERY_TOKEN || !CONTENTSTACK_ENVIRONMENT) {
    return null;
  }
  return deliveryClient({
    apiKey: CONTENTSTACK_API_KEY,
    deliveryToken: CONTENTSTACK_DELIVERY_TOKEN,
    environment: CONTENTSTACK_ENVIRONMENT,
  });
}

export async function getEntries(contentTypeUid: string) {
  const stack = getStack();
  if (!stack) return [];
  try {
    const result = await stack.contentType(contentTypeUid)
      .entry()
      .query()
      .find();
    return result.entries ?? [];
  } catch (error) {
    console.error('Failed to fetch entries for content type:', contentTypeUid, error);
    return [];
  }
}
```

### MCP Connection Returns 401 Unauthorized

**Symptom:** Your AI coding assistant reports an authentication failure when calling Contentstack via MCP.

**Root cause:** The MCP server was not authenticated, or the OAuth session has expired.

**Resolution:** Re-run npx @contentstack/mcp --auth -y and re-authenticate via the browser. Verify that CONTENTSTACK\_API\_KEY is set in the MCP configuration env block in claude\_desktop\_config.json or your Cursor MCP settings.

### MCP Tools Not Appearing in AI Assistant

**Symptom:** Your AI coding assistant says it cannot find Contentstack tools or does not recognize MCP tool calls.

**Root cause:** The GROUPS variable is not set, set incorrectly, or the MCP server process is not running.

**Resolution:** Set GROUPS to "cma,cda" explicitly in your MCP configuration env block. Restart Claude Desktop or Cursor (MCP configuration is read on startup). Verify the configuration JSON is valid using a JSON linter before saving.

### Plugin Install Fails with SSH Errors

**Symptom 1:** Running the plugin install command produces:

```
No ED25519 host key is known for github.com
```

**Root cause:** GitHub's host key is not in your ~/.ssh/known\_hosts file, so SSH refuses to connect.

**Resolution:** Without this step, SSH refuses to connect and the install command fails.

```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

**Symptom 2:** After resolving the host key error, the install still fails with:

```
git@github.com: Permission denied (publickey)
```

**Root cause:** No SSH key is configured for GitHub authentication.

**Resolution:** Without this step, SSH refuses to authenticate and the install command fails. Rewrite SSH URLs to HTTPS so no SSH key is required:

```
git config --global url."https://github.com/".insteadOf git@github.com:
```

After running both fixes, retry the plugin install command.

## Reference

### Reference: Available Skills

The following skills are included in the Contentstack Agent Skills bundle installed in Step 1.

| Slug | Product Area | Invocation | Description |
| --- | --- | --- | --- |
| cms-assets | CMS | Conversational | Asset organization, Image Delivery API transforms, publishing lifecycle, CDN behavior, limits. |
| cms-branches-aliases | CMS | Conversational | Isolated content development, alias-based zero-downtime deploys, CI/CD, merge & rollback. |
| cms-data-modeling-best-practices | CMS | Conversational | Choosing content types, references, global fields, groups, modular blocks, JSON RTE, taxonomy. |
| cms-entries | CMS | Conversational | CDA queries, reference expansion, pagination, versioning, publishing, bulk ops, Sync API. |
| cms-environments-publishing | CMS | Conversational | Environment design, publishing pipeline, token types, Sync API, CDN, publish queue. |
| cms-localization | CMS | Conversational | Languages, fallback chains, localized vs unlocalized entries, non-localizable fields. |
| cms-releases | CMS | Conversational | Atomic multi-item deployment, scheduling, webhook-storm prevention, CI/CD. |
| cms-roles-permissions | CMS | Conversational | Built-in & custom roles, permission merging, teams, token capabilities, least privilege. |
| cms-taxonomy | CMS | Conversational | Hierarchical classification, taxonomy vs tags/labels/references, CDA taxonomy queries. |
| cms-tokens-authentication | CMS | Conversational | Choosing the right token, client- vs server-side safety, rate limits, SSO. |
| cms-variants-personalization | CMS | Conversational | Variants vs separate entries, variant groups, A/B testing, Personalize integration. |
| cms-webhooks | CMS | Conversational | Event channels, payloads, signature verification, retries, reliable receiver design. |
| cms-workflows | CMS | Conversational | Stage design, approvals, self-approval prevention, publish governance, automation. |
| dx-delivery-sdk | Developer Experience | Conversational | Production-ready TypeScript with @contentstack/delivery-sdk for entries, assets, queries, Live Preview. |
| dx-migrate-js-to-ts-sdk | Developer Experience | Conversational | Migrating Delivery SDK code from the JavaScript SDK to the TypeScript SDK. |
| cms-live-preview-visual-builder-support-assistant | Developer Experience | Conversational | Diagnosing and implementing Live Preview / Visual Builder across CSR, SSR, SSG, BFF. |
| migration-companion | Developer Experience | Conversational | Guided Contentful to Contentstack migration: content and application code. |
| launch-sync-environment-variables-from-env-example | Launch | Agentic | Comparing a local .env.example to a Launch environment and patching missing keys. |
| launch-trigger-and-monitor-launch-deployments | Launch | Agentic | Triggering a Launch deploy, polling to completion, diagnosing failures from logs. |
| brand-kit-assistant | Brand Kit | Conversational | Brand Kit, Voice Profiles, Knowledge Vault, on-brand AI generation, governance, API routing. |
| developer-hub-app-architect | Developer Hub | Conversational | Designing & building Developer Hub / Marketplace apps: UI locations, manifest, SDK, proxy, publishing. |

### Key Contentstack API Endpoints

The following endpoints are used to fetch content from the CDA. Refer to the [Content Delivery API](https://www.contentstack.com/docs/developers/apis/content-delivery-api) documentation for all available endpoints.

```
# Fetch all entries from a content type
GET https://cdn.contentstack.io/v3/content_types/{uid}/entries?environment=development

# Fetch a single entry by UID
GET https://cdn.contentstack.io/v3/content_types/{uid}/entries/{entry_uid}?environment=development

# Filter entries by field value
GET https://cdn.contentstack.io/v3/content_types/blog_post/entries?query={"slug":"my-post-slug"}&environment=development

# Required headers
api_key: your_stack_api_key
access_token: your_delivery_token
Content-Type: application/json
```

### Useful Contentstack SDK Methods

| SDK Method | Description |
| --- | --- |
| .Query().find() | Fetches all entries |
| .Query().where('slug', slug).find() | Filters entries by a field value |
| .Query().limit(9).skip(0).find() | Paginates results |
| .Query().ascending('date').find() | Sorts entries by a field |
| .Query().includeReference('author').find() | Includes referenced entries |
| .Query().only('title','slug','coverimage').find() | Selects specific fields |

### Related Documentation

-   [Quickstart in 5 Mins](https://www.contentstack.com/docs/headless-cms/quickstart-in-5-mins): Minimal working example connecting one content type to a front-end fetch call, useful for verifying credentials before building the full site.
-   [Content Delivery API](https://www.contentstack.com/docs/developers/apis/content-delivery-api): Complete endpoint reference for fetching entries, assets, and content types. Use this when you need a query parameter or response field not covered in this guide.
-   [TypeScript Delivery SDK Reference](https://www.contentstack.com/docs/developers/sdks/content-delivery-sdk/typescript/reference): Full method signatures, parameters, and return types for @contentstack/delivery-sdk used in lib/contentstack.ts.
-   [Create a Content Type](https://www.contentstack.com/docs/headless-cms/create-a-content-type): Step-by-step instructions for adding fields, setting field UIDs, and configuring validation rules in the Contentstack dashboard.
-   [Create a Delivery Token](https://www.contentstack.com/docs/headless-cms/create-a-delivery-token): Instructions for generating the scoped read-only token required by the CDA and stored in CONTENTSTACK\_DELIVERY\_TOKEN.
-   [About Environments](https://www.contentstack.com/docs/headless-cms/about-environments): Explains how environments scope published content and how to add or configure them beyond the development environment created in this guide.
-   [Create an Entry](https://www.contentstack.com/docs/headless-cms/create-an-entry): Full instructions for authoring, saving, and publishing content in the Contentstack dashboard.
-   [Contentstack Launch](https://www.contentstack.com/docs/launch): Overview of the Launch hosting platform, including custom domains, environment variables, and deploy hooks.
-   [Launch Quick Start Guide with NextJS](https://www.contentstack.com/docs/launch/quick-start-nextjs): Step-by-step walkthrough for deploying a Next.js app on Launch, with configuration details beyond what this guide covers.
-   [Contentstack CLI](https://www.contentstack.com/docs/headless-cms/install-the-cli): Command-line tools for stack management, content migration, and local development workflows.
-   [Contentstack Agent Skills](https://github.com/contentstack/contentstack-agent-skills): The skills bundle repository. Install it for Claude Code, Cursor, Codex, or Gemini CLI.
-   [Contentstack MCP Server](https://www.npmjs.com/package/@contentstack/mcp): @contentstack/mcp on npm. AI-driven Contentstack operations via the CMA, CDA, Launch, and more.

## Next Steps

Use the following resources to extend your Contentstack implementation beyond the basics covered in this guide.

1.  [**Contentstack Personalize**](https://www.contentstack.com/docs/personalize)**:** Deliver content variants to specific audience segments.
2.  [**Contentstack Automate**](https://www.contentstack.com/docs/agent-os)**:** Automate content migration and cross-system syncing.
3.  [**Visual Editor**](https://www.contentstack.com/docs/headless-cms/about-visual-editor)**:** Enable content editors to compose pages without code.
4.  [**Marketplace**](https://www.contentstack.com/marketplace)**:** Integrate with translation, SEO, analytics, and e-commerce tools.
5.  [**Contentstack Community**](https://www.contentstack.com/community)**:** Ask questions and find examples from other developers.
6.  [**Contentstack Agent Skills**](https://github.com/contentstack/contentstack-agent-skills)**:** Update the installed skills bundle when a new version is released to get coverage for new Contentstack product features and API changes.
