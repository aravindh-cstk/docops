---
title: "[AM2.0] - Unlocalize an Asset"
description: Unlocalizing an asset removes its language-specific customization and restores inheritance from the default language.
url: https://www.contentstack.com/docs/assets/unlocalize-an-asset
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Unlocalize an Asset

This page explains how to unlocalize an asset so it stops using language-specific metadata/content and inherits values from the default language again. It is intended for users managing localized assets and should be used when a localized version is no longer needed or needs to be realigned with the master language.

## Unlocalize an Asset

Unlocalizing an asset removes its language-specific customization and restores inheritance from the default language. After unlocalization, the asset no longer maintains independent metadata or content for that language and instead fetches all values from the default language again.

This is useful when a localized version is no longer needed or when you want to realign the asset with the master language.

To unlocalize an asset, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets**.
- Open the required asset from the **Assets** section.
- From the language selector, select the localized language you want to remove.
- Click the horizontal ellipsis in the top-right corner of the asset details page.
- Select **Unlocalize**.
- In the confirmation dialog, click **Unlocalize** to confirm the action.

Once the asset is unlocalized:
- The asset reverts to the default language version for the selected language.
- All localized metadata and content are permanently discarded.
- The asset resumes inheriting content from the default language.

**Note:** The language continues to be available for future localization if required.

## Common questions

**Q: What happens to localized metadata and content after unlocalizing an asset?**  
A: All localized metadata and content are permanently discarded.

**Q: Does unlocalizing remove the language from being used again later?**  
A: No. The language continues to be available for future localization if required.

**Q: Where do the asset values come from after unlocalization?**  
A: The asset fetches all values from the default language again.

**Q: When should I unlocalize an asset?**  
A: When a localized version is no longer needed or when you want to realign the asset with the master language.