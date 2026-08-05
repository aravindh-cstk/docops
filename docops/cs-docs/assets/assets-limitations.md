---
title: "[AM2.0] - Assets Limitations"
description: Limits and constraints for Contentstack Assets across uploads, metadata, localization, workspaces, versioning, permissions, delivery, and usage.
url: https://www.contentstack.com/docs/assets/assets-limitations
product: Contentstack
doc_type: reference
audience:
  - developers
  - content-managers
  - administrators
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Assets Limitations

This page describes the limits and constraints enforced by Contentstack Assets (AM2.0). It is intended for developers, administrators, and content teams who upload, manage, localize, version, and deliver assets, and should be used when planning asset workflows, integrations, and governance.

Assets Limitations

Contentstack Assets enforces certain limits and constraints to ensure performance, security, consistency, and scalability across asset operations. These limitations apply to asset uploads, metadata, localization, workspaces, versioning, permissions, delivery, and asset usage.

## File Naming and URL Constraints
Asset filenames and asset URLs **cannot include** the following characters:
```
# % ^ + \ / ? * : | " '  \s { } = ,
```
Any restricted character is **automatically replaced with an underscore (**`**_**`**)** to ensure safe storage and delivery.

## File Size and Upload Limits
- **Maximum file size:****UI uploads:** Up to **700 MB** per asset
- **API uploads:** Up to **100 MB** per asset per request
- **Batch upload limit:** Up to **10 assets** per batch operation
- **Asset count per space:** Up to **10,000 assets**

**Note:** To request an increase in file size, batch limits, or total asset count, contact [Contentstack support](mailto:support@contentstack.com).

## Image Optimization Limits
When using image optimization features, the following constraints apply:
- Maximum input image size: **50 MB**
- Maximum input image dimensions: **12,000 × 12,000 pixels**
- Maximum output image dimensions: **8,192 × 8,192 pixels (8K Ultra HD)**
- Animated GIFs: Maximum of **1,000 frames**

## Localization Limitations
- Languages are added **globally** in Assets and then selectively enabled per **workspace**.
- Only languages added to a workspace are available for asset localization in that workspace.
- An asset can only be localized into languages that:Exist globally, and
- Are enabled for the current workspace
- Asset localization is applied **per language**, not per region or site.
- Assets selected in CMS entries must match:The entry’s locale, or
- The configured fallback locale
- Unlocalized assets always resolve metadata from the **default language**.

## Workspace Limitations
- Each space has one **Primary (Main) Workspace**.
- New workspaces must inherit data from an existing source workspace.
- Workspaces are isolated by default, meaning assets created or modified in one workspace do not affect others unless merged.
- Workspaces are not intended to represent:Separate websites
- Separate brands
- Separate long-term environments
- Creating excessive workspace can increase operational complexity and is not recommended for permanent segregation.

## Asset Versioning Limitations
- A new asset version is created on **every save**, including metadata-only updates.
- Version names:Are optional
- Are limited to **32 characters**
- Version history:Cannot be deleted selectively
- Can only be restored by saving an older version as the latest
- The **Permanent Asset URL remains the same across versions**, even when the file is replaced.
- Restoring a version does not affect references unless the restored version is saved as the latest.

## Metadata and Fields Limitations
- System metadata is **read-only** and cannot be edited.
- User-defined fields:Must be created at the space level before assignment
- Cannot be edited or deleted while actively used by asset types
- Field validation rules apply uniformly across all assets of a given asset type.
- Changes to asset type fields affect all existing and future assets using that type.

## Roles and Permissions Limitations
- At least one **Administration role** must be assigned when inviting a user.
- Asset access is always scoped by:Assigned roles, and
- Assigned spaces
- Users cannot access assets in spaces they are not explicitly assigned to.
- Some system roles cannot be edited or deleted.
- Custom roles must be created by users with sufficient administrative privileges.
- SCIM- or SSO-managed users may have role assignment constraints depending on organization settings.

## Asset Usage and Delivery Limitations
- Assets in the following states cannot be delivered via URLs:Pending scan
- Quarantined
- Deleted
- Removed from a workspace
- Deleting an asset permanently removes it from all references.
- Asset delivery respects workspace, language, and permission boundaries.
- Visual Markups are supported only for compatible image formats.

## Common questions

### What happens if I upload an asset with restricted characters in the filename?
Any restricted character is automatically replaced with an underscore (`_`) to ensure safe storage and delivery.

### Can I increase the maximum file size, batch limits, or total asset count?
Yes. To request an increase in file size, batch limits, or total asset count, contact Contentstack support at support@contentstack.com.

### Do asset versions change the permanent asset URL?
No. The Permanent Asset URL remains the same across versions, even when the file is replaced.

### Can quarantined or pending-scan assets be delivered via URLs?
No. Assets in Pending scan, Quarantined, Deleted, or Removed from a workspace states cannot be delivered via URLs.