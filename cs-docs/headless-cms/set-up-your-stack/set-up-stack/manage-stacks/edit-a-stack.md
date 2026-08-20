---
title: "Edit a Stack"
description: "Learn to edit a stack. Update the stack details for efficient content management."
url: /headless-cms/edit-a-stack
---

# Edit a Stack

## Edit a Stack

You can update a stack’s details to keep your workspace organized and aligned with your project’s needs.

**Note:** Only the Stack [Owner](/docs/headless-cms/types-of-roles#owner) or [Admin](/docs/headless-cms/types-of-roles#admin) can edit a stack.

To edit a stack, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for Windows and Mac OS users).
2.  In the **General** section, modify the stack’s **Name** and **Description**.
3.  Click **Save** to confirm your changes.
    
    ![Edit Stack Settings in Contentstack](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb772f4ff187f7e86/67befadc5e83f4b872cb41f9/Setup-a-Stack-Edit-Stack-Settings-General-Section.png)
    

These updates help ensure your stack remains up-to-date.

After updating the stack settings, you can view the **Last Modified** timestamp on the stack card in the “Stacks” view.  
![Stack card showing last modified timestamp](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt977de0d5fdb4d79b/684fca62260f5330fa615189/2._last_updated_info.png)

## Manage Publishing Settings

If your plan includes the fallback publishing controls, the stack **Settings** page shows a **Publishing** section. Here you control how Contentstack handles entries that are not localized in a target locale.

**Note:** The Owner, Admin, and Developer roles can change this setting. The Developer role cannot change the stack name, description, or color.

To disable fallback publishing, go to your stack settings and perform the following steps:

1.  Open the **Publishing** section and select **Disable fallback publishing**.
    
    **Note:** Entries that were already published through fallback stay live. This setting affects only future release and deploy actions.
    
2.  Click **Save**.

After you save this setting, a **Cross-locale unpublish release** panel appears. Use it to clean up content that was previously published through fallback:

1.  Select the branches to clean up. Choose **All branches** or pick specific branches. You must select at least one branch.
2.  Click **Create releases**. The helper text shows how many releases Contentstack creates.
3.  Review the confirmation modal and confirm. Contentstack creates one draft release per selected branch, with auto-generated names.

**Note:** A background job creates these releases, so they are not available right away. Track progress in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue). This applies to the latest (v2) releases only.

## API Reference

To edit a stack via API, refer to the [Update a Stack](https://www.contentstack.com/docs/developers/apis/content-management-api/stacks#update-stack) API request. To set this option via API, refer to the [Add stack settings](/docs/developers/apis/content-management-api/stacks#add-stack-settings) request and the `disable_fallback_publish` field.
