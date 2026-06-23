---
title: "[Set Up Live Preview] - How Live Preview Works with SDK"
description: How Live Preview Works with SDK
url: https://www.contentstack.com/docs/headless-cms/how-live-preview-works-with-sdk
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Set Up Live Preview] - How Live Preview Works with SDK

This page explains how Contentstack’s Live Preview SDK enables real-time preview updates while editing entries. It is intended for developers implementing Live Preview in a website or app, and should be used when configuring or troubleshooting how previews update (CSR vs SSR, session hash behavior, and event-based communication).

## How Live Preview Works with SDK

Contentstack’s **Live Preview SDK** enables real-time content updates while editing, allowing content creators to see changes instantly without publishing. It acts as a bridge between the entry editor and your website, ensuring a seamless and interactive preview experience.

## How the Live Preview SDK Works

The Live Preview SDK connects your website to the entry editor, enabling real-time updates. Here’s how it works:
- When you open an entry, the platform generates a **Live Preview Hash** (Session ID). This hash uniquely identifies the session and keeps track of content updates.
- Your website, which includes the **Live Preview SDK**, loads inside an **iframe** in the entry editor.
- The SDK establishes a **secure connection** between the entry editor and the website using postMessage() events.
- The SDK fetches the latest content and **automatically updates the preview panel**, without requiring a page reload.

This real-time content rendering makes it easier for content teams to see changes instantly and make informed updates before publishing.

**Additional Resource**: Learn how to configure Live Preview to [open in a new browser tab](./open-live-preview-in-a-new-tab.md), with behavior based on your SDK version.

## Understanding the Live Preview Hash

The Live Preview Hash is a crucial component of the Live Preview feature.
- It uniquely identifies each **preview session**.
- Fetches and displays the latest content updates dynamically.
- It tracks version changes with every edit and prevents outdated previews.
- The Live Preview Hash updates content automatically, eliminating the need to refresh or re-fetch data.

## How Live Preview Renders Content

Whether your website is built using **Client-Side Rendering (CSR)** or **Server-Side Rendering (SSR)**, the Live Preview SDK ensures a smooth and reliable preview experience.

### For Server-Side Rendering (SSR)
- The SDK listens for content updates and triggers a **preview refresh**.
- Since SSR websites generate pages on the server before sending them to the browser, a **page reload is required** to reflect the changes.
- This approach is best for frameworks like **Next.js**, **Nuxt.js**, and **traditional backend-driven** applications.

### For Client-Side Rendering (CSR)
- The SDK instantly **updates the content** without reloading the page.
- CSR websites dynamically fetch and render content in the browser, allowing the SDK to **directly inject updated content** into the preview panel.
- This approach works best for **React**, **Vue.js**, **Angular**, and other SPA frameworks.

Regardless of the rendering approach, the SDK ensures accurate previews that match what the end user will see post-publishing.

## Event-based Communication in Live Preview

The Live Preview SDK uses an event-driven communication system between the Contentstack editor and your website. These events ensure that the preview remains up-to-date without requiring manual refreshes.

### Key Events Used in Live Preview
- `init-ack`: The Contentstack editor sends this event when the preview session starts, confirming that the Live Preview SDK is active.
- `client-data-send`: When content is edited, this event triggers an update, ensuring that the SDK fetches the latest content.

By leveraging event-based communication, the Live Preview SDK keeps content previews in sync with the editing session, ensuring a real-time, uninterrupted experience.

## Common questions

**Q: Does Live Preview require publishing content to see updates?**  
A: No. The Live Preview SDK enables real-time content updates while editing, allowing content creators to see changes instantly without publishing.

**Q: What is the Live Preview Hash used for?**  
A: The Live Preview Hash (Session ID) uniquely identifies the preview session, tracks version changes with every edit, and helps prevent outdated previews while enabling dynamic updates.

**Q: Why does SSR require a page reload for Live Preview updates?**  
A: Since SSR websites generate pages on the server before sending them to the browser, a page reload is required to reflect the changes.

**Q: Which events are mentioned as key to Live Preview communication?**  
A: `init-ack` and `client-data-send`.