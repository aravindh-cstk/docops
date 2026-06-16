---
title: "[Author Content] - Asset Limitations"
description: Asset limitations for filenames/URLs, file sizes, batch uploads, stack storage, and image optimization constraints.
url: https://www.contentstack.com/docs/content-managers/author-content/asset-limitations
product: Contentstack
doc_type: reference
audience:
  - content-managers
  - developers
version: v1
last_updated: 2026-03-25
---

# [Author Content] - Asset Limitations

This page lists the asset-related limits and restrictions (such as filename/URL character constraints, file size limits, batch upload limits, stack storage limits, and image optimization limits). Content managers and developers should use it when preparing assets for upload via the UI or API, or when troubleshooting upload/optimization issues.

## Asset Limitations

- The filename or URL of an asset cannot include the following characters:
```
# % ^ + \ / ? \ * : | " '  \ s { } = ,
```
**Note**: Any restricted character will automatically be replaced with an underscore (_).
- The maximum file size allowed for an asset is **700 MB** via UI and **100 MB** via API.
- A maximum of **10 assets** can be uploaded in a single batch.
- Each stack can store up to **10,000** assets.
- When optimizing images,The maximum input file size is **50 MB**
- The maximum input image dimensions cannot exceed **12,000 x 12,000 pixels**
- The maximum output image dimensions are limited to **8,192 x 8,192 pixels (8K Ultra HD)**
- Animated GIFs can include a maximum of **1,000 frames**

**Note**: To request an increase in any of the default limits, contact our [support](mailto:support@contentstack.com) team.

## Common questions

### What happens if I upload an asset with a restricted character in the filename or URL?
Any restricted character will automatically be replaced with an underscore (_).

### What is the maximum file size allowed for an asset via UI and via API?
The maximum file size allowed for an asset is **700 MB** via UI and **100 MB** via API.

### How many assets can I upload in a single batch?
A maximum of **10 assets** can be uploaded in a single batch.

### What are the image optimization limits for size and dimensions?
When optimizing images,The maximum input file size is **50 MB**. The maximum input image dimensions cannot exceed **12,000 x 12,000 pixels**. The maximum output image dimensions are limited to **8,192 x 8,192 pixels (8K Ultra HD)**.