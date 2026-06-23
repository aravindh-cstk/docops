---
title: "[Variants CMS] - Publish an Entry Variant"
description: Publish an Entry Variant
url: https://www.contentstack.com/docs/headless-cms/publish-an-entry-variant
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-06-02
---

# [Variants CMS] - Publish an Entry Variant

This page explains how to publish an entry variant in Contentstack (including scheduling and publishing with references), and points to the API option for publishing variants. It is intended for content managers and developers who need to deliver personalized content to specific user segments using Entry Variants.

## Publish an Entry Variant

**Note**: The Entry Variants feature is currently available as part of an Early Access Program and may not be available to all users. For more information, you can reach out to our [support](mailto:support@contentstack.com) team.

Publishing entry variants in Contentstack allows you to deliver personalized content tailored to specific user segments.

To publish an entry variant, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:
- Navigate to the desired [stack](../../developers/set-up-stack/about-stack.md), click the **Entries **icon in the left navigation panel, and select an existing entry variant, indicated by the variants icon on the entries list page.
- Click the **Publish** button within the entry editor.
- In the **Publish Entry Variant** modal that appears, under **Select Environment(s)** and **Select Language(s)**, select the environment(s) and the locale(s) to which you want to publish the entry.
- Under **Publish**, you have two sub-options – **Now **(to publish immediately) and **Later **(to publish at a later date/time that you provide).When you select “Later”, a group of options appear asking you to select the **Date **and **Time **of publishing, and the **Time-Zone**.
- Confirm your settings by clicking the **Send **button.
- If you have nested references within your entry variant, the The **Publish Reference(s)** modal showing all the nested references for the entry will open up.
- Click **Send With References** to send the entry along with all its nested references for publishing.
    **Note:**

    If no previous or current version of the base entry is published in the selected environment(s) and language(s), the base entry will be published by default.
- If a content type or global field is updated after an entry is created (for example, new required fields are added), existing entries are checked against the latest configuration. If any required fields are empty, the entry cannot be published.

Alternatively, when publishing the base entry, you can **Select Variant(s)** from the dropdown in the **Publish Entry** modal. Choose from the available entry variants to publish them alongside the base entry.

By following these steps, you can effectively publish entry variants in Contentstack, enabling personalized content delivery to specific user segments.

## API Reference

To publish an entry variant via API, refer to the [Publish Entry Variant](../../../api-docs/api-detail/content-management-api.md#publish-entry-variant) API requests.

## Common questions

### Can I publish an entry variant at a scheduled time?
Yes. Under **Publish**, select **Later** and then select the **Date**, **Time**, and **Time-Zone**.

### What happens if the base entry has never been published?
If no previous or current version of the base entry is published in the selected environment(s) and language(s), the base entry will be published by default.

### Can I publish entry variants together with the base entry?
Yes. When publishing the base entry, you can **Select Variant(s)** from the dropdown in the **Publish Entry** modal to publish them alongside the base entry.

### Why might an entry variant fail to publish?
If a content type or global field is updated after an entry is created (for example, new required fields are added) and any required fields are empty, the entry cannot be published.