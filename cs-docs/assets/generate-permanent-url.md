---
title: "[AM2.0] - Generate Permanent URL"
description: Generate a permanent URL for an asset to provide a stable, unchanging reference even if the underlying file is updated or replaced.
url: https://www.contentstack.com/docs/assets/generate-permanent-url
product: Assets
doc_type: how-to
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Generate Permanent URL

This page explains how to generate a permanent URL for an asset in Assets. It is intended for users who manage or reference assets in entries, APIs, or external systems and need a stable URL that does not change when the asset file is updated or replaced.

## Generate Permanent URL

Assets allows you to assign a permanent URL to an asset. A permanent URL provides a stable, unchanging reference to the asset, even if the underlying file is updated or replaced. This eliminates the need to manually update asset references in entries whenever the asset file changes.

Every asset has two types of URLs:
- **Auto-generated asset URL**: The default system-generated URL for the asset that changes whenever the asset is updated or replaced.
- **Permanent asset URL**: A constant, non-editable URL that remains the same regardless of file updates or replacements.

**Example:**
- Initial upload URL:
```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/60b258bg299917402992601b/sample_logo.png
```
- After replacing the file, the auto-generated URL changes to:
```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/60b158bf299917401442602e/new_sample_logo.png
```
- With a permanent URL, the reference stays unchanged:
```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/sample_logo.png
```

**Permanent URL Structure:**

A permanent URL follows this structure:

```
https://{base_url}/v3/assets/{stack_api_key}/{asset_uid}/{slug}
```
Here:
- `stack_api_key` uniquely identifies your stack.
- `asset_uid` is the unique identifier for the asset.
- `slug` is a user-defined identifier (up to 255 characters) that describes the asset.

**Example:**

```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/sample_logo.png
```
To generate a permanent URL for an asset:
- Select the asset.
- In the right-hand panel, click the “Non-Editable Metadata” icon.
- The **System Metadata** section displays all system-managed fields. Click the “Generate permanent URL” icon.
- Enter a slug for the permanent URL that describes the asset meaningfully.**Note:** The maximum slug length is **255 characters**.
- Click **Save Asset** to generate the permanent URL.

The permanent URL becomes active immediately and can be used in entries, APIs, or external systems.

## Limitations
- You can generate a permanent URL for an asset only once. Once created, it cannot be modified or regenerated.
- The maximum length of the slug is **255 characters**.

## Common questions

### Can I change the slug after generating a permanent URL?
No. You can generate a permanent URL for an asset only once. Once created, it cannot be modified or regenerated.

### Does replacing the asset file change the permanent URL?
No. A permanent asset URL remains the same regardless of file updates or replacements.

### What is the maximum length allowed for the slug?
The maximum length of the slug is **255 characters**.

### Where can I use the permanent URL once it is generated?
The permanent URL becomes active immediately and can be used in entries, APIs, or external systems.