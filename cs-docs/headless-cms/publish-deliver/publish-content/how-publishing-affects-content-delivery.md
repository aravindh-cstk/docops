---
title: "How Publishing Affects Content Delivery"
description: "Understand how publishing states, environments, and locales affect content visibility in Contentstack Delivery APIs and SDKs."
url: /headless-cms/how-publishing-affects-content-delivery
uid: blt634d56155ab82ac9
---

# How Publishing Affects Content Delivery

## How Publishing Affects Content Delivery

Understanding how publishing works in Contentstack helps you control when and where your content becomes available to end users. This includes how content behaves across environments, locales, and scheduling conditions.

This page explains how different publishing states affect content visibility in Delivery APIs and SDKs.

## Key Concepts

Before reviewing publishing behavior, ensure you are familiar with the following:

-   **Environment:** The target where content is published (for example, development, staging, production).
-   **Locale:** The language or regional version of content.
-   **Entry state:** The current status of an entry (draft, published, scheduled).
-   **Delivery APIs/SDKs:** Interfaces used to fetch published content for your applications.

**Note:** Content visibility is evaluated per **entry, environment, and locale**.

## Content State vs Delivery Visibility

Use the following table to understand when content becomes visible through Delivery APIs based on its publishing state.

### Draft States

| Entry state | Published to environment | Visible in Delivery API/SDK | Notes |
| --- | --- | --- | --- |
| Saved (draft) | No | No | Entry exists in the CMS but is not available for delivery. |
| Saved (draft) | Yes (previous version exists) | Yes (previous published version) | New changes are not visible until published. |

### Published States

| Entry state | Published to environment | Visible in Delivery API/SDK | Notes |
| --- | --- | --- | --- |
| Published | Yes | Yes | The latest published version is returned in delivery. |
| Published | No | No | Publishing is environment-specific. |

### Scheduled States

| Entry state | Scheduled time reached | Visible in Delivery API/SDK | Notes |
| --- | --- | --- | --- |
| Scheduled publish | No | No | Content is not visible until the scheduled time. |
| Scheduled publish | Yes | Yes | Content becomes visible after the publish job executes. |
| Scheduled unpublish | No | Yes | Content remains visible until the scheduled unpublish time. |
| Scheduled unpublish | Yes | No | Content is removed from delivery after unpublish completes. |

## Environment-Specific Publishing

Publishing in Contentstack is environment-specific:

-   Publishing content to one environment does not make it available in others.
-   You must explicitly publish content to each environment where it should be accessible.

This allows you to control content across development, staging, and production independently.

## Locale-Specific Publishing

If localization is enabled:

-   Content must be published separately for each locale.
-   Publishing the default locale does not automatically publish localized versions.

Ensure the correct locale is selected when publishing content.

## Scheduled Publishing Behavior

When scheduling publishing actions:

-   Content becomes visible only after the scheduled publish time is reached and executed.
-   Scheduled unpublish removes content from delivery at the specified time.
-   Until execution, the current published version remains unchanged.

You can monitor scheduled jobs in the **Publish Queue**.

## Troubleshooting Content Visibility

If your content is not visible in Delivery APIs or SDKs, check the following:

-   Verify that the correct **environment** was selected during publishing.
-   Ensure the entry is **published**, not just saved as a draft.
-   Check for any **scheduled publish or unpublish actions**.
-   Review the **Publish Queue** for job status.
-   Confirm the correct **locale** is published (if applicable).
