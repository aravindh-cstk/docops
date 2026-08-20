---
title: "Bulk Add to Release"
description: "Learn how to efficiently bulk add entries to a release in Contentstack, simplifying your release management with just a few clicks."
url: /headless-cms/bulk-add-to-release
---

# Bulk Add to Release

## Bulk Add to Release

The bulk **Add to Release** feature allows you to select multiple entries and add them to a release simultaneously. This functionality streamlines the release management process by reducing the steps required to prepare multiple entries for deployment.

To bulk add entries to a release, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps given below:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon on the left navigation panel. You can also use the shortcut key “E” (for both Windows OS and Mac OS users) to access Entries.
2.  Use the checkboxes to select the entries you want to add to a release.![Bulk Add to Release_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23683ab4b39537b9/66cf1b1d0607452d8537cb4c/Bulk_Add_to_Release_1.png)
    
    **Note:** You can select a maximum of **100 entries** at once.
    
3.  Once you have selected the entries, a floating panel will appear on the page. Click the **Add to Release** option in this panel.![Bulk Add to Release_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb12f981d7df3d9c6/66cf1b1d25bfec24995813a9/Bulk_Add_to_Release_2.png)
4.  In the **Add to Release** modal, either select an existing release or create a new one.![Bulk Add to Release_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73ef0048515a1cd1/66cf1adda4dc33803dd7ce20/Bulk_Add_to_Release_3.png)
    
    **Note:** For older releases, you may receive a warning message indicating that references will not be included, or that only one level of nesting is allowed for single items. To avoid this, [create](/docs/headless-cms/create-a-new-release) a new release or [clone](/docs/headless-cms/clone-a-release) the older release.
    
5.  Select the languages in which you want to deploy the entries. Specify the action you want to perform—either **Publish** or **Unpublish**.![Bulk Add to Release_4.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta59ebbcb24f23201/66cf1b1d62373b199f72430d/Bulk_Add_to_Release_4.png)
6.  Select **Add with References** to include all referenced entries or **Add without References** to add only the selected entries.
    
    **Note:** If **Disable fallback publishing** is enabled for your stack, entries that are not localized in a selected locale are skipped and not added to the release. Only localized entries are added. You can view skipped items in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue).
    
    **Note**
    
    -   Nested references up to a default depth of **5 levels** will be included, for both single and bulk add to release actions, and can vary as per your organization’s plan.
    -   View the bulk add to release action logs in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue).
    

This streamlined process ensures that you can efficiently manage and add multiple entries to a release.

## API Reference

To add multiple entries to a release via API, refer to the [Bulk Add to Release](/docs/developers/apis/content-management-api/bulk-operations#bulk-add-to-release) API request.
