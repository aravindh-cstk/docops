---
title: "[Headless CMS | Publish Content] - Publish an Entry"
description: Instructions for publishing an entry in Contentstack, including publishing references, validation workflows, and limitations.
url: https://www.contentstack.com/docs/headless-cms/publish-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-06-02
---

# [Headless CMS | Publish Content] - Publish an Entry

This page explains how to publish an entry in Contentstack so it becomes available in selected environments, locales, or variants, including options for publishing referenced items with or without validation. Content managers and publishers should use this when preparing content for release and ensuring referenced content is publish-ready.

## Publish an Entry

Publishing an [entry](./about-entries.md) in Contentstack makes content available in the selected environments, locales, or variants. You can also include localized versions and referenced items in this process, helping you deliver complete and accurate content across selected publishing targets.

To publish an entry, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your stack and click the “Entries” icon. You can also use the shortcut key “E” (both Windows and Mac) to access entries.
- [Search](../search-content/about-search.md) for the entry you want to publish.
- Open the entry and click **Publish** at the bottom-right corner of the page.**Tip:** You can also publish entries directly from the Entries list page using one of the following methods:
  - Click the **vertical ellipsis** next to the entry, then select **Publish** from the dropdown menu.
  - Select the **checkbox** next to the entry and click **Publish** in the floating action widget.
- In the **Publish Entry** modal, select the target [environments](../../developers/set-up-environments/about-environments.md) and [locales](../../developers/multilingual-content/about-localization.md) to which you want to publish the entry.
- If the entry has [variants](../entry-variants/about-entry-variants.md), select the variants to publish from the **Variants** dropdown.
- Under the **Publish** section, select one of the two available options:
  - **Now:** Publish the entry immediately.
  - **Later:** Schedule the entry to be published at a specific date and time.
- Click **Send** to continue. Depending on your organization’s features, Contentstack opens one of the following modals:
  - **Publish Review:** Review, select, and validate nested references for publishing.
  - **Publish Reference(s):** Review and select nested references for publishing.

**Note**: If a content type or global field is updated after an entry was created (for example, a new required field is added), Contentstack validates the entry against the latest configuration when you publish. If any required field is empty, the entry cannot be published until you complete it.

**Tip:** You can [publish entries in bulk](./bulk-publish-entries.md) for efficiency.

## Publish Entry References

When an entry contains referenced items, the **Publish Review** or **Publish Reference(s)** modal displays all referenced entries and assets, including nested references. Review these items before completing the publishing action.

Publishing referenced items ensures that all required content is available in the selected environments and locales.

### Publish References Without Validation (Quick Publish)

- In the **Publish Reference(s)** modal, review all referenced entries and assets.
- Hover over any warning icons to view the issues in the references. If required, click the “Edit entry/asset in new tab” icon to update the reference.

  **Additional Resource:** To learn more about fixing validation errors, refer to the [Validations](../../developers/security/validations.md) document.
- Choose one of the following options:
  - **Send With References:** Publishes the parent entry along with the selected references.
  - **Send Without References:** Publishes only the parent entry. Referenced items remain unpublished.

    **Tip:** When publishing without validation, you can track the task’s progress and status in the [Bulk Task Queue](./stack-bulk-task-queue.md) under **Settings**.

### Validate References and Publish

This workflow allows you to review, filter, and validate referenced entries and assets before publishing. Validation helps prevent publish failures by identifying issues in referenced items before they are sent to the Publish Queue.

**Note:**
- The **Publish Review and Validation** workflow is an early access, plan-based feature. To enable it for your organization, contact [Contentstack Support](mailto:support@contentstack.com).
- You cannot validate the entries when bulk publishing them.
- Validation results from the Bulk Task Queue are accessible only to:
  - Users with [Owner](../../developers/invite-users-and-assign-roles/types-of-roles.md#owner) or [Admin](../../developers/invite-users-and-assign-roles/types-of-roles.md#admin) roles
  - The user who initiated the validation job
- In the **Publish Review** modal, click the “Filter” icon, then click the “Reference Selection” dropdown and choose one of the following options:
  - **Select specific references:** Select custom references to publish along with the parent entry.
  - **Selects only first-level references:** Include only direct references linked to the parent entry.
  - **Select all references:** Include all the references of the entry.
  - **Select only the parent entry:** Publish only the entry without any references.
- To select specific references, use the “Arrow” icon to expand or collapse the reference levels and choose the references.

  **Tip:** Asset rows will be displayed as system assets.
- After selecting the references, choose one of the following actions:![Publish_Entries_PublishReview.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd188837d210713a3/698aecc2626f6476f147275e/Publish_Entries_PublishReview.png)
  - **Validate and Publish:** Opens the **Validate Items** modal to review the items selected for publishing.

    **Tip:** If your entry contains many references, you can minimize the **Validate Items** modal using the “Minimize” icon in the top-right corner.
  - **Send All References:** Publishes the entry and all referenced items immediately, without validation.
- Click a reference to open it in a new tab and address any issues before proceeding.

  **Note:** When you fix validation errors or update a referenced item, the **Validate Entries** modal continues to show the previous results. Run a new validation to reflect the latest changes before publishing.
- When you are ready, click **Publish Now**.![Publish_Entries_Validate.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt35f1c54627cc9e21/698aecc24069a72c855dea18/Publish_Entries_Validate.png)  
The entry and selected references are added to the [**Publish Queue**](../publish-content/view-publish-status-of-entries-assets-in-publish-queue.md) for processing.

**Tip:** You can run multiple entry validations and check their progress in the task window.

Publishing an entry in Contentstack makes it available across the selected environments, locales, and variants. Using Validate and Publish helps ensure all related entries and assets are publish-ready, reducing errors and improving reliability.

## Limitations

- When publishing a single entry, you can select up to **10 environments** and **10 locales**. When publishing multiple entries, you can select up to **50 environments** and **50 locales**. These limits vary for [localized entries](../../developers/multilingual-content/localize-an-entry.md). For guidance, contact [Contentstack Support](mailto:support@contentstack.com).
- Scheduled publishing dates must be set **within 12 months** of the current date.
- Referenced items are visible only up to the [**Nested Reference Publishing**](../publish-content/about-nested-reference-publishing.md)** depth limit** included in your plan.
- You can run a **maximum of two validation** or publish review processes at the same time.

## Common questions

### What happens if required fields were added after the entry was created?
Contentstack validates the entry against the latest configuration when you publish, and if any required field is empty, the entry cannot be published until you complete it.

### Can I publish referenced items along with the parent entry?
Yes—depending on the modal shown, you can publish the parent entry with selected references (for example, **Send With References** or **Send All References**) or publish only the parent entry.

### Where can I track publishing tasks when publishing without validation?
You can track the task’s progress and status in the [Bulk Task Queue](./stack-bulk-task-queue.md) under **Settings**.

### What are the environment and locale selection limits for publishing?
When publishing a single entry, you can select up to **10 environments** and **10 locales**; when publishing multiple entries, up to **50 environments** and **50 locales**.