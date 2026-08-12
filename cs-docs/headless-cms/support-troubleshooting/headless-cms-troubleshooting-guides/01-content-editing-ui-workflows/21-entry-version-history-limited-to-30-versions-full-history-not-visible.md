---
title: "Entry Version History Limited to 30 Versions - Full History Not Visible"
description: "Entry Version History Limited to 30 Versions - Full History Not Visible"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/21-entry-version-history-limited-to-30-versions-full-history-not-visible
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs73f6fa9149a44634
---

# Entry Version History Limited to 30 Versions - Full History Not Visible

The Contentstack UI displays a maximum of 30 versions for an entry, even though the entry has been saved and updated many more times. Older versions beyond the 30-version display limit are not accessible.

**Root Cause**

A backend configuration that controls how publish statuses are displayed across entry versions was not enabled for the affected organization. When this configuration is disabled, the version history display is capped at a lower threshold, making it appear as though older versions do not exist.

**Resolution**

1.  Contact Contentstack Support and report that entry version history is limited to 30 versions. Provide the stack API key and an example entry UID.
2.  Engineering will enable the backend configuration to restore full version history visibility.
3.  After the configuration is enabled, reload the entry in the CMS UI and confirm that all versions beyond 30 are now visible.

After the fix, verify the full version history is accessible for the affected entry and that versions can be compared and restored as expected.
