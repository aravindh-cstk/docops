---
title: "[AM2.0] - Localize an Asset"
description: Asset localization allows the creation of language-specific variants of an asset within a workspace.
url: https://www.contentstack.com/docs/assets/localize-an-asset
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Localize an Asset

This page explains how to localize an asset in a workspace by creating a language-specific variant with independent metadata and content. It is intended for users managing multi-language assets and should be used when you need regionally relevant versions of the same asset without inheriting values from the default language.

## Article content

### Item 1

#### Article section

##### Heading

Localize an Asset

##### Content

Asset localization allows the creation of language-specific variants of an asset within a workspace. Once an asset is localized, it stops inheriting values from the default language. Instead, it maintains its own metadata and content for the selected language.

This enables teams to deliver regionally relevant assets (e.g., localized text, tags, or visuals) while keeping all language versions organized under a single asset.

To localize an asset, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **Assets**.
- Open the required asset from the **Assets** section.
- From the language selector at the top of the asset details page, select a language marked as **Unlocalized**.
- Update the required fields, such as title, description, tags, user-defined metadata, or asset binary if needed (e.g., replace an image containing localized text).
- Click **Save Asset**.
- In the confirmation dialog, select **Localize Asset**.

Once the asset is saved:
- The asset becomes localized for the selected language.
- The localized version stops fetching values from the default language.
- Future changes to the default language do not affect the localized version.

**Notes:**
- Localization occurs only after saving changes.
- Each language maintains an independent version of metadata and content.
- Versioning continues to function independently per localized language.
- Only languages enabled in the active workspace are available for localization.

## Common questions

### Does a localized asset continue inheriting values from the default language?
No. Once an asset is localized, it stops inheriting values from the default language and maintains its own metadata and content for the selected language.

### When does localization take effect?
Localization occurs only after saving changes.

### Can I localize an asset for any language?
Only languages enabled in the active workspace are available for localization.

### Do changes to the default language affect the localized version later?
No. Future changes to the default language do not affect the localized version.