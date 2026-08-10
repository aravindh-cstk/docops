---
title: "Cannot Modify a Historical Entry Version (Versioning Behavior)"
description: "Cannot Modify a Historical Entry Version (Versioning Behavior)"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/01-cannot-modify-a-historical-entry-version-versioning-behavior
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs03ad829211e89b11
---

# Cannot Modify a Historical Entry Version (Versioning Behavior)

When attempting to update a previously saved version of an entry, the system does not allow direct modification of that historical version. Any changes made through the CMS UI or Content Management API result in the creation of a new latest version instead of altering the selected older version.

**Root Cause** 

Contentstack enforces immutable versioning by design.

-   Each time an entry is updated, a new version is created.
-   Historical versions are retained as read-only snapshots for audit and rollback purposes.
-   The Content Management API (CMA) and CMS UI only allow updates to the current/latest entry state.
-   Older versions cannot be edited directly to preserve content integrity and version history accuracy.

This behavior ensures traceability, audit compliance, and content recovery safety.

**Resolution**

Do not attempt to edit historical versions directly. If content from an older version is required:

-   Use the **Version History** feature in the CMS UI.
-   Select the required version and choose **Restore** (this creates a new latest version based on that snapshot).

**For API-based workflows:**

-   Retrieve the latest entry version via CMA.
-   Apply updates to the current version only.
-   Allow the system to generate the next version automatically.

Check the entry version number before making changes and perform an update via CMS UI or CMA.

**Confirm:**

-   A new version number is generated.
-   The previous historical version remains unchanged.
-   The updated content exists only in the new latest version.
