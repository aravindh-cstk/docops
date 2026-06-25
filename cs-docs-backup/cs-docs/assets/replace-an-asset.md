---
title: "[AM2.0] - Replace an Asset"
description: Replacing an asset allows updating the underlying file (binary) while retaining the same asset record, references, and organizational context.
url: https://www.contentstack.com/docs/assets/replace-an-asset
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Replace an Asset

This page explains how to replace an existing asset’s underlying file while keeping the same asset record and references. It is intended for users managing assets in Contentstack who need to update files without breaking links or reconfiguring entries and channels.

### Item 1

#### Article section

##### Heading

Replace an Asset

##### Content

Replacing an asset allows updating the underlying file (binary) while retaining the same asset record, references, and organizational context. This approach ensures continuity across entries and channels while keeping assets up to date without re-linking or reconfiguration.

To replace an asset, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the steps below:
- Navigate to the **Assets** listing page within your space.
- Open the required asset to access the asset details page.
- Click the “Replace”** **icon at the bottom of the page.
- Select the new file from the local system.
- Click **Save Asset** to confirm the replace action.

After saving, a new version of the asset is created.

**Note**:
- The permanent asset URL remains unchanged.
- All existing references to the asset continue to work.
- Asset versioning captures the change as a new version.
- User-defined metadata is retained but must be reviewed to ensure it still applies to the new file.

## Common questions

**Q: Does replacing an asset change its URL?**  
A: No. The permanent asset URL remains unchanged.

**Q: Will existing references to the asset break after replacement?**  
A: No. All existing references to the asset continue to work.

**Q: Does replacing an asset create a new asset record?**  
A: No. It creates a new version of the same asset record.

**Q: What happens to metadata when an asset is replaced?**  
A: User-defined metadata is retained but must be reviewed to ensure it still applies to the new file.