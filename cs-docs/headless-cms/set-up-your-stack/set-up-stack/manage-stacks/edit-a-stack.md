---
title: "Edit a Stack"
description: "Learn how to edit a stack in Contentstack. Update the stack name, description, and publishing settings to keep your workspace organized and current."
url: /headless-cms/edit-a-stack
---

# Edit a Stack

## Edit a Stack

You can update a stack’s details to keep your workspace organized and aligned with your project’s needs.

**Note:** Only the Stack [Owner](/docs/headless-cms/types-of-roles#owner) or [Admin](/docs/headless-cms/types-of-roles#admin) can edit a stack.

To edit a stack, sign in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1. Navigate to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2. In the **General** section, modify the stack’s **Name** and **Description**.
3. Click **Save** to confirm your changes.

 ![Edit Stack Settings in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb772f4ff187f7e86/67befadc5e83f4b872cb41f9/Setup-a-Stack-Edit-Stack-Settings-General-Section.png)


These updates help ensure your stack remains up-to-date.

After updating the stack settings, you can view the **Last Modified** timestamp on the stack card in the “Stacks” view.

![Stack card showing last modified timestamp](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt977de0d5fdb4d79b/684fca62260f5330fa615189/2._last_updated_info.png)

## Manage Publishing Settings

If your plan includes the fallback publishing controls, the stack **Settings** page shows a **Publishing** section below **API Credentials**. By default, when you publish an entry to a locale it is not localized in, Contentstack publishes the content of its fallback locale instead. Disable fallback publishing to publish only the locales that have their own localized entry.

**Note:** The Owner, Admin, and Developer roles can change this setting. The Developer role cannot change the stack name, description, or color.

**Note:** For a new stack, **Disable fallback publishing** is selected by default. For an existing stack, it is cleared by default, so fallback publishing continues until you turn it on.

To disable fallback publishing, go to your stack settings and perform the following steps:

1. Open the **Publishing** section and select **Disable fallback publishing**.
2. Click **Save**.

Selecting the checkbox shows a note that turning the setting on does not remove content that is already live. Entries published through fallback stay live until you unpublish them.

<!-- Screenshot: Stack Settings > Publishing section showing the Disable fallback publishing checkbox and helper text -->

After you save the setting, a **Cross-Locale Unpublish Release** section appears. Use it to clean up content that was previously published through fallback:

1. In **Select branches**, choose one or more branches to clean up. The **Create Releases** button stays disabled until you select at least one branch.
2. Click **Create Releases**.
3. In the **Create Cross-Locale Unpublish Release** modal, review the number of releases to be created, then confirm. Saving the setting and creating the releases happen together.

Contentstack scans each selected branch in the background and creates one release of unpublish items per branch. Release names are generated automatically. The releases are created for review, so nothing is unpublished until you deploy them to an environment. Track progress in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue). This applies to the latest (v2) releases only.

<!-- Screenshot: Stack Settings > Cross-Locale Unpublish Release section with the Select branches dropdown and Create Releases button -->

**Note:** This setting is available only when your organization plan includes fallback publishing controls. It applies to the latest (v2) releases.

## API Reference

To edit a stack via API, refer to the [Update a Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/stacks#update-stack) API request. To set this option via API, refer to the [Add stack settings](/docs/developers/apis/content-management-api/stacks#add-stack-settings) request and the `disable_fallback_publish` field.
