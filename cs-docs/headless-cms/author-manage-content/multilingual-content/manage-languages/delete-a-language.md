---
title: "Delete a Language"
description: "steps to delete a language in Contentstack"
url: /headless-cms/delete-a-language
uid: blt0faeb3a6dc4658ed
---

# Delete a Language

## Delete a Language

**Warning:** If you delete a language, all the localized entries created for the language will get deleted. However, adding back the deleted language will restore all the lost localized entries related to the specific language.

To delete a [language](/docs/headless-cms/about-languages) from the [stack](/docs/headless-cms/about-stack), log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

1.  Go to your stack, click the “Settings” icon (press “S”) on the left navigation panel, and select **Languages** (or press “**alt + L**” for Windows OS, and “option + **L**” for Mac OS).
2.  On the **Languages** page. hover over the language you want to delete, click on the “Delete” icon (trash bin) that appears at the extreme right end.![Delete_a_language_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0ed251fa49808c6c/60c05f8d2d95121b9b3d168e/Delete_a_language_no_highlight.png)
3.  Click **Remove** to confirm the delete action.

**Note:** You cannot delete the master language. However, to delete a fallback language, you need to make sure that it is not being used as a fallback language for any other language(s).

## API Reference

To perform the delete action via API request, refer to the [Delete language](/docs/developers/apis/content-management-api/languages#delete-language) API request.
