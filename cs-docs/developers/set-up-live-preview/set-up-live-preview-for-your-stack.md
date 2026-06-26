---
title: "[Set Up Live Preview] - Set Up Live Preview for Your Stack"
description: Set up and enable Live Preview for a Contentstack stack, including environment Base URL configuration and Visual Experience settings.
url: https://www.contentstack.com/docs/headless-cms/set-up-live-preview-for-your-stack
product: Contentstack
doc_type: setup-guide
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set Up Live Preview] - Set Up Live Preview for Your Stack

This page explains how to enable and configure Contentstack Live Preview for a stack. It is intended for developers (and stack administrators) setting up preview environments and Visual Experience settings so editors can see real-time content updates while editing entries.

## Set Up Live Preview for Your Stack

Contentstack's [Live Preview](../../content-managers/author-content/about-live-preview.md) feature allows you to view real-time content updates while editing entries, ensuring a smooth editing experience and reducing publishing errors.

To enable Live Preview for your stack, log in to your [Contentstack Account](https://www.contentstack.com/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon in the left navigation pane**l.**
- Navigate to **Environments **and select an existing environment or create a new one.
- Add the [Base URL](../set-up-environments/add-an-environment.md) for each locale to ensure accurate content previews, then **Save** your changes.
- Next, navigate to **Visual Experience** from the **Settings** menu and select the **Enable Live Preview** checkbox.
- Select the **Default Preview Environment**.**Additional Resource**: By default, Live Preview generates preview URLs using the Base URL configured for an environment and the URL value defined in an entry. This approach works well for simple routing setups. For more complex website structures, use [Custom Preview URLs](./custom-preview-urls.md) to define dynamic, pattern-based preview URLs.
- Enable the **Display Setup Status** toggle to display the configuration status.
- Enable the **Always Open in New Tab** toggle to preview your website in a new browser tab.**Note**: With the latest Live Preview SDK (**v4.0.0** or **later**), the website opens outside the Contentstack iFrame. This feature is available on select plans. Contact our [support](mailto:support@contentstack.com) team to enable it for your organization.

Once enabled, the **Live Preview** icon appears in the right panel of your entry editor. Clicking this icon opens a side-by-side view, allowing you to edit content while viewing real-time updates.

**Note**: If real-time updates do not appear in the preview panel, check the following:
- Ensure the correct **preview environment** is selected.
- Verify the **Base URL **settings in **Environments**.

## Common questions

### Do I need to configure a Base URL for Live Preview to work?
Yes—Live Preview generates preview URLs using the Base URL configured for an environment and the URL value defined in an entry.

### When should I use Custom Preview URLs?
For more complex website structures where simple Base URL + entry URL routing is not sufficient, use [Custom Preview URLs](./custom-preview-urls.md) to define dynamic, pattern-based preview URLs.

### Why does Live Preview open in a new tab instead of inside the Contentstack iFrame?
With the latest Live Preview SDK (**v4.0.0** or **later**), the website opens outside the Contentstack iFrame when using the **Always Open in New Tab** option.

### What should I check if real-time updates are not appearing?
Ensure the correct **preview environment** is selected and verify the **Base URL **settings in **Environments**.