---
title: "How Live Preview Works"
description: "Learn how Contentstack’s Live Preview enables real-time content updates using CSR and SSR. Explore its setup, SDK integration, and caching considerations."
url: /headless-cms/how-live-preview-works
uid: blt44c52d0f5ec55ff9
---

# How Live Preview Works

## How Live Preview Works

Contentstack’s **Live Preview** allows content creators to see real-time updates to their content as they edit an entry. This feature enhances the content review process by providing **instant feedback** without the need to publish changes.

Live Preview fetches updated content from Contentstack’s **Preview Service** and displays the changes immediately on the front end. It integrates seamlessly with Contentstack's CMS, using the **Live Preview SDK**, **Live Preview Hash**, and **Preview Token** to retrieve unpublished content from the **Preview API**.

## Understanding the Live Preview Data Flow

Live Preview involves several key components that work together to ensure seamless content updates.

### Key Components

Live Preview relies on multiple components working together to deliver real-time content updates.

-   **Contentstack CMS**: The entry editor or [Visual Builder](/docs/headless-cms/about-visual-editor) where content is modified.
-   **Live Preview SDK**: Facilitates real-time updates between the CMS and the website.
-   **Your Website**: Iframe-compatible site using either Client-Side Rendering (CSR) or Server-Side Rendering (SSR) method.
-   **Contentstack Preview API**: Fetches unpublished content for previewing.
-   **Contentstack Delivery API**: Fetches published content.
-   **Contentstack Delivery SDK**: Helper SDK that can fetch published content or unpublished content based on the mode.

### How Live Preview Works

The Live Preview process follows a structured workflow, ensuring that content updates are displayed instantly.

1.  **Session Creation:** When a user opens an entry in Contentstack, a **Live Preview Hash** is generated. This acts as a **temporary session** created specifically to enable content preview for the current user.
2.  **Site Loading:** Contentstack loads the user’s website inside an iframe within the Live Preview panel.
3.  **SDK Integration:** The Live Preview SDK initializes on the user’s website.
4.  **Communication Setup:** The Live Preview SDK, through the postMessage API, establishes a connection between Contentstack CMS and the website.
5.  **Content Updates:**
    -   **CSR Mode:** Updates are sent in the background via the postMessage API. The **Live Preview SDK** embedded in the user’s website listens for these messages using the onEntryChange() method.
    -   **SSR Mode:** The iframe reloads, triggering a fresh request to the Preview Service to fetch the updated content.
6.  **Content Retrieval:**
    -   **CSR Mode:** The onEntryChange() method triggers the callback function provided, which is responsible for fetching the updated data. In preview mode, the **Delivery SDK** automatically uses the **Preview Service endpoint** to retrieve unpublished content.
    -   **SSR Mode:** The livePreviewQuery() function instructs the **Delivery SDK** to fetch content from the **Preview Service** instead of the default **Delivery Service**.
7.  **Rendering Content:** The updated content appears in the Live Preview panel or Visual Builder.

## Live Preview with CSR vs SSR

Contentstack Live Preview behaves differently depending on how your website renders content.

1.  ### Client-Side Rendering (CSR)

    In CSR-based websites, content is fetched dynamically in the browser using JavaScript rather than being pre-rendered on the server. This approach enables **real-time content updates** without requiring a full page reload.

    **CSR Workflow with Live Preview:**

    -   The browser loads a minimal HTML shell with JavaScript.
    -   The frontend framework (React, Vue, etc.) fetches content dynamically from the **Preview API**.
    -   The **Live Preview SDK** establishes a postMessage connection to listen for content updates.
    -   The **Live Preview SDK** provides a function onEntryChange that accepts a callback. When an entry is updated in Contentstack, this callback function is triggered and should fetch relevant content from the Preview API **without reloading the page**.

        Live Preview with **Client-Side Rendering** (CSR) provides **instant content updates** without requiring a full page reload, ensuring a **smooth user experience**.

2.  ### Server-Side Rendering (SSR)

    In SSR-based websites, content is fetched and rendered on the **server** before being sent as a fully formed HTML page to the browser. This approach ensures that search engines can index content effectively and improves the initial page load speed.

    **SSR Workflow with Live Preview:**

    -   When a preview request is made, Contentstack appends the **Live Preview Hash** to the iframe URL’s search parameters.
    -   The server-side code on the user's end is responsible for extracting this query parameter based on the server-side framework (e.g., Next.js, Express.js) and passing it to livePreviewQuery(), which instructs the Delivery SDK to fetch data from the Preview API.
    -   The page is fully rendered server-side and delivered as an HTML document.
    -   The Live Preview SDK is initialized and communication with Contentstack is set up.
    -   When an entry is updated in Contentstack, the **iframe reloads** to reflect the latest changes.

    With **Server-Side Rendering (SSR)**, content is fetched and rendered on the server before being sent as a fully formed HTML page to the browser. This approach improves **SEO** and ensures a **faster initial page load**, making it ideal for large-scale applications. However, since the preview updates require a **full page reload** to reflect changes, SSR may not provide the same instant update experience as CSR.


