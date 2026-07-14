---
title: "[Timeline] - Preview Entry"
description: "How to preview an entry using Contentstack Timeline."
url: https://www.contentstack.com/docs/headless-cms/preview-entry
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - authors
version: latest
last_updated: 2026-03-26
---

# [Timeline] - Preview Entry

This page explains how to use Contentstack’s Timeline feature to preview how entry changes will appear on your website at a future date/time. It is intended for content managers and authors who need to validate content updates before they go live.

### Item 1

#### Article section

##### Heading

Preview Entry

##### Content

With Contentstack's [Timeline](../timeline/about-timeline.md) feature, you can now see how changes made to any entry will appear on your website in the future. Follow these steps to preview an entry:

To preview an entry, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Click on the [Entries](./about-entries.md) icon in the left navigation panel or use the shortcut key “E” (applicable for both Windows and Mac OS users).
- Navigate to the entry you want to preview. Click on the “vertical ellipsis” in the **Actions** column and select **Preview**.![Preview Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fe2197abd4e56b8/667bfe5ec8c1351ac73ca372/Preview_Button.png)

  **Note**: You can preview only the latest versions of your entry.

Depending on the scenario of your entry’s publish status you will see the following modals:
- ## Unpublished Entries
If your entry is not published in any environment and not scheduled for publishing, you need to select the **Environment** and **Locale** to preview your website.
- If your entry is not added to any release or scheduled for publishing, input a tentative **Date** and **Time** to proceed with the preview.![1 - Unpublished Entries.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9e2189e91330822/667bfe01c8c135deb73ca362/1_-_Unpublished_Entries.png)
- ## Scheduled Publishing
For entries scheduled to be published, select the **Environment** and **Locale** to preview your website.
- If the entry is scheduled for publishing, you will see a dropdown to select the **Scheduled Publish** option.![2 -  Scheduled Publishing.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde4f7d6b74414f0d/667bfe013acab019be9e7162/2_-_Scheduled_Publishing.png)
- ## Added to an Undeployed Release
For entries added to a release but not yet deployed, select the **Environment** and **Locale** to preview your website.
- If the entry is part of a release but not deployed, input a tentative **Date** and **Time** for the preview.
- Alternatively, in the **Releases** module, if you try to preview an undeployed release, you will be prompted to input a tentative **Date** and **Time**.![3 - Added to an Undeployed Release.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt223eead8d80b0f9f/66a3878c1a452e816082004a/3_-_Added_to_an_Undeployed_Release.png)
- ## Added to a Deployed Release
For entries added to a deployed release, select the **Environment** and **Locale** to preview your website.
- If the entry is already deployed via a release, you will see a dropdown to select the **Release**.

By following these steps, you can ensure that your content updates are accurately reflected on your website before they go live, providing a seamless and consistent user experience.

## Common questions

**Q: Can I preview older versions of an entry?**  
A: No. **Note**: You can preview only the latest versions of your entry.

**Q: What do I need to select to preview an unpublished entry?**  
A: Select the **Environment** and **Locale** to preview your website, and if your entry is not added to any release or scheduled for publishing, input a tentative **Date** and **Time**.

**Q: What changes when an entry is scheduled for publishing?**  
A: You will see a dropdown to select the **Scheduled Publish** option.

**Q: What if my entry is part of a deployed release?**  
A: You will see a dropdown to select the **Release**.