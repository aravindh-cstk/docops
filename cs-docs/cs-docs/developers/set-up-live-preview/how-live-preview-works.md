---
title: "[Set Up Live Preview] - How Live Preview Works"
description: How Contentstack Live Preview works, including data flow, CSR vs SSR behavior, SDK role, limitations, and API/authentication details.
url: https://www.contentstack.com/docs/headless-cms/how-live-preview-works
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Live Preview] - How Live Preview Works

This page explains how Contentstack Live Preview functions end-to-end, including the components involved, the data flow, and differences between CSR and SSR implementations. It is intended for developers integrating Live Preview (and related SDKs) into a website and for teams who need to understand how preview updates are delivered during content editing.

## How Live Preview Works

Contentstack’s **Live Preview** allows content creators to see real-time updates to their content as they edit an entry. This feature enhances the content review process by providing **instant feedback** without the need to publish changes.

Live Preview fetches updated content from Contentstack’s **Preview Service** and displays the changes immediately on the front end. It integrates seamlessly with Contentstack's CMS, using the **Live Preview SDK**, **Live Preview Hash**, and **Preview Token** to retrieve unpublished content from the **Preview API**.

## Understanding the Live Preview Data Flow

Live Preview involves several key components that work together to ensure seamless content updates.

### Key Components

Live Preview relies on multiple components working together to deliver real-time content updates.