## Live Preview’s Role in Preview Process

Contentstack provides SDKs that streamline Live Preview integration. The SDK listens for changes from the Contentstack and updates the content dynamically.

The **Live Preview SDK** automates the preview process by:

-   **Connecting through postMessage API** for real-time content updates.
-   **Handling CSR/SSR mode detection** to fetch content appropriately.
-   **Automatically managing Live Edit Tags**, allowing easy navigation to modified fields.
-   **Injecting preview parameters into delivery SDK Client** for API calls.

### Understanding iFrames in Live Preview

Live Preview in Contentstack **renders inside an iframe** within the CMS interface. This setup allows editors to view the preview alongside their entry without navigating away. The iframe ensures that the preview environment remains isolated, reducing conflicts with Contentstack’s UI.

By default, Live Preview loads your website inside an iFrame. With **Live Preview SDK v4.0.0** or **later**, you can also open your site in a separate browser tab.

**Additional Resource:** To learn how to configure this option, refer [Open Live Preview in a New Tab](/docs/headless-cms/open-live-preview-in-a-new-tab).

## Collaborative Drafts in Live Preview

Live Preview shows collaborative drafts when more than one user edits the same entry at the same time. Earlier, Live Preview created a separate preview session for each user, so collaborators saw only their own unsaved changes. With collaborative drafting, everyone editing that entry sees the same content as it changes.

This applies to the auto-saved draft of an entry, so the preview reflects in-progress changes as they are saved.

### How Collaborative Drafts Work

When multiple users edit the same entry, the entry editor keeps their changes in sync at the form level, and the Preview API returns the entry with everyone's draft changes. The result is a single, synchronized preview for all users editing that entry:

-   Your changes appear in your own preview instantly.
-   Your changes appear in other users’ previews after a short delay of a few seconds. The delay groups multiple edits together so the preview does not reload on every change during active collaboration.

### When Collaborative Drafts Applies

Collaborative drafts apply once **Drafts & Auto Save** is **enabled** in your stack settings. When it's on, everyone editing an entry sees the same draft content in the preview.

**Note:** Collaborative drafts are not yet supported in Visual Editor. It currently applies to the entry editor’s Live Preview.

## Limitations of Using Live Preview Without the LP SDK

Without the Live Preview SDK, integrating Live Preview is more complex:

-   **No automatic connection**: Developers must manually set up event listeners.
-   **Manual live preview hash handling**: The application must manage usage of the live preview hash.
-   **No direct field mapping**: Live Edit Tags won't work without SDK support.
-   **Harder CSR/SSR differentiation**: Developers must manually configure preview fetch logic.

## Important Considerations

1.  **Live Preview SDK should always be running in client-side context**
    -   Live Preview always initializes on the client side.
    -   The **preview initialization process** happens in the **browser**, regardless of the rendering method. So even if you have an SSR implementation, add the Live Preview import and init code to your final HTML.
    -   For CSR, the LP SDK ensures that the correct **Live Preview Hash** is present inside the delivery SDK client.
2.  **Cache Considerations**
    -   **Do not cache preview requests**—this prevents updates from appearing instantly.
    -   Ensure that API requests for preview content are always fresh. Do not cache the Live Preview hash in any manner.
3.  **Visual Builder and Timeline Work with Live Preview**
4.  **Visual Builder** enables on-page WYSIWYG-style editing with the help of edit tags attached to each editable DOM element.
5.  **Timeline** provides visibility over the upcoming releases and scheduled publishes.
6.  With Live Preview setup complete, both features work **automatically**.

    **Note:** Visual Builder will additionally require setting up edit tags for on-page editing.


## API Calls and Authentication

Live Preview relies on two main APIs:

1.  **Preview API** that fetches draft content using:
    -   Uses a preview\_token for authentication.
    -   Requires a **Live Preview Hash** to retrieve content updates.
2.  **Delivery API** that fetches published content.
    -   Used when preview mode is **not enabled**.
    -   Fetches the **latest published version** of content.

Contentstack’s Live Preview is a powerful feature that streamlines content editing by providing real-time previews of changes before publishing.
