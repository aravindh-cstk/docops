---
title: "Unlocalize an Asset"
description: "Learn how to unlocalize assets in Contentstack, reverting them back to default language settings and discarding localized metadata easily."
url: /assets/unlocalize-an-asset
---

# Unlocalize an Asset

## Unlocalize an Asset

Unlocalizing an asset removes its language-specific customization and restores inheritance from the default language. After unlocalization, the asset no longer maintains independent metadata or content for that language and instead fetches all values from the default language again.

This is useful when a localized version is no longer needed or when you want to realign the asset with the master language.

To unlocalize an asset, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **Assets**.
2.  Open the required asset from the **Assets** section.
3.  From the language selector, select the localized language you want to remove.
4.  Click the horizontal ellipsis in the top-right corner of the asset details page.
5.  Select **Unlocalize**.
6.  In the confirmation dialog, click **Unlocalize** to confirm the action.

Once the asset is unlocalized:

-   The asset reverts to the default language version for the selected language.
-   All localized metadata and content are permanently discarded.
-   The asset resumes inheriting content from the default language.

**Note:** The language continues to be available for future localization if required.
