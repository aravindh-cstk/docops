---
title: "[Headless CMS | Bulk Operations on Entries] - Bulk Publish Entries"
description: Bulk publish multiple entries along with their linked or referenced content.
url: https://www.contentstack.com/docs/headless-cms/bulk-publish-entries
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-06-02
---

# [Headless CMS | Bulk Operations on Entries] - Bulk Publish Entries

This page explains how to bulk publish multiple entries (optionally with referenced content) in Contentstack. It is intended for content managers and teams managing releases or large updates, and should be used when you need to publish many entries across environments and languages efficiently.

## Bulk Publish Entries

The bulk publish feature allows you to publish multiple entries along with their linked or referenced content, ensuring a seamless and consistent publishing experience. This feature is ideal for bulk updates or managing releases with multiple content components efficiently.

**Note**: [Nested Reference Publishing](../publish-content/about-nested-reference-publishing.md) is a plan-based feature. Reach out to our [support](mailto:support@contentstack.com) team for more information.

To bulk publish entries, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
- Use the checkboxes to select the entries you want to publish.
- After selecting the entries, click the **Publish** option in the floating panel that appears.
- In the **Publish Entries** modal:
      **Select Environment(s)**: Select the environment(s) where the entries will be published.
- **Select Language(s)**: Select the locale(s) in which you want the entries published. If localized content exists, it will be selected by default.
- **Publish**: Select whether to publish the entries immediately (**Now**) or at a scheduled time (**Later**).

    **Note**: When publishing multiple localized and unlocalized versions of an entry, you can select up to **50 languages** and **50 environments**.
- Click **Send With References** to publish the selected entries along with their referenced items, or **Send Without References** to publish only the selected entries.

**Note**:
- If a content type or global field is updated after an entry is created (for example, new required fields are added), existing entries are checked against the latest configuration. If any required fields are empty, the entry cannot be published.
- When publishing multiple entries, only the latest version of each entry will be published.
- Nested references are limited to a depth of **5 levels**, and only the latest versions of nested references will be published.
- You can publish up to **100 entries** in **10 languages** across **10 environments** at a time.
- When scheduling bulk publishing, the date cannot exceed **12 months** from the current date.

**Additional Resource**:
- For automated bulk publishing, refer to the [Bulk Publish and Unpublish Content](../../developers/cli/bulk-publish-and-unpublish-content.md) guide.
- To publish with entry variants, refer to our documentation on [Publish an Entry Variant](../entry-variants/publish-an-entry-variant.md) and [Understanding How Publishing Works with Entry Variants](../entry-variants/understanding-how-publishing-works-with-entry-variants.md).

## Common questions

### Can I publish referenced content along with selected entries?
Yes—click **Send With References** to publish the selected entries along with their referenced items, or **Send Without References** to publish only the selected entries.

### What happens if required fields were added after an entry was created?
Existing entries are checked against the latest configuration, and if any required fields are empty, the entry cannot be published.

### What are the limits for bulk publishing?
You can publish up to **100 entries** in **10 languages** across **10 environments** at a time, and nested references are limited to a depth of **5 levels**.

### How far in advance can I schedule bulk publishing?
When scheduling bulk publishing, the date cannot exceed **12 months** from the current date.