- **Contentstack CMS**: The entry editor or [Visual Builder](https://www.contentstack.com/docs/content-managers/visual-builder/about-visual-builder) where content is modified.
- **Live Preview SDK**: Facilitates real-time updates between the CMS and the website.
- **Your Website**: Iframe-compatible site using either Client-Side Rendering (CSR) or Server-Side Rendering (SSR) method.
- **Contentstack Preview API**: Fetches unpublished content for previewing.
- **Contentstack Delivery API**: Fetches published content.
- **Contentstack Delivery SDK**: Helper SDK that can fetch published content or unpublished content based on the mode.

### How Live Preview Works

The Live Preview process follows a structured workflow, ensuring that content updates are displayed instantly.

- **Session Creation:** When a user opens an entry in Contentstack, a **Live Preview Hash** is generated. This acts as a **temporary session** created specifically to enable content preview for the current user.
- **Site Loading:** Contentstack loads the user’s website inside an iframe within the Live Preview panel.
- **SDK Integration:** The Live Preview SDK initializes on the user’s website.
- **Communication Setup:** The Live Preview SDK, through the postMessage API, establishes a connection between Contentstack CMS and the website.
- **Content Updates:****CSR Mode:** Updates are sent in the background via the postMessage API. The **Live Preview SDK** embedded in the user’s website listens for these messages using the onEntryChange() method.
- **SSR Mode:** The iframe reloads, triggering a fresh request to the Preview Service to fetch the updated content.
- **Content Retrieval:****CSR Mode:** The onEntryChange() method triggers the callback function provided, which is responsible for fetching the updated data. In preview mode, the **Delivery SDK** automatically uses the **Preview Service endpoint** to retrieve unpublished content.
- **SSR Mode:** The livePreviewQuery() function instructs the **Delivery SDK** to fetch content from the **Preview Service** instead of the default **Delivery Service**.
- **Rendering Content:** The updated content appears in the Live Preview panel or Visual Builder.

## Live Preview with CSR vs SSR

Contentstack Live Preview behaves differently depending on how your website renders content.

- ### Client-Side Rendering (CSR)

In CSR-based websites, content is fetched dynamically in the browser using JavaScript rather than being pre-rendered on the server. This approach enables **real-time content updates** without requiring a full page reload.

**CSR Workflow with Live Preview:**

The browser loads a minimal HTML shell with JavaScript.

- The frontend framework (React, Vue, etc.) fetches content dynamically from the **Preview API**.
- The **Live Preview SDK** establishes a postMessage connection to listen for content updates.
- The **Live Preview SDK** provides a function onEntryChange that accepts a callback. When an entry is updated in Contentstack, this callback function is triggered and should fetch relevant content from the Preview API **without reloading the page**.Live Preview with **Client-Side Rendering** (CSR) provides **instant content updates** without requiring a full page reload, ensuring a **smooth user experience**.

- ### Server-Side Rendering (SSR)

In SSR-based websites, content is fetched and rendered on the **server** before being sent as a fully formed HTML page to the browser. This approach ensures that search engines can index content effectively and improves the initial page load speed.

**SSR Workflow with Live Preview:**

When a preview request is made, Contentstack appends the **Live Preview Hash** to the iframe URL’s search parameters.

- The server-side code on the user's end is responsible for extracting this query parameter based on the server-side framework (e.g., Next.js, Express.js) and passing it to livePreviewQuery(), which instructs the Delivery SDK to fetch data from the Preview API.
- The page is fully rendered server-side and delivered as an HTML document.
- The Live Preview SDK is initialized and communication with Contentstack is set up.
- When an entry is updated in Contentstack, the **iframe reloads** to reflect the latest changes.

With **Server-Side Rendering (SSR)**, content is fetched and rendered on the server before being sent as a fully formed HTML page to the browser. This approach improves **SEO** and ensures a **faster initial page load**, making it ideal for large-scale applications. However, since the preview updates require a **full page reload** to reflect changes, SSR may not provide the same instant update experience as CSR.

## Live Preview’s Role in Preview Process

Contentstack provides SDKs that streamline Live Preview integration. The SDK listens for changes from the Contentstack and updates the content dynamically.

The **Live Preview SDK** automates the preview process by:

- **Connecting through postMessage API** for real-time content updates.
- **Handling CSR/SSR mode detection** to fetch content appropriately.
- **Automatically managing Live Edit Tags**, allowing easy navigation to modified fields.
- **Injecting preview parameters into delivery SDK Client** for API calls.

### Understanding iFrames in Live Preview

Live Preview in Contentstack **renders inside an iframe** within the CMS interface. This setup allows editors to view the preview alongside their entry without navigating away. The iframe ensures that the preview environment remains isolated, reducing conflicts with Contentstack’s UI.

By default, Live Preview loads your website inside an iFrame. With **Live Preview SDK v4.0.0** or **later**, you can also open your site in a separate browser tab.

**Additional Resource**: To learn how to configure this option, refer [Open Live Preview in a New Tab](/docs/developers/set-up-live-preview/open-live-preview-in-a-new-tab).

## Limitations of Using Live Preview Without the LP SDK

Without the Live Preview SDK, integrating Live Preview is more complex:

- **No automatic connection**: Developers must manually set up event listeners.
- **Manual live preview hash handling**: The application must manage usage of the live preview hash.
- **No direct field mapping**: Live Edit Tags won't work without SDK support.
- **Harder CSR/SSR differentiation**: Developers must manually configure preview fetch logic.

## Important Considerations

- **Live Preview SDK should always be running in client-side context**Live Preview always initializes on the client side.
- The **preview initialization process** happens in the **browser**, regardless of the rendering method. So even if you have an SSR implementation, add the Live Preview import and init code to your final HTML.
- For CSR, the LP SDK ensures that the correct **Live Preview Hash** is present inside the delivery SDK client.
- **Cache Considerations****Do not cache preview requests**—this prevents updates from appearing instantly.
- Ensure that API requests for preview content are always fresh. Do not cache the Live Preview hash in any manner.
- **Visual Builder and Timeline Work with Live Preview**
- **Visual Builder** enables on-page WYSIWYG-style editing with the help of edit tags attached to each editable DOM element.
- **Timeline** provides visibility over the upcoming releases and scheduled publishes.
- With Live Preview setup complete, both features work **automatically**.**Note:** Visual Builder will additionally require setting up edit tags for on-page editing.

## API Calls and Authentication

Live Preview relies on two main APIs:

- **Preview API** that fetches draft content using:Uses a preview_token for authentication.
- Requires a **Live Preview Hash** to retrieve content updates.
- **Delivery API** that fetches published content.Used when preview mode is **not enabled**.
- Fetches the **latest published version** of content.

Contentstack’s Live Preview is a powerful feature that streamlines content editing by providing real-time previews of changes before publishing.

## Common questions

### Do I need the Live Preview SDK to use Live Preview?
The page describes limitations without the Live Preview SDK, including no automatic connection, manual live preview hash handling, no direct field mapping for Live Edit Tags, and harder CSR/SSR differentiation.

### Why does Live Preview behave differently in CSR vs SSR?
CSR updates are sent via postMessage and handled by onEntryChange() without reloading the page, while SSR updates reload the iframe to fetch updated content.

### Should preview requests be cached?
No. The page states: **Do not cache preview requests**—this prevents updates from appearing instantly, and you should not cache the Live Preview hash in any manner.

### Which APIs are used for preview vs published content?
The **Preview API** fetches draft content (using a preview_token and Live Preview Hash), while the **Delivery API** fetches published content when preview mode is not enabled.

Filename: set-up-live-preview-how-live-preview-works.md